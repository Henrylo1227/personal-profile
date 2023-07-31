import Description from "./description";
import PieChart from "./pieChart";

const data = { 
    totalProjects: 3, 
    languageList: [
        { name: 'Java', percentage: 0.35 },
        { name: 'JavaScript', percentage: 0.27 },
        { name: 'Python' , percentage: 0.14 },
        { name: 'C#', percentage: 0.24}
]}

const colorList = [
    '#FF1E1E',
    '#FFFF00',
    '#00C4FF',
    '#1F8A70',
    '#068FFF',
    '#A084E8',
]


export default function DashBoard() {
    return (
        <section className="flex relative top-[10%] left-[50%] -translate-x-[50%] w-[80%] h-fit bg-white drop-shadow-lg rounded-lg justify-between items-center md:left-[5%] md:-translate-x-0 md:flex-col md:w-fit md:p-4">
            {/* Circle */}
            <div>
                <PieChart data={data} colorList={colorList}></PieChart>
            </div>
            {/* description */}
            <div className="block mr-3">
                <Description data={data} colorList={colorList}/>
            </div>

        </section>
    );
}