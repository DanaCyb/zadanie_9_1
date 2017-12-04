function drawTree(h) {
    for(var i=0; i<h;i++){
        var star = ' ';
        for(j=0; j<i+1;j++){
            star += '*';}
        console.log(star);
    }
}
drawTree(5)