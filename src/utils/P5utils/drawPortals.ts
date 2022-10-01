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
  if (portalOrLink === "portal") {
    p.rotateY(p.PI / -2);
  }

  const palette = [
    "#a4508b",
    "#933f8a",
    "#822d89",
    "#711c88",
    "#681388",
    "#5f0a87",
    "#530879",
    "#47066b",
    "#3b035d",
    "#2f004f",
  ];

  p.push();
  p.noStroke();
  p.fill("gray");
  p.torus(50, 5);
  p.rotateX(p.PI / 2);
  for (let i = 10; i >= 1; i--) {
    p.fill(palette[(i - 1 + Math.floor(p.frameCount / 3)) % 10]);
    p.cylinder(5 * i, 5 + 1 / i);
  }
  p.pop();
  p.pop();
}
