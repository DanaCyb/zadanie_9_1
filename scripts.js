var withButtons =document.getElementsByClassName('button');
console.log(withButtons);
var k = withButtons.length;
for(var j=0; j<k; j++){
    var text= withButtons[j].innerText;
    console.log(text);}