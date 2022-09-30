import p5 from "p5";
import { portals, links } from "./portalsAndLinks";

export default function drawPortals(p: p5, portal: p5.Graphics): void {
  for (const projectPortal of portals) {
    drawPortal(p, portal, projectPortal.x, projectPortal.z, "portal");
  }
  for (const link of links) {
    drawPortal(p, portal, link.x, link.z, "link");
  }
}

function drawPortal(
  p: p5,
  portal: p5.Graphics,
  x: number,
  z: number,
  portalOrLink: "portal" | "link"
) {
  p.push();
  p.translate(x, 0, z);
  //   p.rotateX(p.PI / -2);
  if (portalOrLink === "portal") {
    p.rotateY(p.PI / -2);
  }
  // portal.background(138,43,226);
  // p.fill(200, 200, 200);

  const palette = ["#541c54", "#ac58af", "#f96cf8", "#d887ec", "#92a0c4"];

  p.push();
  p.noStroke();
  p.fill("gray");
  p.torus(50, 5);
  p.rotateX(p.PI / 2);
  console.log(Math.floor(p.frameCount / 60));
  for (let i = 49; i >= 5; i -= 5) {
    // console.log(palette[Math.floor(i/10)])

    p.fill(palette[(Math.floor(i / 10) + Math.floor(p.frameCount / 3)) % 5]);
    // fill(138, 43, 226, 255-(5*i));

    p.cylinder(i, 5 + 1 / i);
  }
  p.pop();

  // portal.fill(138, 43, 226);
  // portal.circle(50, 50, 100);
  // for (let i = 100; i >= 10; i -= 10) {
  //   portal.noStroke();
  //   portal.fill(0, 0, 0, 50);
  //   portal.circle(50, 50, i);
  // }
  // for (let i = 0; i < 20; i++) {
  //   portal.noStroke();
  //   portal.fill(247, 245, 77);
  //   portal.circle(p.random(0, 100), p.random(0, 100), 5);
  // }
  // // portal.background(100);
  // p.texture(portal);
  // p.plane(100, 100, 2, 2);

  p.pop();
}
