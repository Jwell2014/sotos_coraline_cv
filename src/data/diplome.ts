export interface Diplome {
    status: string;
    date: string;
    organization: string;
    equivalent?: string; // Champ optionnel
    description?: string[];
    achievement?: string; // Champ optionnel
    icon: string;
    color: string;
}

export const diplomes: Diplome[] = [
    {
        status: "Titre Professionnel Concepteur Développeur d'Applications",
        date: "Mars 2023 - Septembre 2024",
        organization: "Simplon.co",
        equivalent: "Équivalent : BAC +4 / Licence",
        icon: "pi pi-graduation-cap",
        color: "#2196F3",
    },
    {
        status: "Certification DevOps",
        date: "2024",
        organization: "Simplon.co",
        icon: "pi pi-book",
        color: "#4CAF50",
    },
    {
        status: "Titre Professionnel Développeur Web et Web Mobile",
        date: "Septembre 2021 - Juin 2022",
        organization: "Human Booster",
        equivalent: "Équivalent : BAC +2 / Brevet Fédéral",
        icon: "pi pi-code",
        color: "#FFC107",
    },
    {
        status: "Formations en ligne",
        date: "Depuis Novembre 2020",
        organization: "OpenClassrooms",
        description: ["HTML, CSS, JavaScript, Cybersécurité", "Développeur d'Applications", "Développeur Web"],
        icon: "pi pi-desktop",
        color: "#FF5722",
    },
    {
        status: "BTS Animateur Musical et Scénique",
        date: "Septembre 2016 - Juin 2018",
        organization: "UCPA",
        equivalent: "Équivalent : BAC +2 / Brevet Féderal",
        icon: "pi pi-star",
        color: "#673AB7",
    },
    {
        status: "Formation à la création d'entreprise",
        date: "2011",
        organization: "EM LYON Business School",
        achievement: "Lauréate du meilleur Business Plan",
        icon: "pi pi-chart-line",
        color: "#9C27B0",
    },
];
