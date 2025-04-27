import { motion } from "framer-motion";

export default function Loading() {
    const skeletonLinesTop = [
        { width: "w-1/2", height: "h-4" },
        { width: "w-2/3", height: "h-3" },
        { width: "w-1/3", height: "h-4" },
        { width: "w-full", height: "h-5" },
        { width: "w-5/6", height: "h-4" },
        { width: "w-1/4", height: "h-3" },
    ];

    const skeletonLinesBottom = [
        { width: "w-full", height: "h-5" },
        { width: "w-2/3", height: "h-4" },
        { width: "w-3/4", height: "h-6" },
        { width: "w-full", height: "h-4" },
        { width: "w-1/2", height: "h-5" },
        { width: "w-5/6", height: "h-4" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg"
        >
            {/* Top Title */}
            <div className="mb-8 h-6 bg-gray-700 rounded w-1/3 shimmer-delay"></div>

            {/* Lines */}
            <div className="space-y-4">
                {skeletonLinesTop.map((line, idx) => (
                    <div
                        key={idx}
                        className={`bg-gray-700 rounded ${line.height} ${line.width} shimmer`}
                    ></div>
                ))}
            </div>

            {/* Section Title */}
            <div className="mt-10 h-6 bg-gray-700 rounded w-1/3 shimmer-delay"></div>

            {/* Grid Bottom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {skeletonLinesBottom.map((line, idx) => (
                    <div
                        key={idx}
                        className={`bg-gray-700 rounded ${line.height} ${line.width} shimmer`}
                    ></div>
                ))}
            </div>
        </motion.div>
    );
}
