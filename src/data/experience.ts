export interface Experience {
    poste: string;
    date: string;
    entreprise: string;
    description: string[];
    realisations?: string[];
    icon?: string;
    color: string;
}

export const experiences: Experience[] = [
    {
        poste: "Développeuse Java / React.js / TypeScript",
        date: "Mars 2023 - Septembre 2024",
        entreprise: "Mereo / Paris",
        description: [
            "Création d'une API REST en Java (Spring Boot) pour la gestion de produit avec un moteur de règles pour ajuster les prix.",
            "Conception et développement d'une interface utilisateur en React.js.",
            "Implémentation de JWT pour l'authentification utilisateur, hachage des mots de passe et gestion sécurisée des sessions (expiration 24h).",
            "Conception et optimisation sous PostgreSQL pour une gestion efficace des produits (statuts, duplications, modifications).",
            "Participation à la définition et mise en œuvre d'une architecture MVC.",
            "Collaboration Agile avec sprints et réunions Scrum, organisation et suivi des tâches via ClickUp."
        ],
        realisations: [
            "Productivité accrue grâce à une interface performante.",
            "Sécurisation renforcée avec JWT.",
            "Expérience utilisateur enrichie grâce à des interfaces intuitives."
        ],
        icon: "pi pi-briefcase",
        color: "#2196F3",

    },
    {
        poste: "Développeuse Web Indépendante",
        date: "Juillet 2022 - À ce jour",
        entreprise: "Indépendante",
        description: [
            "Création de sites vitrines et e-commerce : planification, conception, développement, et mise en ligne.",
            "Technologies utilisées : HTML, CSS, JavaScript, WordPress, Figma, et Photoshop.",
            "Réalisation de cahiers des charges, maquettes, et logos pour les clients."
        ],
        color: "#4CAF50",
        icon: "pi pi-briefcase",
    },
    {
        poste: "Stage en Développement Web",
        date: "Avril 2022 - Juin 2022",
        entreprise: "Horizon Immersion",
        description: [
            "Création d'interfaces interactives avec HTML, CSS, JavaScript et Symfony.",
            "Conception de cahiers des charges, maquettage et mise en ligne."
        ],
        color: "#FFC107",
        icon: "pi pi-briefcase",
    },
    {
        poste: "Auto-entrepreneuse dans l’Événementiel Musical",
        date: "2016 - 2020",
        entreprise: "Indépendante France/Espagne/Suisse",
        description: [
            "Organisation et animation d’événements musicaux publics et privés.",
            "Conception de supports visuels pour la promotion (logos, flyers, publicités).",
            "Prospection et fidélisation de la clientèle."
        ],
        color: "#FF5722",
        icon: "pi pi-briefcase",
    },
    {
        poste: "Responsable de Boutique",
        date: "2014 - 2016",
        entreprise: "Pivano, Lyon",
        description: [
            "Gestion de la boutique, des fournisseurs, et de l'équipe.",
            "Mise en place de stratégies de vente et développement commercial.",
            "Organisation des horaires et des commandes en traiteur."
        ],
        color: "#673AB7",
        icon: "pi pi-briefcase",
    },
    {
        poste: "Logisticienne / Magasinière",
        date: "2007 - 2014",
        entreprise: "Diverses entreprises (Sanofi Pasteur, Bio Mérieux, etc.)",
        description: [
            "Gestion des stocks, préparation des commandes et suivi des expéditions.",
            "Gestion des fichiers d'inventaires et organisation des marchandises."
        ],
        color: "#9C27B0",
        icon: "pi pi-briefcase",
    }
];
