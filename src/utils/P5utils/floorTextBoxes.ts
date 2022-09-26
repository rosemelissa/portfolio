import { ITextBox } from "../../interfaces";

export const floorTextBoxes: ITextBox[] = [
  {
    position: { x: 100, y: 100, z: 0, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Welcome! Use arrow keys to move",
    textSize: 30,
    plane: {
      width: 300,
      height: 100,
    },
  },
  {
    position: { x: 400, y: 100, z: -200, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "<-- About me",
    textSize: 30,
    plane: {
      width: 200,
      height: 50,
    },
  },
  {
    position: { x: 400, y: 100, z: 0, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "^ Projects ^",
    textSize: 30,
    plane: {
      width: 180,
      height: 50,
    },
  },
  {
    position: { x: 400, y: 100, z: 200, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Links -->",
    textSize: 30,
    plane: {
      width: 200,
      height: 50,
    },
  },
];
