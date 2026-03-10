export const translations = {
    fr: {
        // Header nav labels
        nav: {
            profil: 'Profil',
            competences: 'Compétences',
            projets: 'Projets',
            experiences: 'Expériences',
            formation: 'Formation',
            ecosysteme: 'Écosystème',
            miniJeu: 'Mini-Jeu',
            contact: 'Contact',
        },

        // Hero
        hero: {
            title: 'Étudiant Ingénieur',
            titleHighlight: 'ECE Paris',
            p1: (
                <>
                    Bonjour, moi c'est <span className="text-neon font-semibold">Toli Ince</span>, actuellement en{' '}
                    <span className="text-white font-semibold">1ère année du cycle ingénieur</span> à l'{' '}
                    <span className="text-white font-semibold">ECE Paris</span>.
                </>
            ),
            p2: (
                <>
                    Ce qui me motive au quotidien, c'est la{' '}
                    <span className="text-white font-semibold">cybersécurité</span>, l'
                    <span className="text-white font-semibold">administration réseau</span> et la{' '}
                    <span className="text-white font-semibold">Data</span>. J'aime comprendre
                    comment fonctionnent les systèmes pour mieux les protéger, les renforcer et en exploiter les données.
                </>
            ),
            p3: (
                <>
                    Je me dirige vers une spécialisation en{' '}
                    <span className="text-white font-semibold">Data & IA</span>. J'ai pour ambition
                    de développer mon expertise en{' '}
                    <span className="text-white font-semibold">science des données</span>, en{' '}
                    <span className="text-white font-semibold">intelligence artificielle</span> et en{' '}
                    <span className="text-white font-semibold">sécurité</span>, afin de concevoir des solutions
                    innovantes et fiables.
                </>
            ),
            p4: (
                <>
                    En dehors des cours et des projets, je suis un grand fan d'
                    <span className="text-white font-semibold">🏎️ automobile</span>, de{' '}
                    <span className="text-white font-semibold">🎬 cinéma</span> et d'
                    <span className="text-white font-semibold">🎮 esport</span>.
                </>
            ),
            linkedin: 'Voir mon LinkedIn',
        },

        // Skills
        skills: {
            title: 'Compétences',
            categories: [
                { title: 'Réseaux' },
                { title: 'Systèmes & Admin' },
                { title: 'Monitoring' },
                { title: 'Dev & Programmation' },
            ],
        },

        // Projects
        projects: {
            title: 'Projets',
            contextLabel: 'Contexte',
            tasksLabel: 'Réalisations',
            resultsLabel: 'Résultats',
            items: [
                {
                    title: "Déploiement d'une Plateforme Réseau Sécurisée",
                    subtitle: 'Projet Cyber — OPNsense',
                    context:
                        "Concevoir un réseau segmenté, isoler les services critiques dans une DMZ, et tester sa résistance avec des outils d'audit et d'analyse de flux réseau.",
                    tasks: [
                        "Déploiement et configuration d'un pare-feu OPNsense",
                        'Règles de filtrage personnalisées entre LAN, DMZ et WAN',
                        'Tests de sécurité avec Nmap et Wireshark',
                        "Activation de l'IDS pour la détection d'intrusion en temps réel",
                    ],
                    results: [
                        'Réseau segmenté, filtré et prêt pour la production',
                        'Bonnes pratiques cybersécurité appliquées (filtrage, DMZ, supervision)',
                        "Expérience terrain réutilisable en entreprise",
                        'VPN fonctionnel déployé',
                    ],
                },
                {
                    title: 'Plantamitz 2025',
                    subtitle: 'Jeu console inspiré de FarmHeroes',
                    context:
                        'Jeu de type match-3 en mode console : aligner des items sur un plateau 25×45 pour remplir des contrats dans un temps et un nombre de coups limités.',
                    tasks: [
                        'Plateau de jeu 25×45 avec items colorés (S, F, P, O, M)',
                        'Système de gravité et remplissage aléatoire après suppression',
                        'Déplacement au clavier (ZQSD / flèches) avec curseur et sélection',
                        'Initialisation sans combinaison possible existante',
                    ],
                    results: [
                        'Groupes de 4 : 4 pts bonus',
                        'Groupes de 6 : suppression de tous les items identiques',
                        'Forme en H : 2 × X points',
                        'Forme rectangle : 2 × (L × l) points',
                        'Système de 5 vies + sauvegarde progression',
                    ],
                },
            ],
        },

        // Experience
        experience: {
            title: 'Expériences',
            items: [
                {
                    title: 'Stagiaire Technicien Réseau',
                    company: 'Réso Buro',
                    tasks: [
                        'Migration du système de ticketing via PHP/API REST',
                        'Optimisation du monitoring avec PowerShell',
                        'Déploiement de MeshCentral pour la gestion à distance',
                    ],
                },
                {
                    title: 'Stagiaire Technicien Réseau & Télécom',
                    company: 'Réseaux Bureautique',
                    tasks: [
                        'Configuration 3CX (VoIP)',
                        'Déploiement WatchGuard T35',
                        'Mise en place de la stack ELK/Grafana pour le monitoring',
                    ],
                },
            ],
        },

        // Formation
        formation: {
            title: 'Formation',
            items: [
                {
                    title: "Diplôme d'Ingénieur",
                    status: 'En cours',
                    description: "Formation d'ingénieur généraliste avec spécialisation en réseaux et cybersécurité.",
                },
                {
                    title: 'BUT Réseaux et Télécommunications',
                    status: 'Diplômé',
                    description: 'Parcours Cybersécurité — Formation technique approfondie en réseaux, télécommunications et sécurité informatique.',
                },
            ],
        },

        // Footer / Contact
        footer: {
            title: 'Contact',
            coordonnees: 'Coordonnées',
            email: 'Email',
            ville: 'Ville',
            langues: 'Langues',
            langueItems: [
                { name: 'Français', level: 'Maternel' },
                { name: 'Anglais', level: 'B2' },
                { name: 'Turc', level: 'Intermédiaire' },
            ],
            createdBy: 'Créé avec',
            by: 'par',
        },
    },

    en: {
        // Header nav labels
        nav: {
            profil: 'Profile',
            competences: 'Skills',
            projets: 'Projects',
            experiences: 'Experience',
            formation: 'Education',
            ecosysteme: 'Ecosystem',
            miniJeu: 'Mini-Game',
            contact: 'Contact',
        },

        // Hero
        hero: {
            title: 'Engineering Student',
            titleHighlight: 'ECE Paris',
            p1: (
                <>
                    Hi, I'm <span className="text-neon font-semibold">Toli Ince</span>, currently in my{' '}
                    <span className="text-white font-semibold">1st year of the engineering cycle</span> at{' '}
                    <span className="text-white font-semibold">ECE Paris</span>.
                </>
            ),
            p2: (
                <>
                    What drives me every day is{' '}
                    <span className="text-white font-semibold">cybersecurity</span>,{' '}
                    <span className="text-white font-semibold">network administration</span> and{' '}
                    <span className="text-white font-semibold">Data</span>. I love understanding
                    how systems work in order to better protect, strengthen them and leverage their data.
                </>
            ),
            p3: (
                <>
                    I'm heading towards a specialization in{' '}
                    <span className="text-white font-semibold">Data & AI</span>. My ambition is
                    to develop my expertise in{' '}
                    <span className="text-white font-semibold">data science</span>,{' '}
                    <span className="text-white font-semibold">artificial intelligence</span> and{' '}
                    <span className="text-white font-semibold">security</span>, to design innovative and
                    reliable solutions.
                </>
            ),
            p4: (
                <>
                    Outside of classes and projects, I'm a big fan of{' '}
                    <span className="text-white font-semibold">🏎️ cars</span>,{' '}
                    <span className="text-white font-semibold">🎬 cinema</span> and{' '}
                    <span className="text-white font-semibold">🎮 esports</span>.
                </>
            ),
            linkedin: 'View my LinkedIn',
        },

        // Skills
        skills: {
            title: 'Skills',
            categories: [
                { title: 'Networks' },
                { title: 'Systems & Admin' },
                { title: 'Monitoring' },
                { title: 'Dev & Programming' },
            ],
        },

        // Projects
        projects: {
            title: 'Projects',
            contextLabel: 'Context',
            tasksLabel: 'Achievements',
            resultsLabel: 'Results',
            items: [
                {
                    title: 'Deployment of a Secure Network Platform',
                    subtitle: 'Cyber Project — OPNsense',
                    context:
                        'Design a segmented network, isolate critical services in a DMZ, and test its resilience using audit and network traffic analysis tools.',
                    tasks: [
                        'Deployment and configuration of an OPNsense firewall',
                        'Custom filtering rules between LAN, DMZ and WAN',
                        'Security testing with Nmap and Wireshark',
                        'IDS activation for real-time intrusion detection',
                    ],
                    results: [
                        'Segmented, filtered network ready for production',
                        'Cybersecurity best practices applied (filtering, DMZ, monitoring)',
                        'Hands-on experience reusable in professional settings',
                        'Functional VPN deployed',
                    ],
                },
                {
                    title: 'Plantamitz 2025',
                    subtitle: 'Console game inspired by FarmHeroes',
                    context:
                        'Match-3 console game: align items on a 25×45 board to complete contracts within limited time and moves.',
                    tasks: [
                        '25×45 game board with colored items (S, F, P, O, M)',
                        'Gravity system and random refill after deletion',
                        'Keyboard movement (ZQSD / arrows) with cursor and selection',
                        'Initialization without any existing possible combinations',
                    ],
                    results: [
                        'Groups of 4: 4 bonus pts',
                        'Groups of 6: removal of all identical items',
                        'H shape: 2 × X points',
                        'Rectangle shape: 2 × (L × W) points',
                        '5 lives system + progress saving',
                    ],
                },
            ],
        },

        // Experience
        experience: {
            title: 'Experience',
            items: [
                {
                    title: 'Network Technician Intern',
                    company: 'Réso Buro',
                    tasks: [
                        'Ticketing system migration via PHP/REST API',
                        'Monitoring optimization with PowerShell',
                        'MeshCentral deployment for remote management',
                    ],
                },
                {
                    title: 'Network & Telecom Technician Intern',
                    company: 'Réseaux Bureautique',
                    tasks: [
                        '3CX configuration (VoIP)',
                        'WatchGuard T35 deployment',
                        'ELK/Grafana stack setup for monitoring',
                    ],
                },
            ],
        },

        // Formation
        formation: {
            title: 'Education',
            items: [
                {
                    title: "Engineering Degree",
                    status: 'In progress',
                    description: 'General engineering program with specialization in networks and cybersecurity.',
                },
                {
                    title: 'B.Sc. Networks and Telecommunications',
                    status: 'Graduated',
                    description: 'Cybersecurity track — In-depth technical training in networking, telecommunications and IT security.',
                },
            ],
        },

        // Footer / Contact
        footer: {
            title: 'Contact',
            coordonnees: 'Contact Info',
            email: 'Email',
            ville: 'City',
            langues: 'Languages',
            langueItems: [
                { name: 'French', level: 'Native' },
                { name: 'English', level: 'B2' },
                { name: 'Turkish', level: 'Intermediate' },
            ],
            createdBy: 'Created with',
            by: 'by',
        },
    },
}
