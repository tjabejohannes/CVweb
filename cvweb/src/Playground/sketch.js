export default function sketch(p) {
    let canvas;

    p.setup = () => {
        canvas = p.createCanvas(window.screen.availWidth, window.screen.availHeight);
        p.noStroke();
    }

    p.draw = () => {
        p.background('black');
        p.ellipse(150, 100, 100, 100);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
        if (canvas) //Make sure the canvas has been created
            p.fill(newProps.color);
    }
}