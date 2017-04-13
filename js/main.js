// ----------------------------------------------------SLIDER----------------------------------------------
var slides = document.querySelectorAll('#main-slider-wrap .inner-slide-elem');
var currentSlide = 0;

var next = document.getElementById('right-arr');
var previous = document.getElementById('left-arr');


function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'inner-slide-elem';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'inner-slide-elem showing';
}

next.onclick = function() {
  nextSlide();
};
previous.onclick = function() {
  previousSlide();
};
// -------------------------------------------------------------------------------------------

// --------------------------------FORM VALIDATION--------------------------------------------

function validate() {
	var first = document.querySelector('form > input');
	var second = document.querySelectorAll('.upper')[1];
	var third = document.querySelectorAll('.upper')[2];
	var fourth = document.querySelector('.under');

	if(first.value == '' || second.value == '' || third.value == '' || fourth.value == '') {
		displayMessage();
		return false;
	} else {
		return true;
	}	
}

function displayMessage() {
	var block = document.getElementById('warn-message');
	block.style.display = 'block';
}

function closeModal() {
	var block = document.getElementById('warn-message');
	block.style.display = 'none';
}
// ---------------------------------------------------------------------------------------

// ---------------------------------------AJAX REQUEST----------------------------------
function requestFunction() {

	var a = document.getElementById('card1Out');
	a.onmouseover = function() {
		AJAX(0);
		this.onmouseover = null;	
	}
	var b = document.getElementById('card2Out');
	b.onmouseover = function() {
		AJAX(1);
		this.onmouseover = null;	
	}
	var c = document.getElementById('card3Out');
	c.onmouseover = function() {
		AJAX(2);
		this.onmouseover = null;	
	}
	var d = document.getElementById('card4Out');
	d.onmouseover = function() {
		AJAX(3);
		this.onmouseover = null;	
	}

	function AJAX(id) {
		var request;

		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		} else {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}


		request.open('GET', 'data.json');

		request.onreadystatechange = function() {
			if ((request.readyState === 4) && (request.status === 200)) {

				var items = JSON.parse(request.responseText);

				var cards = document.querySelectorAll('.card');
				
				var output = '<h3>' + items[id].name + '</h3>' + 
						'<h5>' + items[id].position + '</h5>' + 
						'<div class="team-line"></div>' + 
				 		'<p>' + items[id].bio + '</p>';

				cards[id].innerHTML = output;	
			}

		}
		request.send();
	}
}

requestFunction();
