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
    question:'Что такое материнская плата?',
    options:[
        'Плата на которой установлены разъемы для подключения комплектующих ПК',
        'Плата, служщая для хранения различной информации на ПК',
        'Элемент ПК, отвечающий за производительность',
        'Общее название для всех операционных систем',
    ],
    rightAnswer:0
    },
    {
    question:'Чему равен 1 гигабайт?',
    options:[
            '512 килобайт',
            '2048 мегабайт',
            '1000 мегабайт',
            '1024 мегабайт',
    ],
    rightAnswer:3
    },
    {
        question:'Когда состоялся релиз Windows 11?',
        options:[
                'В 2011 году',
                'В 2022 году',
                'В 2021 году',
                'В 2017 году',
        ],
        rightAnswer:2
    },
    {
        question:'В честь какого насекомого было дано название "баг"?',
        options:[
                'Пчела',
                'Жук',
                'Муха',
                'Муравей',
        ],
        rightAnswer:1
    },
    {
        question:'Когда было совершено самое первое киберпреступление?',
        options:[
                'В 1994 году',
                'В 1999 году',
                'В 2001 году',
                'В 2012 году',
        ],
        rightAnswer:0
    },
    {
        question:'Кем был изобретен первый компьютер?',
        options:[
                'Чарльз Бэббидж',
                'Стив Джобс',
                'Алан Тьюринг',
                'Марк Цукерберг',
        ],
        rightAnswer:0
    },
    {
        question:'Какую систему счисления понимает компьютер?',
        options:[
                'Троичную',
                'Восьмиричную',
                'Двоичную',
                'Десятичную',
        ],
        rightAnswer:2
    },
    {
        question:'Чем отличается расширение файла PNG от JPG?',
        options:[
                'Нет разницы',
                'Качество картинки в JPG будет хуже, зато файл будет легче, чем PNG.',
                'Качество картинки в PNG будет хуже, зато файл будет легче, чем JPG.',
                'JPG не поддерживается браузерами.',
        ],
        rightAnswer:1
    },
    {
        question:'К типам сетевых атак НЕ относится?',
        options:[
                'DDoS',
                'Adware',
                'Fishing',
                'Remote',
        ],
        rightAnswer:3
    },
    {
        question:'Какой язык программирования чаще всего используют для создания сайтов?',
        options:[
                'Java',
                'C#',
                'JavaScript',
                'Python',
        ],
        rightAnswer:2
    },
    {
        question:'Что из перечисленного не относится к программным средствам?',
        options:[
                'Процессор',
                'Драйвер',
                'Системное программирование',
                'графический редактор',
        ],
        rightAnswer:0
    },
    {
        question:'В каком формате могут храниться изображения на компьютере?',
        options:[
                'PNG',
                'JPEG',
                'GIF',
                'всё перечисленное',
        ],
        rightAnswer:3
    },
    {
        question:'Как расшифровывается ПК?',
        options:[
                'Персональный компьютер',
                'Переносной компьютер',
                'Производственная компания',
                'Патриарх Кирилл',
        ],
        rightAnswer:0
    },
    {
        question:'Кто такой сисадмин?',
        options:[
                'Человек, отвечающий за чистоту в помещении',
                'Человек, работающий в оффисе',
                'Человек, следящий за порядком на рабочем месте',
                'Человек, занимающийся поддержанием IT-инфраструктуры компании',
        ],
        rightAnswer:3
    },
    {
        question:'Что такое HTML?',
        options:[
                'Язык гипертекстовой разметки',
                'Язык программирования',
                'Програмное обеспечение',
                'Расширение для браузеров',
        ],
        rightAnswer:0
    },
    {
        question:'Из перечисленных, какая еденица измерения информации больше всех?',
        options:[
                'Терабайт',
                'Йоттабайт',
                'Эскабайт',
                'Йобибайт',
        ],
        rightAnswer:3
    },
    {
        question:'В честь кого/чего назван язык программирования Pascal?',
        options:[
                'В честь химика',
                'В честь математика',
                'В честь книги',
                'В честь биолога',
        ],
        rightAnswer:1
    },
    {
        question:'Что из перечисленного не является операционной системой?',
        options:[
                'Windows 3.1',
                'Windows Vista',
                'MS DOS',
                'Нет правильного ответа',
        ],
        rightAnswer:3
    },
    {
        question:'Что такое GitHub?',
        options:[
                'Онлайн-сервис',
                'Язык программирования',
                'Приложение',
                'Вирус',
        ],
        rightAnswer:0
    },
    {
        question:'В честь кого/чего назван язык программирования Python?',
        options:[
                'В честь змеи',
                'В честь телешоу',
                'В честь актёра',
                'В честь города',
        ],
        rightAnswer:1
    },
    {
        question:'Кто является основателем Google?',
        options:[
                'Сергей Брин',
                'Марк Цукерберг',
                'Аркадий Волож',
                'Ингвар Феодор',
        ],
        rightAnswer:0
    },
    {
        question:'На каком языке программирования написан Windows?',
        options:[
                'FORTRAN',
                'Pascal',
                'JavaScript',
                'C#',
        ],
        rightAnswer:3
    },
    {
        question:'Что такое алгоритм?',
        options:[
                'Набор инструкций для решения задачи',
                'Случайная последовательность дейсвий',
                'Крупная база данных',
                'Неправильно написанный код',
        ],
        rightAnswer:0
    },
    {
        question:'Кто является создателем HTML?',
        options:[
                'Тим Бернерс-Ли',
                'Хокон Виум Ли',
                'Расмус Лердорф',
                'Крис Рок',
        ],
        rightAnswer:0
    },
    {
        question:'Как назывался самый первый компьютер?',
        options:[
                'Macintosh',
                'C3PO',
                'Z1',
                'RFM44',
        ],
        rightAnswer:2
    },
    {
        question:'Самый первый компьютерный вирус?',
        options:[
                'Creeper',
                'Brain',
                'ILOVEYOU',
                'WannaCry',
        ],
        rightAnswer:1
    },
    {
        question:'Что из перечисленного не является языком программирования?',
        options:[
                'APL',
                'COBOL',
                'FORTRAN',
                'HTML',
        ],
        rightAnswer:3
    },
    {
        question:'Самый первый программист в истории?',
        options:[
                'Исаак Ньютон',
                'Ада Лавлейс',
                'Альберт Энштейн',
                'Архимед',
        ],
        rightAnswer:1
    },
    {
        question:'Cамым первым языком программирования был ...?',
        options:[
                'Fortran',
                'Ruby',
                'Malbolge',
                'C++',
        ],
        rightAnswer:0
    },
    {
        question:'Что означает название поисковика Google?',
        options:[
                'Ничего',
                'Фамилия создателя',
                'Число',
                'Имя персонажа из книги',
        ],
        rightAnswer:2
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
    localStorage.setItem('result_IT', score)
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

