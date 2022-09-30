import p5 from "p5";

export default function drawRocket(p: p5): void {
  p.push();
  p.noStroke();
  p.rotateZ((3 * p.PI) / -4);
  p.push();
  p.translate(0, -5, 0);
  p.fill("red");
  p.cone(10, 10);
  p.translate(0, 5, 0);
  p.fill("white");
  p.cylinder(5, 10);
  p.translate(4, 0, 0);
  p.rotateY(p.PI / 2);
  p.fill("black");
  p.torus(2, 1);
  p.rotateX(p.PI / 2);
  p.translate(0, 0.5, 0);
  p.fill("lightblue");
  p.cylinder(2, 1);
  p.translate(0, -0.5, 0);
  p.rotateX(p.PI / -2);
  p.rotateY(p.PI / -2);
  p.translate(-4, 10, 0);
  p.fill("red");
  p.cone(5, 10);
  if (p.keyIsDown(p.UP_ARROW)) {
    for (let i = 0; i < 10; i++) {
      p.push();
      p.translate(p.random(-5, 5), p.random(-20, -30), p.random(-5, 5));
      p.fill("orange");
      p.cone(2, 2);
      p.pop();
    }
  }
  p.pop();
  p.pop();
}
