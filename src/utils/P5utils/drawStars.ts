import p5 from "p5";

function drawStars(p: p5, stars: { x: number; y: number; z: number }[]): void {
  for (const star of stars) {
    p.push();
    p.translate(star.x, star.y, star.z);
    p.stroke(255, 255, 255);
    p.sphere(p.random(1, 3));
    p.pop();
  }
}

export default drawStars;
