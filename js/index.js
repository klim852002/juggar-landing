var signupForm = document.getElementById('signup-form');
var signupSuccess = document.getElementById('signup-success');
var signupError = document.getElementById('signup-error');
var signupBtn = document.getElementById('signup-button');
var onSignupComplete = function(error) {
  signupBtn.disabled = false;
  if (error) {
    signupError.innerHTML = 'Sorry. Could not signup.';
  } else {
    signupSuccess.innerHTML = 'Thanks for signing up!';
    // hide the form
    signupForm.style.display = 'none';
  }
};

function signup(formObj) {
  // Store emails to firebase
  var myFirebaseRef = new Firebase("https://landing-on-juggar.firebaseio.com/signups");
  myFirebaseRef.push({
    email: formObj.email.value,
    question: formObj.question.value,

  }, onSignupComplete);
  console.log(formObj.email.value)
  console.log(formObj.question.value)
  signupBtn.disabled = true;
  return false;
};

  function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
      $('.navbar').addClass("scrolled");
    } else {
      $('.navbar').removeClass("scrolled");
    }
  }
  if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function() {
      checkScroll();
    });
  }

  $(function() {
    $('.nav a').on('click', function() {
      if ($('.navbar-toggle').css('display') != 'none') {
        $(".navbar-toggle").trigger("click");
      }
    });
  });
