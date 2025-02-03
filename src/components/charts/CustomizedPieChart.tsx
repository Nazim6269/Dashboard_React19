import { Label, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { pieChartFemale, pieChartMale } from "../../data/data";

//=========== customized pie chart ===========//

const renderCenteredText = (props) => {
  const { cx, cy } = props;
  return (
    <text
      x={cx}
      y={cy}
      fill="black"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="16"
      fontWeight="bold"
    >
      {props.text}
    </text>
  );
};

export const CustomizedPieChart = () => {
  return (
    <div className="w-full h-[75%]">
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            data={pieChartMale}
            cx="16%"
            cy="50%"
            label
            innerRadius={50}
            outerRadius={90}
            fill="#4F46E5"
            stroke="#ffffff"
            strokeWidth={3}
            isAnimationActive={true}
            animationDuration={800}
            animationBegin={100}
          >
            <Label value="Male" offset={0} position="center" />
          </Pie>
          <Pie
            dataKey="value"
            data={pieChartFemale}
            cx="40%"
            cy="50%"
            strokeWidth={3}
            innerRadius={50}
            outerRadius={90}
            fill="#F43F5E"
            label
            name="Female"
          >
            <Label value="Female" offset={0} position="center" />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
