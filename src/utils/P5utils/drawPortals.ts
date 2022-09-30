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

  const palette = ["#541c54", "#ac58af", "#f96cf8", "#d887ec", "#92a0c4"];

  p.push();
  p.noStroke();
  p.fill("gray");
  p.torus(50, 5);
  p.rotateX(p.PI / 2);
  for (let i = 49; i >= 5; i -= 5) {
    p.fill(palette[(Math.floor(i / 10) + Math.floor(p.frameCount / 3)) % 5]);
    p.cylinder(i, 5 + 1 / i);
  }
  p.pop();
  p.pop();
}
