fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
});

let video = document.getElementById("myVideo");
    let isPlaying = false;

    function playVideo() {
        video.play();
        isPlaying = true;
    }

    function pauseVideo() {
        video.pause();
        isPlaying = false;
    }

    // Обробник події при скролі
    window.onscroll = function() {
        let rect = video.getBoundingClientRect();
        let windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Відтворюємо відео, якщо елемент видимий на екрані
        if (rect.top >= 0 && rect.bottom <= windowHeight && !isPlaying) {
            playVideo();
        } else if (isPlaying) {
            pauseVideo();
        }
    };

// alert

function showCustomAlert() {
  document.getElementById('customAlert').style.display = 'block';
}

function closeCustomAlert() {
  document.getElementById('customAlert').style.display = 'none';
  document.getElementById('customAlert2').style.display = 'none';
}

function sendData() {
  document.getElementById('customAlert2').style.display = 'block';
}

function goToHomePage() {
  window.location.href = 'index.html';
}

// our us

document.addEventListener("DOMContentLoaded", function () {
  // Отримати всі елементи меню
  var menuItems = document.querySelectorAll('.menu_section2 h2');

  // Додати обробник подій для кожного елементу меню
  menuItems.forEach(function (menuItem, index) {
    menuItem.addEventListener('click', function () {
      // Отримати всі секції
      var sections = document.querySelectorAll('.section-aboutUs-main');

      // Сховати всі секції
      sections.forEach(function (section) {
        section.classList.remove('active');
      });

      // Відобразити потрібну секцію
      sections[index].classList.add('active');

      // Змінити клас active-menu_section2 для кнопок меню
      menuItems.forEach(function (item) {
        item.classList.remove('active-menu_section2');
      });
      menuItem.classList.add('active-menu_section2');
    });
  });
});

document.getElementById('backToHome').addEventListener('click', function(event) {
  event.preventDefault(); // Зупинити стандартну дію переходу за посиланням
  
  // Перевірка, чи ми на головній сторінці
  if (window.location.pathname === 'index.html') {
    // Перевірка, чи є секція 3 на головній сторінці
    let section3Element = document.getElementById('history');
    if (section3Element) {
      // Прокрутка до секції 3 з плавною анімацією
      section3Element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  } else {
    // Перехід на головну сторінку з анкором до секції 3
    window.location.href = 'index.html#history';
  }
});

let callButton = document.getElementById('callButton');

  // Додаємо обробник події для натискання на кнопку
   callButton.addEventListener('click', function() {
  // Відкриваємо діалогове вікно для набору номера
    window.location.href = 'tel:+380660024808';
 });


// slaider

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);