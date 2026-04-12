const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

const container = document.getElementById('pdf-render-container');
const params = new URLSearchParams(window.location.search);
const fileUrl = params.get('file');
const fileNameDisplay = document.getElementById('file-name');

if (fileUrl) {
    fileNameDisplay.innerText = fileUrl.split('/').pop();
    loadAndRenderPDF(fileUrl);
} else {
    fileNameDisplay.innerText = "Nenhum arquivo encontrado. Feche a aba e tente novamente.";
}

async function loadAndRenderPDF(url) {
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdfDoc = await loadingTask.promise;

        for (let i = 1; i <= pdfDoc.numPages; i++) {
            const page = await pdfDoc.getPage(i);
            const viewport = page.getViewport({ scale: 1.5 });

            const pageWrapper = document.createElement('div');
            pageWrapper.className = 'page-wrapper';
            pageWrapper.style.width = `${viewport.width}px`;
            pageWrapper.style.height = `${viewport.height}px`;
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
        console.error("Erro Crítico:", error);
        fileNameDisplay.innerText = "Falha ao processar o documento técnico.";
    }
}

function renderTextLayer(container, textContent, viewport) {
    const textLayer = document.createElement('div');
    textLayer.className = 'text-layer';

    textContent.items.forEach(item => {
        const span = document.createElement('span');
        const tx = pdfjsLib.Util.transform(viewport.transform, item.transform);

        // position
        span.style.left = `${tx[4]}px`;
        span.style.top = `${tx[5] - (item.height * viewport.scale)}px`;
        span.style.fontSize = `${item.height * viewport.scale}px`;
        span.style.fontFamily = item.fontName || 'sans-serif';

        span.innerText = item.str;
        textLayer.appendChild(span);
    });

    container.appendChild(textLayer);
}

// api google config
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'pt,en,es,de',
        autoDisplay: false
    }, 'google_translate_element');
}

// change the language
function triggerTranslation(langCode) {
    const select = document.querySelector('.goog-te-combo');

    if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));

        // active css class
        if (langCode !== 'pt') {
            document.body.classList.add('translated-active');
        } else {
            document.body.classList.remove('translated-active');
        }
    }
}

// custom buttons clicks
document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', () => {
        // update interface
        document.querySelectorAll('.btn-lang').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // shots the translate
        const lang = btn.getAttribute('data-lang');
        triggerTranslation(lang);
    });
});