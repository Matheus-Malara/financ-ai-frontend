import { useState } from "react";

export default function CompanyDescription({ text }) {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    const isLong = text.length > limit;
    const displayedText = expanded || !isLong ? text : text.slice(0, limit) + "...";

    return (
        <div className="mt-6 bg-gray-50 border px-4 py-3 rounded-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Company Description</h3>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {displayedText}
            </p>
            {isLong && (
                <button
                    onClick={() => setExpanded((prev) => !prev)}
                    className="mt-2 text-sm text-blue-600 hover:underline"
                >
                    {expanded ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
}
