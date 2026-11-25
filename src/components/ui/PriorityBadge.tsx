type Priority = "low" | "medium" | "high";

type PropsType = {
  priority: Priority;
};

type DynamicStyle = Record<Priority, string>;

const PriorityBadge = ({ priority }: PropsType) => {
  const dynamicStyle: DynamicStyle = {
    low: "text-badge-low-text bg-badge-low-bg border-badge-low-border",
    high: "text-badge-high-text bg-badge-high-bg border-badge-high-border",
    medium:
      "text-badge-medium-text bg-badge-medium-bg border-badge-medium-border",
  };

  return (
    <div
      className={`text-[0.8rem]  border w-fit px-2 font-semibold py-0.5 rounded-[20px] ${dynamicStyle[priority]}`}
    >
      {priority[0].toUpperCase() + priority.slice(1)}
    </div>
  );
};

export default PriorityBadge;
