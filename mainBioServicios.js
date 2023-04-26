// // Get all elements with class "paso"
// const pasos = document.querySelectorAll(".paso");

// // Loop through each "paso" element and add click event listener
// pasos.forEach((paso) => {
//   paso.addEventListener("click", function() {
//     // Add "active" class to current element and previous siblings
//     this.classList.add("active");
//     let previousSibling = this.previousElementSibling;
//     while (previousSibling) {
//       previousSibling.classList.add("active");
//       previousSibling = previousSibling.previousElementSibling;
//     }
//     // Remove "active" class from next siblings
//     let nextSibling = this.nextElementSibling;
//     while (nextSibling) {
//       nextSibling.classList.remove("active");
//       nextSibling = nextSibling.nextElementSibling;
//     }
//   });
// });

// // Get all elements with class "paso01" to "paso05"
// const paso01 = document.querySelector(".paso01");
// const paso02 = document.querySelector(".paso02");
// const paso03 = document.querySelector(".paso03");
// const paso04 = document.querySelector(".paso04");
// const paso05 = document.querySelector(".paso05");

// // Add click event listener to each "paso" element
// paso01.addEventListener("click", function() {
//   // Update progress bar and show corresponding section
//   document.querySelector(".progress").style.height = "0%";
//   document.querySelector(".evaluacion").classList.remove("active");
//   document.querySelector(".evaluacion").classList.add("active");
//   document.querySelector(".evaluacion").nextElementSibling.classList.remove("active");
//   document.querySelector(".evaluacion").nextElementSibling.classList.remove("active");
// });

// paso02.addEventListener("click", function() {
//   document.querySelector(".progress").style.height = "24%";
//   document.querySelector(".diseno").classList.remove("active");
//   document.querySelector(".diseno").classList.add("active");
//   document.querySelector(".diseno").previousElementSibling.classList.remove("active");
//   document.querySelector(".diseno").nextElementSibling.classList.remove("active");
// });

// paso03.addEventListener("click", function() {
//   document.querySelector(".progress").style.height = "44%";
//   document.querySelector(".personalizacion").classList.remove("active");
//   document.querySelector(".personalizacion").classList.add("active");
//   document.querySelector(".personalizacion").previousElementSibling.classList.remove("active");
//   document.querySelector(".personalizacion").nextElementSibling.classList.remove("active");
// });

// paso04.addEventListener("click", function() {
//   document.querySelector(".progress").style.height = "71%";
//   document.querySelector(".especificacion").classList.remove("active");
//   document.querySelector(".especificacion").classList.add("active");
//   document.querySelector(".especificacion").previousElementSibling.classList.remove("active");
//   document.querySelector(".especificacion").nextElementSibling.classList.remove("active");
// });

// paso05.addEventListener("click", function() {
//   document.querySelector(".progress").style.height = "100%";
//   document.querySelector(".entrega").classList.remove("active");
//   document.querySelector(".entrega").classList.add("active");
//   document.querySelector(".entrega").previousElementSibling.classList.remove("active");
//   document.querySelector(".entrega").nextElementSibling.classList.remove("active");
// });

// Get all elements with class "paso"
const pasos = document.querySelectorAll(".paso");

// Loop through each "paso" element and add click event listener
pasos.forEach((paso) => {
  paso.addEventListener("click", function() {
    // Add "active" class to current element and previous siblings
    this.classList.add("active");
    let previousSibling = this.previousElementSibling;
    while (previousSibling) {
      previousSibling.classList.add("active");
      previousSibling = previousSibling.previousElementSibling;
    }
    // Remove "active" class from next siblings
    let nextSibling = this.nextElementSibling;
    while (nextSibling) {
      nextSibling.classList.remove("active");
      nextSibling = nextSibling.nextElementSibling;
    }
  });
});

// Get all elements with class "paso01" to "paso05"
const paso01 = document.querySelector(".paso01");
const paso02 = document.querySelector(".paso02");
const paso03 = document.querySelector(".paso03");
const paso04 = document.querySelector(".paso04");
const paso05 = document.querySelector(".paso05");

// Add click event listener to each "paso" element
paso01.addEventListener("click", function() {
  // Update progress bar and show corresponding section
  document.querySelector(".progress").style.height = "0%";
  document.querySelector(".evaluacion").classList.remove("active");
  document.querySelector(".evaluacion").classList.add("active");
  document.querySelector(".diseno").classList.remove("active");
  document.querySelector(".personalizacion").classList.remove("active");
  document.querySelector(".especificacion").classList.remove("active");
  document.querySelector(".entrega").classList.remove("active");
});

paso02.addEventListener("click", function() {
  document.querySelector(".progress").style.height = "24%";
  document.querySelector(".diseno").classList.remove("active");
  document.querySelector(".diseno").classList.add("active");
  document.querySelector(".evaluacion").classList.remove("active");
  document.querySelector(".personalizacion").classList.remove("active");
  document.querySelector(".especificacion").classList.remove("active");
  document.querySelector(".entrega").classList.remove("active");
});

paso03.addEventListener("click", function() {
  document.querySelector(".progress").style.height = "44%";
  document.querySelector(".personalizacion").classList.remove("active");
  document.querySelector(".personalizacion").classList.add("active");
  document.querySelector(".evaluacion").classList.remove("active");
  document.querySelector(".diseno").classList.remove("active");
  document.querySelector(".especificacion").classList.remove("active");
  document.querySelector(".entrega").classList.remove("active");
});

paso04.addEventListener("click", function() {
  document.querySelector(".progress").style.height = "71%";
  document.querySelector(".especificacion").classList.remove("active");
  document.querySelector(".especificacion").classList.add("active");
  document.querySelector(".evaluacion").classList.remove("active");
  document.querySelector(".personalizacion").classList.remove("active");
  document.querySelector(".diseno").classList.remove("active");
  document.querySelector(".entrega").classList.remove("active");
});

paso05.addEventListener("click", function() {
  document.querySelector(".progress").style.height = "100%";
  document.querySelector(".entrega").classList.remove("active");
  document.querySelector(".entrega").classList.add("active");
  document.querySelector(".evaluacion").classList.remove("active");
  document.querySelector(".personalizacion").classList.remove("active");
  document.querySelector(".especificacion").classList.remove("active");
  document.querySelector(".diseno").classList.remove("active");
});