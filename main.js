/* ****************************************************
 * Feel free to modify the code any way you seem fit. *******************
 * I do ask that you add me the orginal author to the finished project, *
 * this could be in the comments or even a function named after me. *****
 * Author: Charles Eudy *********************************************
 * Date: 7/28/2017      *
 * Language: p5 JS      *
 * Version: 1.01        *
 * Thank you and Enjoy! *
 ************************
 */

var angle = 0;
var slider;
function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI / 4, 0.1);
}

function draw() {
  angle = slider.value();
  background(135, 206, 250);
  stroke(255);
  translate(200, height);
  branch(100);
}

function branch(len){
    line(0, 0, 0, -len);
    translate(0, -len);
    
    if(len > 4){
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
        
    }
    //line(0, 0, 0, -len * 0.67)
}