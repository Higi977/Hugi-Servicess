 document.addEventListener('DOMContentLoaded', () => {
     // FAQ toggle functionality
     let questions = document.querySelectorAll('.faq-question');
     questions.forEach((question) => {
         question.addEventListener("click", () => {
             let plus = question.querySelector('.plus');
             if (plus) plus.classList.toggle("rotate");

             let panelContent = question.querySelector(".panel-content");
             if (panelContent) panelContent.classList.toggle("expand");
         });
     });

     let collapseAll = document.querySelector('.collapse-all');
     let expandAll = document.querySelector('.expand-all');

     if (collapseAll) {
         collapseAll.addEventListener("click", () => {
             questions.forEach((question) => {
                 let plus = question.querySelector('.plus');
                 if (plus) plus.classList.remove("rotate");

                 let panelContent = question.querySelector(".panel-content");
                 if (panelContent) panelContent.classList.remove("expand");
             });
         });
     }

     if (expandAll) {
         expandAll.addEventListener("click", () => {
             questions.forEach((question) => {
                 let plus = question.querySelector('.plus');
                 if (plus) plus.classList.add("rotate");

                 let panelContent = question.querySelector(".panel-content");
                 if (panelContent) panelContent.classList.add("expand");
             });
         });
     }

     // Word changing functionality
     const words = [
         "Вземи кафе.", "Отиди на шопинг.", "Чети книга.",
         "Излез навън.", "Вземи сандвич.", "Не. Пица.",
         "Чакай. Сладолед.", "Да. Сладолед.", "Или..."
     ];
     let currentWordIndex = 0;
     const wordElement = document.getElementById('word');

     if (wordElement) {
         function changeWord() {
             wordElement.style.opacity = 0; // Start fade out
             setTimeout(() => {
                 wordElement.textContent = words[currentWordIndex]; // Change word
                 wordElement.style.opacity = 1; // Start fade in
                 currentWordIndex = (currentWordIndex + 1) % words.length;
             }, 500); // Wait for fade out to complete
         }

         setInterval(changeWord, 2000);
         changeWord(); // Initial call to set first word
     }
 });

 const wordsPhone = [
     "Вземи кафе", "Отиди на шопинг.", "Чети книга.",
     "Излез навън.", "Вземи сандвич.", "Не. Пица.",
     "Чакай. Сладолед.", "Да. Сладолед.", "Или..."
 ];
 let currentWordIndexPhone = 0;
 const wordElementPhone = document.getElementById('wordphone');

 if (wordElementPhone) {
     function changeWordPhone() {
         wordElementPhone.style.opacity = 0; // Start fade out
         setTimeout(() => {
             wordElementPhone.textContent = wordsPhone[currentWordIndexPhone]; // Change word
             wordElementPhone.style.opacity = 1; // Start fade in
             currentWordIndexPhone = (currentWordIndexPhone + 1) % wordsPhone.length;
         }, 1000); // Wait for fade out to complete
     }

     setInterval(changeWordPhone, 2000);
     changeWordPhone(); // Initial call to set first word
 }