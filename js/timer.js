let date = new Date('Aug 1 2022 00:00:00'); // Указываем дату до которой будет считать счетчик

function counts(){
  let now = new Date(); // Определяем текущую дату

  gap = date - now; // Получаем колличество мили секунд от 1 января 2023 до сейчас

  let days = Math.floor(gap / 1000 / 60 / 60 / 24); // Находим количество дней
  let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24; // Находим количество часов
  let minutes = Math.floor(gap / 1000 / 60 ) % 60; // Находим количество минут
  let seconds = Math.floor(gap / 1000 ) % 60; // Находим количество секунд
  console.log(hours);

  if (gap < 0) {
      days = days + 7; // Снова активируется каждые 7 дней
      hours = hours + 24;  // Снова активируется каждые 7 дней
      minutes = minutes + 60;  // Снова активируется каждые 7 дней
      seconds = seconds + 60;  // Снова активируется каждые 7 дней
    // document.getElementById('d').innerText = 'Набор окончен'; // Если дата истечет, то выведется сообщение
  } 
    document.getElementById('d').innerText = days; // Записываем дни в html
    document.getElementById('h').innerText = hours; // Записываем часы в html
    document.getElementById('m').innerText = minutes; // Записываем минуты в html
    document.getElementById('s').innerText = seconds; // Записываем секунды в html
  
}

counts();

setInterval(counts, 1000);