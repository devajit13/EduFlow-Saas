function StatCard({ title, value, icon, color, subtitle }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-green-600 text-sm mt-3">
            {subtitle}
          </p>
        </div>

        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
          style={{
            background: color,
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;