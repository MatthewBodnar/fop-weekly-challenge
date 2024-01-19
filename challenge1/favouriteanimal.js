noStroke();

let b_color_r = 80;
let b_color_g = 205;
let b_color_b = 255;
background(b_color_r,b_color_g,b_color_b);

translate(150, 0);

rotate(PI / 9);

//ear1
fill(220, 47, 2);
triangle(0,300,100,0,200,100);

//ear2
fill(232, 93, 4);
triangle(600,300,500,0,400,100);

//face1
fill(232, 93, 4);
quad(0,300,200,100,300,100,300,500);

//face2
fill(220, 47, 2);
quad(600,300,400,100,300,100,300,500);

//eye1
fill(0,0,0);
ellipse(210,230,70);

//eye2
ellipse(390,230,70);

//light1
fill(255,255,255);
ellipse(200,220,10);

//light2
ellipse(380,220,10);

//nose
fill(0,0,0);
triangle(300,500,250,468,350,468);

//neck1
fill(255,255,255);
triangle(250,468,50,250,0,300);

//neck1
triangle(350,468,550,250,600,300);