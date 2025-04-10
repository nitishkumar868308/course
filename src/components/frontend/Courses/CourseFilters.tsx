type Props = {
    categories: string[];
    selected: string;
    onChange: (cat: string) => void;
};

export default function CourseFilters({ categories, selected, onChange }: Props) {
    return (
        <div className="flex gap-2 flex-wrap">
            {["All", ...categories].map((cat) => (
                <button
                    key={cat}
                    className={`px-4 py-2 rounded-full border ${selected === cat ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                    onClick={() => onChange(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
