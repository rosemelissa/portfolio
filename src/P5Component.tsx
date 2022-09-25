import p5 from 'p5'
import { useEffect, useRef } from 'react';

let myCamera: p5.Camera;
const myPosition = {x: 0, y: 0, z: 0, direction: 0};
let cameraChoice: 'chase'|'far' = 'chase';
let instructions: p5.Graphics;


function sketch(p: p5) {
    // p is a reference to the p5 instance this sketch is attached to
    p.setup = function() {
        p.createCanvas(400, 400, p.WEBGL);
        p.background(200);
        p.debugMode(500, 10); // Add a grid and an axes guide.  RGB indicate XYZ, respectively (so Red is X axis. Direction of the stick outward indicates +ve on that axis.)

	//optional
	//Set up a non-default camera position and facing.  You *can* delete these and accept the defaults
	myCamera = p.createCamera();
	myCamera.setPosition(100, -200, 400);
	myCamera.lookAt(0, 0, 0);
    instructions = p.createGraphics(200, 200);
    instructions.textSize(75);
    }

    p.draw = function() {
        p.background(200);
        p.orbitControl(5, 5, 0.01);

	//Add some lights (every frame!) ------------------------------------------------
	//Add directional light to surfaces which face it
	//Params: (color, directionVector)
	p.directionalLight(p.color(150, 100, 0), p.createVector(-0.8, -0.5, -0.2));

	//Add a little light evenly to ALL surfaces.  Not too much or we'll see no shadow
	p.ambientLight(180, 150, 150);
    p.push();
    p.translate(myPosition.x, myPosition.y, myPosition.z);
    p.fill(204, 102, 0);
    p.sphere(2);
    p.pop();
    moveSelf();
    moveCamera();
        keyPressed();
        // your draw code here
        drawInstructions();
    }

    function drawInstructions(){
        p.push();
        p.translate(0, 0, 0);
        p.fill(0, 0, 0)
        instructions.background(255);
  instructions.text('hello!', 0, 100);
  //pass image as texture
  p.texture(instructions);
  p.plane(50);
  p.pop();
        // p.push();
        // p.fill(204, 102, 0);
        // p.translate(20, 0, 0);
        // p.text('Instructions', 0, 0);
        // p.pop();
    }

    function moveSelf(){
        if (p.keyIsDown(p.RIGHT_ARROW)) {
            myPosition.direction += 0.1;
                // myCamera.lookAt(myPosition.x, 0, myPosition.z);
        }	
        if (p.keyIsDown(p.LEFT_ARROW)) {
            myPosition.direction -= 0.1;
            // myCamera.lookAt(myPosition.x, 0, myPosition.z);
        }	
        if (p.keyIsDown(p.UP_ARROW)) {
            myPosition.x += 3*p.cos(myPosition.direction);
            myPosition.z += 3*p.sin(myPosition.direction);
        }	
        if (p.keyIsDown(p.DOWN_ARROW)) {
            myPosition.x -= 3*p.cos(myPosition.direction);
            myPosition.z -= 3*p.sin(myPosition.direction);
        }	
        }

        function moveCamera() {
            if (cameraChoice === 'chase') {
                myCamera.setPosition(myPosition.x - 50*p.cos(myPosition.direction), -30, myPosition.z - 50*p.sin(myPosition.direction));
                myCamera.lookAt(myPosition.x, 0, myPosition.z);		
            } else if (cameraChoice === 'far') {
                    myCamera.setPosition(myPosition.x, -400, myPosition.z);
                    myCamera.lookAt(myPosition.x - 50*p.cos(myPosition.direction), myPosition.y, myPosition.z - 50*p.sin(myPosition.direction));
            }
        }
        
        function keyPressed() {
            if (p.key === 'c') {
                if (cameraChoice === 'chase') {
                    cameraChoice = 'far'
                } else {
                    // myCamera.lookAt(myPlayer.x, 0, myPlayer.z);
                    cameraChoice = 'chase';	
                }
            }
        }
    
}

function P5Component(): JSX.Element {
    // create a reference to the container in which the p5 instance should place the canvas
    const p5ContainerRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // On component creation, instantiate a p5 object with the sketch and container reference 
        if (p5ContainerRef.current) {
            const p5Instance = new p5(sketch, p5ContainerRef.current);
            return () => {
                p5Instance.remove();
            }
        }

        // On component destruction, delete the p5 instance
    }, []);

    return (
        <div className="P5Component" ref={p5ContainerRef}></div>
    );
}

export default P5Component;