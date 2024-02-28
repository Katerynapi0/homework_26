'use strict';
/*Є текстове поле на сторінці. 
Під час фокусування на цьому полі збоку з'являється <div>. 
При пропажі фокусу - <div> так само пропадає */

//input
let passwordField = document.getElementById('passwordField');
//div
let infoText = document.getElementById('infoText');

infoText.style.display = 'none';

//функії для поведінки подій 
let handleMouseOver = function() {
    infoText.style.display = 'block';
};

let handleMouseOut = function() {
    infoText.style.display = 'none';
};
//події
passwordField.addEventListener('focus', handleMouseOver);
passwordField.addEventListener('blur', handleMouseOut);