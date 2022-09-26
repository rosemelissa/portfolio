import p5 from "p5";
import { useEffect, useRef } from "react";
import { IPosition, ITextBlock } from "./interfaces";
import { textBoxes } from "./utils/P5utils/textBoxes";
import { portals, links } from './utils/P5utils/portalsAndLinks'

let myCamera: p5.Camera;
const myPosition: IPosition = { x: 0, y: 0, z: 0, direction: 0 };
let cameraChoice: "chase" | "far" | "back" = "back";
let instructions: p5.Graphics;
const textBlocks: ITextBlock[] = [];

let portal: p5.Graphics;

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
    p.setup = function () {
      p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8, p.WEBGL);
      p.background(200);
      p.debugMode(500, 10);
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
    };

    p.draw = function () {
      p.background(200);
      p.orbitControl(5, 5, 0.01);

      //Add some lights (every frame!) ------------------------------------------------
      //Add directional light to surfaces which face it
      //Params: (color, directionVector)
      p.directionalLight(
        p.color(255, 255, 255),
        p.createVector(-0.8, -0.5, -0.2)
      );

      //Add a little light evenly to ALL surfaces.  Not too much or we'll see no shadow
      p.ambientLight(180, 150, 150);

      drawSelf();
      moveSelf();
      keyPressed();
      for (const item of textBlocks) {
        drawText(item);
      }
      drawPortals();
      checkForRedirects();
    };

    function drawSelf() {
      p.push();
      p.translate(myPosition.x, myPosition.y, myPosition.z);
      p.fill(204, 102, 0);
      p.sphere(2);
      p.pop();
    }

    function drawPortals() {
      for (const portal of portals) {
        drawPortal(portal.x, portal.z);
      }
      for (const link of links) {
        drawPortal(link.x, link.z);
      }
    }

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

    function drawText(textBlock: ITextBlock) {
      const { graphics, textBox } = textBlock;
      const { position, color, message, textSize, plane } = textBox;
      const { x, y, z, direction } = position;
      const { v1, v2, v3 } = color;
      const { width, height } = plane;
      graphics.textSize(textSize);
      p.push();
      p.translate(x, y, z);
      p.rotateY(direction - (1 * p.PI) / 2);
      p.fill(v1, v2, v3);
      graphics.background(255);
      graphics.text(message, 0, 0, width, height);
      graphics.textAlign(p.CENTER, p.CENTER);
      p.texture(graphics);
      p.plane(width, height, 2, 2);
      p.pop();
    }

    function drawPortal(x: number, z: number) {
      p.push();
      p.translate(x, 0, z);
      p.rotateX(p.PI / -2);
      // portal.background(138,43,226);
      // p.fill(200, 200, 200);
      portal.fill(138, 43, 226);
      portal.circle(50, 50, 100);
      for (let i = 100; i >= 10; i -= 10) {
        portal.noStroke();
        portal.fill(0, 0, 0, 50);
        portal.circle(50, 50, i);
      }
      for (let i = 0; i < 20; i++) {
        portal.noStroke();
        portal.fill(247, 245, 77);
        portal.circle(p.random(0, 100), p.random(0, 100), 5);
      }
      // portal.background(100);
      p.texture(portal);
      p.plane(100, 100, 2, 2);
      p.pop();
    }

    function moveSelf() {
      if (p.keyIsDown(p.RIGHT_ARROW)) {
        myPosition.direction += 0.1;
        moveCamera();
        // myCamera.lookAt(myPosition.x, 0, myPosition.z);
      }
      if (p.keyIsDown(p.LEFT_ARROW)) {
        myPosition.direction -= 0.1;
        moveCamera();
        // myCamera.lookAt(myPosition.x, 0, myPosition.z);
      }
      if (p.keyIsDown(p.UP_ARROW)) {
        myPosition.x += 3 * p.cos(myPosition.direction);
        myPosition.z += 3 * p.sin(myPosition.direction);
        moveCamera();
      }
      if (p.keyIsDown(p.DOWN_ARROW)) {
        myPosition.x -= 3 * p.cos(myPosition.direction);
        myPosition.z -= 3 * p.sin(myPosition.direction);
        moveCamera();
      }
    }

    function moveCamera() {
      if (cameraChoice === "chase") {
        myCamera.setPosition(
          myPosition.x - 50 * p.cos(myPosition.direction),
          -30,
          myPosition.z - 50 * p.sin(myPosition.direction)
        );
        myCamera.lookAt(myPosition.x, 0, myPosition.z);
      } else if (cameraChoice === "far") {
        myCamera.setPosition(myPosition.x, -400, myPosition.z);
        myCamera.lookAt(
          myPosition.x - 50 * p.cos(myPosition.direction),
          myPosition.y,
          myPosition.z - 50 * p.sin(myPosition.direction)
        );
      } else if (cameraChoice === "back") {
        myCamera.setPosition(
          myPosition.x - 200 * p.cos(myPosition.direction),
          -100,
          myPosition.z - 200 * p.sin(myPosition.direction)
        );
        myCamera.lookAt(myPosition.x, -50, myPosition.z);
      }
    }

    function keyPressed() {
      if (p.key === "c") {
        if (cameraChoice === "chase") {
          cameraChoice = "far";
        } else {
          // myCamera.lookAt(myPlayer.x, 0, myPlayer.z);
          cameraChoice = "chase";
        }
      }
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
