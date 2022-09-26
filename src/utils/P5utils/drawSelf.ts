import p5 from "p5";
import { IPosition } from "../../interfaces";

export default function drawSelf(p: p5, myPosition: IPosition): void {
  p.push();
  p.translate(myPosition.x, myPosition.y, myPosition.z);
  p.stroke(255, 255, 255);
  p.sphere(2);
  p.pop();
}
