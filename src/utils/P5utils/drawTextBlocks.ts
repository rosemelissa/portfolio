import p5 from "p5";
import { ITextBlock } from "../../interfaces";

export default function drawTextBlocks(p: p5, textBlocks: ITextBlock[]): void {
  for (const item of textBlocks) {
    drawText(p, item);
  }
}

function drawText(p: p5, textBlock: ITextBlock) {
  const { graphics, textBox } = textBlock;
  const { position, color, message, textSize, plane } = textBox;
  const { x, y, z, direction } = position;
  const { v1, v2, v3 } = color;
  const { width, height } = plane;
  graphics.textSize(textSize);
  p.push();
  p.translate(x, y, z);
  p.rotateY(direction - (1 * p.PI) / 2);
  p.stroke(v1, v2, v3);
  graphics.stroke(255, 255, 255);
  graphics.fill(255, 255, 255);
  graphics.background(0);

  graphics.text(message, 0, 0, width, height);
  graphics.textAlign(p.CENTER, p.CENTER);
  p.texture(graphics);
  p.plane(width, height, 2, 2);
  p.pop();
}
