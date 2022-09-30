import p5 from "p5";
import { IPosition } from "../../interfaces";
import drawRocket from "./drawRocket";

export default function drawSelf(p: p5, myPosition: IPosition): void {
  p.push();
  p.translate(myPosition.x, myPosition.y, myPosition.z);
  p.rotateY(-myPosition.direction);
  drawRocket(p);
  // p.push();
  // p.noStroke();
  // p.rotateZ(3*p.PI/-4);
  // p.push();
  // p.translate(0, -5, 0);
  // // p.stroke('red');
  // p.fill('red');
  // p.cone(10, 10);
  // p.translate(0, 5, 0);
  // // p.stroke('white')
  // p.fill('white');
  // p.cylinder(5, 10);
  // p.translate(4, 0, 0);
  // p.rotateY(p.PI/2);
  // // p.stroke('black');
  // p.fill('black');
  // p.torus(2, 1);
  // p.rotateY(p.PI/-2);
  // p.translate(-4, 10, 0);
  // // p.stroke('red');
  // p.fill('red');
  // p.cone(5, 10);
  // // if (p.keyIsDown(p.UP_ARROW)) {
  // // for (let i = 0; i < 10; i++) {
  // // 		p.push();
  // // 		p.translate(p.random(-5, 5), p.random(-20, -30), p.random(-5, 5));
  // //     // p.stroke('orange');
  // // 		p.fill('orange');
  // // 		p.cone(2, 2);
  // // 		p.pop();
  // // 	}
  // // }
  // p.pop();

  // p.stroke(255, 255, 255);
  // p.sphere(2);
  p.pop();
}
