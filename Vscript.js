// Render the text layer with translation capabilities enabled
function renderTextLayer(container, textContent, viewport) {
    const textLayer = document.createElement('div');
    textLayer.className = 'text-layer';
    // Explicitly tell Google Translate to observe this div
    textLayer.setAttribute('translate', 'yes'); 

    textContent.items.forEach(item => {
        const span = document.createElement('span');
        const tx = pdfjsLib.Util.transform(viewport.transform, item.transform);
        
        // Precise positioning for the text overlays
        span.style.left = `${tx[4]}px`;
        span.style.top = `${tx[5] - (item.height * viewport.scale)}px`; 
        span.style.fontSize = `${item.height * viewport.scale}px`;
        span.style.fontFamily = item.fontName || 'sans-serif';
        
        span.innerText = item.str;
        textLayer.appendChild(span);
    });
    
    container.appendChild(textLayer);
}

// Manually trigger the Google Translate engine
function triggerTranslation(langCode) {
    const select = document.querySelector('.goog-te-combo');
    
    if (select) {
        select.value = langCode;
        // The 'bubbles: true' event is crucial for the Google script to react
        select.dispatchEvent(new Event('change', { bubbles: true }));
        
        // Toggle the visibility class for translated text
        if (langCode !== 'pt') {
            document.body.classList.add('translated-active');
        } else {
            document.body.classList.remove('translated-active');
        }
    } else {
        console.warn("Google Translate module hasn't loaded yet.");
    }
}