import p5 from "p5";

const chevronArray: { x: number; z: number; direction: number }[] = [
  { x: 150, z: -600, direction: Math.PI / 2 },
  {
    x: 300 * Math.sin(Math.PI / 4) - 150,
    z: -900 - 300 * Math.cos(Math.PI / 4),
    direction: (3 * Math.PI) / 4,
  },
  { x: -300, z: -1200, direction: Math.PI },
  {
    x: -(300 * Math.sin(Math.PI / 4)) - 450,
    z: -900 - 300 * Math.cos(Math.PI / 4),
    direction: (5 * Math.PI) / 4,
  },
  { x: -750, z: -600, direction: (3 * Math.PI) / 2 },
];

export default function drawChevrons(p: p5): void {
  for (const chevron of chevronArray) {
    p.push();
    p.stroke("white");
    p.translate(chevron.x, 100, chevron.z);
    p.rotateY(chevron.direction);
    p.sphere((Math.floor(p.frameCount/6) % 10) / 9 + 1);

    for (let i = 1; i <= 5; i++) {
      p.translate(-5, 0, -5 * i);
      p.sphere(((Math.floor(p.frameCount/6)+i)%10)/10 + 1);
      p.translate(0, 0, 10 * i);
      p.sphere(((Math.floor(p.frameCount/6)+i)%10)/10 + 1);
      p.translate(0, 0, -5 * i);
    }
    p.translate(-75, 0, 0);
    p.sphere((Math.floor(p.frameCount/6) % 10) / 9 + 1);
    for (let i = 1; i <= 5; i++) {
      p.translate(-5, 0, -5 * i);
      p.sphere(((Math.floor(p.frameCount/6)+i)%10)/10 + 1);
      p.translate(0, 0, 10 * i);
      p.sphere(((Math.floor(p.frameCount/6)+i)%10)/10 + 1);
      p.translate(0, 0, -5 * i);
    }
    p.translate(225, 0, 0);
    p.sphere((Math.floor(p.frameCount/6) % 10) / 9 + 1);
    for (let i = 1; i <= 5; i++) {
      p.translate(-5, 0, -5 * i);
      p.sphere(((Math.floor(p.frameCount/6)+i)%10)/10 + 1);
      p.translate(0, 0, 10 * i);
      p.sphere(((Math.floor(p.frameCount/6)+i)%10)/10 + 1);
      p.translate(0, 0, -5 * i);
    }
    p.pop();
  }
}
