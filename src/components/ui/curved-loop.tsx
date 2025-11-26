"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface CurvedLoopProps {
    marqueeText?: string;
    speed?: number;
    curveAmount?: number;
    direction?: 'left' | 'right';
    interactive?: boolean;
    className?: string;
}

export default function CurvedLoop({
    marqueeText = "Welcome to GVS ✦",
    speed = 1,
    curveAmount = 200,
    direction = 'right',
    interactive = false,
    className
}: CurvedLoopProps) {
    const pathRef = useRef<SVGPathElement>(null);
    const textRef = useRef<SVGTextPathElement>(null);
    const offsetRef = useRef(0);
    const requestRef = useRef<number>(0);

    useEffect(() => {
        const animate = () => {
            if (textRef.current) {
                offsetRef.current += direction === 'right' ? speed : -speed;
                textRef.current.setAttribute('startOffset', `${offsetRef.current}px`);
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);
    }, [speed, direction]);

    // Calculate path d based on curveAmount
    // Simple quadratic bezier curve
    const width = 1000;
    const height = 300;
    const pathD = `M0,${height / 2} Q${width / 2},${height / 2 - curveAmount} ${width},${height / 2}`;

    return (
        <div className={cn("w-full overflow-hidden", className)}>
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
                <path
                    id="curve-path"
                    d={pathD}
                    fill="transparent"
                    ref={pathRef}
                />
                <text className="text-4xl font-heading font-bold fill-white uppercase tracking-widest">
                    <textPath
                        ref={textRef}
                        href="#curve-path"
                        startOffset="0"
                    >
                        {marqueeText.repeat(10)}
                    </textPath>
                </text>
            </svg>
        </div>
    );
}
