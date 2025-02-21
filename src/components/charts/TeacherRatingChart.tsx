import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface TeacherRatingProps {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const TeacherRatingChart = ({
  teacherRatingData,
}: {
  teacherRatingData: TeacherRatingProps[];
}) => {
  return (
    <div className="w-full h-[75%]">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={200}
          data={teacherRatingData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TeacherRatingChart;
