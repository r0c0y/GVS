"use client";

import { useEffect, useRef } from "react";

export function AnalyticsTracker() {
    const hasTracked = useRef(false);

    useEffect(() => {
        if (hasTracked.current) return;

        const trackVisit = async () => {
            try {
                await fetch("/api/track", { method: "POST" });
                hasTracked.current = true;
            } catch (error) {
                // Silent fail
            }
        };

        trackVisit();
    }, []);

    return null;
}
