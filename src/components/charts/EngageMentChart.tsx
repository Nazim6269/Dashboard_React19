import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface StatsProps {
  year: string;
  students: number;
}

const EngageMent = ({ stats }: { stats: StatsProps }) => {
  return (
    <div className="w-full h-[75%]">
      <ResponsiveContainer>
        <BarChart data={stats}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" fill="#762bdf" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default EngageMent;
