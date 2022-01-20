let startBtn = document.getElementById('startBtn');
let quizBox = document.getElementById('quizBox');
let timerBox = document.getElementById('timer');
let questionTitle = document.getElementById('questionTitle');
let variantBox = document.getElementById('variantBox');
let nextBtn = document.getElementById('nextBtn');
let endBtn = document.getElementById('endBtn');
let questionsNumber = document.getElementById('questionsNumber');
let resulOfQuiz = document.getElementById('resulOfQuiz');
let resultNumber = document.getElementById('resultNumber');
let restartBtn = document.getElementById('restartBtn');


let userAnswers = 0;

let count;

let questions = [{
        id: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        variants: [
            'Hyper Text Multi Language',
            'Hyper Text Markup Language',
            'Hyper Text Multiple Language',
            'Hyper Text Marks Language',
            'Hyper Text Mega Language'
        ]
    }, {
        id: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        variants: [
            'Cascading Style Shit',
            'Cascading Some Thing',
            'Caucasian Style Sheets',
            'Circassian Style Shits',
            'Cascading Style Sheets'
        ]
    },

    {
        id: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        variants: [
            'Hypertext Programming',
            'Hyper Preprocessor',
            'Hypertext Preprocessor',
            'Hypertext Protocol',
            'Hacking & Programming'
        ]
    },
    {
        id: 4,
        question: "What does JS stand for?",
        answer: "JavaScript",
        variants: [
            'Junior School',
            'JavaScript',
            'Jack of Spades',
            'Jasur Sapayev',
            'Job Security'
        ]
    },
    {
        id: 5,
        question: "What does MB stand for?",
        answer: "Megabyte",
        variants: [
            'Megabyte',
            'Medicinae Baccalaureus',
            'Mansur Babajanop',
            'Man Bilimman',
            'My Birthday'
        ]
    }
];


startBtn.addEventListener('click', () => {
    start()
});
restartBtn.addEventListener('click', () => {
    userAnswers = 0;
    clearInterval(count);
    start();
    resulOfQuiz.style.display = 'none';
    countQuestion = 0;
    questionsNumber.innerText = countQuestion + 1;

    nextBtn.style.display = 'block';
    nextBtn.innerText = '';
    nextBtn.innerText = "Next Que";

    endBtn.style.display = 'none';


});

function start() {
    startBtn.style.display = 'none';
    quizBox.style.display = 'block';
    showQuestions(0);
    startTimer(15);
}


let countQuestion = 0;

function showQuestions(i) {
    let questionText = '<span>' + questions[i].id + "." + questions[i].question + '</span>';
    let variantsList = '<div class="variant" onclick="variantSelect(this, ' + i + ')" id="' + i + '"><span>' + questions[i].variants[0] + '</span></div>' +
        '<div class="variant" onclick="variantSelect(this, ' + i + ')" id="' + i + '"><span>' + questions[i].variants[1] + '</span></div>' +
        '<div class="variant" onclick="variantSelect(this, ' + i + ')" id="' + i + '"><span>' + questions[i].variants[2] + '</span></div>' +
        '<div class="variant" onclick="variantSelect(this, ' + i + ')" id="' + i + '"><span>' + questions[i].variants[3] + '</span></div>' +
        '<div class="variant" onclick="variantSelect(this, ' + i + ')" id="' + i + '"><span>' + questions[i].variants[4] + '</span></div>';
    questionTitle.innerHTML = questionText;
    variantBox.innerHTML = variantsList;

    questionsNumber.innerText = countQuestion + 1;

    if (questionsNumber.innerText == 4) {
        nextBtn.innerText = '';
        nextBtn.innerText = "Last Que";
    }
    if (questionsNumber.innerText == 5) {
        nextBtn.style.display = 'none';
        endBtn.style.display = 'block';

    }


}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

endBtn.addEventListener('click', () => {
    showResults();
});

nextBtn.addEventListener('click', () => {
    countQuestion++;
    showQuestions(countQuestion);
    clearInterval(count);
    startTimer(15);

});

function variantSelect(e, i) {
    clearInterval(count);
    timerBox.innerHTML = "Stop!";


    let allVariants = variantBox.children.length;

    if (e.innerText == questions[i].answer) {
        e.classList.add('correct');
        e.innerHTML += tickIcon;
        userAnswers += 1;

    } else {
        e.classList.add('incorrect');
        e.innerHTML += crossIcon;
    }

    for (let i = 0; i < allVariants; i++) {
        variantBox.children[i].classList.add("disable");
    }

}

function startTimer(i) {
    count = setInterval(timer, 1000);
    timerBox.innerHTML = i;

    function timer() {
        timerBox.innerHTML = i;
        if (i < 0) {
            countQuestion++;
            showQuestions(countQuestion);
            clearInterval(count);
            startTimer(15);
            return;
        }
        if (i == 0) {
            showResults()


            return;
        }
        i--;
    }
}


function showResults() {
    quizBox.style.display = 'none';
    resulOfQuiz.style.display = 'block';

    resultNumber.innerText = userAnswers;

}