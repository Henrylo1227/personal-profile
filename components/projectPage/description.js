export default function Description({data, colorList}) {
    return (
        <div className="block h-fit w-fit">
            {data.languageList.map((e, i)=>{
                return (
                    <div className="flex justify-start items-center">
                        <div className='inline-block rounded-full h-2 w-2 md:h-3 md:w-3' style={{
                            background: `${colorList[i]}`
                        }}>
                        </div>
                        <div className='inline-block text-black text-base mx-2 md:text-xl'>
                            {e.name}
                        </div>
                        <div className="inline-block text-black text-sm md:text-lg">
                            {Math.floor(e.percentage*100)}%
                        </div>
                    </div>
                )
            })}
        </div>
    );
}