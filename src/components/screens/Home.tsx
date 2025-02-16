import { Link } from "react-router-dom";
import CustomCard from "../ card/CustomCard";
import { dataTiny } from "../../data/data";
import { BarChartWithMinHeight, TinyBarChart } from "../charts/BarChart";
import { CustomizedPieChart } from "../charts/CustomizedPieChart";
import SimpleLineChart from "../charts/SimpleLineChart";
import RightBar from "../sidebar/ RightBar";

const Home = () => {
  return (
    <div className="flex flex-col 2xl:flex 2xl:flex-row 2xl:justify-between w-full select-none bg-secondary">
      {/* Data Portinon */}
      <div className="flex w-full 2xl:w-[80%] 2xl:flex">
        <div className="px-4 py-6 w-full">
          {/* top bar cards */}
          <div className="flex flex-col xl:flex xl:flex-row  xl:justify-between gap-3">
            {/* small card div */}
            <div className="grid grid-cols-2 md:grid md:grid-cols-4 xl:grid w-full xl:grid-cols-2 gap-3">
              <CustomCard name="Teachers" amount={14} />
              <CustomCard name="Stuffs" amount={5} />
              <CustomCard name="Sessions" amount={5} />
              <Link to={"/students"}>
                <CustomCard name="Students" amount={400} />
              </Link>
            </div>

            <div className="shadow-lg w-full h-[400px] bg-white rounded-md flex justify-center items-center">
              <SimpleLineChart />
            </div>
          </div>

          {/* mid bar cards */}
          <div className="flex flex-col space-y-3 py-2">
            <div className="flex flex-col xl:flex xl:flex-row gap-2">
              <div className="py-4 shadow-lg w-full h-[400px] xl:h-[300px] bg-white rounded-md flex justify-center items-center">
                <BarChartWithMinHeight />
              </div>
              <div className="shadow-lg px-2 w-full h-[400px] xl:h-[300px] bg-white rounded-md flex justify-center items-center">
                <TinyBarChart data={dataTiny} />
              </div>
            </div>

            {/* Bottom Pie chart */}
            <div className="flex gap-2">
              <div className="shadow-lg w-full h-[300px] bg-white rounded-md flex justify-center items-center">
                <CustomizedPieChart />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar and Events section starts from here */}
      <RightBar />
    </div>
  );
};

export default Home;
