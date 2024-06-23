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


 const words = [
     "Take cofee.", "Go shopping.", "Read book.",
     "Go walk.", "Take-sandwich.", "No. Pizza.",
     "Wait. ice-cream.", "Yes. ice-cream.", "Or..."
 ];
 let currentWordIndex = 0;
 const wordElement = document.getElementById('word-en');

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


 const wordsPhone_en = [
     "Take cofee.", "Go shopping.", "Read book.",
     "Go walk.", "Take-sandwich.", "No. Pizza.",
     "Wait. ice-cream.", "Yes. ice-cream.", "Or..."
 ];
 let currentWordIndexPhone_en = 0;
 const wordElementPhone_en = document.getElementById('wordphone-en');

 if (wordElementPhone_en) {
     function changeWordPhone_en() {
         wordElementPhone_en.style.opacity = 0; // Start fade out
         setTimeout(() => {
             wordElementPhone_en.textContent = wordsPhone_en[currentWordIndexPhone_en]; // Change word
             wordElementPhone_en.style.opacity = 1; // Start fade in
             currentWordIndexPhone_en = (currentWordIndexPhone_en + 1) % wordsPhone_en.length;
         }, 1000); // Wait for fade out to complete
     }

     setInterval(changeWordPhone_en, 2000);
     changeWordPhone_en(); // Initial call to set first word
 }




 const divider = document.getElementById("divider");
 const container = document.querySelector(".container-slider");
 const afterImage = document.querySelector(".after");
 const startButton = document.querySelector(".start-button");
 const endButton = document.querySelector(".end-button");

 let isDragging = false;

 container.addEventListener("mousedown", startDragging);
 container.addEventListener("touchstart", startDragging);

 container.addEventListener("mouseup", stopDragging);
 container.addEventListener("touchend", stopDragging);

 document.addEventListener("mousemove", dragDivider);
 document.addEventListener("touchmove", dragDivider);

 startButton.addEventListener("click", function() {
     const percentage = 0;

     divider.style.transition = "left 0.5s ease";
     afterImage.style.transition = "clip-path 0.5s ease";

     divider.style.left = `${percentage}%`;
     afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
 });

 endButton.addEventListener("click", function() {
     const percentage = 100;

     divider.style.transition = "left 0.5s ease";
     afterImage.style.transition = "clip-path 0.5s ease";

     divider.style.left = `${percentage}%`;
     afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
 });

 function startDragging() {
     isDragging = true;
 }

 function stopDragging() {
     isDragging = false;
 }

 function dragDivider(event) {
     if (!isDragging) return;

     divider.style.transition = "none";
     afterImage.style.transition = "none";

     const clientX =
         "touches" in event ? event.touches[0].clientX : event.clientX;
     const containerRect = container.getBoundingClientRect();
     let offsetX = clientX - containerRect.left;

     if (offsetX < 0) offsetX = 0;
     if (offsetX > containerRect.width) offsetX = containerRect.width;

     const percentage = (offsetX / containerRect.width) * 100;

     divider.style.left = `${percentage}%`;
     afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
 }