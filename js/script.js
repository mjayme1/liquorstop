$(document).ready(function() {
  // Swiper: Slider
      new Swiper('.swiper-container', {
          autoplay: {
            delay: 2500,
          },
          loop: true,
          slidesPerView: 'auto',
          paginationClickable: true,
          spaceBetween: 20,
          breakpoints: {
              1520: {
                  slidesPerView: 4,
                  spaceBetween: 50
              },
              1028: {
                  slidesPerView: 3,
                  spaceBetween: 40
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              480: {
                  slidesPerView: 1,
                  spaceBetween: 10
              }
          }
      });
  });
  


window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
