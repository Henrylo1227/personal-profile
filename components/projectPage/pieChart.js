
function convertPieConfig(languageList) {
    const accDegList = [];
    let acc = 0;
    languageList.forEach(element => {
        const deg = element.percentage*360;
        accDegList.push({name: element.name, fromDeg: acc, toDeg: acc+deg});
        acc = acc + deg;
    });

    return accDegList;
}

export default function PieChart({data, colorList}) {
    return (
        <div className="flex relative rounded-full h-28 w-28 m-4 drop-shadow-sm" style={{
                background: `conic-gradient(${convertPieConfig(data.languageList).map((element, index) => {
                    return ` ${colorList[index]} ${element.fromDeg}deg ${element.toDeg}deg `  
                }).join()})`
            }}>
            <div className="flex justify-center items-center relative h-24 w-24 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                <div className="text-center">
                    <div className="relative top-1 font-bold text-xl text-black">
                        {data.totalProjects}
                    </div>
                    <div className="relative -top-1 text text-gray-500">
                        total
                    </div>
                </div>
            </div>
        </div>
        );
}