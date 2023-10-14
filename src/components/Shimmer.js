const Shimmer = () => {
    return (
        <div className="flex flex-wrap" data-testid="shimmer">
            {Array(20).fill("").map((e, index) => {
                return (
                    <div key={index} className="w-52 h-64 p-3 m-3 shadow-lg bg-gray-300"></div>
                )
            })}
        </div>
    )
};

export default Shimmer;
