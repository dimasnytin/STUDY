var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

// Math. floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guesses_nums = [];

function play () {
  var user_guess = document.getElementById("guess").value;

  // если вводимое число в инпут меньше 1 или больше 100
  if (user_guess < 1 || user_guess > 100){
    // выводим сообщение Пожалуйста введите число от 1 до 100
    alert("Пожалуйста введите число от 1 до 100");

  }

  else{
    // Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
    guesses_nums.push(user_guess);
    no_of_guesses+= 1;

    if(user_guess < answer){
      msg1.textContent = "Слишком маленькое число";
      msg2.textContent = "Количество попыток: " + no_of_guesses;
      msg3.textContent = "Выбранные числа: " + guesses_nums;
    }
    else if (user_guess > answer) {
      msg1.textContent = "Очень близко но... нет";
      msg2.textContent = "Количество попыток: " + no_of_guesses;
      msg3.textContent = "Выбранные числа: " + guesses_nums;
  }
  else if(user_guess == answer){
    msg1.textContent = "Юххууу. Ты победил!";
    msg2.textContent = "Это число уже было: " + answer;
    msg3.textContent = "Вы угадали в " + no_of_guesses + " попытках";
    document.getElementById("my_btn").disabled = true;
  }
}
}
