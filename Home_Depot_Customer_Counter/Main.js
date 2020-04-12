"use strict";

var count = 0;

function init() {
 	document.getElementById('current').innerHTML = count;
}

function addOne() {
	count++;
	document.getElementById('current').innerHTML = count;
	if(count > 100)
		alert("TOO MANY CUSTOMERS");
}

function subOne() {
	if(count > 0)
		count--;
		document.getElementById('current').innerHTML = count;
}