function getTriangleArea(a,h) {
    if (a<0 && h<0) {
        return 'Nieprawidłowe dane'
    } else {
        return a*h/2
    }
};
console.log(getTriangleArea(10,6));
var triangle1Area = getTriangleArea(10, 15);
console.log('Pole trójkąta to ' +triangle1Area);
var triangle2Area = getTriangleArea(15, 20);
console.log('Pole trójkąta to ' +triangle2Area);
var triangle3Area = getTriangleArea(20, 25);
console.log('Pole trójkąta to ' +triangle3Area);