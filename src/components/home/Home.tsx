import CustomCard from "../ card/CustomCard";
import EventsCard from "../ card/EventsCard";
import ReactCalendar from "../calendar/ReactCalendar";
import { BarChartWithMinHeight, TinyBarChart } from "../charts/BarChart";
import CustomizedPieChart from "../charts/CustomizedPieChart";
import SimpleRadialBarChart from "../charts/RadialBarChart";
import SimpleLineChart from "../charts/SimpleLineChart";
import SideBar from "../sidebar/SideBar";

const Home = () => {
  return (
    <div className="flex select-none ">
      <SideBar />
      <div className="flex ">
        <div className="px-6 py-8 w-full bg-secondary">
          {/* top bar cards */}
          <div className="flex justify-start gap-3">
            <div className="grid grid-cols-2 space-x-4">
              <CustomCard name="Teachers" amount={14} />
              <CustomCard name="Stuffs" amount={5} />
              <CustomCard name="Sessions" amount={5} />
              <CustomCard name="Students" amount={400} />
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
              <div className="shadow-lg w-2/3 max-h-44 bg-white rounded-md flex justify-center items-center">
                <CustomizedPieChart />
              </div>
              <div className="shadow-lg w-2/3 bg-white rounded-md flex justify-center items-center">
                <SimpleRadialBarChart />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <ReactCalendar />
          <div className="flex flex-col space-y-2">
            <EventsCard
              title="Golden Jubilee"
              description="A great day in ..."
            />
            <EventsCard
              title="Silver Jubilee"
              description="A great day in ..."
            />
            <EventsCard
              title="Platinum Jubilee"
              description="A great day in ..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
