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
    question:'Как называется первый голливудский цветной фильм?', 
    options:[ 
        'Жертвы моря', 
        'Зеленая миля', 
        'Бульвар Сансет', 
        'Поющие под дождем', 
    ], 
    rightAnswer:0 
    }, 
    { 
    question:'В каком городе был открыт первый кинотеатр?', 
    options:[ 
            'Нью-Йорк', 
            'Вена', 
            'Париж', 
            'Гонконг', 
    ], 
    rightAnswer:2 
    }, 
    { 
        question:'За какое время перед нами проходят двадцать четыре кадра кинопленки?', 
        options:[ 
                'За одну секунда', 
                'За две секунда', 
                'За десять секунд', 
                'За ноль секунд', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:' Какой советский фильм первым получил Оскар в категории лучший иностранный фильм?', 
        options:[ 
                'Ночные забавы', 
                'Шурик', 
                'Кровь за кровь', 
                'Война и мир', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'В каком году начали выдавать Оскар', 
        options:[ 
                'В 1960 году', 
                'В 1929 году', 
                'В 1990 году', 
                'В 2000 году', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'В какую женщину был влюблён Шерлок Холмс из британскогого сериала Шерлок?', 
        options:[ 
                'Мэри Мортсен', 
                'Ирэн Адлер', 
                'Миссис Хадсон', 
                'Он не был влюблен', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'Самый большой кассовый сбор фильма?', 
        options:[ 
                'Человек-паук: Нет пути домой', 
                'Мстители: Война бесконечности', 
                'Титаник', 
                'Аватар', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'Кто исполнил главную мужскую роль в фильме Титаник?', 
        options:[ 
                'Джони Дэп', 
                'Марк Уолберг', 
                'Леонардо Ди Каприо', 
                'Дензел Вашингтон', 
        ], 
        rightAnswer:2 
    }, 
    { 
        question:'Как звали двух главных злодеев в фильме «Один дома»?', 
        options:[ 
                'Гарри и Марвин', 
                'Джон и Брэд', 
                'Питер и Стэнли', 
                'Макс и Алекс', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'В каком фильме два актёра получили Оскар за игру одного и того же персонажа?', 
        options:[ 
                'Форсаж 4', 
                'Крёстный отец 2', 
                'Умница Уилл Хантинг', 
                'Титаник', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'Назовите учителя Брюса Ли, именем которого назвали фильм?', 
        options:[ 
                'Сян', 
                'Пьяный мастер', 
                'Ип Ман', 
                'Лю Канг', 
        ], 
        rightAnswer:2 
    }, 
    { 
        question:'Кто основал кино?', 
        options:[ 
                'Ридли Скотт', 
                'Уолт Дисней', 
                'братья Люмьер', 
                'Неизвестно', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Какое заклинание использовал Гарри, чтобы убить лорда Волан-де-Морта?', 
        options:[ 
                'Экспеллиармус', 
                'Экспекто патронум', 
                'Авада Кедавра', 
                'Accio', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'Какой пароды была собака Хатико?', 
        options:[ 
                'Хатико', 
                'Сикоку', 
                'Бульдог', 
                'Акита-ину', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'Скольким годам равен один час на планете Миллер(«Интерстеллар»)', 
        options:[ 
                'Семи годам', 
                'Что за планета Миллер', 
                'Одному часу', 
                'Двадцати годам', 
        ], 
        rightAnswer:0 
    }, 
    {
        question:'Сколько камней бесконечности есть во вселенной марвел?', 
        options:[ 
                '1', 
                '5', 
                '8', 
                '6', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'Из чего сделан щит Капитана Америки?', 
        options:[ 
                'Адамантий', 
                'Вибраниум', 
                'Прометий', 
                'Карбонадий', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'Что на самом деле представляет из себя легендарный зеленый код из «Матрицы»?', 
        options:[ 
                'Рецепт Пад Тая', 
                'Рецепт жаркого', 
                'Рандомные символы', 
                'Рецепт суши', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'Кто на самом деле рисовал Розу в «Титанике»?', 
        options:[ 
                'Билли Зейн', 
                'Леонардо Ди Каприо', 
                'Джеймс Кэмерон', 
                'Кэти Бейтс', 
        ], 
        rightAnswer:2 
    }, 
    { 
        question:'Где снимали трилогию «Властелин колец»?', 
        options:[ 
                'В Ирландии', 
                'В Исландии', 
                'В Австралии', 
                'В Новой Зеландии', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'Кто стал первым темнокожим актером, получившим Оскар?', 
        options:[ 
                'Хэтти МакДэниел', 
                'Сидни Пуатье', 
                'Дороти Дэндридж', 
                'Уилл Смит', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'Какого цвета полосатый свитер Фредди Крюгера?', 
        options:[ 
                'Красно-синего', 
                'Оранжево-зеленого', 
                'Красно-зеленого', 
                'Оранжево-коричневого', 
        ], 
        rightAnswer:2 
    }, 
    { 
        question:'Кому принадлежал тот самый кот из «Крестного отца»?', 
        options:[ 
                'Фрэнсису Копполе', 
                'Дайан Китон', 
                'Аль Пачино', 
                'Никому — животное было бездомным', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'Как называется лагерь из ужастика «Пятница 13-е», в котором происходят жуткие убийства?', 
        options:[ 
                '«Голландское озеро»', 
                '«Кристальное озеро»', 
                '«Бриллиантовое озеро»', 
                '«Зеленое озеро»', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'Звуки спаривания каких животных были звуком общения велоцирапторов в «Парке Юрского периода»?', 
        options:[ 
                'Черепах', 
                'Лягушек', 
                'Ящериц', 
                'Крокодилов', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'Какой фильм 2005 года стал самым кассовым?', 
        options:[ 
                '«Война миров»', 
                '«Звёздные войны: Эпизод 3 — Месть ситхов»', 
                '«Гарри Поттер и Кубок огня»', 
                '«Хроники Нарнии: Лев, колдунья и волшебный шкаф»', 
        ], 
        rightAnswer:2 
    }, 
    { 
        question:'Какая актриса получила больше всего Оскаров?', 
        options:[ 
                'Кэтрин Хепберн', 
                'Мэрил Стрип', 
                'Ингрид Бергман', 
                'Элизабет Тейлор', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'В каком фильме не снимался Джеки Чан?', 
        options:[ 
                'Однажды в Китае', 
                'Пьяный мастре', 
                'Полицейская история', 
                'Кто я', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'Кто является режиссером фильма «Челюсти»? ', 
        options:[ 
                'Вуди Аллен', 
                'Мартин Скорсезе', 
                'Стивен Спилберг', 
                'Тим Бёртон', 
        ], 
        rightAnswer:2 
    }, 
    { 
        question:'Сколько оскраов получил Леонардо Ди Каприо?', 
        options:[ 
                'Он не получал', 
                '4', 
                '2',
                '1', 
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
    localStorage.setItem('result_cinema', score)
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

