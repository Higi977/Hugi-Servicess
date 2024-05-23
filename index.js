let questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
    question.addEventListener("click", () => {
        let plus = question.querySelector('.plus');
        plus.classList.toggle("rotate");

        let panelContent = question.querySelector(".panel-content")
        panelContent.classList.toggle("expand");
    });
});

let collapseAll = document.querySelector('.collapse-all');
let expandAll = document.querySelector('.expand-all');

collapseAll.addEventListener("click", () => {
    questions.forEach((question) => {
        let plus = question.querySelector('.plus');
        plus.classList.remove("rotate");

        let panelContent = question.querySelector(".panel-content")
        panelContent.classList.remove("expand");
    });
});

expandAll.addEventListener("click", () => {
    questions.forEach((question) => {
        let plus = question.querySelector('.plus');
        plus.classList.add("rotate");

        let panelContent = question.querySelector(".panel-content")
        panelContent.classList.add("expand");
    });
});