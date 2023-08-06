import Description from "./description";
import PieChart from "./pieChart";

import projectPage from "../../../pageData/projectPage.json";

const data = projectPage.content.dashboard.data;

export default function DashBoard() {
    return (
        <section className="flex w-full h-fit bg-white drop-shadow-lg rounded-lg justify-center items-center md:-translate-x-0 md:flex-col md:w-fit md:p-4 ">
            {/* Circle */}
            <div>
                <PieChart data={data}></PieChart>
            </div>
            {/* description */}
            <div className="block mr-3">
                <Description data={data}/>
            </div>

        </section>
    );
}