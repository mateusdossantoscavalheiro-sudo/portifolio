const projectsData = [
    {
        id: "engine_monitoring",
        date: "Feb. 2026",
        statusKey: "statusComplete",
        icon: "fa-microchip",
        github: "https://github.com/mateusscavalheiro-afk/PROVA2_MONITORAMENTO_DE_MOTOR",
        pdf: "./assets/engine_monitoring/Engine_Monitoring_Project.pdf",
        media: { type: "image", src: ["./assets/engine_monitoring/miniature_p1.png", "./assets/engine_monitoring/miniature_p2.png", "./assets/engine_monitoring/miniature_p3.png", "./assets/engine_monitoring/miniature_p4.png", "./assets/engine_monitoring/miniature_p5.png"], interval: 4000 },
        pt: { title: "Monitoramento de Motor", subtitle: "IoT & Integração", platform: "VSCode (C++) & IntelliJ (Java)", desc: "Desenvolvimento de um cibersistema para monitoramento de um motor no setor industrial..." },
        en: { title: "Engine Monitoring", subtitle: "IoT & Integration", platform: "VSCode (C++) & IntelliJ (Java)", desc: "Development of a cyber-physical system for industrial engine monitoring..." },
        es: { title: "Monitoreo de Motor", subtitle: "IoT e Integración", platform: "VSCode (C++) & IntelliJ (Java)", desc: "Desarrollo de un cibersistema para el monitoreo de un motor en el sector industrial..." },
        de: { title: "Motorüberwachung", subtitle: "IoT & Integration", platform: "VSCode (C++) & IntelliJ (Java)", desc: "Entwicklung eines cyber-physischen Systems zur industriellen Motorüberwachung..." }
    },
    {
        id: "axophy",
        date: "Mar. 2026",
        statusKey: "statusIncomplete",
        icon: "fa-network-wired",
        github: "https://github.com/mateusdossantoscavalheiro-sudo/Axophy",

        pdf: "./assets/axophy/axophy-doc.pdf",
        media: {
            type: "image",
            src: ["./assets/axophy/miniature_p1.png", "./assets/axophy/miniature_p2.png", "./assets/axophy/miniature_p3.png"],
            interval: 3000
        },
        pt: {
            title: "Ecossistema Axophy",
            subtitle: "Monitoramento Neural e Telemetria Industrial IIoT",
            platform: "Java, C++, JavaScript (MQTT & Supabase)",
            desc: "O Axophy é um ecossistema de supervisão inspirado na arquitetura neural, projetado para atuar como o sistema nervoso central de plantas industriais. O projeto representa a reinvenção e a consolidação técnica do protocolo Voltaphylax e do projeto interno Nexus, integrando telemetria de alta precisão via MQTT, persistência em nuvem e interfaces HMI dinâmicas para garantir a integridade de ativos eletromecânicos."
        },
        en: {
            title: "Axophy Ecosystem",
            subtitle: "Neural Monitoring & Industrial IIoT Telemetry",
            platform: "Java, C++, JS (MQTT & Supabase)",
            desc: "Axophy is a supervision ecosystem inspired by neural architecture, designed to function as the central nervous system of industrial plants. The project represents the reimagining and technical consolidation of the Voltaphylax protocol and the internal Nexus project, integrating high-precision telemetry via MQTT, cloud persistence, and dynamic HMI interfaces to ensure the integrity of electromechanical assets."
        },
        es: {
            title: "Ecosistema Axophy",
            subtitle: "Monitoreo Neural y Telemetría Industrial IIoT",
            platform: "Java, C++, JS (MQTT & Supabase)",
            desc: "Axophy es un ecosistema de supervisión inspirado en la arquitectura neural, diseñado para actuar como el sistema nervioso central de las plantas industriales. El proyecto representa la reinvención y consolidación técnica del protocolo Voltaphylax y del proyecto interno Nexus, integrando telemetría de alta precisión vía MQTT, persistencia en la nube e interfaces HMI dinámicas para garantizar la integridad de activos electromecánicos."
        },
        de: {
            title: "Axophy-Ökosystem",
            subtitle: "Neurale Überwachung & Industrielle IIoT-Telemetrie",
            platform: "Java, C++, JS (MQTT & Supabase)",
            desc: "Axophy ist ein von neuraler Architektur inspiriertes Überwachungsökosystem, das als zentrales Nervensystem für Industrieanlagen konzipiert wurde. Das Projekt stellt die Neuerfindung und technische Konsolidierung des Voltaphylax-Protokolls und do internen Nexus-Projekts dar. Es integriert hochpräzise Telemetrie über MQTT, Cloud-Persistenz und dynamische HMI-Schnittstellen, um die Integrität elektromechanischer Anlagen zu gewährleisten."
        }

        pdf: "./assets/axophy/documento_tecnico.pdf",
        media: { type: "image", src: ["./assets/axophy/miniature_p1.png", "./assets/axophy/miniature_p2.png", "./assets/axophy/miniature_p3.png"], interval: 3000 },
        pt: { title: "Ecossistema Axophy", subtitle: "Monitoramento Neural e Telemetria Industrial IIoT", platform: "Java, C++, JavaScript (MQTT & Supabase)", desc: "O Axophy é um ecossistema de supervisão inspirado na arquitetura neural..." },
        en: { title: "Axophy Ecosystem", subtitle: "Neural Monitoring & Industrial IIoT Telemetry", platform: "Java, C++, JS (MQTT & Supabase)", desc: "Axophy is a supervision ecosystem inspired by neural architecture..." },
        es: { title: "Ecosistema Axophy", subtitle: "Monitoreo Neural y Telemetría Industrial IIoT", platform: "Java, C++, JS (MQTT & Supabase)", desc: "Axophy es un ecosistema de supervisión inspirado en la arquitectura neural..." },
        de: { title: "Axophy-Ökosystem", subtitle: "Neurale Überwachung & Industrielle IIoT-Telemetrie", platform: "Java, C++, JS (MQTT & Supabase)", desc: "Axophy ist ein von neuraler Architektur inspiriertes Überwachungsökosystem..." }

    }
];

