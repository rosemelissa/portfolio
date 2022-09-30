import p5 from "p5";
import { IPosition } from "../../interfaces";
import drawRocket from "./drawRocket";

export default function drawSelf(p: p5, myPosition: IPosition): void {
  p.push();
  p.translate(myPosition.x, myPosition.y, myPosition.z);
  p.rotateY(-myPosition.direction);
  drawRocket(p);
  p.pop();
}
