import { QUESTIONS } from "./questions.js";

const renderTitle = ({ text }) => {
    const fragment = document.createDocumentFragment();
    const section = document.createElement('section');
    const p = document.createElement('h2');
    const content = document.createTextNode(text);
    p.append(content);
    section.append(p);
    fragment.append(section);
    return fragment;
}

const renderQuestion = ({ question, answer }) => {
    const fragment = document.createDocumentFragment();
    const section = document.createElement('section');
    const p1 = document.createElement('h3');
    p1.className = "fragment";
    p1.append(document.createTextNode(question));

    const p2 = document.createElement('p');
    p2.className = "fragment fade-up";
    p2.append(document.createTextNode(answer));
    
    section.append(p1);
    section.append(p2);

    fragment.append(section);
    return fragment;
}

const nodes = QUESTIONS.map((node) => {
    switch (node.type) {
        case "title" : 
            return renderTitle(node);
        case "question" : 
            return renderQuestion(node);
        default : 
            return "";
    }
});

const slides = document.getElementsByClassName("slides")[0];

nodes.forEach((node) => slides.appendChild(node))