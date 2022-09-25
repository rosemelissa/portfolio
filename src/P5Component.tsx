import p5 from 'p5'
import { useEffect, useRef } from 'react';

function sketch(p: p5) {
    // p is a reference to the p5 instance this sketch is attached to
    p.setup = function() {
        p.createCanvas(400, 400);
        p.background(0);
        p.circle(200, 200, 400);
    }

    p.draw = function() {
        p.fill(204, 102, 0);
        p.circle(0, 0, 20);
        // your draw code here
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