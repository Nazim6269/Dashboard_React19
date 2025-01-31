const CustomCard = ({ name, amount }: { name: string; amount: number }) => {
  return (
    <div className="max-w-48 bg-white h-34 font-semibold px-2 flex flex-col justify-center items-center rounded-sm">
      <p className="text-2xl text-gray-500 ">{name}</p>
      <p className="text-4xl text-gray-600"> {amount}</p>
    </div>
  );
};

export default CustomCard;
