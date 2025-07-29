import { Button } from "@/components/ui/button";
import { AlertTriangle, Badge, Bug } from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "./logo";

export default function HeroSection() {
    const [glitchText, setGlitchText] = useState("Broken by Design");
    const [isGlitching, setIsGlitching] = useState(false);
    const glitchVariations = [
        "Br0k3n by D3s1gn",
        "B̴r̷o̸k̵e̶n̴ ̷b̸y̵ ̴D̶e̷s̸i̵g̶n̴",
        "Broken by Desi-- ERROR",
        "████ by Design",
        "Broken by Des1gn",
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setGlitchText(
                glitchVariations[
                    Math.floor(Math.random() * glitchVariations.length)
                ]
            );

            setTimeout(() => {
                setGlitchText("Broken By Design");
                setIsGlitching(false);
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-4xl mx-auto">
                <Logo size="xl" className="mx-auto"/>
                {/* Glitched Title */}
                <h1
                    className={`text-6xl md:text-8xl font-black mb-6 ${
                        isGlitching ? "animate-pulse text-red-500" : ""
                    }`}
                >
                    <span className="inline-block transform hover:skew-x-12 transition-transform duration-300">
                        {glitchText}
                    </span>
                </h1>

                {/* Sarcastic Taglines */}
                <div className="space-y-2 mb-8">
                    <p className="text-xl md:text-2xl text-gray-300 transform -rotate-1">
                        {"Good UX is overrated"}
                    </p>
                    <p className="text-lg text-gray-400 transform rotate-1 ml-8">
                        {"Built to be broken, broken to be built"}
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#explore">
                        <Button
                            size="lg"
                            className="text-white cursor-pointer bg-red-600 hover:bg-red-700 transform hover:rotate-3 transition-all duration-300"
                        >
                            <Bug className="mr-2 h-5 w-5" />
                            Explore the Chaos
                        </Button>
                    </a>
                    <a href="#explanation">
                        <Button
                            variant="outline"
                            size="lg"
                            className="cursor-pointer border-purple-500 text-purple-400 hover:bg-purple-500/10 transform hover:-rotate-2 transition-all duration-300 bg-transparent"
                        >
                            <AlertTriangle className="mr-2 h-5 w-5" />
                            Why Would You Do This?
                        </Button>
                    </a>
                </div>
            </div>

            {/* Floating Things*/}
            <div className="absolute top-20 left-10 transform rotate-12 opacity-60">
                <Badge />
            </div>
            <div className="absolute bottom-32 right-16 transform -rotate-6 opacity-60">
                <Badge />
            </div>
        </section>
    );
}