const uiStrings = {
    pt: { menu: "Menu", headerTitle: "Mateus | Product Designer & Dev", sidebarProjects: "PROJETOS", welcomeMsg: "Olá! Como posso te ajudar a conhecer melhor o trabalho do Mateus?", btnSkills: "Habilidades", btnProjects: "Projetos", btnContact: "Contato", langTitle: "Selecione o idioma", contactTitle: "Vamos conversar?", dateLabel: "Criado em:", statusLabel: "Status:", platformLabel: "Plataforma:", statusComplete: "Completo", statusIncomplete: "Em desenvolvimento", actionLabel: "Acesse o projeto:", skillAnswer: "O Mateus foca em UI/UX Design e Desenvolvimento Frontend (React, HTML, CSS)." },
    en: { menu: "Menu", headerTitle: "Mateus | Designer & Dev", sidebarProjects: "PROJECTS", welcomeMsg: "Hi! How can I help you know more about Mateus' work?", btnSkills: "Skills", btnProjects: "Projects", btnContact: "Contact", langTitle: "Select language", contactTitle: "Let's talk?", dateLabel: "Created on:", statusLabel: "Status:", platformLabel: "Platform:", statusComplete: "Complete", statusIncomplete: "Under Development", actionLabel: "Access the project:", skillAnswer: "Mateus focuses on UI/UX Design and Frontend Development (React, HTML, CSS)." },
    es: { menu: "Menú", headerTitle: "Mateus | Designer & Dev", sidebarProjects: "PROYECTOS", welcomeMsg: "¡Hola! ¿Cómo puedo ayudarte a conocer el trabajo de Mateus?", btnSkills: "Habilidades", btnProjects: "Proyectos", btnContact: "Contacto", langTitle: "Seleccionar idioma", contactTitle: "¿Hablamos?", dateLabel: "Creado en:", statusLabel: "Estado:", platformLabel: "Plataforma:", statusComplete: "Completo", statusIncomplete: "En desarrollo", actionLabel: "Acceder al proyecto:", skillAnswer: "Mateus se enfoca en el diseño UI/UX y el desarrollo Frontend." },
    de: { menu: "Menü", headerTitle: "Mateus | Designer & Dev", sidebarProjects: "PROJEKTE", welcomeMsg: "Hallo! Wie kann ich Ihnen helfen, Mateus' Arbeit kennenzulernen?", btnSkills: "Fähigkeiten", btnProjects: "Projekte", btnContact: "Kontakt", langTitle: "Sprache auswählen", contactTitle: "Reden wir?", dateLabel: "Erstellt am:", statusLabel: "Status:", platformLabel: "Plattform:", statusComplete: "Vollständig", statusIncomplete: "In Entwicklung", actionLabel: "Projekt aufrufen:", skillAnswer: "Mateus konzentriert sich auf UI/UX-Design und Frontend-Entwicklung." }
};

