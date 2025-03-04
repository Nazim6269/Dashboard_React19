// components/Modal.tsx
import { useTheme } from "@/context/theme-context";
import NavItems from "../nav/NavItems";

interface ModalProps {
  isCollapsed: boolean;
  setOpen: (val: boolean) => void;
}

const Modal = ({ isCollapsed, setOpen }: ModalProps) => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-10 bg-black opacity-75  flex justify-center items-center">
      <div className="bg-gray-600 p-6 rounded-lg w-1/3 shadow-lg">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded"
        >
          ✕
        </button>
        <div onClick={() => setOpen(false)}>
          <div>
            <NavItems
              title="Home"
              theme={theme}
              isCollapsed={isCollapsed}
              to="/"
            />
          </div>
          <div className="my-2">
            <NavItems
              title="Teachers"
              theme={theme}
              isCollapsed={isCollapsed}
              to="/teachers"
            />
          </div>
          <div>
            <NavItems
              title="Students"
              theme={theme}
              isCollapsed={isCollapsed}
              to="/students"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
