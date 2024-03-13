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

