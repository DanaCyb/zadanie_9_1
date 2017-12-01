var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var result1 = dinosaur.toUpperCase();
// console.log(result1);
var result2 = text.replace('Velociraptor', result1);
// console.log(result2);
var x = text.length/2;
var result3 = result2.slice(0, x);
console.log(result3);