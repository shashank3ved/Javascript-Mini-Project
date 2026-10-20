let currentDob = document.getElementById("dob");
let ageAtDate = document.getElementById("date") ;
const Age = document.querySelector(".Age") ;

const today = new Date().toISOString().split("T")[0];
ageAtDate.value = today ;

function calculateAge(){
  if(currentDob.value ==="" || ageAtDate.value ==="" ) Age.innerHTML = "Enter Dates !" ;

 else if(ageAtDate.value < currentDob.value) Age.innerHTML = "Date of birth needs to be earlier than the age at date." ;
else{
  let dob = new Date(currentDob.value) ;

  let d1 = dob.getDate();
  let m1 = dob.getMonth()+1;
  let y1 = dob.getFullYear();

  let ageAt = new  Date(ageAtDate.value) ;
  let d2 = ageAt.getDate();
  let m2 = ageAt.getMonth()+1;
  let y2 = ageAt.getFullYear();

  let d3 , m3 , y3 ;

  y3 = y2 -y1 ;

  if(m2>=m1){
    m3 = m2-m1 ;
  }else{
    y3--;
    m3 = 12 + m2 - m1 ;
  }

  if(d2 >=d1){
    d3 = d2 -d1 ;
  }else{
     m3-- ;
     d3 = getDaysInMonth(y1 , m1 ) + d2 -d1 ;
  }
  if(m3<0){
    m3 = 11 ;
    y3-- ;
  }
 
  Age.innerHTML = `Age is ${y3} years , ${m3} months and ${d3} days .`
  } 
}

function  getDaysInMonth(year , month){
  return new Date(year , month ,0).getDate() ;
}