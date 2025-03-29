document.querySelectorAll(".carousel").forEach((carousel) => {
  let speed = 1; // Скорость прокрутки
  let position = 0; // Начальная позиция
  let scrollInterval;

  // Дублируем контент для бесконечного эффекта
  carousel.innerHTML += carousel.innerHTML;

  function scroll() {
    position -= speed;
    if (Math.abs(position) >= carousel.scrollWidth / 2) {
      position = 0; // Сбрасываем позицию
    }
    carousel.style.transform = `translateX(${position}px)`;
    scrollInterval = requestAnimationFrame(scroll);
  }

  scroll(); // Запускаем

  // Остановка при наведении
  carousel.addEventListener("mouseenter", () => cancelAnimationFrame(scrollInterval));
  carousel.addEventListener("mouseleave", () => scroll());
});
