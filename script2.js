const apiKey = '89500ae9d44f4a2d96e20525232106';

const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');
const header = document.querySelector('.header');
const date = document.querySelector('.title')
const body = document.querySelector('body')
const btn = document.querySelector('.btn')

const area = document.querySelector('.toggle-area')
const button = document.querySelector('#toggle-id')
const icons = document.querySelector('#icon')
const section = document.querySelectorAll('section')
const loader = document.querySelector("#loading");
const text = document.querySelector('.text-btn')


let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
}

tasks.forEach(function(task) {
    renderTask(task);
});


function displayLoading() {
    loader.classList.add("display");
    text.classList.add("hidden");



    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
        text.classList.remove("hidden");

    }, 5000);
}

function hideLoading() {
    loader.classList.remove("display");
    text.classList.remove("hidden");

}

/*
area.addEventListener('click', function() {

const card = document.querySelector('.card')
const graph = document.querySelectorAll('.graph-wrap')

    body.classList.toggle('body-dark')
    body.style.transition = '0.5s'
    icons.classList.toggle('bi-sun')
    button.classList.toggle('toggle-dark')


    graph.forEach((item) => {
        if (button.classList.contains('toggle-sun')) {
            item.classList.add('section-dark')
            card.classList.add('section-dark')
        } else {
            item.classList.remove('section-dark')
            card.classList.remove('section-dark')
        }
    })}

);
*/

currentHours()


btn.addEventListener("touchstart", function() {
    btn.classList.add('hover')
    btn.style.transition = '0.3s'
    btn.style.scale = '99%'
});

btn.addEventListener("touchend", function() {

    setTimeout(() => {
        btn.classList.remove('hover')
        btn.style.scale = '100%'
    }, 100);


});

function imgCard(data) {
    const img = document.querySelector('.card-img')
    const dataCurrent = data.current.condition.code;

    if (dataCurrent == 1003 || dataCurrent == 1006 || dataCurrent == 1009) {
        img.style.background = "url('https://drive.google.com/uc?export=view&id=1J4lhJhPxDqp8u1IqePzvlFX1zKR_-5rB') no-repeat 50% 50%"
        img.style.backgroundSize = 'contain';
    } else if (dataCurrent == 1000) {
        img.style.background = "url('https://drive.google.com/uc?export=view&id=18vVmrczYv085LypLIvJNKsnESdE9D6u8') no-repeat 50% 50%"
        img.style.backgroundSize = 'contain';
    } else if (dataCurrent == 1276 || dataCurrent == 1273) {
        img.style.background = "url('https://drive.google.com/uc?export=view&id=13HxH9YQhvi5oSKxhmMfQDVqUJhtAH-L1') no-repeat 50% 50%"
        img.style.backgroundSize = 'contain';
    } else if (dataCurrent == 1264 || dataCurrent == 1261 || dataCurrent == 1246 || dataCurrent == 1201 || dataCurrent == 1198 || dataCurrent == 1195 || dataCurrent == 1192 || dataCurrent == 1189 || dataCurrent == 1186 || dataCurrent == 1183 || dataCurrent == 1180 || dataCurrent == 1171 || dataCurrent == 1153 || dataCurrent == 1150 || dataCurrent == 1072 || dataCurrent == 1063 || dataCurrent == 1240) {
        img.style.background = "url('https://drive.google.com/uc?export=view&id=1vmBfrxYJX3fBccclAu-UantBHD4bhjLf') no-repeat 50% 50%"
        img.style.backgroundSize = 'contain';
    } else if (dataCurrent == 1147 || dataCurrent == 1135 || dataCurrent == 1030) {
        img.style.background = "url('https://drive.google.com/uc?export=view&id=1hjdOCZZprIz0GBqFKhxiHQo1_A0swmVp') no-repeat 50% 50%"
        img.style.backgroundSize = 'contain';
    } else if (dataCurrent == 1087) {
        img.style.background = "url('https://drive.google.com/uc?export=view&id=1dTkEcFDbwaSWqk1MdknVNGBRu37voqZg') no-repeat 50% 50%"
        img.style.backgroundSize = 'contain';
    } else {
        console.log(dataCurrent)
    }
};

function cardColor () {
    const hoursNow = new Date().getHours();
    const card = document.querySelector('.card')
    const graph = document.querySelectorAll('.graph-wrap')
    const error = document.querySelectorAll('.card-error')


    graph.forEach((item) => {
        if (hoursNow > 20 || hoursNow < 5) {
            item.classList.add('section-dark')
            card.classList.add('section-dark')
        }})};

