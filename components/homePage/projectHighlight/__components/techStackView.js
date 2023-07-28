export default function TechStackView({techStackList}) {
    return (
        <div className="flex mx-4 flex-wrap">
            {techStackList.map( (tech) =>
                <div className="mx-1 my-1 p-1 rounded-sm bg-gray-300 text-xs">{tech}</div>
            )}
        </div>
    );
}