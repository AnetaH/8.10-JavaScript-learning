document.addEventListener("DOMContentLoaded", function(event) {
  console.log('Strona w pełni załadowana.');
  var withButtonClass = document.getElementsByClassName('button');

  for (var a = 0; a < withButtonClass.length; a++) {
    console.log(withButtonClass[a].innerText);
  }
})