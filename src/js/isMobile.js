"use strict"
const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
      return (
              isMobile.Android()
              || isMobile.BlackBerry()
              || isMobile.iOS()
              || isMobile.Opera()
              || isMobile.Windows()
              );
  }
};

if (isMobile.any()) { // Если устройство мобильное
    document.body.classList.add('_touch'); // То добавляем к body класс _touch
    let menuArrows = document.querySelectorAll('.menu__arrow'); // Собираем в переменную все элементы с классом menu__arrow
    if (menuArrows.length > 0) { //Проверяем наличие данных переменных в массиве, они есть, если  menuArrows.length 1 и больше
        for (let i = 0; i < menuArrows.length; i++) { // Проходим циклом по массиву с элементами
          const menuArrow = menuArrows[i]; // В константу присваиваем i - значение массива
          menuArrow.addEventListener('click', function(){
            menuArrow.parentElement.classList.toggle('_active'); //Добавляем или убираем класс _active на непосредственном родительском элементе (li)
          });
        }
    }
}else{ // Если ПК
    document.body.classList.add('_pc'); // То добавляем к body класс _pc
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon'); // ищем элемент с классом menu__icon
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Прокрутка при клике
// Собираем массив объектов, учавствующих в навигации
const menuLinks = document.querySelectorAll('.menu__link[data-goto]'); // Выбираем все menu__link с атрибутами data-goto
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => { // Проходмся по массиву методом forEach 
    menuLink.addEventListener("click", onMenuLinkClick); // Добавляем собыстие на клик и переходим в функцию onMenuLinkClick
  });

  function onMenuLinkClick(e) { // Инициируем функцию onMenuLinkClick
    const menuLink = e.target; // Получаем целевой объект(объект, на который кликнули);
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) { // Проверяем заполнение атрибута(menuLink.dataset.goto) и проверяем существование объекта, на который ссылается дата атрибут (ocument.querySelector(menuLink.dataset.goto)
      const gotoBlock = document.querySelector(menuLink.dataset.goto); // Получаем в константу объект к которому необходим переход
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight; //Высчитываем расстояние от верха getBoundingClientRect().top  - получаем его расстояние от верха в рх, также прибавляем количество прокрученных пикселей(pageYOffset) и отнимаем высоту шапки document.querySelector('header').offsetHeight, что бы исключить наезжаение шапки на объект перехода

      if(iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }


      window.scrollTo({ // Прописываем переход к нужному месту. Обращаемся к объекту window, вызываем функцию scrollTo, которая занимается прокруткой
        top: gotoBlockValue, // Указываем прокрутку сверху(top) и позицию до которой прокрутиться(gotoBlockValue)
        behavior: "smooth" // Прокрутка будет плавной
      });
      e.preventDefault(); // Отключаем переход ссылки, а просто отсавляем прокрутку
    }
  }
}