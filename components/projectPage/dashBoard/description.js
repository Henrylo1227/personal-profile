import projectPage from "../../../pageData/projectPage.json"


export function getColorCodeFromLanguage(language) {
    // input language: str, return a string of the corresponding color code with the mapping from projectPage.json
    const languageColorMap = projectPage.content.languageColorMap;
    for (let i = 0; i < languageColorMap.length; i++) {
        const {name, colorCode} = languageColorMap[i];
        // console.log(`${name} === ${language} ? ${name === language}`)
        if (name === language) {
            return colorCode;
        }
    }
    return '#646669';
}


export default function Description({data}) {

    return (
        <div className="block h-fit w-fit">
            {data.languageList.map((element)=>{
                return (
                    <div className="flex justify-start items-center">
                        <div className='inline-block rounded-full h-2 w-2 md:h-3 md:w-3 border' style={{
                            background: `${getColorCodeFromLanguage(element.name)}`
                        }}>
                        </div>
                        <div className='inline-block text-black text-base mx-2 md:text-xl'>
                            {element.name}
                        </div>
                        <div className="inline-block text-black text-sm md:text-lg">
                            {Math.floor(element.percentage*100)}%
                        </div>
                    </div>
                )
            })}
        </div>
    );
}