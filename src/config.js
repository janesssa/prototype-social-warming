export const intro = {
    title: 'Wat is jouw data waard?',
    content: [
        'Neem een kijkje mee door de ogen van de toekomstige verzekeringsmaatschappij.',
        'Deze tool weerspiegelt wat er dagelijks met jouw data op internet gebeurt',
        'Klik op start om te beginnen'
    ],  
}

export const questions = [
    {
        question: 'Laat je graag eten thuis bezorgen?',
        category: 'Eten',
        imgAnswers: false,
        answers: [
            {
                answer: 'Zeker, het liefst zou ik elke dag bestellen!',
                value: 1
            },
            {
                answer: 'Ja, maar dan alleen een gezonde poké bowl of salade.',
                value: 5
            },
            {
                answer: 'Nee, eigenlijk niet.',
                value: 10
            },
        ],                    
    },
    {
        question: 'Wat zie je tijdens een feestje het liefst op tafel staan?',
        category: 'Eten',
        imgAnswers: true,
        answers: [
            {
                value: 5,
                img: {
                    src: '/assets/img/questions/Q2A1.png',
                    alt: 'Een plank met kaas, brood en druiven',
                    }
            },
            {
                value: 1,
                img: {
                    src: '/assets/img/questions/Q2A2.png',
                    alt: 'Een plank fruit en brood',
                    }
            },
            {
                value: 10,
                img: {
                    src: '/assets/img/questions/Q2A3.png',
                    alt: 'Pizza',
                    }
            },
        ],                    
    },
    {
        question: 'Welke beleg jij het liefst?',
        category: 'Eten',
        imgAnswers: true,
        answers: [
            {
                value: 10,
                img: {
                    src: '/assets/img/questions/Q3A1.png',
                    alt: 'Bruinbrood',
                    }
            },
            {
                value: 5 ,
                img: {
                    src: '/assets/img/questions/Q3A2.png',
                    alt: 'Stokbrood',
                    }
            },
            {
                value: 1,
                img: {
                    src: '/assets/img/questions/Q3A3.png',
                    alt: 'Witbrood',
                    }
            },
        ],                  
    },
    {
        question: 'Heb je afgelopen nacht lekker geslapen? ',
        category: 'Slaap',
        imgAnswers: false,
        answers: [
            {
                answer: 'Ja, eigenlijk wel lekker.',
                value: 10
            },
            {
                answer: 'Nee, was niet mijn beste nacht.',
                value: 1
            },
            {
                answer: 'Niet anders dan anders.',
                value: 5  
            },
        ],                    
    },
    {
        question: 'Wat is je favorite slaaphouding',
        category: 'Slaap',
        imgAnswers: true,
        answers: [
            {
                value: 1,
                img: {
                    src: '/assets/img/questions/Q5A1.png',
                    alt: 'Buik',
                    }
            },
            {
                value: 5 ,
                img: {
                    src: '/assets/img/questions/Q5A2.png',
                    alt: 'Zij',
                    }
            },
            {
                value: 10,
                img: {
                    src: '/assets/img/questions/Q5A1.png',
                    alt: 'Rug',
                    }
            },
        ],                    
    },
    {
        question: 'Beschouw je jezelf als blessure gevoelig?',
        imgAnswers: false,
        category: 'Sport',
        answers: [
            {
                answer: 'Ik heb een (zware) blessure (gehad).',
                value: 1
            },
            {
                answer: 'Ik ga weleens naar de fysio',
                value: 5
            },
            {
                answer: 'Ik heb nooit blessures (gehad). ',
                value: 10
            },
        ],                    
    },
    {
        question: 'Hoe sport jij het liefst',
        category: 'Sport',
        imgAnswers: true,
        answers: [
            {
                value: 10,
                img: {
                    src: '/assets/img/questions/Q7A1.png',
                    alt: 'Buiten joggen',
                    }
            },
            {
                value: 5,
                img: {
                    src: '/assets/img/questions/Q7A2.png',
                    alt: 'sportschool',
                    }
            },
            {
                value: 1,
                img: {
                    src:  '/assets/img/questions/Q7A3.png',
                    alt: 'Op de bank gamen',
                    }
            },
        ],                    
    },
    {
        question: 'Rook je wel eens?',
        category: 'Overige',
        imgAnswers: false,
        answers: [
            {
                answer: 'Ja ik ben een frequente roker.',
                value: 1
            },
            {
                answer: 'Ik rook af en toe een sigaretje.',
                value: 3.3
            },
            {
                answer: 'Ik heb ooit een sigaretje gerookt.',
                value: 6.6
            },
            {  
                answer: 'Ik rook niet.',
                value: 10
            },
        ],                    
    },
    {
        question: 'Doe je weleens een drankje?',
        category: 'Overige',
        imgAnswers: false,
        answers: [
            {
                answer: 'Ik ga regelmatig drinken met de maten.',
                value: 1
            },
            {
                answer: 'Op z’n tijd. Als we allemaal vrij hebben.',
                value: 3.3
            },
            {
                answer: 'Echt heel sporadisch..',
                value: 6.6
            },
            {
                answer: 'k drink geen alcohol, doe maar ice tea.',
                value: 10
            },
        ],                    
    },
    {
        question: 'Ga jij regelmatig met vrienden of kennissen iets leuks doen?',
        category: 'Overige',
        imgAnswers: false,
        answers: [
            {
                answer: 'Eigenlijk doe ik liever in m’n eentje dingen.',
                value: 1
            },
            {
                answer: 'Eens in de maand gaan we er op uit.',
                value: 2.5
            },
            {
                answer: 'Bijna elke week staat er wel iets op de planning.',
                value: 5
            },
            {
                answer: 'We zien elkaar meerdere keren per week.',
                value: 7.5
            },
            {
                answer: 'We zien elkaar (semi-)dagelijks.',
                value: 10
            },
        ],                    
    },
]
