import { Link } from "react-router-dom";
import CustomCard from "../ card/CustomCard";
import { BarChartWithMinHeight, TinyBarChart } from "../charts/BarChart";
import CustomizedPieChart from "../charts/CustomizedPieChart";
import SimpleLineChart from "../charts/SimpleLineChart";
import RightBar from "../sidebar/ RightBar";
import SideBar from "../sidebar/SideBar";

const Home = () => {
  return (
    <div className="flex select-none ">
      {/* left side navigation var */}
      <SideBar />

      {/* Middle Portinon */}
      <div className="flex ">
        <div className="px-4 py-6 w-full bg-secondary">
          {/* top bar cards */}
          <div className="flex justify-start gap-3">
            <div className="grid grid-cols-2 space-x-4">
              <CustomCard name="Teachers" amount={14} />
              <CustomCard name="Stuffs" amount={5} />
              <CustomCard name="Sessions" amount={5} />
              <Link to={"/students"}>
                <CustomCard name="Students" amount={400} />
              </Link>
            </div>
            <div className="py-4 shadow-lg max-h-96 bg-white rounded-md flex justify-center items-center">
              <SimpleLineChart />
            </div>
          </div>

          <div className="flex flex-col space-y-3 py-2">
            {/* mid bar cards */}
            <div className="flex gap-2">
              <div className="py-4 shadow-lg bg-white rounded-md flex justify-center items-center">
                <BarChartWithMinHeight />
              </div>
              <div className="shadow-lg px-2 bg-white rounded-md flex justify-center items-center">
                <TinyBarChart />
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex gap-2">
              <div className="shadow-lg w-2/3 bg-white rounded-md flex justify-center items-center">
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
