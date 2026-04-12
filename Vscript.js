const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

const container = document.getElementById('pdf-render-container');
const params = new URLSearchParams(window.location.search);
const fileUrl = params.get('file');

let pdfDoc = null;
let pagesText = []; // save the original text

if (fileUrl) {
    loadAndRenderPDF(fileUrl);
}

async function loadAndRenderPDF(url) {
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        pdfDoc = await loadingTask.promise;

        for (let i = 1; i <= pdfDoc.numPages; i++) {
            const page = await pdfDoc.getPage(i);
            const viewport = page.getViewport({ scale: 1.5 });

            // 1.create Wrapper in page
            const pageWrapper = document.createElement('div');
            pageWrapper.className = 'page-wrapper';
            pageWrapper.style.position = 'relative';
            container.appendChild(pageWrapper);

            // 2. render images
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            pageWrapper.appendChild(canvas);
            await page.render({ canvasContext: context, viewport: viewport }).promise;

            // 3. extract and create text
            const textContent = await page.getTextContent();
            renderTextLayer(pageWrapper, textContent, viewport, i);
        }
    } catch (error) {
        console.error("Erro:", error);
    }
}

function renderTextLayer(container, textContent, viewport, pageNum) {
    const textLayer = document.createElement('div');
    textLayer.className = 'text-layer';
    textLayer.setAttribute('data-page', pageNum);

    // get layer right up to canvas
    textLayer.style.left = '0';
    textLayer.style.top = '0';
    textLayer.style.height = `${viewport.height}px`;
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.position = 'absolute';
    textLayer.style.color = 'black'; // just test

    textContent.items.forEach(item => {
        const span = document.createElement('span');
        span.innerText = item.str;
        span.style.left = `${item.transform[4] * (viewport.scale / 1)}px`; // Ajuste de escala
        span.style.bottom = `${item.transform[5] * (viewport.scale / 1)}px`;
        span.style.position = 'absolute';
        span.style.whiteSpace = 'pre';
        span.style.fontFamily = 'sans-serif';
        span.style.fontSize = `${item.height * viewport.scale}px`;

        textLayer.appendChild(span);
    });

    container.appendChild(textLayer);
}

// 4. Translate
async function translateTo(lang) {
    const spans = document.querySelectorAll('.text-layer span');
    console.log(`Iniciando tradução de ${spans.length} elementos para ${lang}...`);

    // Comming soon
    spans.forEach(span => {

        span.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
    });
}