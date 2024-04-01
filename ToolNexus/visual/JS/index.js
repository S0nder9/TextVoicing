// document.addEventListener('DOMContentLoaded', function() {
//     var header = document.getElementById('myHeader');
//     var icon = document.getElementById('icon');
//     var navAMain = document.querySelectorAll('.nav-a');
//     var cross = document.querySelectorAll('.fa-xmark-a');
//     var page = document.getElementById('page');
//     var searchMain = document.querySelector('.search__container');
//     var openMenuButton = document.getElementById('openmenu');
//     var rightRows = document.querySelectorAll('.row-1'); // Selecting all elements with class .row-1
//     var leftRows = document.querySelectorAll('.row-2'); // Selecting all elements with class .row-2
//     var lastScrollTop = 0;

//     cross.forEach(function(crossIcon) {
//         crossIcon.style.display = "none";
//     });

//     icon.addEventListener("click", function() {
//         navAMain.forEach(function(navA) {
//             navA.style.display = "none";
//         });
//         cross.forEach(function(crossIcon) {
//             crossIcon.style.display = "block";
//         });
//         searchMain.style.display = "block";
//     });

//     cross.forEach(function(crossIcon) {
//         crossIcon.addEventListener("click", function() {
//             searchMain.style.display = "none";
//             navAMain.forEach(function(navA) {
//                 navA.style.display = "block";
//             });
//             cross.forEach(function(crossIcon) {
//                 crossIcon.style.display = "none";
//             });
//         });
//     });

//     window.addEventListener('scroll', function() {
//         page.classList.remove('menuopen');
//         var st = window.pageYOffset || document.documentElement.scrollTop;
//         if (st > lastScrollTop) { 
//             rightRows.forEach(function(rightRow) {
//                 if (isScrolledIntoView(rightRow)) {
//                     header.classList.add('sticky');
//                     searchMain.style.display = "none";
//                     var currentTranslateX = parseInt(window.getComputedStyle(rightRow).getPropertyValue('transform').split(',')[4]);
//                     var newTranslateX = currentTranslateX + 100;
//                     rightRow.style.transform = "translateX(" + newTranslateX + "px)";
//                 }
//             });
//         } else {
//             rightRows.forEach(function(rightRow) {
//                 if (isScrolledIntoView(rightRow)) {
//                     rightRow.style.transform = "translateX(0px)";
//                 }
//             });
//         }

//         // 
//         if (st > lastScrollTop) { 
//             leftRows.forEach(function(leftRow) {
//                 if (isScrolledIntoView(leftRow)) {
//                     var currentTranslateX = parseInt(window.getComputedStyle(leftRow).getPropertyValue('transform').split(',')[4]);
//                     var newTranslateX = currentTranslateX - 100;
//                     leftRow.style.transform = "translateX(" + newTranslateX + "px)";
//                 }
//             });
//         } else {
//             leftRows.forEach(function(leftRow) {
//                 if (isScrolledIntoView(leftRow)) {
//                     header.classList.add('sticky');
//                     searchMain.style.display = "none";
//                     leftRow.style.transform = "translateX(0px)";
//                 }
//             });
//         }
//         // 
//         lastScrollTop = st <= 0 ? 0 : st;
//     });

//     window.addEventListener('scroll', function() {
//         page.classList.remove('menuopen');
//         if (window.scrollY >= 100) {
//             header.classList.add('sticky');
//             searchMain.style.display = "none";
//         } else {
//             header.classList.remove('sticky');
//         }
//     });

//     openMenuButton.addEventListener('click', function() {
//         header.classList.remove('sticky');
//         page.classList.add('menuopen');
//     });

//     var links = document.querySelectorAll('a[href^="#"]');

