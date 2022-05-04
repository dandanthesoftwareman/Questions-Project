//using selectors inside the element
// traversing the dom

// using selectors inside the element

const questions = document.querySelectorAll(".question");   //defines our questions

questions.forEach(function (question) {                     //setting up a function to run on all our questions
    // console.log(question);
    const btn = question.querySelector(".question-btn");    //defines our button within the parent article
    // console.log(btn);
    btn.addEventListener('click', function(){               //adds functionality to our button when button is clicked
 
    questions.forEach(function(item) {                      //setting up a function to run on all our questions on button click
        if(item !== question){
         item.classList.remove("show-text");
        }
    })
        question.classList.toggle("show-text");
    });
});




// traversing the DOM wit javascript

/* const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
}); */