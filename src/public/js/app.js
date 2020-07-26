function copy() {
  var textBox = document.querySelector(".curpInput");
  textBox.select();
  document.execCommand("copy");
}
