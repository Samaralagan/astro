export default function StatCard({
  title,
  value,
  change,
  subtitle,
  barType,
  barValue,
  barLabel,
}) {
  const isPositiveChange = change?.startsWith("+");

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-md font-semibold mb-3">{title}</h3>
      <div className="flex items-center">
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div
            className={`ml-2 ${
              isPositiveChange ? "text-green-500" : "text-yellow-500"
            } text-sm`}
          >
            {change}
          </div>
        )}
      </div>
      <div className="text-sm text-gray-500 mt-1">{subtitle}</div>

      {barType === "chart" && (
        <div className="h-16 mt-4 flex items-end">
          <div className="w-1/7 h-6 bg-blue-100 rounded-sm mx-1"></div>
          <div className="w-1/7 h-8 bg-blue-200 rounded-sm mx-1"></div>
          <div className="w-1/7 h-10 bg-blue-300 rounded-sm mx-1"></div>
          <div className="w-1/7 h-12 bg-blue-400 rounded-sm mx-1"></div>
          <div className="w-1/7 h-14 bg-blue-500 rounded-sm mx-1"></div>
          <div className="w-1/7 h-16 bg-blue-600 rounded-sm mx-1"></div>
          <div className="w-1/7 h-12 bg-blue-700 rounded-sm mx-1"></div>
        </div>
      )}

      {barType === "progress" && (
        <div className="relative pt-4 mt-4">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span
                className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${barLabel.color}`}
              >
                {barLabel.text}
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${barValue}%` }}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${barLabel.barColor}`}
            ></div>
          </div>
        </div>
      )}

      {barType === "chart" && (
        <div className="text-xs text-gray-400 mt-2">Last 7 days</div>
      )}
    </div>
  );
}
