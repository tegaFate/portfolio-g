var mySkills = document.getElementsByClassName('skill');
var button = document.getElementById('skillbtn');

button.onclick = function () {
    var isOpen = mySkills[0].classList.contains('open'); // Check if the first element is open
    for (var i = 0; i < mySkills.length; i++) {
        if (isOpen) {
            // If any element is open, we'll remove the class from all
            mySkills[i].classList.remove('open');
        } else {
            // Otherwise, we add the class to all
            mySkills[i].classList.add('open');
        }
    }
    // Update button text based on the state
    this.innerHTML = isOpen ? "Show More" : "Show Less";
};

var mySkills2 = document.getElementsByClassName('skill2');
var button2 = document.getElementById('skillbtn2');

button2.onclick = function () {
    var isOpen = mySkills2[0].classList.contains('open'); // Check if the first element is open
    for (var i = 0; i < mySkills2.length; i++) {
        if (isOpen) {
            // If any element is open, we'll remove the class from all
            mySkills2[i].classList.remove('open');
        } else {
            // Otherwise, we add the class to all
            mySkills2[i].classList.add('open');
        }
    }
    // Update button text based on the state
    this.innerHTML = isOpen ? "Show More" : "Show Less";
};

var mySkills3 = document.getElementsByClassName('skill3');
var button3 = document.getElementById('skillbtn3');

button3.onclick = function () {
    var isOpen = mySkills3[0].classList.contains('open'); // Check if the first element is open
    for (var i = 0; i < mySkills3.length; i++) {
        if (isOpen) {
            // If any element is open, we'll remove the class from all
            mySkills3[i].classList.remove('open');
        } else {
            // Otherwise, we add the class to all
            mySkills3[i].classList.add('open');
        }
    }
    // Update button text based on the state
    this.innerHTML = isOpen ? "Show More" : "Show Less";
};

var mySkills4 = document.getElementsByClassName('skill4');
var button4 = document.getElementById('skillbtn4');

button4.onclick = function () {
    var isOpen = mySkills4[0].classList.contains('open'); // Check if the first element is open
    for (var i = 0; i < mySkills4.length; i++) {
        if (isOpen) {
            // If any element is open, we'll remove the class from all
            mySkills4[i].classList.remove('open');
        } else {
            // Otherwise, we add the class to all
            mySkills4[i].classList.add('open');
        }
    }
    // Update button text based on the state
    this.innerHTML = isOpen ? "Show More" : "Show Less";
};

var mySkills5 = document.getElementsByClassName('skill5');
var button5 = document.getElementById('skillbtn5');

button5.onclick = function () {
    var isOpen = mySkills5[0].classList.contains('open'); // Check if the first element is open
    for (var i = 0; i < mySkills5.length; i++) {
        if (isOpen) {
            // If any element is open, we'll remove the class from all
            mySkills5[i].classList.remove('open');
        } else {
            // Otherwise, we add the class to all
            mySkills5[i].classList.add('open');
        }
    }
    // Update button text based on the state
    this.innerHTML = isOpen ? "Show More" : "Show Less";
};

var mySkills6 = document.getElementsByClassName('skill6');
var button6 = document.getElementById('skillbtn6');

button6.onclick = function () {
    var isOpen = mySkills6[0].classList.contains('open'); // Check if the first element is open
    for (var i = 0; i < mySkills6.length; i++) {
        if (isOpen) {
            // If any element is open, we'll remove the class from all
            mySkills6[i].classList.remove('open');
        } else {
            // Otherwise, we add the class to all
            mySkills6[i].classList.add('open');
        }
    }
    // Update button text based on the state
    this.innerHTML = isOpen ? "Show More" : "Show Less";
};

var mySkills7 = document.getElementsByClassName('skill7');
var button = document.getElementById('skillbtn7');

button.onclick = function () {
    var isOpen = mySkills7[0].classList.contains('open'); // Check if the first element is open
    for (var i = 0; i < mySkills7.length; i++) {
        if (isOpen) {
            // If any element is open, we'll remove the class from all
            mySkills7[i].classList.remove('open');
        } else {
            // Otherwise, we add the class to all
            mySkills7[i].classList.add('open');
        }
    }
    // Update button text based on the state
    this.innerHTML = isOpen ? "Show More" : "Show Less";
};

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};




/*var mySkill = document.getElementsByClassName('skill');
var Button = document.getElementById('skillbtn');
Button.onclick = function () {
    if (mySkill.className == open) {
      //extende shrink the box
      mySkill.className = "";
      this.innerHTML = "Show More"
    } else{
      //shrink the box
      mySkill.className = "open";
      this.innerHTML = "Show Less"
    }
}; */