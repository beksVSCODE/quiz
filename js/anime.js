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
        question:'Как называют фанатов аниме и манги?',
        options:[
         'додзинси',
         'бурито',
         'мангаки',
         'отаку',
        ],
        rightAnswer:3
     },



     {
        question:'Что такое "сёдзё"?',
        options:[
         'аниме связанное с романтикой',
         'аниме со сценами битвы',
         'аниме для девушек',
         'персонаж в самурайской одежде',
        ],
        rightAnswer:2
     },



     {
        question:'Что такое "манга"?',
        options:[
         'комиксы, по которым снимают аниме',
         'девушка в аниме',
         'национальный японский костюм',
         'рассказ о детстве героев',
        ],
        rightAnswer:0
     },




     {
        question:'Что подвергается тщательной прорисовке в аниме?',
        options:[
         'грудь',
         'волосы',
         'глаза',
         'руки',
        ],
        rightAnswer: 2
     },





     {
        question:'Кого любил Обито?',
        options:[
         'Цунаде',
         'Мадару',
         'Рин',
         'Кагую',
        ],
        rightAnswer:2
     },    
    {
        question:'Что любил бог смерти Рюк?',
        options:[
         'апельсины',
         'шоколад',
         'души',
         'яблоки',
        ],
        rightAnswer:3
     },     
     {
        question:'От чего умер L?',
        options:[
         'Рэм записала его в Тетрадь смерти',
         'Переусердствовал',
         'Его застрелил Лайт',
         'От болезни',
        ],
        rightAnswer:0
     },     
     {
        question:'Кто убил мать Баки?',
        options:[
         'Гоки',
         'Кайо',
         'Каору',
         'Юджиро',
        ],
        rightAnswer:3
     },     {
        question:'Как зовут ворона Гию?',
        options:[
         'Кандзабуро',
         'Укоги',
         'Эн',
         'Донгуримару',
        ],
        rightAnswer: 0
     },     {
        question:'Какое аниме получило оскар?',
        options:[
         'Ходячий замок',
         'Дети моря',
         'Унесённые призраками',
         'Ветер крепчает',
        ],
        rightAnswer: 2
     },     {
        question:'В каком году было создано аниме?',
        options:[
         '1978',
         '1958',
         '1983',
         '1943',
        ],
        rightAnswer:1
     },
     {
        question:'Где было создано аниме?',
        options:[
         'Китай',
         'Корея',
         'Япония',
         'Вьетнам',
        ],
        rightAnswer:2
     }, {
        question:'Аниме с самым большим количеством серий',
        options:[
         'Ван Пис',
         'Сазаэ-сан',
         'Оярумару',
         'Дораэмон',
        ],
        rightAnswer: 1
     }, {
        question:'Сколько было пауков в Рюдане',
        options:[
         '14',
         '10',
         '12',
         '13',
        ],
        rightAnswer:3
     }, {
        question:'Кто такой Хая́о Миядза́ки?',
        options:[
         'режиссер',
         'аниме персонаж',
         'актер',
         'создатель аниме',
        ],
        rightAnswer:0
     }, {
        question:'Что такое аниме?',
        options:[
         'драмы в японии',
         'фильмы для японии',
         'японская анимация',
         'мультики',
        ],
        rightAnswer:2
     }, {
        question:'Какое самое первое аниме?',
        options:[
         'Bakugan',
         'Avatar',
         'Naruto',
         'Tetsuwan Atom',
        ],
        rightAnswer:3
     }, {
        question:'Кто считается богом манги?',
        options:[
         'Хая́о Миядза́ки',
         'Эйитиро Ода',
         'Масаси Кисимото',
         'Осаму Тэдзуки',
        ],
        rightAnswer:3
     }, {
        question:'Какой аниме-фильм имеет самую большую сумму сбора',
        options:[
         'Бесконечный поезд(крд)',
         'Ходячий замок',
         'Унесенные призраками',
         'Твое имя',
        ],
        rightAnswer:0
     },

     {
        question:'Главный герой аниме Наруто',
        options:[
         'Саске',
         'Наруто',
         'Боруто',
        'Сакура',
        ],
        rightAnswer:1
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
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

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
    localStorage.setItem('result_anime', score)
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

