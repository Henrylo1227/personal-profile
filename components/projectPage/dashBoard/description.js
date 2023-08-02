export default function Description({data, colorList}) {
    return (
        <div className="block h-fit w-fit">
            {data.languageList.map((element, index)=>{
                return (
                    <div className="flex justify-start items-center">
                        <div className='inline-block rounded-full h-2 w-2 md:h-3 md:w-3' style={{
                            background: `${colorList[index]}`
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