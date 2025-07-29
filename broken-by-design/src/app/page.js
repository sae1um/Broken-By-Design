"use client";

import { useEffect } from "react";
import HeroSection from "../components/hero-section";
import ProjectsSection from "../components/projects";
import Background from "@/components/background";

export default function Home() {
    const possibleTitles = [
        "Bad design choices",
        "This site might be Broken",
        "404 Not Found",
        "How are you doing?",
        "This site is really bad",
        "Why are you still here",
        "Nothing makes sense",
        "Website Title",
        "Ugh",
        "Hello World!",
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            const randomNumber = Math.floor(Math.random() * possibleTitles.length);
            document.title = possibleTitles[randomNumber];
        }, 5000);
        return () => clearInterval(interval);
    });
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Background />
            <HeroSection />
            <ProjectsSection />
        </div>
    );
}
