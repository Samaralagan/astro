import { useState } from "react";

export default function AudienceEngagement() {
  const [period, setPeriod] = useState("week");

  // Chart data placeholder (would use a charting library in a real app)
  const engagementMetrics = [
    { metric: "Comments", value: 428, trend: "+21%", color: "bg-blue-500" },
    { metric: "Shares", value: 856, trend: "+14%", color: "bg-green-500" },
    {
      metric: "Link Clicks",
      value: 1245,
      trend: "+32%",
      color: "bg-purple-500",
    },
    {
      metric: "Profile Visits",
      value: 2810,
      trend: "+8%",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Audience Engagement</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            className={`px-3 py-1 rounded-md text-sm ${
              period === "week" ? "bg-white shadow-sm" : "text-gray-600"
            }`}
            onClick={() => setPeriod("week")}
          >
            This Week
          </button>
          <button
            className={`px-3 py-1 rounded-md text-sm ${
              period === "month" ? "bg-white shadow-sm" : "text-gray-600"
            }`}
            onClick={() => setPeriod("month")}
          >
            This Month
          </button>
          <button
            className={`px-3 py-1 rounded-md text-sm ${
              period === "quarter" ? "bg-white shadow-sm" : "text-gray-600"
            }`}
            onClick={() => setPeriod("quarter")}
          >
            This Quarter
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
        <div>
          <h3 className="font-medium">AI-powered insights</h3>
          <p className="text-sm text-gray-600 mt-1">
            Your posts with visual content receive 2.3x more engagement than
            text-only posts. Try scheduling more image and video content.
          </p>
        </div>
        <div className="text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {engagementMetrics.map((item) => (
          <div key={item.metric} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className={`${item.color} h-10 w-1 rounded-full mr-3`}></div>
              <div>
                <h4 className="text-sm text-gray-500">{item.metric}</h4>
                <div className="flex items-center">
                  <span className="text-lg font-semibold">{item.value}</span>
                  <span className="ml-2 text-xs text-green-500">
                    {item.trend}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="bg-gray-100 h-64 flex items-center justify-center rounded-lg">
          <p className="text-gray-500">
            Engagement chart visualization would appear here
          </p>
        </div>
      </div>
    </div>
  );
}
