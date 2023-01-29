// ДЗ
// Выполнить все задачи в теге script. Комментарии, в которых написаны 
// задачи, не стирать, код с решением задачи пишем под комментарием.

// <p class="dropdown">Привет :)</p>
// <div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// Dropdown button
// </button>
// <div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
// <a class="dropdown-item" href="#">Action</a>
// <a class="dropdown-item" href="#">Another action</a>
// <a class="dropdown-item" href="#">Something else here</a>
// </div>
// </div>
//     "use strict";
// []()
// []()
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один 
// класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll 
// и свойство classList у элементов.
// []()
const dropdownEl = document.querySelectorAll(`.dropdown-item`);
dropdownEl.forEach(dropdownEl => {
    dropdownEl.classList.add('super-dropdown');
});
console.log(dropdownEl);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", 
// если он присутствует у этого элемента, либо добавить, если такого класса 
// у элемента не было.
// []()
const btnEl = document.querySelector(`.btn`);
if (btnEl) {
    btnEl.classList.toggle("btn-secondary"); //добавляет класс, если его нет, иначе удаляет.
}
console.log(btnEl);
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого 
// присутствует класс "menu".
// []()
const menuEl = document.querySelector(`.menu`);
menuEl.classList.remove("dropdown-menu");
console.log(menuEl);
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом 
// "dropdown" следующую разметку:
// `<a href="#">link</a>`
// []()
const divDropd = document.querySelector(`.dropdown`);
divDropd.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');
console.log(divDropd);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// []()
const idElement = document.querySelector(`#dropdownMenuButton`);
  document.getElementById(`dropdownMenuButton`);
  idElement.id =`superDropdown`;  
  console.log(idElement);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует 
// атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// []()
const dataEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
  dataEl.dataset.dd = `3`;
  console.log(dataEl);
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const togEl = document.querySelector(`.dropdown-toggle`);
togEl.removeAttribute(`type`);
console.log(togEl);

