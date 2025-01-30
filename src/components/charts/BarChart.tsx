import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dataMin, dataTiny } from "../../data/data";

const renderCustomizedLabelMin = (props: any) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

export const BarChartWithMinHeight = () => {
  return (
    <ResponsiveContainer width={600} height={350}>
      <BarChart
        width={500}
        height={300}
        data={dataMin}
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
        <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
          <LabelList dataKey="name" content={renderCustomizedLabelMin} />
        </Bar>
        <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const TinyBarChart = () => {
  return (
    <ResponsiveContainer width={600} height={350}>
      <BarChart width={150} height={40} data={dataTiny}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