function nowDate () {
    const datenow = new Date();
    let options = {
        month: 'long',
        day: 'numeric',
    }

    const num = datenow.toLocaleString('ru-RU',
        options)
    date.innerText = 'Сегодня, ' + `${num}`
};

function deleteCard() {
    const prevCard = document.querySelectorAll('.card');
    const graphCard = document.querySelectorAll('.graph');
    const error = document.querySelectorAll('.card-error');


    prevCard.forEach((cards)=> {
        if (cards) cards.remove();
    });

    graphCard.forEach((graphs)=> {
        if (graphs) graphs.remove();
    })

    error.forEach((item)=> {
        if (item) item.remove();
    })

};

function showError (errorMessage) {
    const html = `<div class="card-error"><span style="color:#E52B50;">Error</span> <br>${errorMessage}</div>`
    header.insertAdjacentHTML('afterend',
        html);
}

function currentHours (day, night) {
    const hoursNow = new Date().getHours();

    if (hoursNow > 20 || hoursNow < 6) {
        body.classList.add('body-dark')
        return night
    } else {
        return day
    }}

function showCard (name, country, temp_c, text, cloud, pressure) {
    //отображаем полученные данные в карточке
    const html =
    `<section class="card" draggable="true">
    <div class="card-wrap">
    <h2 class="card-city">
    ${name}
    <span>
    ${country}
    </span>
    </h2>
    <span class="like">
    <i class="bi bi-heart-fill" id="heart"></i>
    </span>
    </div>
    <div class="card-weather">
    <div class="card-value">
    ${temp_c}°
    </div>
    <div class="card-img"></div>
    </div>
    <div class="card-description">
    ${text}
    </div>
    </section>
    <div class="graph">
    <section class="graph-wrap">
    <div class="numb-wrap">
    <h3 class="numb">
    ${cloud}%
    </h3>
    <span class="description">
    вероятность осадков
    </span>
    </div>
    <svg class="progess-ring" width="120" height="120">
    <circle class="progress-ring_circletwo" stroke="lightgrey" stroke-width="4"
    cy="60" cx="60" r="50" fill="transparent" />
    <circle class="progress-ring_circle_cloud" stroke="#364aff" stroke-width="4"
    cy="60" cx="60" r="50" fill="transparent" />
    </svg>
    </section>
    <section class="graph-wrap">
    <div class="numb-wrap">
    <h3 class="numb">
    ${pressure}%
    </h3>
    <span class="description">
    давление
    </span>
    </div>
    <svg class="progess-ring" width="120" height="120">
    <circle class="progress-ring_circletwo" stroke="lightgrey" stroke-width="4"
    cy="60" cx="60" r="50" fill="transparent" />
    <circle class="progress-ring_circle" stroke="#364aff" stroke-width="4"
    cy="60" cx="60" r="50" fill="transparent" />
    </svg>
    </section>
    </div>`
    header.insertAdjacentHTML('afterend', html);
}

async function getWeather(city) {
    //адресс запроса

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    displayLoading()
    const response = await fetch(url);
    const data = await response.json();
    hideLoading()
    return data;
}

nowDate();

//слушаем отправку формы
form.onsubmit = async function(event) {
    event.preventDefault();
    let city = input.value.trim();



    //получаем данные с сервера
    const data = await getWeather(city);

    if (data.error) {
        deleteCard();
        showError(data.error.message);
    } else {
        deleteCard();

        console.log(data)
        //выводим дескрипт о погоде через полученные джейсон данные с переводом на русский
        const conditions = 'https://www.weatherapi.com/docs/conditions.json'
        const response = await fetch(conditions);
        const dataConditions = await response.json();
        const info = dataConditions.find((obj) => {
            if (obj.code === data.current.condition.code) return true;
        });

        const hours = currentHours(info.languages[23]['day_text'],
            info.languages[23]['night_text']);

        showCard(data.location.name,
            data.location.country,
            Math.round(data.current.temp_c),
            hours,
            data.current.cloud,
            data.current.pressure_in)

        imgCard(data)
        cardColor()

        const like = document.querySelector('#heart')

        like.addEventListener('click',
            () => {
                if (tasks.length === 0) {
                    like.classList.add('push');
                    const newTask = {
                        id: Date.now(),
                        name: data.location.name,
                        country: data.location.country,
                        done: 'push',
                    }
                    //добавляем объект с данными в массив и сохраняем
                    tasks.push(newTask);
                    saveToLocalStorage();

                } else if (tasks.length > 0) {
                    like.classList.remove('push');
                    tasks = []
                    saveToLocalStorage();


                }

            })

        console.log(tasks.length)
        //создаеи диаграммы и внлсим в них данные
        const circle = document.querySelector('.progress-ring_circle');
        const circleCloud = document.querySelector('.progress-ring_circle_cloud');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const pressure_in = data.current.pressure_in;
        const cloud = data.current.cloud;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offset;
        }
        setProgress(Math.round(pressure_in));

        circleCloud.style.strokeDasharray = `${circumference} ${circumference}`;
        circleCloud.style.strokeDashoffset = circumference;
        function setProgressCloud(percent) {
            const offset = circumference - percent / 100 * circumference;
            circleCloud.style.strokeDashoffset = offset;
        }
        setProgressCloud(Math.round(cloud));



    }}

