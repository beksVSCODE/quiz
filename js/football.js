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
    question:'Единственный вратарь который получил золотой мяч ?', 
    options:[ 
        'Лев Яшин ', 
        'Куртуа ', 
        'Навас ', 
        'Касиляс', 
    ], 
    rightAnswer:0 
    }, 
    { 
    question:'В какой стране впервые проходил Кубок мира ФИФА?', 
    options:[ 
            'Англия', 
            'Испания', 
            'Уругвай', 
            'Бразилия', 
    ], 
    rightAnswer:2
    }, 
    { 
        question:'Где был придуман футбол?', 
        options:[ 
                'Бразилия', 
                'Франция', 
                'Аргентина', 
                'Англия', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Как называется гол, который футболист забил в свои ворота?', 
        options:[ 
                'Штрафной', 
                'Симуляция', 
                'Автогол', 
                'Метровый мяч', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Какое количество игроков одновременно находится на игровом поле с двух сторон?', 
        options:[ 
                '20 игроков', 
                '30 игроков', 
                '11 игроков', 
                '22 игроков',  
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Команда из какой страны чаще всего становилась победителем чемпионата мира ?', 
        options:[ 
                'Англия', 
                'Бразилия', 
                'Аргентина', 
                'Испания', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'Как правильно расшифровывается аббревиатура УЕФА?', 
        options:[ 
                'Содружеств европейскихфутбольных абсорбций', 
                'Союз евроинтегрированных футбольных ассоциаций', 
                'Союз европейских футбольных ассоциаций', 
                'Собрание европейских футбольных ассоциаций', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Что оформил игрок, забивший 3 мяча за один матч?', 
        options:[ 
                'Покер', 
                'Автогол', 
                'Трипл-сек', 
                'Хет-трик', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Как называется самая почетная персональная награда для футболиста?', 
        options:[ 
                'Золотая бутса', 
                'Статуэтка чемпиона', 
                'Кубок чемпиона ', 
                'Золотой мяч', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'Сколько желтых карточек допускается получить игроку за одну игру?', 
        options:[ 
                '3', 
                '1', 
                '2', 
                '4', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'Как называется штрафной удар, который совершают по воротам на расстоянии 11 метров?', 
        options:[ 
                'Штрафной', 
                'Пенальти ', 
                'Аут', 
                'Гол ', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'Кто выиграл Кубок Мира ФИФА в 2018 году?', 
        options:[ 
                'Франция', 
                'Хорватия', 
                'Бельгия', 
                'Россия', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Автором самого сильного удара в футболе является?', 
        options:[ 
                'Бейл', 
                'Месси', 
                'Роберто Карлос', 
                'Халк', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'В чем особенность сезона Премьер-лиги 2020 – 21?', 
        options:[ 
                'Было забито больше голов, чем в любом другом сезоне', 
                'Было назначено меньше пенальти, чем в любом другом сезоне', 
                'Это единственный сезон, в котором побед на выезде было больше, чем домашних', 
                'Было меньшего всего голов', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Какой футболист получил больше всего золотых мячей?', 
        options:[ 
                'Роналдо', 
                'Месси', 
                'Мбаппе', 
                'Бейл', 
        ], 
        rightAnswer:1
    }, 
    {
        question:'Сколько существует размеров футбольных мячей?', 
        options:[ 
                '5 размеров', 
                '2 размера', 
                '3 размера', 
                '6 размеров', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Футбольный клуб какой страны в 20 веке 5 раз подряд становился победителем Лиги Чемпионов? Как он называется?', 
        options:[ 
                'Реал Мадрид (Испания)', 
                'Ювентус (Италия)', 
                'Манчестер Сити (Англия)', 
                'Арсенал (Англия)', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Что такое финт в футболе?', 
        options:[ 
                'Определение местоположения мяча', 
                'Название тайма', 
                'Элемент, который выполняют, чтобы обмануть соперника', 
                'Второе наименование полузащитника', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Какое количество рефери необходимо для судейства одного футбольного матча?', 
        options:[ 
                'Трое', 
                'Пятеро', 
                'Двое', 
                'Шестеро', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Какой тренер установил рекорд в 190 проведенных матчах Лиги чемпионов?',
        options:[ 
                'Фергюсон', 
                'Зидан', 
                'Гвардиола', 
                'Тухель', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Назовите единственного футболиста из России, выигравшего Лигу чемпионов и за какой клуб он тогда играл?', 
        options:[ 
                'Дмитрий Алениечев', 
                'Станислав Черчесов', 
                'Александр Мостовой', 
                'Альба Фернандес', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Почему Зинедин Зидан ударил головой Марко Матерацци в финале чемпионата мира 2006 года?', 
        options:[ 
                'Матерацци тянул время', 
                'Матерацци нагрубил ему', 
                'Матерацци порвал его футболку', 
                'Матерацци оскорбил сестру Зидана', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Кто из футболистов больше всего сыграл матчей на чемпионатах мира?', 
        options:[ 
                'Пеле', 
                'Роберто Карлос', 
                'Лотар Маттеус', 
                'Криштиану Роналдо', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'С какой командой Марадона выиграл Итальянскую лигу?', 
        options:[ 
                'Неаполь', 
                'Интер Милан', 
                'Туринский Ювентус', 
                'Бавария', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Эдсон Арантес ду Насименто известен во всем мире под каким именем­?', 
        options:[ 
                'Каземиро', 
                'Пеле', 
                'Неймар', 
                'Коутинио', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'Как долго вратарь может удерживать мяч в соответствии с официальным сводом правил ФИФА?', 
        options:[ 
                '2 секунд', 
                '10 секунд', 
                '1 минута', 
                '6 секунд', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Кто был первым немецким футболистом, получившим награду «Золотой мяч»?', 
        options:[ 
                'Герд Мюллер', 
                'Марко Ройс', 
                'Тони Кроос', 
                'Кевин Трапп', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'Назовите лучшего бомбардира Лиги чемпионов?', 
        options:[ 
                'Гарет Бейл', 
                'Карим Бензема', 
                'Тони Кросс', 
                'Криштиану Роналдо', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Где проходил футбольный финал Олимпийских игр 2000 года?', 
        options:[ 
                'Финал проходил в Австралии', 
                'Финал проходил в Испании', 
                'Финал проходил в Англия', 
                'Финал проходил в Бразилии', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Какой из этих футболистов самый дорогой в мире?', 
        options:[ 
                'Килиан Мбаппе', 
                'Лионель Месии', 
                'Неймар',
                'Бейл', 
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
    localStorage.setItem('result_football', score)
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