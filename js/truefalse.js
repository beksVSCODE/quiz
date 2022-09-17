// All answer options

const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')
const option3 = document.querySelector('.option3')
const option4 = document.querySelector('.option4')


// All our options
const optionEllements = document.querySelectorAll('.section-one-btn');

      
const question = document.querySelector('.section-question > h3');
const numberOfQuestion = document.getElementById('number-of-question');
const numberOfAllQuestions = document.getElementById('number-of-all-question');


let indexOfQuestion  = 0;//индекс текущего вопроса
let indexOfPage = 0;//индекс страницы

const btnNext = document.getElementById('btn-next')


let score = 0;//Итоговый результат викторины

const correctAnswer = document.getElementById('correct-answer')
const numberOfAllQuestion2 = document.getElementById('number-of-all-question-2')
const btnTryAgain = document.getElementById('btn-try-again')
const btnMainMenu = document.getElementById('btn-main-menu')

let arr1 = [
    
    {
        question:'100 летняя война длилась ровно 100 лет',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:1
     },
     {
        question:'Банан — это ягода, а клубника — нет',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:1
     },
     {
        question:'Бумажный пакет — экологичнее, чем пластиковый',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:1
     },
     {
        question:'Акулы существовали на Земле еще до деревьев',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
     {
        question:'Человек может сам себя пощекотать',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:1
     },
     {
        question:'Электробусы менее экологичны, чем дизельные автобусы',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:1
     },
     {
        question:'На одном из спутников сатурна есть вода',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
     {
        question:'у человека 23 тысячи генов',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
     {
        question:'у улитки 25 тысяч зубoв',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
     {
        question:'на земле 6 материков',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
     {
        question:'Если дерево посадить корнями вверх, его корни превратятся в ветки',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:1
     },
     {
        question:'У дождевых червей по пять сердец',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
     {
        question:'Белые медведи имеют черную кожу, а их шерсть прозрачная',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },{
        question:'В каждом стакане воды, которую мы пьем, содержится хоть одна молекула воды, присутствовавшая в теле динозавра',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
     {
        question:'На планетах Сатурн и Юпитер идут алмазные дожди',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
     {
        question:'День Октябрьской революции отмечают в октябре',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:1
     },
     {
        question:'Львы-самцы спят до 20 часов в сутки',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
     {
        question:'У людей уникальны отпечатки пальцев, а у кошек — нос',
        options:[
         'правда',
         'ложь',
        ],
        rightAnswer:0
     },
]

const questions = [];

for(i = 0; i < 10; i++){
    let r = Math.floor(Math.random()*arr1.length)
    questions.push(arr1[r])
    arr1.splice(r, 1)
}           

const tracker = document.querySelector('.tracker')

numberOfAllQuestions.innerHTML = questions.length;// выводим кол-во всех вопросов

let load = () => {
    question.innerHTML = questions[indexOfQuestion].question; // сам вопрос
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    // option3.innerHTML = questions[indexOfQuestion].options[2];
    // option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1 // установка номера текущей старницы

    indexOfPage++ //увеличение индекса страницы
};
let completedAnswers = []

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random () * questions.length);
    let hitDuplicate = false;

    if(indexOfPage == questions.length){
        quizOver();
    }else {
        if(completedAnswers.length > 0){
            completedAnswers.forEach(item => {
                if(item == randomNumber){
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate){
                randomQuestion()
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        };
        if(completedAnswers == 0){
            indexOfQuestion = randomNumber;
            load();
        }
    };
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    console.log(el.target.dataset.id);
    if(el.target.dataset.id==questions[indexOfQuestion].rightAnswer){
        el.target.classList.add('right');
        updateAnswerTracker('right');
        score++;
    }else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disapledOptions();

}

const disapledOptions = () => {
    optionEllements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
            item.classList.add('right')
        }
    })
}

const enableOptions = () => {
    optionEllements.forEach(item => {
        item.classList.remove('disabled', 'right', 'wrong');
    })
};

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        tracker.appendChild(div);
    })
};

const updateAnswerTracker = status => {
    tracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
    if(!optionEllements[0].classList.contains('disabled')){
        alert ('Выберите один из вариантов ответа')
    }else {
        randomQuestion()
        enableOptions()
    }
};




btnNext.addEventListener('click' , validate);

for(option of optionEllements){
    option.addEventListener("click" , e => checkAnswer(e));

}
//заметка 
const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    localStorage.setItem('result_truefalse', score)
    correctAnswer.innerHTML = score;
    numberOfAllQuestion2.innerHTML = questions.length;
}

const tryAgain = () => {
    window.location.reload()
}
const MainMenu = () =>{
    window.location.href = '../pages/categories.html'
}
btnTryAgain.addEventListener('click' , tryAgain);
btnMainMenu.addEventListener('click' , MainMenu);

window.addEventListener("load" , () => {
    randomQuestion();
    answerTracker();
})

