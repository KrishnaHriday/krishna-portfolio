import React, { useEffect, useRef } from "react";
import "./WaterBackground.css";

const WaterBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const wave = {
      y: height / 2,
      length: 0.01,
      amplitude: 40,
      frequency: 0.02,
    };

    let increment = wave.frequency;

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.moveTo(0, height / 2);

      for (let x = 0; x < width; x++) {
        const y =
          wave.y +
          Math.sin(x * wave.length + increment) * wave.amplitude * Math.sin(increment);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(0, 200, 255, 0.2)";
      ctx.lineWidth = 2;
      ctx.stroke();

      increment += wave.frequency;
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="water-canvas" />;
};

export default WaterBackground;
