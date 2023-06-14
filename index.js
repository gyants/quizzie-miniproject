const rightAnswers = ['A','B','C','D','A']
const scoretext = ['kys','Fucking monkey','You suck ass','Almost there!','So close!','Good job!']
const scoreClass = ['kys','fm','ys','at','sc','gj']
const form = document.querySelector(".form");
const scorecontainer = document.querySelector('.container')
const questions = form.querySelectorAll('.question')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;

    let answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    
    answers.forEach((answer,index)=>{
        if(answer===rightAnswers[index]){
            score += 1;
            questions[index].classList.remove('wrong')
            questions[index].classList.add('right')
        } else {
            questions[index].classList.remove('right')
            questions[index].classList.add('wrong')
        }

    })
    
    let scoreCard = document.querySelector('.score')
    scoreCard.className = "score card"
    scoreCard.classList.add(scoreClass[score])
    
    let text = scoreCard.querySelector('.score-text')
    text.textContent = `You scored ${score}/5`

    let subtext = scoreCard.querySelector('.score-subtitle')
    subtext.textContent = scoretext[score]

    scorecontainer.classList.remove('hidden');
    scrollTo(0,0)
})