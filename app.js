var questions = [

    {
        question: "On which temprature waters start freezing.",
        option: ["-10°C", "-5°C", "0°C", "-1°C"],
        answer: "0°C"
    },
    {
        question: "On which temprature waters start boiling.",
        option: ["-100°C", "50°C", "90°C", "100°C"],
        answer: "100°C"
    },
    {
        question: "Who is the founder of Pakistan",
        option: ["Quaid-e-Azam", "Sir Syed Ahmad Khan", "Liaqat Ali Khan", "Jinnah Poonja"],
        answer: "Quaid-e-Azam"
    },
    {
        question: "Name the Highest place/peak of Pakistan.",
        option: ["Mount Everest", "K-2 Mountain", "Himalayan Mountains", "Karakoram Mountain"],
        answer: "K-2 Mountain"
    },
    {
        question: "What is the national animal of Pakistan",
        option: ["Markhor", "Lion", "Elephant", "Tiger"],
        answer: "Markhor"
    },
    {
        question: "Name the lowest (down) place in Pakistan",
        option: ["Karachi", "Islamabad", "Peshawar", "Lahore"],
        answer: "Karachi"
    },
    {
        question: "Name the capital of Pakistan.",
        option: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
        answer: "Islamabad"
    },
    {
        question: "According to population which is the largest city of Pakistan.",
        option: ["Ziarat", "Lahore", "Islamabad", "Karachi"],
        answer: "Karachi"
    },
    {
        question: "According to population which is the smallest city of Pakistan.",
        option: ["Lahore", "Islamabad", "Ziarat", "Karachi"],
        answer: "Ziarat"
    },
    {
        question: "Which is the biggest University of Pakistan",
        option: ["University of Karachi", "Sir Syed University", "Quaid-e-Azam University", "None Of Above"],
        answer: "University of Karachi"
    },

]

function showQ(e) {
    var ques = document.getElementById('ques')
    ques.innerHTML = 'Q' + (e + 1) + ')' + questions[e].question
    var opt = document.getElementsByClassName('options')
    for (var i = 0; i < opt.length; i++) {
        opt[i].innerHTML = questions[e].option[i]
    }
}

var inc = 0
var quizScore = 0

function submit() {
    var radio = document.getElementsByClassName('radiobutton')
    calcu()
    if (inc < questions.length - 1) {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked == true) {
                inc++
                showQ(inc)
                radio[i].checked = false
            }
        }
    }

    else (alert('Quiz Score is ' + quizScore))
}
function calcu() {
    var radio = document.getElementsByClassName('radiobutton')
    var options = document.getElementsByClassName('options')

    if (inc < questions.length - 1) {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked == true && options[i].innerHTML == questions[inc].answer) {
                quizScore++
            }
        }
    }
}