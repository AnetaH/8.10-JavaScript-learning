window.onload = function() {
  console.log('Strona w pełni załadowana.');
  var withButtonClass = document.getElementsByClassName('button');

  for (var a = 0; a < withButtonClass.length; a++) {
    var text = withButtonClass[a].innerText;
    console.log(text);
  }
}