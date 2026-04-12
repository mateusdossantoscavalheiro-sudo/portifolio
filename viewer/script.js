const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

const container = document.getElementById('pdf-render-container');
const fileNameDisplay = document.getElementById('file-name');

// 1. Take URL
const params = new URLSearchParams(window.location.search);
const fileUrl = params.get('file');

if (fileUrl) {
    fileNameDisplay.innerText = fileUrl.split('/').pop();
    loadAndRenderPDF(fileUrl);
}

async function loadAndRenderPDF(url) {
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 1.5 });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            container.appendChild(canvas);
            await page.render({ canvasContext: context, viewport: viewport }).promise;
        }
    } catch (error) {
        console.error("Erro ao carregar PDF:", error);
        container.innerHTML = `<p style="color: #ef4444;">Erro ao carregar o documento. Verifique o caminho do arquivo.</p>`;
    }
}

// 2. Traduce logic
document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.btn-lang.active').classList.remove('active');
        btn.classList.add('active');
        const targetLang = btn.getAttribute('data-lang');

        console.log(`Solicitada tradução para: ${targetLang}`);
    });
});