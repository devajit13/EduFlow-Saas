import Card from "./Card";

function StatCard({
  title,
  value,
  icon,
  color = "text-blue-600",
}) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`text-4xl ${color}`}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}

export default StatCard;