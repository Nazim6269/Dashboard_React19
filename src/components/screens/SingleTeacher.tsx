import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  awardsData,
  educationData,
  publicationsData,
  subjectOfInt,
} from "../../data/data";
import { TeacherBarChart } from "../charts/BarChart";
import TeacherExpenditure from "../charts/TeacherExpenditure";
import TeacherRatingChart from "../charts/TeacherRatingChart";
import Education from "../Education";
import HonorsAwards from "../HonsAwards";
import Publications from "../Publications";
import SubOfInterest from "../SubOfInterest";

interface Teacher {
  id: string;
  name: string;
  subject: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  stats: { month: string; students: number };
}

const SingleTeacher = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    // Mock API Fetch (Replace with real API call)
    const fetchTeacher = async () => {
      const data: Teacher = {
        id: "1",
        name: "Md. Ikram Ansar Tuhin",
        subject: "Entomology",
        bio: "Experienced Math Teacher with over 4 years of teaching.",
        image:
          "https://cu.ac.bd/assets/image/faculty_staff_users/1158_W5W7YMPO3B.jpg",
        email: "john.doe@example.com",
        phone: "+123 456 7890",
        stats: [
          { month: "Jan", students: 40 },
          { month: "Feb", students: 50 },
          { month: "Mar", students: 45 },
          { month: "Apr", students: 60 },
        ],
      };
      setTeacher(data);
    };
    fetchTeacher();
  }, [id]);

  if (!teacher)
    return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:grid-cols-1 px-4 py-4 bg-secondary ">
      {/* Teacher Profile */}
      <section className="grid grid-cols-1 2xl:grid-cols-3 gap-2">
        {/*user  info div  */}
        <div className="bg-white min-h-[160px] py-3 px-4 flex flex-col sm:flex-row  items-start sm:items-center justify-center gap-3 rounded-xl">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-28 h-28 rounded-full shadow-md"
          />
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl font-semibold text-gray-800">
              {teacher.name}
            </h2>
            <p className="text-lg text-primary-500">{teacher.subject}</p>
            <p className="text-gray-600">{teacher.bio}</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className=" bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg mb-2 font-semibold text-gray-800">
            Contact Information
          </h3>
          <p className="text-gray-600">tuhin2511@gmail.com</p>
          <p className="text-gray-600"> 01672409040</p>
          <p className="text-gray-600">tuhin2511@cu.ac.bd</p>
        </div>

        {/* monthly expenditure div */}
        <div className="  bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg mb-2 text-center font-semibold text-gray-800">
            Monthly Expenditure
          </h3>
          <TeacherExpenditure />
        </div>
      </section>

      {/* Performance Chart */}
      <section className="mt-8 flex gap-4 justify-between">
        <div className="flex flex-col 2xl:flex-row  gap-4 w-full">
          <div className=" w-full">
            <h3 className="px-4 text-xl font-semibold text-gray-800">
              Student Engagement
            </h3>
            <div className="rounded-xl flex items-center px-4 mt-3 bg-white h-[400px]">
              {" "}
              <TeacherBarChart stats={teacher.stats} />
            </div>
          </div>
          <div className=" w-full">
            <h3 className="px-4 text-xl font-semibold text-gray-800">
              Teacher Rating
            </h3>
            <div className="rounded-xl flex items-center px-4 mt-3 bg-white h-[400px]">
              {" "}
              <TeacherRatingChart />
            </div>
          </div>
        </div>
      </section>

      {/* subject of interest */}
      <section className="w-full mt-8">
        <h3 className="px-4 text-xl font-semibold text-gray-800">
          Subjects of Interest
        </h3>
        <SubOfInterest subjectOfInt={subjectOfInt} />
      </section>

      {/* Education and awards Section */}
      <section className="grid grid-cols-2  gap-6 mt-8">
        <div>
          <h3 className="px-4 mb-3 text-xl font-semibold text-gray-800>Education">
            Education{" "}
          </h3>
          <Education educationList={educationData} />
        </div>
        <div>
          <h3 className="px-4 mb-3 text-xl font-semibold text-gray-800>Education">
            Hon's and Awards{" "}
          </h3>
          <HonorsAwards awards={awardsData} />
        </div>
        <div>
          <h3 className="px-4 mb-3 text-xl font-semibold text-gray-800>Education">
            Publications
          </h3>
          <Publications publications={publicationsData} />
        </div>
      </section>
    </section>
  );
};

export default SingleTeacher;
