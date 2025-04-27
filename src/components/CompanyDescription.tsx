import React, { useState, useRef, useEffect } from "react";

interface CompanyDescriptionProps {
    text: string;
}

const CompanyDescription: React.FC<CompanyDescriptionProps> = ({ text }) => {
    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState<number | "auto">(0);
    const contentRef = useRef<HTMLParagraphElement>(null);
    const limit = 300;

    const isLong = text.length > limit;
    const isExpandedOrShort = expanded || !isLong;
    const displayedText = isExpandedOrShort ? text : text.slice(0, limit) + "...";

    useEffect(() => {
        if (contentRef.current) {
            if (expanded) {
                setHeight(contentRef.current.scrollHeight);
                setTimeout(() => setHeight("auto"), 300);
            } else {
                setHeight(contentRef.current.scrollHeight);
                requestAnimationFrame(() => {
                    setHeight(contentRef.current ? contentRef.current.scrollHeight : 0);
                    setTimeout(() => setHeight(100), 10);
                });
            }
        }
    }, [expanded]);

    return (
        <div className="mt-8 bg-gray-800 border border-gray-700 px-6 py-5 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">🏢 Company Description</h3>
            <div
                style={{
                    height: height === "auto" ? "auto" : `${height}px`,
                    overflow: "hidden",
                    transition: "height 0.3s ease",
                }}
            >
                <p
                    ref={contentRef}
                    className="text-gray-300 whitespace-pre-wrap leading-relaxed"
                >
                    {displayedText}
                </p>
            </div>
            {isLong && (
                <button
                    onClick={() => setExpanded((prev) => !prev)}
                    className="mt-4 text-sm text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded flex items-center gap-1 transition"
                >
                    {expanded ? (
                        <>
                            ▲ Show less
                        </>
                    ) : (
                        <>
                            ▼ Show more
                        </>
                    )}
                </button>
            )}
        </div>
    );
};

export default CompanyDescription;
