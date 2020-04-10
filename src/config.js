export const intro = {
    title: 'Wat is jouw data waard?',
    content: [
        'Neem een kijkje mee door de ogen van de toekomstige verzekeringsmaatschappij.',
        'Deze tool weerspiegelt wat er dagelijks met jouw data op internet gebeurt',
        'Klik op start om te beginnen'
    ],  
}

export const questions = {
    food: {
        title: 'Eten',
        questions: {
            1: {
                question: 'Laat je graag eten thuis bezorgen?',
                imgAnswers: false,
                answers: [
                    {
                        answer: 'Zeker, het liefst zou ik elke dag bestellen!',
                        value: 0
                    },
                    {
                        answer: 'Ja, maar dan alleen een gezonde poké bowl of salade.',
                        value: 0
                    },
                    {
                        answer: 'Nee, eigenlijk niet.',
                        value: 0
                    },
                ],                    
            },
            2: {
                question: 'Wat zie je tijdens een feestje het liefst op tafel staan?',
                imgAnswers: true,
                answers: [
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q2A1.png',
                            alt: 'Een plank met kaas, brood en druiven',
                          }
                    },
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q2A2.png',
                            alt: 'Een plank fruit en brood',
                          }
                    },
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q2A3.png',
                            alt: 'Pizza',
                          }
                    },
                ],                    
            },
            3: {
                question: 'Welke beleg jij het liefst?',
                imgAnswers: true,
                answers: [
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q3A1.png',
                            alt: 'Bruinbrood',
                          }
                    },
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q3A2.png',
                            alt: 'Stokbrood',
                          }
                    },
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q3A3.png',
                            alt: 'Witbrood',
                          }
                    },
                ],                  
            },
        },
    },
    sleep: {
        title: 'Slaap',
        questions: {
            4: {
                question: 'Heb je afgelopen nacht lekker geslapen? ',
                imgAnswers: false,
                answers: [
                    {
                        answer: 'Ja, eigenlijk wel lekker.',
                        value: 0
                    },
                    {
                        answer: 'Nee, was niet mijn beste nacht.',
                        value: 0
                    },
                    {
                        answer: 'Niet anders dan anders.',
                        value: 0
                    },
                ],                    
            },
            5: {
                question: 'Wat is je favorite slaaphouding',
                imgAnswers: true,
                answers: [
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q5A1.png',
                            alt: 'Buik',
                          }
                    },
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q5A2.png',
                            alt: 'Zij',
                          }
                    },
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q5A1.png',
                            alt: 'Rug',
                          }
                    },
                ],                    
            },
        },
    },
    sport: {
        title: 'Sport',
        questions: {
            6: {
                question: 'Beschouw je jezelf als blessure gevoelig?',
                imgAnswers: false,
                answers: [
                    {
                        answer: 'Ik heb een (zware) blessure (gehad).',
                        value: 0
                    },
                    {
                        answer: 'Ik ga weleens naar de fysio',
                        value: 0
                    },
                    {
                        answer: 'Ik heb nooit blessures (gehad). ',
                        value: 0
                    },
                ],                    
            },
            7: {
                question: 'Hoe sport jij het liefst',
                imgAnswers: true,
                answers: [
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q7A1.png',
                            alt: 'Buiten joggen',
                          }
                    },
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q7A2.png',
                            alt: 'sportschool',
                          }
                    },
                    {
                        value: 0,
                        img: {
                            src: '/assets/img/questions/Q7A3.png',
                            alt: 'Op de bank gamen',
                          }
                    },
                ],                    
            },
        },
    },
    misc: {
        title: 'Overige',
        questions: {
            8: {
                question: 'Rook je wel eens?',
                imgAnswers: false,
                answers: [
                    {
                        answer: 'Ja ik ben een frequente roker.',
                        value: 0
                    },
                    {
                        answer: 'Ik rook af en toe een sigaretje.',
                        value: 0
                    },
                    {
                        answer: 'Ik heb ooit een sigaretje gerookt.',
                        value: 0
                    },
                    {
                        answer: 'Ik rook niet.',
                        value: 0
                    },
                ],                    
            },
            9: {
                question: 'Doe je weleens een drankje?',
                imgAnswers: false,
                answers: [
                    {
                        answer: 'Ik ga regelmatig drinken met de maten.',
                        value: 0
                    },
                    {
                        answer: 'Op z’n tijd. Als we allemaal vrij hebben.',
                        value: 0
                    },
                    {
                        answer: 'Echt heel sporadisch..',
                        value: 0
                    },
                    {
                        answer: 'k drink geen alcohol, doe maar ice tea.',
                        value: 0
                    },
                ],                    
            },
            10: {
                question: 'Ga jij regelmatig met vrienden of kennissen iets leuks doen?',
                imgAnswers: false,
                answers: [
                    {
                        answer: 'Eigenlijk doe ik liever in m’n eentje dingen.',
                        value: 0
                    },
                    {
                        answer: 'Eens in de maand gaan we er op uit.',
                        value: 0
                    },
                    {
                        answer: 'Bijna elke week staat er wel iets op de planning.',
                        value: 0
                    },
                    {
                        answer: 'We zien elkaar meerdere keren per week.',
                        value: 0
                    },
                    {
                        answer: 'We zien elkaar (semi-)dagelijks.',
                        value: 0
                    },
                ],                    
            },
        },
    }
}


export const outro = [
]