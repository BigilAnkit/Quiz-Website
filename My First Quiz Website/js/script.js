//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list") //Once you select options then you will not change
const timeCount = quiz_box.querySelector(".timer .time_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .time_text");
const btn1_must = document.querySelector(".btn2")
const continue_btn2 = info_box.querySelector(".buttons .quiz_section1");
const continue_btn3 = info_box.querySelector(".buttons .quiz_section2");
const continue_btn4 = info_box.querySelector(".buttons .quiz_section3")



//if Start Quiz Button Clicked
btn1_must.onclick = ()=>{
    start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");//show the info box
}
}


//if Exit Button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");  //hide the info box
}

//if Continue Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");  //hide the info box
    quiz_box.classList.add("activeQuiz");  //show the quiz box
    showQuestions(0);
    queCounter(1);
    startTimer(10);
    startTimerLine(0);
}

continue_btn2.onclick = ()=>{
    info_box.classList.remove("activeInfo");  //hide the info box
    quiz_box.classList.add("activeQuiz");  //show the quiz box
    showQuestions2questions2(0);
    queCounter(1);
    startTimer(10);
    startTimerLine(0);
}

continue_btn3.onclick = ()=>{
    info_box.classList.remove("activeInfo");  //hide the info box
    quiz_box.classList.add("activeQuiz");  //show the quiz box
    showQuestions3questions3questions3(0);
    queCounter(1);
    startTimer(10);
    startTimerLine(0);
}


continue_btn4.onclick = ()=>{
    info_box.classList.remove("activeInfo");  //hide the info box
    quiz_box.classList.add("activeQuiz");  //show the quiz box
    showQuestions4questions4(0);
    queCounter(1);
    startTimer(10);
    startTimerLine(0);
}

let que_count = 0; 
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
       let que_count = 0; 
       let que_numb = 1;
       let timeValue = 15;
       let widthValue = 0;
       let userScore = 0;
       showQuestions(que_count);
       queCounter(que_numb);
       clearInterval(counter);
       startTimer(timeValue);
       clearInterval(counterLine);
       startTimerLine(widthValue);
       next_btn.style.display = "none";
       timeOff.textContent = "Time Left";

}

quit_quiz.onclick = () =>{
    window.location.reload();
}

//if Next Button Clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length -1){
        que_count++;
        que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";

    }
    else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("quetions completed")
        showResultBox();
    }
}

//Getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".quiz_text");
    let que_tag = '<span>'+questions[index].numb +". "+questions[index].question +'</span>';
    let option_tag = '<div class="option">'+questions[index].options[0]+'<span></span></div>'
                     +'<div class="option">'+questions[index].options[1]+'<span></span></div>'
                     +'<div class="option">'+questions[index].options[2]+'<span></span></div>'
                     +'<div class="option">'+questions[index].options[3]+'<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");        
    }
}

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
       let que_count = 0; 
       let que_numb = 1;
       let timeValue = 15;
       let widthValue = 0;
       let userScore = 0;
       showQuestions2questions2(que_count);
       queCounter(que_numb);
       clearInterval(counter);
       startTimer(timeValue);
       clearInterval(counterLine);
       startTimerLine(widthValue);
       next_btn.style.display = "none";
       timeOff.textContent = "Time Left";

}

quit_quiz.onclick = () =>{
    window.location.reload();
}

//if Next Button Clicked
next_btn.onclick = ()=> {
    if(que_count < questions2.length -1){
        que_count++;
        que_numb++;
    showQuestions2questions2(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";

    }
    else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("quetions completed")
        showResultBox();
    }
}

//Getting questions2 and options from array
function showQuestions2questions2(index){
    const que_text = document.querySelector(".quiz_text");
    let que_tag = '<span>'+questions2[index].numb +". "+questions2[index].question +'</span>';
    let option_tag = '<div class="option">'+questions2[index].options[0]+'<span></span></div>'
                     +'<div class="option">'+questions2[index].options[1]+'<span></span></div>'
                     +'<div class="option">'+questions2[index].options[2]+'<span></span></div>'
                     +'<div class="option">'+questions2[index].options[3]+'<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");        
    }
}

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
       let que_count = 0; 
       let que_numb = 1;
       let timeValue = 15;
       let widthValue = 0;
       let userScore = 0;
       showQuestions3questions3questions3(que_count);
       queCounter(que_numb);
       clearInterval(counter);
       startTimer(timeValue);
       clearInterval(counterLine);
       startTimerLine(widthValue);
       next_btn.style.display = "none";
       timeOff.textContent = "Time Left";
}

quit_quiz.onclick = () =>{
    window.location.reload();
}

//if Next Button Clicked
next_btn.onclick = ()=> {
    if(que_count < questions3.length -1){
        que_count++;
        que_numb++;
    showQuestions3questions3questions3(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";

    }
    else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("quetions completed")
        showResultBox();
    }
}

//Getting questions3 and options from array
function showQuestions3questions3questions3(index){
    const que_text = document.querySelector(".quiz_text");
    let que_tag = '<span>'+questions3[index].numb +". "+questions3[index].question +'</span>';
    let option_tag = '<div class="option">'+questions3[index].options[0]+'<span></span></div>'
                     +'<div class="option">'+questions3[index].options[1]+'<span></span></div>'
                     +'<div class="option">'+questions3[index].options[2]+'<span></span></div>'
                     +'<div class="option">'+questions3[index].options[3]+'<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");        
    }
}

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
       let que_count = 0; 
       let que_numb = 1;
       let timeValue = 15;
       let widthValue = 0;
       let userScore = 0;
       showQuestions4questions4(que_count);
       queCounter(que_numb);
       clearInterval(counter);
       startTimer(timeValue);
       clearInterval(counterLine);
       startTimerLine(widthValue);
       next_btn.style.display = "none";
       timeOff.textContent = "Time Left";
}

