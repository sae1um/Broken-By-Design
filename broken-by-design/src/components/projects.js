import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/projects-list";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsSection() {
    return (
        <section id="explore" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center transform -skew-x-6">
                    {"Hall of Shame"}
                </h2>
                <p className="text-gray-400 text-center mb-12 transform skew-x-3">
                    {"A curated collection of digital disasters"}
                </p>

                {/* Intentionally Broken Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className={`bg-gray-900 border-gray-800 hover:border-red-500 transition-all duration-300 transform ${
                                index % 2 === 0
                                    ? "rotate-1 hover:rotate-0"
                                    : "-rotate-1 hover:rotate-0"
                            } ${index === 2 ? "md:translate-y-4" : ""} ${
                                index === 4 ? "lg:-translate-y-2" : ""
                            }`}
                        >
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-white text-lg">
                                        {project.title}
                                    </CardTitle>
                                    <div>
                                        GIF PLACE HOLDER
                                        {}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-400 mb-4">
                                    {project.description}
                                </CardDescription>
                                <Link href={`/explore/${project.path}`}>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full pointer-cursor border-gray-700 hover:border-red-500 hover:text-red-400 transform hover:scale-105 transition-all duration-300 bg-transparent"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        {"View Disaster"}
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