let currentLang = 'pt';
let carouselInterval;

function saveState() {
    localStorage.setItem('portfolio_lang', currentLang);
    localStorage.setItem('portfolio_theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

function loadState() {
    const savedLang = localStorage.getItem('portfolio_lang');
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedLang) currentLang = savedLang;
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-icon').className = "fa-solid fa-moon";
    } else {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').className = "fa-solid fa-sun";
    }
    updateUI();
    renderCards();
    const box = document.getElementById("chat-box");
    box.innerHTML = `<div class="message bot-msg">${uiStrings[currentLang].welcomeMsg}</div>`;
}

function updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = uiStrings[currentLang][key];
    });
}

function renderCards() {
    const list = document.getElementById('project-list');
    list.innerHTML = "";
    projectsData.forEach(p => {
        list.innerHTML += `<div class="project-card" onclick="openProject('${p.id}')">
            <div class="project-thumb-mini"><i class="fa-solid ${p.icon}"></i></div>
            <div><strong style="font-size: 0.9rem;">${p[currentLang].title}</strong><div style="font-size: 0.75rem; opacity: 0.6;">${p[currentLang].subtitle}</div></div>
        </div>`;
    });
}

function openProject(id) {
    const p = projectsData.find(item => item.id === id);
    const lang = p[currentLang];
    const ui = uiStrings[currentLang];
    clearInterval(carouselInterval);
    document.getElementById('modal-title').innerText = lang.title;
    document.getElementById('modal-desc').innerText = lang.desc;
    document.getElementById('modal-date').innerText = p.date;
    document.getElementById('modal-platform').innerText = lang.platform;
    document.getElementById('modal-status').innerText = ui[p.statusKey];
    document.getElementById('label-date').innerText = ui.dateLabel;
    document.getElementById('label-status').innerText = ui.statusLabel;
    document.getElementById('label-platform').innerText = ui.platformLabel;
    document.getElementById('label-action').innerText = ui.actionLabel;
    const mediaBox = document.getElementById('modal-media');

    if (p.media.type === "image" && Array.isArray(p.media.src)) {
        let currentIndex = 0;
        const fadeTime = 1200;
        const stayTime = 4000;
        const totalCycle = stayTime + (fadeTime * 2);
        const updateImage = (index) => {
            mediaBox.innerHTML = `<img src="${p.media.src[index]}" id="carousel-img" style="opacity: 1; transition: opacity ${fadeTime}ms ease-in-out; width: 100%; height: 100%; object-fit: cover;">`;
        };
        updateImage(currentIndex);
        carouselInterval = setInterval(() => {
            const img = document.getElementById('carousel-img');
            if (img) {
                img.style.opacity = '0';
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % p.media.src.length;
                    img.src = p.media.src[currentIndex];
                    setTimeout(() => { img.style.opacity = '1'; }, 100);
                }, fadeTime);
            }
        }, totalCycle);
    } else {
        mediaBox.innerHTML = p.media.type === "video" ? `<video autoplay muted loop playsinline style="width:100%; height:100%; object-fit:cover;"><source src="${p.media.src}" type="video/mp4"></video>` : `<img src="${p.media.src}" style="width:100%; height:100%; object-fit:cover;">`;
    }
    // Set the GitHub link
    document.getElementById('modal-github').href = p.github;

    // Point directly to the PDF file (removing viewer.html)
    document.getElementById('modal-pdf').href = p.pdf;

    // Ensure it opens in a new tab
    document.getElementById('modal-pdf').target = "_blank";

    // Open the modal
    openModal('project-modal');
}

function changeLanguage(lang) {
    currentLang = lang;
    const flagMap = { pt: 'br', en: 'us', es: 'es', de: 'de' };
    document.getElementById('animated-flag').className = `fi fi-${flagMap[lang]} big-flag`;
    updateUI(); renderCards();
    const box = document.getElementById("chat-box");
    box.innerHTML = `<div class="message bot-msg">${uiStrings[lang].welcomeMsg}</div>`;
    saveState(); closeAllModals();
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('theme-icon').className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    saveState();
}

function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeAllModals() { clearInterval(carouselInterval); document.querySelectorAll('.modal-overlay').forEach(m => m.style.display='none'); }
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('collapsed'); }

window.onload = loadState;
window.onclick = e => { if(e.target.classList.contains('modal-overlay')) closeAllModals(); }