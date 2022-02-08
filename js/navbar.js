var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    //alert(xhr.responseText);
    document.write(xhr.responseText);
  }
}
xhr.open('GET', 'navbar.html', false);
xhr.send(null);