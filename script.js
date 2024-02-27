'use strict';
/*Є текстове поле на сторінці. 
Під час фокусування на цьому полі збоку з'являється <div>. 
При пропажі фокусу - <div> так само пропадає */

//input
let passwordField = document.getElementById('passwordField');
//div
let infoText = document.getElementById('infoText');
//функії для поведінки подій 
let handleMouseOver = function() {
    infoText.style.display = 'block';
};

let handleMouseOut = function() {
    infoText.style.display = 'none';
};
//події
passwordField.addEventListener('click', handleMouseOver);
passwordField.addEventListener('mouseout', handleMouseOut);