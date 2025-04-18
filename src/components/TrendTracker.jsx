import { useState } from "react";

export default function TrendTracker() {
  const [timeframe, setTimeframe] = useState("today");

  const trends = [
    {
      id: 1,
      keyword: "#AIinMarketing",
      volume: "25.4K",
      growth: "+128%",
      relevance: "High",
    },
    {
      id: 2,
      keyword: "Digital Transformation",
      volume: "18.7K",
      growth: "+42%",
      relevance: "Medium",
    },
    {
      id: 3,
      keyword: "Remote Work Tools",
      volume: "12.3K",
      growth: "+17%",
      relevance: "High",
    },
    {
      id: 4,
      keyword: "Automation Strategy",
      volume: "8.5K",
      growth: "+65%",
      relevance: "High",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Trending Topics</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            className={`px-3 py-1 rounded-md text-sm ${
              timeframe === "today" ? "bg-white shadow-sm" : "text-gray-600"
            }`}
            onClick={() => setTimeframe("today")}
          >
            Today
          </button>
          <button
            className={`px-3 py-1 rounded-md text-sm ${
              timeframe === "week" ? "bg-white shadow-sm" : "text-gray-600"
            }`}
            onClick={() => setTimeframe("week")}
          >
            This Week
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {trends.map((trend) => (
          <div
            key={trend.id}
            className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{trend.keyword}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {trend.volume} mentions
                </p>
              </div>
              <div className="text-right">
                <span className="text-green-500 font-medium">
                  {trend.growth}
                </span>
                <p className="text-xs mt-1">
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      trend.relevance === "High"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {trend.relevance} Relevance
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
        Explore all trends
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
