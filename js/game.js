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
        question:'В какой игре была впервые обнаружена пасхалка?',
        options:[
         'Mario',
         'Minecraft',
         'Tetris',
         'Adventure',
        ],
        rightAnswer:3
     },
     {
        question:'Из перечисленных, какая студия не является игровой?',
        options:[
         'Konami',
         'Bandai Namco',
         'Microsoft Studios',
         'Sourcebits',
        ],
        rightAnswer:3
     },
     {
        question:'Какой рынок игровой индустрии имеет больший денежный оборот?',
        options:[
         'Рынок мобильных игр',
         'Рынок компьютерных игр',
         'Рынок игр с виртуальной реальностью',
         'Рынок консольных игр',
        ],
        rightAnswer:0
     },
     {
        question:'Откуда появился жанр игр Soulslike?',
        options:[
         'От игры Hollow Knight',
         'От игры Dark Souls',
         'От игры Soulworker',
         'От игры Dungeon Souls',
        ],
        rightAnswer:1
     },
     {
        question:'Как расшифровывается FPS?',
        options:[
         'Feet Per Second',
         'Forks Per Second',
         'Frames Per Second',
         'Fun Per Second',
        ],
        rightAnswer:2
     },
     {
        question:'Что НЕ является игровым движком?',
        options:[
         'Source',
         'Unreal Engine',
         'RenPy',
         'WordPress',
        ],
        rightAnswer:3
     },
     {
        question:'Из какой игры появился Counter Strike?',
        options:[
         'Half Life',
         'Gunman',
         'Sniper Elite',
         'DOOM',
        ],
        rightAnswer:0
     },
     {
        question:'Какая игра выполнена в жанре MMORPG?',
        options:[
         'Dota',
         'Lineage 2',
         'Valorant',
         'Factorio',
        ],
        rightAnswer:1
     },
     {
        question:'Что из перечисленного является ритм-игрой?',
        options:[
         'Geometry Dash',
         'Black Desert',
         'Osu!',
         'Far Cry 3',
        ],
        rightAnswer:2
     },
     {
        question:'По какой из перечисленных игр вышел полнометражный фильм?',
        options:[
         'Warcraft',
         'Counter Strike',
         'League Of legends',
         'Valorant',
        ],
        rightAnswer:0
     },
     {
      question:'Что послужило вдохновением для создания Pac-Man?',
        options:[
         'Пицца',
         'Бургер',
         'Корж',
         'Торт',
        ],
        rightAnswer:0
     },
     {
       question:'Какого типа игры предпочитают большинство женщины?',
        options:[
         'Dota',
         'Counter Strike',
         'Genshin Impact',
         'Mortal Combat',
        ],
        rightAnswer:3
     },
     {
      question:'Лучшая игра за все время по версии metacritic на PC?',
        options:[
         'Disco Elysium',
         'FNAF',
         'Half life 2',
         'Skyrim',
        ],
        rightAnswer:3
     },
     {
      question:'Какой президент Российской Федерации любил играть в игры?',
        options:[
         'Сергей Лавров',
         'Дмитрий Медведев',
         'Владимир Путин',
         'Джо Байден',
        ],
        rightAnswer:1
     },
     {
      question:'В какую игру вложили 100 000 $, а в итоге получили 60 млн$?',
        options:[
         'Angry Birds',
         'Mortal Combat',
         'Mario',
         'GTA',
        ],
        rightAnswer:0
     },
     {
      question:'Какую игру 1994 году ее хотели запретить в США из-за ее агрессивной виртуальной реальности?',
        options:[
         'Dead By Daylight',
         'Mortal Combat',
         'Doom',
         'Baha Black',
        ],
        rightAnswer:2
     },
     {
      question:'Самая прибыльная платная игра 2020 года?',
        options:[
         'Dota 2',
         'Call of Duty Modern Warfare',
         'FIFA 20',
         'CSGO',
        ],
        rightAnswer:1
     },
     {
      question:'Кто был главным героем в S.T.A.L.K.E.R Clear Sky?',
        options:[
         'Дрейк',
         'Лебедев',
         'Белов',
         'Шрам',
        ],
        rightAnswer:3

     },
     {
      question:'в каком году вышла первая версия Майнкрафт на Windows?',
        options:[
         '2015 году',
         '2011 году',
         '2013 году',
         '2008 году',
        ],
        rightAnswer:1
     },
     {
      question:'самая первая компьтерная игра?',
        options:[
         'Судоку',
         'Карты',
         'Spacewar',
         'Крестики нолики',
        ],
        rightAnswer:0
     },
     {
      question:'Когда была выпущена первая Fifa?',
        options:[
         '1997 год',
         '1993 год',
         '1999 год',
         '1995 год',
        ],
        rightAnswer:1
     },
     {
      question:'Дата выхода Аmong Us?',
        options:[
         'в июне 2017 года',
         'в июне 2019 года',
         'в июне 2018 года',
         'в июне 2016 года',
        ],
        rightAnswer:2
     },
     {
      question:'Почему выпуск Halo 2 был отложен?',
        options:[
         'Фанатам не понравился главный персонаж',
         'Из-за погодных условий',
         'Умер один из разработчиков',
         'В игре было спрятано фотография голой "задницы"',
        ],
        rightAnswer:3
     },
     {
      question:'Какая игра попала в книгу рекордов Гинеса как игра с самым большим количевством персонажей?',
        options:[
         'Warcraft',
         'GTA',
         'Dota',
         'Симулятор Камня',
        ],
        rightAnswer:1
     },
     {
      question:'В какой стране считается незаконым когда ребенок до 16 играет за полночь в видеоигры?',
        options:[
         'Северная Япония',
         'Западный Вьетнам',
         'Восточный Китай',
         'Южная Корея',
        ],
        rightAnswer:3
     },
     {
      question:'В какой игре песню исполнили 30 человек, но звучит так будто её спели 90 человек?',
        options:[
         'Need for Speed',
         'Call of Duty',
         'Brawl Stars',
         'Skyrim',
        ],
        rightAnswer:3
     },
     {
      question:'Какая планета такого же размера как и мир в Minecraft?',
        options:[
         'Сатурн',
         'Нептун',
         'Земля',
         'Вормир',
        ],
        rightAnswer:1
     },
     {
      question:'Разработчик Minecraft?',
        options:[
         'Илон Маск',
         'Билл Гейтс',
         'Маркус Персон',
         'Марк Цукерберг',
        ],
        rightAnswer:2
     },
     {
      question:'Как зовут разработчика Genshin Impact?',
        options:[
         'Цай Хаоюй',
         'Якса Сяо',
         'Аде Лина',
         'Ли Ван',
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
    localStorage.setItem('result_game', score)
    correctAnswer.innerHTML = score;
    numberOfAllQuestion2.innerHTML = questions.length;
}

const tryAgain = () => {
    window.onbeforeprint
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

