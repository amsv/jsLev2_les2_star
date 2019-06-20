// сеть фастфуда предлагает несколько видов гамбургеров:
// a. Маленький (50 рублей, 20 калорий).
// b. Большой (100 рублей, 40 калорий).
// Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// a. С сыром (+10 рублей, +20 калорий).
// b. С салатом (+20 рублей, +5 калорий).
// c. С картофелем (+15 рублей, +10 калорий).
// Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). 
// Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса со следующей страницы, но можно использовать и свою.

class Hamburger {
  constructor() { 
    this.size = "";
    this.stuffing = "";
    this.price = 0;
    this.calories = 0;
    this.topping1 = "";
    this.topping2 = "";
  }
  
  setHamburger(size, stuffing) {
    this.size = size.toUpperCase();
    this.stuffing = stuffing.toUpperCase();
    switch (this.size) {
      case "МАЛЕНЬКИЙ":
          this.price = 50;
          this.calories = 20;
        break;
      case "БОЛЬШОЙ":
          this.price = 100;
          this.calories = 40;
        break;  
      default:
        alert("введите Гамбургер.(МАЛЕНЬКИЙ или БОЛЬШОЙ");
        break;
    }
    switch (this.stuffing) {
      case "СЫР":
          this.price += 10;
          this.calories += 20;
        break;
      case "САЛАТ":
          this.price += 20;
          this.calories += 5;
        break;
      case "КАРТОФЕЛЬ":
          this.price += 15;
          this.calories += 10;
        break;    
      default:
        alert("Выберете одну начинку(СЫР или САЛАТ или КАРТОФЕЛЬ");
        break; 
    }
  }  
  addTopping(topping) {    // Добавить добавку 
    if(topping.toUpperCase() === "ПРИПРАВА") {
      this.topping1 = topping.toUpperCase();
      this.price += 15;
      this.calories += 0;
    }
    if(topping.toUpperCase() === "МАЙОНЕЗ") {
      this.topping2 =topping.toUpperCase();
      this.price += 20;
      this.calories += 5;
    }
  }
  removeTopping(topping) { // Убрать добавку 
    if(topping.toUpperCase() === "ПРИПРАВА") {
      this.topping1 = "";
      this.price -= 15;
      this.calories -= 0;
    }
    if(topping.toUpperCase() === "МАЙОНЕЗ") {
      this.topping2 = "";
      this.price -= 20;
      this.calories -= 5;
    }
  }
  getSize() {              // Узнать размер гамбургера 
    alert(`Размер гамбургера: ${this.size}`); 
  }
  getStuffing() {          // Узнать начинку гамбургера 
    alert(`Начинка гамбургера: ${this.stuffing}`); 
  }
  calculatePrice() {       // Узнать цену 
    alert(`Стоимость гамбургера: ${this.price} руб.`); 
  }
  calculateCalories() {    // Узнать калорийность 
    alert(`Калорийность гамбургера: ${this.calories} ккал`);
  }
}

const burger = new Hamburger();
burger.setHamburger("маленький","салат");
burger.addTopping("приправа");
burger.addTopping("майонез");
burger.removeTopping("майонез");
burger.calculatePrice();
burger.calculateCalories();