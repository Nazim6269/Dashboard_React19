import {
  CartesianGrid,
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
    <ResponsiveContainer width={750} height={300}>
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
        <XAxis dataKey="name" />
        <YAxis />
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
  );
};

export default SimpleLineChart;
