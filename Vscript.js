const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

const container = document.getElementById('pdf-render-container');
const params = new URLSearchParams(window.location.search);
const fileUrl = params.get('file');

let pdfDoc = null;
let currentLang = 'pt';

if (fileUrl) {
    document.getElementById('file-name').innerText = fileUrl.split('/').pop();
    loadAndRenderPDF(fileUrl);
}

async function loadAndRenderPDF(url) {
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        pdfDoc = await loadingTask.promise;

        for (let i = 1; i <= pdfDoc.numPages; i++) {
            const page = await pdfDoc.getPage(i);
            const viewport = page.getViewport({ scale: 1.5 });

            const pageWrapper = document.createElement('div');
            pageWrapper.className = 'page-wrapper';
            pageWrapper.style.cssText = `position: relative; margin-bottom: 30px; width: ${viewport.width}px;`;
            container.appendChild(pageWrapper);

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            pageWrapper.appendChild(canvas);
            await page.render({ canvasContext: context, viewport: viewport }).promise;

            const textContent = await page.getTextContent();
            renderTextLayer(pageWrapper, textContent, viewport);
        }
    } catch (error) {
        console.error("Erro:", error);
    }
}

function renderTextLayer(container, textContent, viewport) {
    const textLayer = document.createElement('div');
    textLayer.className = 'text-layer';
    textLayer.style.cssText = `position: absolute; left: 0; top: 0; width: 100%; height: 100%; pointer-events: none;`;

    textContent.items.forEach(item => {
        const span = document.createElement('span');
        span.innerText = item.str;
        const tx = pdfjsLib.Util.transform(viewport.transform, item.transform);

        span.style.cssText = `
            position: absolute;
            left: ${tx[4]}px;
            top: ${tx[5]}px;
            font-size: ${item.height * viewport.scale}px;
            font-family: sans-serif;
            white-space: pre;
            color: transparent; //original text turns invisible
            background: rgba(255,255,255,0.8); // background to block canvas text
            padding: 0 2px;
        `;
        span.setAttribute('data-original', item.str);
        textLayer.appendChild(span);
    });

    container.appendChild(textLayer);
}

// Translate logic
async function translateTo(lang) {
    if (lang === currentLang) return;

    const btnDownload = document.getElementById('download-btn');
    btnDownload.innerText = "Traduzindo...";
    btnDownload.disabled = true;

    const spans = document.querySelectorAll('.text-layer span');

    for (let span of spans) {
        const originalText = span.getAttribute('data-original');
        if (!originalText.trim() || !isNaN(originalText)) continue;

        try {
            // MyMemory API
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(originalText)}&langpair=${currentLang}|${lang}`);
            const data = await response.json();

            span.innerText = data.responseData.translatedText;
            span.style.color = '#000'; // turns translated text visible
        } catch (err) {
            console.error("Falha na tradução de um bloco.");
        }
    }

    currentLang = lang;
    btnDownload.innerText = "Download PDF";
    btnDownload.disabled = false;
}

// download logic
async function downloadTranslated() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pages = document.querySelectorAll('.page-wrapper');

    for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(pages[i], { scale: 2 });
        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save(`traduzido_${currentLang}.pdf`);
}

// Event Listeners language buttons
document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.btn-lang').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        translateTo(btn.getAttribute('data-lang'));
    };
});

document.getElementById('download-btn').onclick = downloadTranslated;