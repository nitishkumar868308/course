type Props = {
    onSearch: (query: string) => void;
};

export default function CourseSearch({ onSearch }: Props) {
    return (
        <input
            type="text"
            placeholder="Search for courses..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}
