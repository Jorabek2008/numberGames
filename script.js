const again = document.querySelector('#again'),
    enter = document.querySelector('#enter'),
    check = document.querySelector('#check'),
    refresh = document.querySelector('#refresh'),
    score = document.querySelector('#score'),
    not = document.querySelector('.not'),
    game = document.querySelector('#game'),
    highScore = document.querySelector('#highscore'),
    body = document.querySelector('body');



let num = 20
let num1 = 20
let numhigh = 0
let rand = parseInt(Math.floor(Math.random()*20));






score.textContent = '💯 Score: ' + num;
highScore.textContent = '🥇 Highscore: ' + numhigh;
check.addEventListener('click', (e) => {
    // e.preventDefault()

    if(enter.value>rand){
        refresh.textContent = '💹 Sal pastga tushing '
    }else if(enter.value<rand){
        refresh.textContent = '💹 Sal teparoq chiqing'
    }else if(enter.value==rand){
        not.textContent = '✅'
        refresh.textContent = '✅ Winner'
        body.style.backgroundColor = 'green'
        let a = (20-num+1)
        highScore.textContent = '🥇 Highscore: ' + a;
        rand = parseInt(Math.floor(Math.random()*20));
      
    }
    score.textContent = '💯 Score: ' + --num;
    if(num==0){
        game.textContent = 'Game Over'
        body.style.backgroundColor = 'red'
    }
    

})


again.addEventListener('click', () => {
    score.textContent = '💯 Score: ' + (num1)
    refresh.textContent = 'Kiriting'
    body.style.backgroundColor = 'black'
    game.textContent = 'Guess My Number'
    not.textContent = '?'
    num=num1
    
})