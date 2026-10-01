

const draggables = document.querySelectorAll('.draggable');
const blank = document.getElementById("blank");
const checkAnswer = document.getElementById("checkAnswer");
const answermessage = document.getElementById("answermessage");

let answer ="";
console.log(draggables);

checkAnswer.addEventListener('click',function(){
    const correctanswer="html";
    if (correctanswer==answer) {
        answermessage.style.display="block";
        answermessage.textContent="your answer is correct!";
        answermessage.style.color="green";
        
    } else {
          answermessage.style.display="block";
        answermessage.textContent="your answer is wrong!";
        answermessage.style.color="red";
    }

})

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData('text/plain', event.target.textContent)
    })

})

blank.addEventListener('dragover', function(event) {
    event.preventDefault();
});


blank.addEventListener('drop', function(event) {
    event.preventDefault();
     answer = event.dataTransfer.getData('text/plain').toLowerCase();
    blank.value = answer;

    // if (answer == "html") {
    //     alert("answer is correct");
    // } else {
    //     alert("try again answer is wrong");
    // }
});