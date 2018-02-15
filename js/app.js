$(document).ready(function() {
	'use strict';

	var params = {
		width : 300,
		height : 300,
		colorDark : "#000000",
		colorLight : "#ffffff",
	};

	var output = document.getElementById('qrcode');
	var qrcode = new QRCode(output, params);
	
	function makeCode () {
		var text = document.getElementById('text').value;	
		qrcode.makeCode(text);
	}

	function remakeCode(output, params) {
		output.innerHTML = '';
		//var text = document.getElementById('text').value;
		qrcode = null;
		qrcode = new QRCode(output, params);
		makeCode();
		//qrcode.makeCode(text);
	}

	function checkColor(value) {
		var patt = new RegExp(/(^[a-zA-Z]+$)|(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\))/i);
		console.log(patt.test(value));
		return patt.test(value);
	}

	//default values for inputs 
	$('#text').val('https://www.github.com');
	$('#color-dark').val(params.colorDark);
	$('#color-light').val(params.colorLight);

	makeCode();

	$("#text").on("keyup", function (e) {
		makeCode(output, params);
	});

	$("#color-dark").on("keyup", function (e) {
		var currentColor = this.value;
		if (checkColor(currentColor)) {
			params.colorDark = currentColor;
			remakeCode(output, params);
		}
	});

	$("#color-light").on("keyup", function (e) {
		var currentColor = this.value;
		if (checkColor(currentColor)) {
			params.colorLight = currentColor;
			remakeCode(output, params);
		}
	});

});