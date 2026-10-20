let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".message-container") ;
let msg = document.querySelector("#msg") ;
let count = 0 ; 
let winnerFound = false;

let turn0 = true ; 
const winpattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turn0){
      box.innerText="O" ;
      turn0 = false;
    }
    else{
      box.innerText="X";
      turn0 = true ; 

    }
    box.disabled=true ;
    count+=1 ;
    checkWinner();
  });
});

const checkWinner=()=>{
  for(let pattern of winpattern){
    if( boxes[pattern[0]].innerHTML!== "" && boxes[pattern[1]].innerHTML != "" && boxes[pattern[2]].innerHTML!==""){
      if(boxes[pattern[0]].innerHTML=== boxes[pattern[1]].innerHTML && boxes[pattern[1]].innerHTML===boxes[pattern[2]].innerHTML){
        winnerFound = true ;
        showWinner(boxes[pattern[0]].innerHTML);
        return ;
      }     
    }
  }
  if(!winnerFound && count=== 9){
  msg.innerText = `Draw`;
  msgContainer.classList.remove("hide");
}
}

const showWinner= (winner)=>{
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const disableBoxes = ()=>{
  boxes.forEach((box)=>{
  box.disabled =true ;
})
}

reset.addEventListener("click" , ()=>{
  boxes.forEach((box)=>{
  box.innerHTML = ""
  box.disabled=false 
  })
  turn0 = true ; 
  msgContainer.classList.add("hide");
  winnerFound = false;
})

newBtn.addEventListener("click" , ()=>{
  boxes.forEach((box)=>{
  box.innerHTML = ""
  box.disabled=false ;
  })
  turn0 = true ; 
  msgContainer.classList.add("hide");
  winnerFound = false;
})





