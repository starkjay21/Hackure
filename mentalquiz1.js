const quizData = [
    {
        question: "How often do you share your feelings with friends or relatives?",
        a: "Thrice a week or more",
        b: "Once or twice a week",
        c: "Once or twice a month",
        d: "Never",
        correct1: "a",
        correct2: "b",
        correct3: "c",

    },
    {
        question: "How much time do you spend on social media per day?",
        a: "Less than 2 hours",
        b: "2 to 4 hours",
        c: "4 to 6 hours",
        d: "6 to 8 hours",
        correct1: "a",
        correct2: "b",
        correct3: "c",

    },
    {
        question: "How often do you do (at least 20 minutes ) of physical exercise?",
        a: "About once a day",
        b: "Once or twice a week",
        c: "Once or twice a month",
        d: "Never",
        correct1: "a",
        correct2: "b",
        correct3: "c",

    },
    {
        question: "Do you engage in activities (sports, writing, etc) that you find challenging and absorbing?",
        a: "Everyday",
        b: "Once or twice a week",
        c: "Once or twice a month",
        d: "Never",
        correct1: "a",
        correct2: "b",
        correct3: "c",

    },
    {
        question: "Are you able to focus on the present moment and donot get distracted by thoughts of the past or future?",
        a: "I feel this way most of the time",
        b: "I often feel this way",
        c: "I rarely feel this way",
        d: "I never feel this way",
        correct1: "a",
        correct2: "b",
        correct3: "c",

    }
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct1) {
           score+=40
       }
       else if(answer === quizData[currentQuiz].correct2) {
           score+=30
       }
       else if(answer === quizData[currentQuiz].correct3) {
           score+=20
       }
       else {
           score+=10;
       }
       let assess
       if(score >= 160){
           assess="Good going! Your mental health is amazing "
       }
       else if(score >= 120){
           assess="You've got a calm mind"
       }
       else if(score >= 90){
           assess="Start taking care of your mental health"
       }
       else{
           assess="Call a doctor now !!"
       }

       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {

           if(score >= 90){
               quiz.innerHTML = `
               <h2>${assess}</h2>
               <button onclick="location.reload()">Take the test again</button>
               `
           }
           else{
               quiz.innerHTML = `
               <h2>${assess}</h2>
               <h2><a href="tel:011-41198666">Call Helpline: 011-41198666</a></h2>
               <button onclick="location.reload()">Take the test again</button>
               `
           }

       }
    }
})
