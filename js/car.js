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
        question:'Какой двигатель поставить на nissan skyline gtr r34?',
        options:[
         'VQ25DD',
         'КАМАЗ 740.30',
         '4G63',
         'Opel 20NE',
        ],
        rightAnswer:0
     },
    {
      question:'Самая быстрая тачка в мире 2022?',
        options:[
         'Audi e-tron',
         'Bugatti Chiron',
         'Lamborghini Huracan',
         'Tesla Model Y',
        ],
        rightAnswer:1
     },
    {
      question:'Может ли двигатель вращаться в обратном направлении?',
        options:[
         'Нет',
         'Да',
         'Некоторые могут',
         'Возможно',
        ],
        rightAnswer:2
     },
    {
      question:'Чем отличаются дизельные двигатели от бензиновых?',
        options:[
         'Способом подачи топлива',
         'Топливом',
         'Машинами',
         'Способ воспламения топлива',
        ],
        rightAnswer:3
     },
    {
      question:'Какой привод имеет хорошую тягу и сцепление с мокрой дорогой?',
        options:[
         'FWD',
         'RWD',
         'AWD',
         'Все выше перечисленные',
        ],
        rightAnswer:2
     },
    {
      question:'Самая дорогая тачка в мире?',
        options:[
         'McLaren P1 LM',
         'Bugatti La Voiture Noire ',
         'Ferrari LaFerrari Aperta',
         'Bugatti Chiron',
        ],
        rightAnswer:1
     },
     {
      question:'Почему у некоторых спортивных машин наклонены шины?',
        options:[
         'Из-за развала',
         'Для красоты',
         'Для производительности',
         'Для увеличения скорости',
        ],
        rightAnswer:0
     },
    {
      question:'Кто создал первый двигатель внутренего сгорания?',
        options:[
         'Каон Билман',
         'Лексус Мида',
         'Этьен Леунар',
         'Карл Бенц',
        ],
        rightAnswer:2
     },
    {
      question:'За что Nissan GTR получил прозвище "Годзила"?',
        options:[
         'Из-за внешнего вида',
         'Из-за скорости',
         'За устрашающий вид',
         'За непрерывную серию побед',
        ],
        rightAnswer:3
     },
    {
      question:'Сколько лошадинных сил у Mercedes AMG E63S W213?',
        options:[
         '612',
         '686',
         '634',
         '554',
        ],
        rightAnswer:0
     },
    {
       question:'Какой обьем двигателя у Ford Mustang GT?',
        options:[
         '5.5 литров',
         '5.0 литров',
         '1.3 литров',
         '5.7 литров',
        ],
        rightAnswer:1
     },
    {
       question:'За сколько разгоняетсся до 100 DODG Demon?',
        options:[
         '4.1 секунд',
         '3.8 секунд',
         '2.3 секунд',
         '8.3 секунд',
        ],
        rightAnswer:2
     },
    {
       question:'Сколько звездочек на логотипе subaru?',
        options:[
         '8',
         '3',
         '6',
         '5',
        ],
        rightAnswer:2
     },
    {
       question:'В каком году перестали завозить в КР праворульные японские авто?',
        options:[
         '2012г',
         '2016г',
         '2013г',
         '2015г',
        ],
        rightAnswer:2
     },
    {
       question:'Какой тормоз считается самым лучшим?',
        options:[
         'Audi A5',
         'Chevrolet Corvette',
         'Porsche 911 GT2 RS',
         'Ferrari 488 GTB',
        ],
        rightAnswer:2
     },
    {
       question:'Сколько лошадиных сил у BMW m5 competition(m90)?',
        options:[
         '623',
         '474',
         '723',
         '625',
        ],
        rightAnswer:3
     },
    {
       question:'В каком году перестали выпускать waz2107 ?',
        options:[
         '2012г',
         '2000г',
         '1999г',
         '2009г',
        ],
        rightAnswer:0
     },
    {
       question:'Сколько весит Lamborghini Gallardo?',
        options:[
         'около 1200кг',
         'от 1330кг до 1570кг',
         'около 2300кг',
         'от 1600кг до 2000кг',
        ],
        rightAnswer:1
     },
    {
       question:'Какая максимальная скорость у Dodge Demon ?',
        options:[
         '357км/ч',
         '335км/ч',
         '270км/ч',
         '214км/ч',
        ],
        rightAnswer:1
     },
    {
       question:'Какой привод у Lexus gx470?',
        options:[
         'Боковой 4x',
         'Передний 8d',
         'Задний 5a',
         'Полный 4wd',
        ],
        rightAnswer:3
     },
    {
       question:'Какой двигатель стоит на nissan gtr35?',
        options:[
         'dr38 dett',
         'Eix-dr8',
         '1002 DR',
         '8 TS',
        ],
        rightAnswer:0
     },
    {
       question:'Сколько лошадинных сил у Acura nsx?',
        options:[
         '873',
         '573',
         '734',
         '934',
        ],
        rightAnswer:1
     },
    {
       question:'Какая начальная стоимость toyota gr supra(mk5)?',
        options:[
         'от 80 000$',
         'от 70 000$',
         'от 50 000$',
         'от 60 000$',
        ],
        rightAnswer:2
     },
    {
      question:'Какой обьем у mercedes g63 amg последний кузов?',
        options:[
         '6.3',
         '5.5',
         '3.2',
         '4.0',
        ],
        rightAnswer:3
     },
    {
      question:'Какой кузов был у nissan skyline gtr в фильме Форсаж 2?',
        options:[
         'R34',
         'gtx3090',
         'Стретч',
         'Кроссовер',
        ],
        rightAnswer:0
     },
    {
      question:'Какой тип двигателя у mazda rx7?',
        options:[
         'Гибридный',
         'Роторный',
         'Бензиновые',
         'Рядный',
        ],
        rightAnswer:1
     },
    {
      question:'Какая страна впервые выпустила Lexus?',
        options:[
         'США',
         'Северный Вьетнам',
         'Германия',
         'Япония',
        ],
        rightAnswer:3
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
    localStorage.setItem('result_car', score)
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

