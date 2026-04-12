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

// Hard trigger for Google Translate engine
function triggerTranslation(langCode) {
    const select = document.querySelector('.goog-te-combo');
    const body = document.body;

    if (select) {
        // Step 1: Force the body to show the translation layer
        if (langCode !== 'pt') {
            body.classList.add('translated-active');
        } else {
            body.classList.remove('translated-active');
            // If PT is selected, we show the original canvas text
            const showOriginalBtn = document.querySelector('.goog-te-banner-frame');
            if (showOriginalBtn) {
                // Look for the "Show Original" button inside Google's iframe if it exists
                const restoreBtn = showOriginalBtn.contentWindow.document.querySelector('#\\:1\\.restore');
                if (restoreBtn) restoreBtn.click();
            }
        }

        // Step 2: Update the select value and dispatch the change event
        select.value = langCode;
        select.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));

        // Step 3: Global check to ensure the Google API acknowledges the change
        setTimeout(() => {
            if (select.value !== langCode) {
                select.value = langCode;
                select.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }, 500);

    } else {
        console.error("Critical: Google Translate widget not found in DOM.");
    }
}