import { teachers } from "../../data/data";
import CustomTable from "../table/CustomTable";

const Teachers = () => {
  return (
    <div className="bg-secondary w-full px-3 py-5">
      <CustomTable data={teachers} />
    </div>
  );
};

export default Teachers;
