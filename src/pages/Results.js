import React, {useContext} from 'react';
import InsightCard from '../components/InsightCard';
import '../styles/results.scss';
import { ValueContext } from '../context/ValueContext'

const insights = [
    {
        id: 736,
        title: 'Vraag 1',
        category: 'Eten',
        content: [
            'In de regel is uit eten gaan slecht voor de gezondheid. Over het algemeen is het voedsel dat je kan bestellen minder ‘gezond’. Wat uiteindelijk kan leiden tot een verhoogde kans op cholesterol en hartproblemen. Deze link leg je niet direct, maar die is er zeker statistisch gezien. Zo kan iets vrij onschuldigs als eten bestellen een groot effect hebben.',
            'Door hier aan te geven dat het gaat om een Poké bowl of salade maak je het vrij specifiek. Met dit antwoord laten we dan ook zien hoe een kleine toevoeging aan het antwoord een positief effect kan hebben. Data kan je schapen.',
            'Wederom zie je hier de kwetsbaarheid van data. Thuis koken is dus over het algemeen ‘gezonder’ dan uit eten gaan. Ookal frituur je elke dag patat en frikandellen. Door de vraag zo te stellen is het makkelijk om aannames te doen',
        ]
    },
    {
        id: 841,
        title: 'Vraag 2',
        category: 'Eten',
        content: [
            'Groenten en fruit ondersteunen het immuunsysteem en behouden de gezondheid. Door een ‘gezond’ eetpatroon te hebben houd je het risico op gezondheidsproblemen gerelateerd aan je voeding laag. Wat positief uitvalt voor een verzekering van de toekomst.',
            'Overtollig vet en toegevoegde chemische stoffen zijn lekker, maar niet bepaald goed voor de gezondheid. Dit kan op termein leiden tot verchillende hart-en-vaat ziekten en andere gezondheidsklachten. Een risico dus. Dit kan zeker negatief uitvallen jouw verzekering van de toekomst.',
            'Een mix van allerlei etenswaren. Hier kan zowel ‘gezonde’ als ‘ongezonde’ voeding in zitten. Door dat je aan geeft dat je beide eet is er geen aanname uit te doen.',
        ]
    },
    {
        id: 267,
        title: 'Vraag 3',
        category: 'Eten',
        content: [
            'Vezels kunnen veelvoorkomende spijsverteringsklachten  zoals diarree of verstopping, voorkomen of verminderen. Maar daar blijft het niet bij. Zo kunnen vezels daarnaast het risico op darmkanker verlagen. Vezels zijn het lievelingskostje van onze goede darmbacteriën.',
            'Dit antwoord laat wit brood zien. Wit brood bevat reguliere tarwe. Dit leidt tot overmatige consumptie van koolhydraten. Op hun beurt worden koolhydraten omgezet tot suikers. Teveel suikers bevorderen de gezondheid niet. Aangezien dit Nederlandse data is en Nederlanders over het algemeen veel brood eten is dit een risico factor die weer invloed kan hebben.',
            'Dit antwoord laat wit brood zien. Wit brood bevat reguliere tarwe. Dit leidt tot overmatige consumptie van koolhydraten. Op hun beurt worden koolhydraten omgezet tot suikers. Teveel suikers bevorderen de gezondheid niet. Aangezien dit Nederlandse data is en Nederlanders over het algemeen veel brood eten is dit een risico factor die weer invloed kan hebben.',
        ]
    },
    {
        id: 745,
        title: 'Vraag 4',
        category: 'Slaap',
        content: [
            'Een goede nachtrust is de basis van een gezond leven. Naast de ‘voelbare’ kant: energiek, uitgerust, productief etc. Zijn er dus ook veel onderliggende voordelen. Veel ziektes en andere kwaaltjes kunnen teruggeleid worden naar een (regelmatige en langdurige) slechte nachtrust. Als jij vandaag zegt dat je goed hebt geslapen is de momentopname eigenlijk niet waardevol maar wel de input die je geeft op dat moment. Wat leidt tot  een positief assesment.',
            'Het is belangrijk om al vanaf middelbare leeftijd ervoor te zorgen dat je goed slaapt. Dr. Jurgen Claassen geeft aan dat langdurig slecht slapen al voor schade zou kunnen zorgen. Uit onderzoek blijkt dat mensen tien, twintig tot zelfs dertig jaar voordat dementie ontstaat aan hebben gegeven dat ze slecht slapen.',
            'Dit lijkt een nutteloos antwoord, want hoe weten we hoe je normaal gesproken slaapt? Dat is het dan ook. Zonder data  kan er geen aanname gedaan worden. Misschien dat je google home meer weet?',
        ]
    },
    {
        id: 451,
        title: 'Vraag 5',
        category: 'Slaap',
        content: [
            'Buikslapers hebben het zwaar. Letterlijk. Onderzoek wijst uit dat slapen op je buik een last is voor de wervelkolom. Ook wordt de nek niet goed ondersteund in deze positie. Wat dus kan leiden tot kosten om deze problemen te verhelpen. Op de lange termijn kan de schade zelfs onomkeerbaar zijn.',
            'Zij-slapers zitten in een aparte situatie. Onderzoek wijst uit dat met de juiste hulpmiddelen op je zij slapen hartstikke goed kan zijn. Denk aan het juiste matras, kussentjes tussen de benen, een lager gelegen gedeelte om de schouder kwijt te kunnen etc. Het gros houd zich hier totaal niet mee bezig. Dan vormen de lichamelijke klachten, shouders en nek, vaak een probleem.',
            'Dat het belangrijk is om goed te slapen weten we. De manier waar op je slaapt heeft daar een grote invloed op. Zo kan een slechte houding lijden tot gewrichtsproblemen, rugklachten, hartfunctie en hormoonproductie. Op je rug slapen is dan ook de ‘beste’ houding. De luchtwegen staan open, de rug is relaxed en de nek wordt minder belast.',
        ]
    },
    {
        id: 348,
        title: 'Vraag 6',
        category: 'Sport',
        content: [
            'Blessures zijn naar. Niet alleen voor degene die ze oploopt maar ook voor de sleur van het medisch circuit. Bij een zware blessure is dit vaak een traject dat tot wel een jaar kan duren bij de meeste gevallen. Wat uiteindelijk een uitgebreide kostenpost  is voor de verzekering. Dit risico willen ze natuurlijk het liefst voorkomen.',
            'Het is niet abnormaal om naar de fysio te gaan als je een beetje last hebt. Wat wel nadelig kan zijn voor de verzekeringsmaatschappij van de toekomst is dat er eventueel een onderliggende oorzaak gevonden kan worden. Wat op zijn beurt weer kan leiden tot vele kosten.',
            'Algemeen positief. Een sporter zonder blessures is over het algemeen fit. Een fit persoon vormt weinig risico. Sterker nog, deze mensen dragen het overgrote deel van de kosten. ',
        ]
    },
    {
        id: 663,
        title: 'Vraag 7',
        category: 'Sport',
        content: [
            'Thuis op de bank, regelmatige beweging is van groot belang. Niet alleen voor het risico op (toekomstige) lichamelijke klachten, maar ook voor de mentale kant van het verhaal. Beweging laat stofjes los, we kunnen onze (negatieve) energie kwijt en ervaren vaak een betere nachtrust. Door dit niet te doen kan je op termijn mentale en fysieke gezondheidsklachten oplopen. ',
            'In de sportschool/op het veld. Door regelmatig cardio en/of krachttraining te doen onderhoud je een sterk lichaam Mits je geen blessure oploopt. Een sterk en geconditioneerd lichaam leidt vaak tot o.a. verhoogde productiviteit, mentale ontspanning en hogere energie niveaus. Al met al een goede bakermat voor een tevreden leven.',
            'Lenigheid/bewegingsoefeningen. Beter dan geen beweging, door regelmatig goed te stretchen bevorder je het soepel houden van het lichaam op de lange termijn. Toevoegen van bepaalde oefeningen met behulp van het lichaamsgewicht maakt ook dat je de spieren traint, wat niet alleen de fysieke maar ook mentale gezondheid bevorderd.',
        ]
    },
    {
        id: 46,
        title: 'Vraag 8',
        category: 'Overige',
        content: [
            'We weten allemaal hoe slecht roken voor je is. Er zijn verschillende longaandoeningen, maar ook andere ziektes die sterk gelinked kunnen worden aan het (frequent roken) van tabak. Ook is de directe conditionele impact direct merkbaar. Een groot risico voor verzekeraars.',
            'We weten allemaal hoe slecht roken voor je is. Er zijn verschillende longaandoeningen, maar ook andere ziektes die sterk gelinked kunnen worden aan het (frequent roken) van tabak. Ook is de directe conditionele impact direct merkbaar. Gezien de mate waarin je rookt zal het een minder groot risico vormen, maar alsnog een risico. ',
            'Er zijn geen medische voordelen aan het roken van tabak. Dat je dan niet rookt en alle medische gevolgen van dien eigenlijk vermijdt, is voor de verzekeraar zeer positief.',
        ]
    },
    {
        id: 564,
        title: 'Vraag 9',
        category: 'Overige',
        content: [
            'Het regelmatig consumeren van alcohol brengt verschillende complicaties met zich mee. Verslavingskans, bloeddruk, leverproblemen etc. Allemaal vanzelfsprekend dat deze zo veel mogelijk vermeden willen worden.',
            'Een drankje op z’n tijd heeft volgens sommige studies zelfs positieve gevolgen, zowel fysiek als mentaal. Echter is in de algemene context vaak dat de mensen dan toch over-consumeren tijdens die ene keer. Hier komt dus alsnog geen positieve impact uit.',
            'Dat je geen alcohol drinkt is alleen maar positief. Dat je dan wel drie liter cola drinkt is niet waar de vraag over gaat. Volgens deze data is het dus positief aangezien je alcohol-gerelateerde problemen vermijdt.',
        ]
    },
    {
        id: 645,
        title: 'Vraag 10',
        category: 'Overige',
        content: [
            'Wanneer men langere periodes zonder uitgebreidere sociale interactie gaat kan dit van invloed zijn op de mentale gesteldheid. Wat vervolgens kan leiden tot zaken als depressie en sociale angst. Dit klinkt vrij drastisch, echter is in theorie hoe dit zou kunnen verlopen. Dus als jij liever dingen alleen doet vorm je volgens de verzekering van de toekomst al een iets groter risico.',
            'Onderzoek wijst uit dat mensen die minstens 1x per week een activiteit uitvoeren met sociale contacten over het algemeen blijer en gezonder zijn. Wanneer men lange periodes zonder uitgebreidere sociale interactie gaat kan dit van grote invloed zijn op de mentale gesteldheid.',
            'Door meerdere keren per week sociaal contact te hebben sta je over het algemeen goed in het daglicht op mentaal gebied. Wat leidt tot een blijer leven en minder complicaties. Wat dus het risico op psychiatrische hulp, hoe klein dan ook, verminderd. Maar misschien vind je het juist heel vervelend dat je vaak weg bent en geen nee kan zeggen? Helaas is de aanname al gedaan. ',
        ]
    },
]

const Results = () => {
    const {value} = useContext(ValueContext)
    const answers = value.answers

    return (
        <div>
            <div className='sm-header'>
                <h1 className='title'>Jouw data, ons inzicht</h1>
                <span className='float-right'>
                    <small>Jouw data waarde</small>
                    <span className='bg-number'>€{value.value}</span> 
                </span>
            </div>
            <div className='carousel'>
                {answers.map((answer, i) => (
                    <InsightCard content={insights[i]} key={i} answer={answer} />
                ))}
            </div>
        </div>
    )
}

export default Results  