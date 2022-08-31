// pullarning qiymati
var elResult = document.querySelector(".message")

var usdInUzs = 10900;
var eurInUzs = 10860;
var rubInUzs = 178;

// sayohat uchun  ketadigan pullarning xorij valyutasidagi qismi
var planeTicketInUsd = 1000;
var hotelExpensesInUsd = 500;
var entertainmentInEuros = 350;
var costForCarsInRub = 2000;

// xorij valyutasidegi pullarni milliy valyutaga o'girish
var planeTicketInUzs = planeTicketInUsd * usdInUzs;
var hotelExpensesInUzs = hotelExpensesInUsd * usdInUzs;
var entertainmentInUzs = entertainmentInEuros * eurInUzs;
var costForCarsInUzs = costForCarsInRub * rubInUzs;

var totalExpenses =(planeTicketInUzs + hotelExpensesInUzs + entertainmentInUzs + costForCarsInUzs);

// HTMLdagi elementni chaqirib olish
var elMessage = document.querySelector(".message")

var userName = prompt ("enter your name").trim();
var lastName = prompt ("enter your last name").trim();
var age = prompt ("enter your age").trim();
var userMoney = parseInt(prompt ("how much money").trim(), 10);

if (userMoney >= totalExpenses) {
    elMessage.style.backgroundColor = "blue"
    elMessage.textContent = `respectable customer, ${userName}, have a nice trip,`; 
} else {
    elMessage.style.backgroundColor = "red"
    elMessage.textContent = `respectable customer, ${userName}, you don't have enough funds, `; 
}

