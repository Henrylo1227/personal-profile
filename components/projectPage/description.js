export default function Description({data, colorList}) {
    return (
        <div className="block h-fit w-fit">
            {data.languageList.map((e, i)=>{
                return (
                    <div className="flex justify-start items-center">
                        <div className='inline-block rounded-full h-2 w-2' style={{
                            background: `${colorList[i]}`
                        }}>
                        </div>
                        <div className='inline-block text-black text-base mx-2'>
                            {e.name}
                        </div>
                        <div className="inline-block text-black text-sm">
                            {Math.floor(e.percentage*100)}%
                        </div>
                    </div>
                )
            })}
        </div>
    );
}