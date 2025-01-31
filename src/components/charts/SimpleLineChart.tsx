import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { simpleLineCharData } from "../../data/data";

const SimpleLineChart = () => {
  return (
    <div className="w-full h-[75%]">
      <ResponsiveContainer>
        <LineChart
          width={300}
          height={300}
          data={simpleLineCharData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Years" offset={0} position="insideBottom" />{" "}
          </XAxis>
          <YAxis
            label={{ value: "Amount", angle: -90, position: "insideLeft" }}
          />

          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Students"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Teachers" stroke="#FF69B4" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;
