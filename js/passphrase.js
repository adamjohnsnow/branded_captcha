var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

xhr.onreadystatechange = function(){};
var textreturned = xhr.open("GET","text.txt");
xhr.send();


var form = document.getElementById('form');

form.onsubmit = function (event) {
  event.preventDefault();
  var input = document.getElementById('text').value;
    if (input == textreturned) {
      alert('passes')
    }
      else {
        alert('fails')
    }
}
