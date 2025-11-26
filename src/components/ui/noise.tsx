"use client";

import { useRef, useEffect } from "react";

interface NoiseProps {
    patternSize?: number;
    patternScaleX?: number;
    patternScaleY?: number;
    patternRefreshInterval?: number;
    patternAlpha?: number;
    className?: string;
}

export default function Noise({
    patternSize = 250,
    patternScaleX = 1,
    patternScaleY = 1,
    patternRefreshInterval = 2,
    patternAlpha = 15,
    className,
}: NoiseProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let frameId: number;
        let frameCount = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const drawNoise = () => {
            const w = canvas.width;
            const h = canvas.height;
            const idata = ctx.createImageData(w, h);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000 | (Math.random() * 255); // Random noise
                }
            }

            ctx.putImageData(idata, 0, 0);
        };

        // Better Noise Implementation using simple random rects for performance/aesthetic
        const drawGrain = () => {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "rgba(255, 255, 255, " + patternAlpha / 255 + ")";

            for (let i = 0; i < w * h * 0.005; i++) { // Density
                const x = Math.random() * w;
                const y = Math.random() * h;
                ctx.fillRect(x, y, 1, 1);
            }
        };

        const loop = () => {
            frameId = requestAnimationFrame(loop);
            frameCount++;
            if (frameCount % patternRefreshInterval === 0) {
                drawGrain();
            }
        };

        resize();
        window.addEventListener("resize", resize);
        loop();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", resize);
        };
    }, [patternRefreshInterval, patternAlpha]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 z-[9998] pointer-events-none w-full h-full ${className}`}
            style={{ opacity: patternAlpha / 100 }}
        />
    );
}
