// AN EVENT IS BEINGBINDED AT THE LOADING TIME USING J-QUERY
$("p2.jpg").load(function () {
  alert("WELCOME! TO MY PORTFOLIO");
});

// FUNCTION FOR DISPLAYING THE SCHOOL NAME IF THE SCHOOL IS CLICKED
function myMatric() {
  var courses = document.getElementById("school");

  if (courses.style.display == "block") {
    courses.style.display = "none";
  } else {
    courses.style.display = "block";
  }
}
window.onclick = function (event) {
  if (!event.target.matches(".dropdown_button")) {
    document.getElementById("school").style.display = "none";
  }
};

// FUNCTION FOR DISPLAYING THE COLLEGE NAME IF THE COLLEGE IS CLICKED
function myInter() {
  var course = document.getElementById("college");

  if (course.style.display == "block") {
    course.style.display = "none";
  } else {
    course.style.display = "block";
  }
}
window.onclick = function (event) {
  if (!event.target.matches(".dropdown_button1")) {
    document.getElementById("college").style.display = "none";
  }
};

// FUNCTION FOR DISPLAYING THE UNIVERSITY NAME IF THE BACHELORS IS CLICKED
function myBs() {
  var course = document.getElementById("uni");

  if (course.style.display == "block") {
    course.style.display = "none";
  } else {
    course.style.display = "block";
  }
}
window.onclick = function (event) {
  if (!event.target.matches(".dropdown_button2")) {
    document.getElementById("uni").style.display = "none";
  }
};

// FUNCTION FOR DISPLAYING THE UNIVERSITY NAME IF THE M-PHIL IS CLICKED
function myMphil() {
  var course = document.getElementById("uni2");

  if (course.style.display == "block") {
    course.style.display = "none";
  } else {
    course.style.display = "block";
  }
}
window.onclick = function (event) {
  if (!event.target.matches(".dropdown_button3")) {
    document.getElementById("uni2").style.display = "none";
  }
};
