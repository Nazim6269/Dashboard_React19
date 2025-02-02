"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TeacherBarChart } from "./charts/BarChart";
import { TeacherSkillPieChate } from "./charts/CustomizedPieChart";

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
        name: "John Doe",
        subject: "Mathematics",
        bio: "Experienced Math Teacher with over 10 years of teaching.",
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
    <div className="w-full px-4 py-4 bg-secondary ">
      {/* Teacher Profile */}
      <div className="flex h-[223px] gap-6">
        <div className="bg-white px-4 flex items-center justify-center gap-3 rounded-xl">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-28 h-28 rounded-full shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {teacher.name}
            </h2>
            <p className="text-lg text-blue-600">{teacher.subject}</p>
            <p className="text-gray-600">{teacher.bio}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl">
          <TeacherSkillPieChate />
        </div>
      </div>

      {/* Performance Chart */}
      <div className="mt-8">
        <h3 className="px-4 text-xl font-semibold text-gray-800">
          Student Engagement
        </h3>
        <div className="rounded-xl flex items-center px-4 mt-3 bg-white h-[400px]">
          {" "}
          <TeacherBarChart stats={teacher.stats} />
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800">
          Contact Information
        </h3>
        <p className="text-gray-600">📧 {teacher.email}</p>
        <p className="text-gray-600">📞 {teacher.phone}</p>
      </div>
    </div>
  );
};

export default SingleTeacher;
