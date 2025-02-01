import { students } from "../../data/data";
import CustomTable from "../table/CustomTable";

const Students = () => {
  return (
    <div className="bg-secondary w-full px-3 py-5">
      <CustomTable data={students} />
    </div>
  );
};

export default Students;
