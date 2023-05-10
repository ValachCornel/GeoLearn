const testMunti = [
    {
        question: "Unde sunt localizați munții Bucegi?",
        a: "în sudul României",
        b: "în Carpații Meridionali",
        c: "la granița cu Republica Moldova",
        d: "în Carpații Occidentali",
        corect:"b",
    },
    {
        question: "Care este punctul culminant al masivului Bucegi?",
        a: "Vârful Roșu",
        b: "Vârful Omu",
        c: "Vârful Paltinu",
        d: "Vârful Moldoveanu",
        corect:"b",
    },
    {
        question: "Ce fel de vegetație se găsește pe crestele înalte a masivului Apuseni?",
        a: "păduri de foioase",
        b: "păduri de conifere",
        c: "vegetație mediteraneană",
        d: "vegetație alpină",
        corect:"d",
    },
    {
        question: "Ce fel de climă au munții Făgăraș?",
        a: "climă aspră, cu caracteristici subpolare",
        b: "climă temperat-continentală moderată",
        c: "climă alpină",
        d: "climă subpolară",
        corect:"a",
    },
    {
        question: "Ce altitudine are cel mai înalt vârf montan din România?",
        a: "2.614 de metri",
        b: "2.314 de metri",
        c: "2.544 de metri",
        d: "3.144 de metri",
        corect:"c",
    }
]

const testCampii = [
    {
        question: "Unde este localizată câmpia Română?",
        a: "în extremitatea vestică a României",
        b: "în depresiunea Transilvaniei",
        c: "în extremitatea nord-vestica a României",
        d: "jumătatea sudică și sud-estică a României",
        corect:"d",
    },
    {
        question: "Ce climă se regăsește în câmpia Română",
        a: "climă mediteraneană",
        b: "climă temperat-continentală de tranziţie",
        c: "climă tropicală",
        d: "climă ecuatorială",
        corect:"b",
    },
    {
        question: "Cum s-a format Câmpia de Vest?",
        a: "prin sedimentarea intensă a unei mări şi retragerea acesteia",
        b: "prin erodarea completă a unor munți sau dealuri",
        c: "formată din roci sedimentare",
        d: "prin retragerea apelor",
        corect:"a",
    },
    {
        question: "Căror formațiuni aparține vegetația Câmpiei Române?",
        a: "păduri de foioase, tipul alpin",
        b: "stepă, pădurile de fag, pădurile de stejar",
        c: "stepă, silvostepă, padurile de stejar",
        d: "stepă, silvostepă",
        corect:"a",
    },
    {
        question: "Ce altitudine are cel mai înalt vârf montan din România?",
        a: "2.614 de metri",
        b: "2.314 de metri",
        c: "2.544 de metri",
        d: "3.144 de metri",
        corect:"c",
    }
]

const testLacuri = [
    {
        question: "Cum s-a format Lacul Sfânta Ana?",
        a: "deformări mari ale crustei pământului sau în fisuri tectonice",
        b: "artificial, prin construirea unui baraj",
        c: "prin prabușirea unei bucăți munte sau deal",
        d: "format într-un crater vulcanic individual",
        corect:"d",
    },
    {
        question: "De câte pâraie mari este alimentat Lacul Roșu?",
        a: "4",
        b: "2",
        c: "6",
        d: "9",
        corect:"a",
    },
    {
        question: "Care este cel mai mare lac artificial din România?",
        a: "Lacul Stânca Costești",
        b: "Lacul Vidraru",
        c: "Lacul Bicaz",
        d: "Lacul Sfânta Ana",
        corect:"c",
    },
    {
        question: "Cum își completează lacul Sfânta Ana apele?",
        a: "prin precipitații",
        b: "prin izvoare",
        c: "prin râuri care se varsă in lac",
        d: "nu își completează apele",
        corect:"a",
    },
    {
        question: "Cum s-a format Lacul Roșu?",
        a: "deformări mari ale crustei pământului sau în fisuri tectonice",
        b: "artificial, prin construirea unui baraj",
        c: "prin prabușirea unei bucăți munte sau deal",
        d: "format într-un crater vulcanic individual",
        corect:"c",
    }
]

const test = document.getElementById('test');
const timp = document.getElementById('timer');
const raspunsuri = document.getElementsByClassName('answer');
const intrebari = document.getElementById('intrebareTest');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const butonRaspuns = document.getElementById('butonRaspuns');
const butonStart = document.getElementById('start');
let testData = null;

let intrebareaCurenta = 0;
let corect = 0;
let gresit = 0;

const testTip = document.getElementById('titlu').innerText.split(' ');
if(testTip[1] === "Munți")
    testData = testMunti;
else if(testTip[1] === "Câmpii")
    testData = testCampii;
else if(testTip[1] === "Lacuri")
    testData = testLacuri;
else
    alert("!!!");

butonStart.addEventListener('click', () =>{
    document.getElementById('intro').style.display="none";
    document.getElementById('main').style.display="flex";
    startTimer(10, timp);
    incarcaTestul();
})

function startTimer(duration, display) {
    var timer = duration*60, minutes, seconds;
    var countdownTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + " : " + seconds;

        if (--timer < 0) {
            test.innerHTML = `<h2>Ai raspuns la ${corect}/${testData.length} intrebari corect.`;
            clearInterval(countdownTimer);
        }
    }, 1000);
}

function incarcaTestul(){
    deselectare();
    const currentQuizData = testData[intrebareaCurenta];
    intrebari.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectare(){
    for(i = 0; i<raspunsuri.length; i++){
        raspunsuri[i].checked = false;
    }
}

function selectare(){
    let raspunsVerificat;
    for(i = 0; i<raspunsuri.length; i++){
        if(raspunsuri[i].checked){
            raspunsVerificat = raspunsuri[i].id;
        }
    }

    return raspunsVerificat;
}

butonRaspuns.addEventListener('click', () =>{
    const raspunsVerificat = selectare();
    
    if(raspunsVerificat){
        if(raspunsVerificat === testData[intrebareaCurenta].corect){
            corect++;  
            document.getElementById('corect').innerText = corect + "/" + testData.length;
        }else{
            gresit++;
            document.getElementById('gresit').innerText = gresit + "/" + testData.length;
        }
        
        intrebareaCurenta++;

        if(intrebareaCurenta < testData.length){
            incarcaTestul();
        }else{
            test.innerHTML = `<h2>Ai raspuns la ${corect}/${testData.length} intrebari corect.`;
        }
    }
})