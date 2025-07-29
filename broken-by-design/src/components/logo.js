import { cn } from "@/lib/utils";

const sizeMap = {
    sm: { width: 40, height: 40 },
    md: { width: 64, height: 64 },
    lg: { width: 128, height: 128 },
    xl: { width: 160, height: 160 },
};

export default function Logo({ size = "md", className, width, height }) {
    const dimensions = width && height ? { width, height } : sizeMap[size];

    return (
        <div
            className={cn(
                "relative overflow-hidden bg-gradient-to-br from-red-500 to-purple-600 rounded-lg",
                className
            )}
            style={{ width: dimensions.width, height: dimensions.height }}
        >
            {/* Base overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* Geometric elements */}
            <div
                className="absolute bg-white transform rotate-45"
                style={{
                    top: dimensions.height * 0.125,
                    left: dimensions.width * 0.125,
                    width: dimensions.width * 0.1875,
                    height: dimensions.height * 0.1875,
                }}
            ></div>

            <div
                className="absolute bg-white"
                style={{
                    bottom: dimensions.height * 0.125,
                    right: dimensions.width * 0.125,
                    width: dimensions.width * 0.25,
                    height: dimensions.height * 0.0625,
                }}
            ></div>

            {/* Center skull emoji */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold flex items-center justify-center"
                style={{ fontSize: dimensions.width * 0.25 }}
            >
                💀
            </div>

            {/* Crack effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-transparent opacity-30 transform rotate-12"></div>
        </div>
    );
}
