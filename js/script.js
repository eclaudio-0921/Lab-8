function init(){
  var button = document.getElementById(´entrybutton´);

  function showMeText(){
    var textbox = document.getElementById(´entryinput´);
    document.getElementById(´textoutput´).innerHTML = textbox.value;
    alert(´Eric Claudio: ¨ + textbox.value);
  }

  button.addEvenListener(´click´, showMeText);
  }

window.addEventListener(´load´, init);
