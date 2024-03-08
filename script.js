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
}

function sendData() {
  // Ваш код для обробки введених даних та відправки
  // може бути додано тут
  alert('Дані успішно відправлено!');
  closeCustomAlert();
}