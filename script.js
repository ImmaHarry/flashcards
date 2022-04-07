//Declaring Variables/Instances:
const questionBox = document.querySelector(".questionBox");
const answerBox = document.querySelector(".answerBox");
const clearFormBTN = document.querySelector(".clearForm");
const addFormBTN = document.querySelector(".addButton");
const sectionHolder = document.querySelector(".sectionHolder");

const icon1 = '<i class="fa-solid fa-eye"></i>'
const icon2 = '<i class="fa-solid fa-pen-to-square"></i>'
const icon3 = '<i class="fa-solid fa-trash"></i>'
const icon4 = '<i class="fa-solid fa-x">'
const icon5 = '<i class="fa-solid fa-microphone">'
const icon6 = '<i class="fa-solid fa-check"></i>'
function clearForm() {
    questionBox.value = "";
    answerBox.value = "";
}

function createItem(event) {
    event.preventDefault();
    if (questionBox.value !== "" && answerBox.value !== "") {
        const questionSect = document.createElement("section");
        questionSect.classList.add("questionFCD");

        const div1 = document.createElement("div");
        const questionH = document.createElement("h2");
        questionH.textContent = "Question";
        questionH.classList.add("cardQ");
        const textBox = document.createElement("textarea");   
        textBox.rows = 3;
        textBox.cols = 150;
        textBox.disabled = true;
        textBox.classList.add("qCardBox");
        textBox.value = questionBox.value;

        const div2 = document.createElement("div");
        div2.classList.add("cardBTNS");
        const button1 = document.createElement("button");
        button1.innerHTML = icon1 + " Reveal Answer";
        button1.classList.add("revAns");
        button1.type = "button";

        const button2 = document.createElement("button");
        button2.innerHTML = icon2 + " Edit Question";
        button2.type = "button";
        button2.classList.add("edit");
        const button3 = document.createElement("button");
        
        button3.type = "button";
        button3.classList.add("delBTN");
        button3.innerHTML = icon3 + " Delete";

        const button6 = document.createElement("button");
        button6.type = "button";
        button6.classList.add("editQ");
        button6.innerHTML = icon6 + " Finalize edit"; 

        const div3 = document.createElement("div");
        const div31 = document.createElement("div");
        const button4 = document.createElement("button");


        button4.classList.add("closeBTN");
        button4.innerHTML = (icon4);
        const headermod = document.createElement("h1");
        headermod.textContent = "Answer:";
        headermod.classList.add("answerMDL");
        const answer = document.createElement("p");
        answer.classList.add("answerTXT");
        answer.textContent = answerBox.value;
        const button5 = document.createElement("button");
        button5.classList="narrate";
        button5.innerHTML = (icon5);
        div3.classList.add("ANSmodal");
        div31.classList.add("modal-content")

        div31.appendChild(button4);
        div31.appendChild(headermod);
        div31.appendChild(answer);
        div31.appendChild(button5);
        div3.appendChild(div31);

        div2.appendChild(button1);
        div2.appendChild(button2);
        div2.appendChild(button3);
        div2.appendChild(button6);

        div1.appendChild(questionH);
        div1.appendChild(textBox);
        
        questionSect.appendChild(div1);
        questionSect.appendChild(div2);
        questionSect.appendChild(div3);
        sectionHolder.appendChild(questionSect);
    }
    else {
        alert("Please ensure that both both the text boxes are filled!")
    }
    questionBox.value = "";
    answerBox.value = "";
}

function functionPerf(event) {
    let e = event;
    let target = event.target;
    if (target.classList.contains("revAns")) {
        target.parentElement.parentElement.lastChild.classList.toggle("hidden");
    }

    else if (target.classList.contains("fa-eye")) {
        target.parentElement.parentElement.parentElement.lastChild.classList.toggle("hidden");
    }

    else if (target.classList.contains("closeBTN")) {
        target.parentElement.parentElement.classList.toggle("hidden");
    }

    else if (target.classList.contains("fa-x")) {
        target.parentElement.parentElement.parentElement.classList.toggle("hidden");
    }

    else if (target.classList.contains("edit")) { 
        console.log("edit");
        let txtbox = target.parentElement.parentElement.firstChild.lastChild
        txtbox.disabled = false;
        txtbox.style.backgroundColor = "black";
        txtbox.style.color = "white";
        target.parentElement.lastChild.classList.add("visible");
    }
    else if (target.classList.contains("editQ")) { 
        let txtbox = target.parentElement.parentElement.firstChild.lastChild
        txtbox.disabled = true;
        txtbox.style.backgroundColor = "white";
        txtbox.style.color = "black";
        target.parentElement.lastChild.classList.remove("visible");
    }

    else if (target.classList.contains("narrate")) {
        alert("This feature is not yet available!");
    }

    else if (target.classList.contains("fa-microphone")) { 
        alert("This feature is not yet available!");
    }

    else if (target.classList.contains("delBTN")) { 
        target.parentElement.parentElement.remove();
    }

    else if (target.classList.contains("ANSmodal")) { 
        target.classList.toggle("hidden");
    }
}

clearFormBTN.addEventListener("click", clearForm);
addFormBTN.addEventListener("click", createItem);
document.addEventListener("click", functionPerf);
