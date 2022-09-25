import { ITextBox } from "./interfaces";

export const textBoxes: ITextBox[] = [
//   {
//     position: { x: 100, y: -100, z: 0, direction: 0 },
//     color: { v1: 0, v2: 0, v3: 0 },
//     message: "Welcome! Use arrow keys to move",textSize: 30,
//     plane: {
//         width: 300,
//         height: 100,
//     },
//   },
  {
    position: { x: 400, y: -50, z: -200, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "About me",textSize: 30,plane: {
        width: 150,
        height: 50,
    },
  },
  {
    position: { x: 400, y: -50, z: 0, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Projects",textSize: 30,plane: {
        width: 150,
        height: 50,
    },
  },
  {
    position: { x: 400, y: -50, z: 200, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Links",textSize: 30,plane: {
        width: 150,
        height: 50,
    },
  },
  {
    position: { x: 300, y: -100, z: -300, direction: Math.PI/2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Hi, I'm Melissa",textSize: 30,plane: {
        width: 250,
        height: 50,
    },
  },
  {
    position: { x: 300, y: -50, z: -300, direction: Math.PI/2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "I'm a fullstack engineer using the PERN stack",textSize: 15,plane: {
        width: 250,
        height: 50,
    },
  },
  {
    position: { x: -100, y: -100, z: -500, direction: Math.PI/2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Tech interests:",textSize: 30,plane: {
        width: 250,
        height: 50,
    },
  },
  {
    position: { x: -100, y: -50, z: -500, direction: Math.PI/2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "WebDev | 3D graphics | AI/ML",textSize: 15,plane: {
        width: 250,
        height: 50,
    },
  },
  {
    position: { x: 300, y: -100, z: -700, direction: Math.PI/2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Personal interests",textSize: 30,plane: {
        width: 250,
        height: 50,
    },
  },
  {
    position: { x: 300, y: -50, z: -700, direction: Math.PI/2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Kpop | dance | art",textSize: 15,plane: {
        width: 250,
        height: 50,
    },
  },
  {
    position: { x: 50, y: 0, z: 0, direction: Math.PI/-2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "test2",textSize: 30,plane: {
        width: 200,
        height: 50,
    },
  },
];
