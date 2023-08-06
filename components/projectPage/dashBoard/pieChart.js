import { getColorCodeFromLanguage } from "./description";

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

export default function PieChart({data}) {
    return (
        <div className="flex relative rounded-full h-28 w-28 m-4 drop-shadow-sm md:h-36 md:w-36 border" style={{
                background: `conic-gradient(${convertPieConfig(data.languageList).map ((element) => {
                    return ` ${ getColorCodeFromLanguage(element.name)} ${element.fromDeg}deg ${element.toDeg}deg `  
                }).join()})`
            }}>
            <div className="flex justify-center items-center relative h-24 w-24 top-1/2 left-1/2 border -translate-x-1/2 -translate-y-1/2 rounded-full bg-white md:h-28 md:w-28">
                <div className="text-center">
                    <div className="relative top-1 font-bold text-xl text-black md:text-3xl">
                        {data.totalProjects}
                    </div>
                    <div className="relative -top-1 text-base text-gray-500 md:text-xl">
                        total
                    </div>
                </div>
            </div>
        </div>
        );
}