//     links.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             var targetId = this.getAttribute('href');
//             var targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     function isScrolledIntoView(element) {
//         var rect = element.getBoundingClientRect();
//         var elemTop = rect.top;
//         var elemBottom = rect.bottom;
//         var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//         return isVisible;
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('myHeader');
    var icon = document.getElementById('icon');
    var navAMain = document.querySelectorAll('.nav-a');
    var cross = document.querySelectorAll('.fa-xmark-a');
    var page = document.getElementById('page');
    var searchMain = document.querySelector('.search__container');
    var openMenuButton = document.getElementById('openmenu');
    var rightRows = document.querySelectorAll('.row-1'); // Selecting all elements with class .row-1
    var leftRows = document.querySelectorAll('.row-2'); // Selecting all elements with class .row-2
    var lastScrollTop = 0;

    cross.forEach(function(crossIcon) {
        crossIcon.style.display = "none";
    });

    icon.addEventListener("click", function() {
        navAMain.forEach(function(navA) {
            navA.style.display = "none";
        });
        cross.forEach(function(crossIcon) {
            crossIcon.style.display = "block";
        });
        searchMain.style.display = "block";
    });

    cross.forEach(function(crossIcon) {
        crossIcon.addEventListener("click", function() {
            searchMain.style.display = "none";
            navAMain.forEach(function(navA) {
                navA.style.display = "block";
            });
            cross.forEach(function(crossIcon) {
                crossIcon.style.display = "none";
            });
        });
    });

    window.addEventListener('scroll', function() {
        page.classList.remove('menuopen');
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) { 
            rightRows.forEach(function(rightRow) {
                if (isScrolledIntoView(rightRow)) {
                    header.classList.add('sticky');
                    searchMain.style.display = "none";
                    var currentTranslateX = parseInt(window.getComputedStyle(rightRow).getPropertyValue('transform').split(',')[4]);
                    var newTranslateX = currentTranslateX + 100;
                    rightRow.style.transform = "translateX(" + newTranslateX + "px)";
                }
            });
        } else {
            rightRows.forEach(function(rightRow) {
                if (isScrolledIntoView(rightRow)) {
                    rightRow.style.transform = "translateX(0px)";
                }
            });
        }

        // 
        if (st > lastScrollTop) { 
            leftRows.forEach(function(leftRow) {
                if (isScrolledIntoView(leftRow)) {
                    var currentTranslateX = parseInt(window.getComputedStyle(leftRow).getPropertyValue('transform').split(',')[4]);
                    var newTranslateX = currentTranslateX - 100;
                    leftRow.style.transform = "translateX(" + newTranslateX + "px)";
                }
            });
        } else {
            leftRows.forEach(function(leftRow) {
                if (isScrolledIntoView(leftRow)) {
                    header.classList.add('sticky');
                    searchMain.style.display = "none";
                    leftRow.style.transform = "translateX(0px)";
                }
            });
        }


        // 
        lastScrollTop = st <= 0 ? 0 : st;
    });

    window.addEventListener('scroll', function() {
        page.classList.remove('menuopen');
        if (window.scrollY >= 100) {
            header.classList.add('sticky');
            searchMain.style.display = "none";
        } else {
            header.classList.remove('sticky');
        }
    });

    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }); 

function isScrolledIntoView(element) {
    var rect = element.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    return elemTop <= window.innerHeight && elemBottom >= 0 && elemTop < window.innerHeight;
}

// let quantityTools = document.querySelector('.quantity-tools');
// let quantityToolsSection = document.querySelectorAll('.quantity-tools-section');
// let quantityToolsMain = 0;

// quantityToolsSection.forEach(() => {
//     quantityToolsMain++;
// });

// quantityTools.innerHTML = '<p id="large__text-quantity" class="quantity-tools">' + quantityToolsMain + '</p>';

// });

// // Функция для получения количества подписчиков
//     function getSubscriberCount() {
//         // Ваш ключ API YouTube
//         var apiKey = 'YOUR_YOUTUBE_API_KEY';
//         // ID вашего YouTube-канала
//         var channelId = 'YOUR_CHANNEL_ID';

//         // Формируем запрос к API
//         var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + channelId + '&key=' + apiKey;

//         // Отправляем GET запрос
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 // Получаем количество подписчиков из ответа API
//                 var subscriberCount = data.items[0].statistics.subscriberCount;
//                 // Обновляем текст на странице
//                 document.getElementById('quantity').textContent = subscriberCount;
//             })
//             .catch(error => {
//                 console.error('Произошла ошибка:', error);
//             });
//     }

//     window.onload = function() {
//         getSubscriberCount();
    });