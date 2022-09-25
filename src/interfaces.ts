import p5 from "p5";

export interface IPosition {
  x: number;
  y: number;
  z: number;
  direction: number;
}

export interface IColor {
  v1: number;
  v2: number;
  v3: number;
}

export interface ITextBlock {
  graphics: p5.Graphics;
  textBox: ITextBox;
}

export interface ITextBox {
  position: IPosition;
  color: IColor;
  message: string;
  textSize: number;
  plane: {
    width: number;
    height: number;
  }
}