async function renderTask(task) {

    const data = await getWeather(task.name)

    if (data.error) {} else {
        deleteCard();

        //выводим дескрипт о погоде через полученные джейсон данные с переводом на русский
        const conditions = 'https://www.weatherapi.com/docs/conditions.json'
        const response = await fetch(conditions);
        const dataConditions = await response.json();
        const info = dataConditions.find((obj) => {
            if (obj.code === data.current.condition.code) return true;
        });

        const hours = currentHours(info.languages[23]['day_text'],
            info.languages[23]['night_text']);


       


        const html =
        `<section class="card">
        <div class="card-wrap">
        <h2 class="card-city">
        ${task.name}
        <span>
        ${task.country}
        </span>
        </h2>
        <span class="like">
        <i class="bi bi-heart-fill ${task.done}" id="heart"></i>
        </span>
        </div>
        <div class="card-weather">
        <div class="card-value">
        ${Math.round(data.current.temp_c)}°
        </div>
        <div class="card-img"></div>
        </div>
        <div class="card-description">
        ${hours}
        </div>
        </section>
        <div class="graph">
        <section class="graph-wrap">
        <div class="numb-wrap">
        <h3 class="numb">
        ${data.current.cloud}%
        </h3>
        <span class="description">
        вероятность осадков
        </span>
        </div>
        <svg class="progess-ring" width="120" height="120">
        <circle class="progress-ring_circletwo" stroke="lightgrey" stroke-width="4"
        cy="60" cx="60" r="50" fill="transparent" />
        <circle class="progress-ring_circle_cloud" stroke="#364aff" stroke-width="4"
        cy="60" cx="60" r="50" fill="transparent" />
        </svg>
        </section>
        <section class="graph-wrap">
        <div class="numb-wrap">
        <h3 class="numb">
        ${data.current.pressure_in}%
        </h3>
        <span class="description">
        давление
        </span>
        </div>
        <svg class="progess-ring" width="120" height="120">
        <circle class="progress-ring_circletwo" stroke="lightgrey" stroke-width="4"
        cy="60" cx="60" r="50" fill="transparent" />
        <circle class="progress-ring_circle" stroke="#364aff" stroke-width="4"
        cy="60" cx="60" r="50" fill="transparent" />
        </svg>
        </section>
        </div>`
        header.insertAdjacentHTML('afterend',
            html);

 //создаеи диаграммы и внлсим в них данные
        const circle = document.querySelector('.progress-ring_circle');
        const circleCloud = document.querySelector('.progress-ring_circle_cloud');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const pressure_in = data.current.pressure_in;
        const cloud = data.current.cloud;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offset;
        }
        setProgress(Math.round(pressure_in));

        circleCloud.style.strokeDasharray = `${circumference} ${circumference}`;
        circleCloud.style.strokeDashoffset = circumference;
        function setProgressCloud(percent) {
            const offset = circumference - percent / 100 * circumference;
            circleCloud.style.strokeDashoffset = offset;
        }
        setProgressCloud(Math.round(cloud));


        cardColor()
        imgCard(data)
        const like = document.querySelector('#heart')

        like.addEventListener('click',
            () => {
                if (tasks.length === 0) {
                    like.classList.add('push');
                    const newTask = {
                        id: Date.now(),
                        name: data.location.name,
                        country: data.location.country,
                        done: 'push',
                    }
                    //добавляем объект с данными в массив и сохраняем
                    tasks.push(newTask);
                    saveToLocalStorage();

                } else if (tasks.length > 0) {
                    like.classList.remove('push');
                    tasks = []
                    saveToLocalStorage();
                    deleteCard()


                }

            })
    }

};

function saveToLocalStorage () {
    localStorage.setItem('tasks',
        JSON.stringify(tasks))
}
