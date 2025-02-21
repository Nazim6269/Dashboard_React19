import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "../../context/theme-context";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export interface ExpenditureProps {
  labels: string[];
  dataset: {
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  };
}

const Expenditure = ({ data }: { data: ExpenditureProps }) => {
  const { theme } = useTheme();

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
    },
    cutout: "60%", // Adjust the hole size for a cleaner look
  };

  // Custom labels for displaying outside
  const labels = [
    { name: "Income", color: "#FF6384" },
    { name: "Cost", color: "#36A2EB" },
    { name: "Loan", color: "#FFCE56" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-start gap-1">
      {/* Chart Container */}
      <div>
        <Doughnut data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div>
        {labels.map((label, index) => (
          <div key={index} className="flex items-center mb-2">
            <span
              className={`w-4 h-4 mr-2 rounded-2xl inline-block`}
              style={{
                backgroundColor: label.color,
              }}
            ></span>
            <span
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {label.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenditure;
