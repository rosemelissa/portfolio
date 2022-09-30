import { ITextBox } from "../../interfaces";

export const textBoxes: ITextBox[] = [
  {
    position: { x: 400, y: -80, z: -300, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Todo list",
    textSize: 10,
    plane: {
      width: 150,
      height: 50,
    },
  },
  {
    position: { x: 400, y: -80, z: -100, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Restaurant booking system",
    textSize: 10,
    plane: {
      width: 150,
      height: 50,
    },
  },
  {
    position: { x: 400, y: -80, z: 100, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "YouTube-to-Spotify playlist converter",
    textSize: 10,
    plane: {
      width: 150,
      height: 50,
    },
  },
  {
    position: { x: 400, y: -80, z: 300, direction: 0 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Pokemon Top Trumps",
    textSize: 10,
    plane: {
      width: 150,
      height: 50,
    },
  },
  {
    position: { x: 300, y: -80, z: 400, direction: Math.PI / -2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "GitHub",
    textSize: 10,
    plane: {
      width: 100,
      height: 50,
    },
  },
  {
    position: { x: 190, y: -80, z: 400, direction: Math.PI / -2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "LinkedIn",
    textSize: 10,
    plane: {
      width: 100,
      height: 50,
    },
  },
  {
    position: { x: 80, y: -80, z: 400, direction: Math.PI / -2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "CV",
    textSize: 10,
    plane: {
      width: 100,
      height: 50,
    },
  },
  {
    position: { x: -30, y: -80, z: 400, direction: Math.PI / -2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Creative Coding",
    textSize: 10,
    plane: {
      width: 100,
      height: 50,
    },
  },
  {
    position: { x: 0, y: -130, z: -300, direction: Math.PI / 2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Hi, I'm Melissa",
    textSize: 30,
    plane: {
      width: 250,
      height: 50,
    },
  },
  {
    position: { x: 0, y: -80, z: -300, direction: Math.PI / 2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "I'm a fullstack software engineer",
    textSize: 15,
    plane: {
      width: 250,
      height: 50,
    },
  },
  {
    position: {
      x: 300 * Math.sin(Math.PI / 4) - 300,
      y: -130,
      z: -600 - 300 * Math.cos(Math.PI / 4),
      direction: (3 * Math.PI) / 4,
    },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Tech skills",
    textSize: 30,
    plane: {
      width: 250,
      height: 50,
    },
  },
  {
    position: {
      x: 300 * Math.sin(Math.PI / 4) - 300,
      y: -80,
      z: -600 - 300 * Math.cos(Math.PI / 4),
      direction: (3 * Math.PI) / 4,
    },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "PostgreSQL, Express.js, Node.js, Git",
    textSize: 15,
    plane: {
      width: 250,
      height: 50,
    },
  },
  {
    position: { x: -300, y: -130, z: -1200, direction: Math.PI },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Tech skills",
    textSize: 30,
    plane: {
      width: 250,
      height: 50,
    },
  },
  {
    position: { x: -300, y: -80, z: -1200, direction: Math.PI },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "React, TypeScript, HTML, CSS",
    textSize: 15,
    plane: {
      width: 250,
      height: 50,
    },
  },
  {
    position: {
      x: -(300 * Math.sin(Math.PI / 4)) - 300,
      y: -130,
      z: -600 - 300 * Math.cos(Math.PI / 4),
      direction: (5 * Math.PI) / 4,
    },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Interests:",
    textSize: 30,
    plane: {
      width: 250,
      height: 50,
    },
  },
  {
    position: {
      x: -(300 * Math.sin(Math.PI / 4)) - 300,
      y: -80,
      z: -600 - 300 * Math.cos(Math.PI / 4),
      direction: (5 * Math.PI) / 4,
    },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "WebDev | 3D graphics | tech for good",
    textSize: 15,
    plane: {
      width: 250,
      height: 50,
    },
  },
  {
    position: { x: -600, y: -130, z: -300, direction: (3 * Math.PI) / 2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Personal interests",
    textSize: 30,
    plane: {
      width: 250,
      height: 50,
    },
  },
  {
    position: { x: -600, y: -80, z: -300, direction: (3 * Math.PI) / 2 },
    color: { v1: 0, v2: 0, v3: 0 },
    message: "Kpop | dance | art",
    textSize: 15,
    plane: {
      width: 250,
      height: 50,
    },
  },
];
