import { useParams } from "react-router-dom";
import { teachers } from "../../data/data";

import { ChartData } from "chart.js";
import { useTheme } from "../../context/theme-context";
import EngageMent, { StatsProps } from "../charts/EngageMentChart";
import Expenditure from "../charts/Expenditure";
import TeacherRatingChart, {
  TeacherRatingProps,
} from "../charts/TeacherRatingChart";
import Education, { EducationItem } from "../Education";
import HonorsAwards, { Award } from "../HonsAwards";
import NotAvailable from "../NotAvailable";
import Publications, { Publication } from "../Publications";
import SubOfInterest from "../SubOfInterest";

interface Teacher {
  id: string;
  name: string;
  subject: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  stats: StatsProps;
  data: {
    subjectOfInt: string[];
    engagementData: StatsProps[] | undefined;
    publicationsData: Publication[] | undefined;
    awardsData: Award[];
    teacherRatingData: TeacherRatingProps[] | undefined;
    educationData: EducationItem[] | undefined;
    expenditureData: ChartData<"doughnut">;
  };
}

const SingleTeacher = () => {
  const { id } = useParams();

  const filteredData = teachers.find((teacher) => teacher.id === id) as
    | Teacher
    | undefined;
  const { theme } = useTheme();

  return (
    <section
      className={`${
        theme === "dark" ? "bg-dark" : "bg-secondary "
      } w-full grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:grid-cols-1 px-4 py-4 `}
    >
      {/* Teacher Profile */}
      <section className="grid grid-cols-1 2xl:grid-cols-3 gap-2">
        {/*====================user  info div ================== */}
        <div
          className={`${
            theme === "dark" ? "bg-dark-secondary" : "bg-white"
          } min-h-[160px] py-3 px-4 flex flex-col sm:flex-row  items-start sm:items-center justify-center gap-3 rounded-xl`}
        >
          <img
            src={filteredData?.image}
            alt={filteredData?.name}
            className="w-28 h-28 rounded-full shadow-md"
          />
          <div className="flex flex-col justify-start">
            <h2
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              } text-2xl font-semibold `}
            >
              {filteredData?.name}
            </h2>
            <p className="text-lg text-primary-500">{filteredData?.subject}</p>
            <p
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {filteredData?.bio}
            </p>
          </div>
        </div>

        {/*================= Contact Information================ */}
        <div
          className={`${
            theme === "dark" ? "bg-dark-secondary" : "bg-white"
          } p-4 rounded-lg`}
        >
          <h3
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            } text-lg mb-2 font-semibold`}
          >
            Contact Information
          </h3>
          <p
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {filteredData?.email}
          </p>
          <p
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {" "}
            {filteredData?.phone}
          </p>
          <p
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {filteredData?.email || ""}
          </p>
        </div>

        {/*==================== monthly expenditure div ========================*/}
        <div
          className={`${
            theme === "dark" ? "bg-dark-secondary" : "bg-white"
          } p-4 rounded-lg`}
        >
          <h3
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            } text-lg mb-2 text-center font-semibold`}
          >
            Monthly Expenditure
          </h3>
          <Expenditure
            data={
              filteredData?.data?.expenditureData ?? {
                labels: [],
                datasets: [
                  { data: [], backgroundColor: [], hoverBackgroundColor: [] },
                ],
              }
            }
          />
        </div>
      </section>

      {/* =====================Performance Chart===================== */}
      <section className="mt-8 flex gap-4 justify-between">
        <div className="flex flex-col 2xl:flex-row  gap-4 w-full">
          <div className=" w-full">
            <h3
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-800"
              } px-4 text-xl font-semibold `}
            >
              Student Engagement
            </h3>
            <div
              className={`${
                theme === "dark" ? "bg-dark-secondary" : "bg-white"
              } rounded-xl flex items-center px-4 mt-3 h-[400px]`}
            >
              {" "}
              <EngageMent stats={filteredData?.data?.engagementData ?? []} />
            </div>
          </div>
          <div className=" w-full">
            <h3
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-800"
              } px-4 text-xl font-semibold `}
            >
              Teacher Rating
            </h3>
            <div
              className={`${
                theme === "dark" ? "bg-dark-secondary" : "bg-white"
              } rounded-xl flex items-center px-4 mt-3 h-[400px]`}
            >
              {" "}
              <TeacherRatingChart
                teacherRatingData={filteredData?.data?.teacherRatingData ?? []}
              />
            </div>
          </div>
        </div>
      </section>

      {/*======================= subject of interest======================= */}
      <section className="w-full mt-8">
        <h3
          className={`${
            theme === "dark" ? "text-gray-400" : "text-gray-800"
          } px-4 text-xl font-semibold `}
        >
          Subjects of Interest
        </h3>
        {filteredData?.data?.subjectOfInt ? (
          <SubOfInterest subjectOfInt={filteredData?.data?.subjectOfInt} />
        ) : (
          <NotAvailable />
        )}
      </section>

      {/*=========================== Education and awards Section================= */}
      <section className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-8">
        <div>
          <h3
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            } px-4 text-xl font-semibold `}
          >
            Education{" "}
          </h3>
          {filteredData?.data?.educationData ? (
            <Education educationList={filteredData?.data?.educationData} />
          ) : (
            <NotAvailable />
          )}
        </div>
        <div>
          <h3
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            } px-4 text-xl font-semibold `}
          >
            Hon's and Awards{" "}
          </h3>
          {filteredData?.data?.awardsData ? (
            <HonorsAwards awards={filteredData?.data?.awardsData} />
          ) : (
            <NotAvailable />
          )}
        </div>
        <div>
          <h3
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            } px-4 text-xl font-semibold `}
          >
            Publications
          </h3>
          {filteredData?.data?.publicationsData ? (
            <Publications publications={filteredData?.data?.publicationsData} />
          ) : (
            <NotAvailable />
          )}
        </div>
      </section>
    </section>
  );
};

export default SingleTeacher;
