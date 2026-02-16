export default function Question({index, title, content}) {
    return (
        <details className="group border border-gray-700 rounded-2xl bg-[#1B1B26] overflow-hidden transition-all duration-300">
            <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-semibold text-lg select-none">
                <div className="flex gap-4">
                    <p>{String(index).padStart(2, "0") }.</p>
                    <p>{title}</p>

                </div>
                <svg
                    className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>

            </summary>

            <div className="px-6 pb-6 text-gray-300">{content}</div>

        </details>

    )
}