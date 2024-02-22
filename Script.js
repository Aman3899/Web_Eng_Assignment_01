let counter1 = 0, counter2 = 0;
let counter_1 = document.getElementById("counter_1");
let counter_2 = document.getElementById("counter_2");

function loadFigCompltProjects() {
    if (counter1 < 91) {
        counter_1.innerText = (++counter1) + "K+";
    }
}

function loadFigcustreviews() {
    if (counter2 < 221) {
        counter_2.innerText = ++counter2;
    }
}

setTimeout(function () {
    setInterval(loadFigCompltProjects, 30);
}, 2000);

setTimeout(function () {
    setInterval(loadFigcustreviews, 10);
}, 2000);


function loadYTVideo() {
    let YTBtn = document.getElementById("TextArea");
    YTBtn.innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/AX6OrbgS8lI?si=QMoGsbzELe2SHeaK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

let roles = ["PLAYER", "CODER", "PERSON", "MAN", "ARTIST", "STUDENT", "ENGINEER", "WORKER"]
let AnimatedName = document.getElementById("AnimatedName");
let Names = setInterval(function () {
    let randomNum = Math.floor(Math.random() * roles.length);
    AnimatedName.innerText = roles[randomNum];
}, 2000);