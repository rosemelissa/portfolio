import p5 from "p5";
import { useEffect, useRef } from "react";
import { IPosition, ITextBlock } from "./interfaces";
import { textBoxes } from "./utils/P5utils/textBoxes";
import { portals, links } from "./utils/P5utils/portalsAndLinks";
import drawSelf from "./utils/P5utils/drawSelf";
import drawPortals from "./utils/P5utils/drawPortals";
import drawTextBlocks from "./utils/P5utils/drawTextBlocks";
import { floorTextBoxes } from "./utils/P5utils/floorTextBoxes";
import drawFloorTextBlocks from "./utils/P5utils/drawFloorTextBlocks";
import drawStars from "./utils/P5utils/drawStars";
// import rocketPalette from './P5Objects/vividmemory8-1x.png';
// import rocketObject from './P5Objects/rocketwithcolours.obj';

let myCamera: p5.Camera;
const myPosition: IPosition = { x: 0, y: 0, z: 0, direction: 0 };
let instructions: p5.Graphics;
const textBlocks: ITextBlock[] = [];
const floorTextBlocks: ITextBlock[] = [];
let portal: p5.Graphics;
const stars: { x: number; y: number; z: number }[] = [];
// let myModel: p5.Geometry;
// let textureImage: p5.Graphics | p5.Image | p5.MediaElement;

interface P5ComponentProps {
  setPage: React.Dispatch<
    React.SetStateAction<
      | "home"
      | "todo-app"
      | "restaurant"
      | "playlist-converter"
      | "pokemon-top-trumps"
    >
  >;
}

function P5Component({ setPage }: P5ComponentProps): JSX.Element {
  const p5ContainerRef = useRef<HTMLInputElement>(null);
  function sketch(p: p5) {
    // p.preload = function () {
    // 	myModel = p.loadModel("./P5Objects/rocketwithcolours.obj", true);
    // 	textureImage = p.loadImage(rocketPalette);
    // }
    p.setup = function () {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
      p.background(0);
      // p.debugMode(500, 10);
      myCamera = p.createCamera();
      moveCamera();
      instructions = p.createGraphics(200, 200);
      instructions.textSize(75);
      portal = p.createGraphics(100, 100);
      for (const textBox of textBoxes) {
        textBlocks.push({
          graphics: p.createGraphics(textBox.plane.width, textBox.plane.height),
          textBox,
        });
      }
      for (const textBox of floorTextBoxes) {
        floorTextBlocks.push({
          graphics: p.createGraphics(textBox.plane.width, textBox.plane.height),
          textBox,
        });
      }
      for (let i = 0; i < 100; i++) {
        let x = p.random(-1000, 1000);
        let y = p.random(-1000, 1000);
        let z = p.random(-1000, 1000);
        while (x * x + y * y + z * z < 1000000) {
          x = p.random(-1000, 1000);
          y = p.random(-1000, 1000);
          z = p.random(-1000, 1000);
        }
        stars.push({ x, y, z });
      }
    };

    p.draw = function () {
      p.background(0);
      p.orbitControl(-5, -5, -5);

      //Add some lights (every frame!) ------------------------------------------------
      //Add directional light to surfaces which face it
      //Params: (color, directionVector)
      p.directionalLight(
        p.color(255, 255, 255),
        p.createVector(0.8, -0.5, -0.2)
      );
      // p.push();
      // p.translate(0, 0, 0);
      // p.texture(textureImage);
      // p.fill(255, 255, 255);
      // p.stroke(255, 255, 255);
      // p.model(myModel);
      // // p.sphere(5);
      // p.pop();
      //Add a little light evenly to ALL surfaces.  Not too much or we'll see no shadow
      // p.ambientLight(180, 150, 150);
      p.ambientLight(150, 150, 150);
      drawSelf(p, myPosition);
      moveSelf();
      drawTextBlocks(p, textBlocks);
      drawFloorTextBlocks(p, floorTextBlocks);
      // for (const item of textBlocks) {
      //   drawText(item);
      // }
      drawPortals(p, portal);
      checkForRedirects();
      drawStars(p, stars);
    };

    function checkForRedirects() {
      for (const portal of portals) {
        if (
          myPosition.x > portal.x - 30 &&
          myPosition.x < portal.x + 30 &&
          myPosition.z > portal.z - 30 &&
          myPosition.z < portal.z + 30
        ) {
          setPage(portal.name);
          myPosition.x -= 50;
          myPosition.z -= 50;
        }
      }
      for (const link of links) {
        if (
          myPosition.x > link.x - 30 &&
          myPosition.x < link.x + 30 &&
          myPosition.z > link.z - 30 &&
          myPosition.z < link.z + 30
        ) {
          window.open(link.url);
          myPosition.x -= 50;
          myPosition.z -= 50;
        }
      }
    }

    function moveSelf() {
      if (p.keyIsDown(p.RIGHT_ARROW)) {
        myPosition.direction += 0.1;
        moveCamera();
      }
      if (p.keyIsDown(p.LEFT_ARROW)) {
        myPosition.direction -= 0.1;
        moveCamera();
      }
      if (p.keyIsDown(p.UP_ARROW)) {
        myPosition.x += 10 * p.cos(myPosition.direction);
        myPosition.z += 10 * p.sin(myPosition.direction);
        moveCamera();
      }
      if (p.keyIsDown(p.DOWN_ARROW)) {
        myPosition.x -= 10 * p.cos(myPosition.direction);
        myPosition.z -= 10 * p.sin(myPosition.direction);
        moveCamera();
      }
    }

    function moveCamera() {
      myCamera.setPosition(
        myPosition.x - 200 * p.cos(myPosition.direction),
        -100,
        myPosition.z - 200 * p.sin(myPosition.direction)
      );
      myCamera.lookAt(myPosition.x, -50, myPosition.z);
    }
  }
  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    if (p5ContainerRef.current) {
      const p5Instance = new p5(sketch, p5ContainerRef.current);
      return () => {
        p5Instance.remove();
      };
    }

    // On component destruction, delete the p5 instance
    // eslint-disable-next-line
  }, []);

  return <div className="P5Component" ref={p5ContainerRef}></div>;
}

export default P5Component;
