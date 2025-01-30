const EventsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="shadow-md bg-white h-34 px-4 py-3 flex flex-col rounded-sm">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default EventsCard;
