let h2 = document.querySelector('h2')
let red = document.querySelector('#red')
let green = document.querySelector('#green')
let blue = document.querySelector('#blue')
let orange = document.querySelector('#orange')
let btns= document.querySelectorAll('.btn')
let color = ['red', 'green', 'blue', 'orange']
let gameSeq = []
let userSeq = []
let start = false
let level = 0

document.addEventListener('keypress', () => {
    if (start == false) {
        start=true
        levelUp()
    }
})
function flashBtn(btn) {
    btn.classList.add('flash')
    setTimeout(() => {
        btn.classList.remove('flash')
    }, 350)

}

function levelUp() {
    userSeq=[]
    level++
    h2.innerHTML = `Level ${level}`
    let ranIdx = Math.floor(Math.random() * 3)
    let ranColor = color[ranIdx]
    let ranBtn = document.querySelector(`#${ranColor}`)
    gameSeq.push(ranColor)
    console.log(gameSeq);
    flashBtn(ranBtn)


}

function pressBtn() {
    let btn = this
    btn.classList.add('flash')
    setTimeout(()=>{
        btn.classList.remove('flash')
    },350)
   let btnColor= btn.id;
   userSeq.push(btnColor)
   
   checkAns(userSeq.length-1)
}

for(btn of btns){
    btn.addEventListener('click',pressBtn)
}


function checkAns(idx){
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
        setTimeout(() => {
            levelUp();
        }, 500)

    }

  }else{
    h2.innerHTML= `Your Answer is wrong : Your Score is <b> ${level-1} </b> <br>  Press Any Key to start`
    document.body.style.backgroundColor='red'
    setTimeout(()=>{
        document.body.style.backgroundColor='white'
    },350)
    resetGame()
  }
}

function resetGame() {
    userSeq=[]
    gameSeq=[]
    level=0
    start=false
}
