let questions = document.querySelectorAll('.question_wrapper')

questions.forEach(q => {
   q.childNodes[1].addEventListener( "click", (e) => {
         
         if(q.childNodes[3].classList.contains("hide")){
            q.childNodes[3].classList.remove("hide")
            q.childNodes[1].childNodes[1].classList.add("highlight")
            q.childNodes[1].childNodes[3].classList.add("up");
         }else{
            q.childNodes[3].classList.add("hide");
            q.childNodes[1].childNodes[1].classList.remove("highlight")
            q.childNodes[1].childNodes[3].classList.remove("up");
         }
   })
});

// console.log(questions)