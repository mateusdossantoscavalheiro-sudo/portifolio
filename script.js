const projectsData = [
    {
        id: "engine_monitoring",
        date: "Feb. 2026",
        statusKey: "statusComplete",
        icon: "fa-microchip",
        github: "https://github.com/mateusscavalheiro-afk/PROVA2_MONITORAMENTO_DE_MOTOR",
        pdf: "./assets/engine_monitoring/Engine_Monitoring_Project.pdf",
        media: { 
            type: "image", 
            src: ["./assets/engine_monitoring/miniature_p1.png", "./assets/engine_monitoring/miniature_p2.png", "./assets/engine_monitoring/miniature_p3.png", "./assets/engine_monitoring/miniature_p4.png", "./assets/engine_monitoring/miniature_p5.png"], 
            interval: 4000 
        },
        pt: { 
            title: "Monitoramento de Motor", 
            subtitle: "IoT & Integração", 
            platform: "VSCode (C++) & IntelliJ (Java)", 
            desc: "Desenvolvimento de um cibersistema para monitoramento de um motor no setor industrial. O projeto integra hardware (ESP32) e software (Java) utilizando protocolo MQTT para garantir a segurança operacional e a coleta de dados de telemetria em tempo real." 
        },
        en: { 
            title: "Engine Monitoring", 
            subtitle: "IoT & Integration", 
            platform: "VSCode (C++) & IntelliJ (Java)", 
            desc: "Development of a cyber-physical system for industrial engine monitoring. The project integrates hardware (ESP32) and software (Java) using the MQTT protocol to ensure operational safety and real-time telemetry data collection." 
        },
        es: { 
            title: "Monitoreo de Motor", 
            subtitle: "IoT e Integración", 
            platform: "VSCode (C++) & IntelliJ (Java)", 
            desc: "Desarrollo de un cibersistema para el monitoreo de un motor en el sector industrial. El proyecto integra hardware (ESP32) y software (Java) utilizando el protocolo MQTT para garantizar la segurança operativa y la recolección de datos de telemetría en tiempo real." 
        },
        de: { 
            title: "Motorüberwachung", 
            subtitle: "IoT & Integration", 
            platform: "VSCode (C++) & IntelliJ (Java)", 
            desc: "Entwicklung eines cyber-physischen Systems zur industriellen Motorüberwachung. Das Projekt integriert Hardware (ESP32) und Software (Java) über das MQTT-Protokoll, um die Betriebssicherheit und die Erfassung von Telemetriedaten in Echtzeit zu gewährleisten." 
        }
    },
    {
        id: "axophy",
        date: "Mar. 2026",
        statusKey: "statusIncomplete",
        icon: "fa-network-wired",
        github: "https://github.com/mateusdossantoscavalheiro-sudo/Axophy",
        pdf: "./assets/axophy/documento_tecnico.pdf",
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
    }
];