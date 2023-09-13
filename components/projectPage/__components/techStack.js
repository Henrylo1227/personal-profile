export default function TechStack({techList}) {


    return (
        <div>
            {techList.map( (e) => {
                const {tech, colorCode} = e;
                return(
                    <div className={`flex mx-1 my-2 p-1 w-fit bg-white rounded-lg text-xs text-black justify-center items-center border-[2px]`}>
                        <div className={`rounded-full h-2 w-2 border mr-1`}
                            style={{background: `${colorCode}`}}
                        ></div>
                        {tech}
                    </div>
                )
            })}
        </div>
    );
}