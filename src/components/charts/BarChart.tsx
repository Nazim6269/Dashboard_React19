import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
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
        <XAxis dataKey="name">
          <Label value="Years" offset={0} position="insideBottom" />{" "}
        </XAxis>
        <YAxis
          label={{ value: "Amount", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="Pass" fill="#8554d8" minPointSize={5}>
          <LabelList dataKey="name" content={renderCustomizedLabelMin} />
        </Bar>
        <Bar dataKey="Fail" fill="#34eb5e" minPointSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const TinyBarChart = () => {
  return (
    <ResponsiveContainer width={600} height={350}>
      <BarChart width={150} height={40} data={dataTiny}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name">
          <Label value="Years" offset={0} position="insideBottom" />{" "}
        </XAxis>
        <YAxis
          label={{ value: "Rate", angle: -90, position: "insideLeft" }}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
        <Bar dataKey="Progress" fill="#eb3467" />
      </BarChart>
    </ResponsiveContainer>
  );
};
