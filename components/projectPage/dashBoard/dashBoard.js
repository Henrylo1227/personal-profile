import Description from "./description";
import PieChart from "./pieChart";

// TODO these should be fetch from the database
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
        <section className="flex w-fit h-fit bg-white drop-shadow-lg rounded-lg justify-center items-center md:-translate-x-0 md:flex-col md:w-fit md:p-4">
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