quit_quiz.onclick = () =>{
    window.location.reload();
}

//if Next Button Clicked
next_btn.onclick = ()=> {
    if(que_count < questions4.length -1){
        que_count++;
        que_numb++;
    showQuestions4questions4(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";

    }
    else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("quetions completed")
        showResultBox();
    }
}

//Getting questions4 and options from array
function showQuestions4questions4(index){
    const que_text = document.querySelector(".quiz_text");
    let que_tag = '<span>'+questions4[index].numb +". "+questions4[index].question +'</span>';
    let option_tag = '<div class="option">'+questions4[index].options[0]+'<span></span></div>'
                     +'<div class="option">'+questions4[index].options[1]+'<span></span></div>'
                     +'<div class="option">'+questions4[index].options[2]+'<span></span></div>'
                     +'<div class="option">'+questions4[index].options[3]+'<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");        
    }
}

let tickIcon = ' <div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';



function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log('Answer is correct');
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);

        //if answers is incorrect then automtically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");  
                option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
            }      
        }
    }
    
    //once user selected Disabled All options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display ="block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.remove("activeQuiz");//hide the quiz box
    result_box.classList.add("activeResult");//show the result box
    const scoreText =result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag = '<span>and congrats!, You got only <p>'+userScore+'</p> out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = '<span>and more practice, You got only <p>'+userScore+'</p> out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got only <p>'+userScore+'</p> out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//once user selected disabled all options
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9 ){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time off";
    
            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;
    
            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");  
                    option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
                }      
            }
    
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display ="block";
        }
    } 
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time+=1;
        timeLine.style.width=time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }    
}

function queCounter(index){
const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCounTag = '<span><p>'+ index +'</p>of<p>'+questions.length+'</p>Questions</span>';
bottom_ques_counter.innerHTML=totalQuesCounTag;
}

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions2[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log('Answer is correct');
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);

        //if answers is incorrect then automtically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");  
                option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
            }      
        }
    }
    
    //once user selected Disabled All options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display ="block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.remove("activeQuiz");//hide the quiz box
    result_box.classList.add("activeResult");//show the result box
    const scoreText =result_box.querySelector(".score_text");
    if(userScore > 5){
        let scoreTag = '<span>and congrats!, You got only <p>'+userScore+'</p> out of <p>'+questions2.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = '<span>and more practice, You got only <p>'+userScore+'</p> out of <p>'+questions2.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got only <p>'+userScore+'</p> out of <p>'+questions2.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//once user selected disabled all options
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9 ){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time off";
    
            let correctAns = questions2[que_count].answer;
            let allOptions = option_list.children.length;
    
            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");  
                    option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
                }      
            }
    
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display ="block";
        }
    } 
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time+=1;
        timeLine.style.width=time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }    
}

function queCounter(index){
const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCounTag = '<span><p>'+ index +'</p>of<p>'+questions2.length+'</p>Questions2</span>';
bottom_ques_counter.innerHTML=totalQuesCounTag;
}

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions3[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log('Answer is correct');
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);

        //if answers is incorrect then automtically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");  
                option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
            }      
        }
    }
    
    //once user selected Disabled All options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display ="block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.remove("activeQuiz");//hide the quiz box
    result_box.classList.add("activeResult");//show the result box
    const scoreText =result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag = '<span>and congrats!, You got only <p>'+userScore+'</p> out of <p>'+questions3.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = '<span>and more practice, You got only <p>'+userScore+'</p> out of <p>'+questions3.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got only <p>'+userScore+'</p> out of <p>'+questions3.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//once user selected disabled all options
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9 ){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time off";
    
            let correctAns = questions3[que_count].answer;
            let allOptions = option_list.children.length;
    
            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");  
                    option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
                }      
            }
    
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display ="block";
        }
    } 
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time+=1;
        timeLine.style.width=time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }    
}

function queCounter(index){
const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCounTag = '<span><p>'+ index +'</p>of<p>'+questions3.length+'</p>Questions3questions3questions3</span>';
bottom_ques_counter.innerHTML=totalQuesCounTag;
}


function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions4[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log('Answer is correct');
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);

        //if answers is incorrect then automtically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");  
                option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
            }      
        }
    }
    
    //once user selected Disabled All options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display ="block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.remove("activeQuiz");//hide the quiz box
    result_box.classList.add("activeResult");//show the result box
    const scoreText =result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag = '<span>and congrats!, You got only <p>'+userScore+'</p> out of <p>'+questions4.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = '<span>and more practice, You got only <p>'+userScore+'</p> out of <p>'+questions4.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got only <p>'+userScore+'</p> out of <p>'+questions4.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//once user selected disabled all options
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9 ){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time off";
    
            let correctAns = questions4[que_count].answer;
            let allOptions = option_list.children.length;
    
            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");  
                    option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
                }      
            }
    
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display ="block";
        }
    } 
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time+=1;
        timeLine.style.width=time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }    
}

function queCounter(index){
const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCounTag = '<span><p>'+ index +'</p>of<p>'+questions4.length+'</p>Questions4questions4</span>';
bottom_ques_counter.innerHTML=totalQuesCounTag;
}