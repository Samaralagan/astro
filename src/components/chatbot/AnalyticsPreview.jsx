// src/components/chatbot/AnalyticsPreview.jsx
import React from "react";

export default function AnalyticsPreview({ stats }) {
  const defaultStats = {
    resolutionRate: {
      value: "87%",
      change: "+5% from last week",
    },
    responseTime: {
      value: "2.4s",
      change: "-0.3s from last week",
    },
    satisfaction: {
      value: "4.8/5",
      change: "+0.2 from last week",
    },
    interactions: {
      value: "248",
      change: "+15% from yesterday",
    },
  };

  const displayStats = stats || defaultStats;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#3D0C11]">
          Performance Overview
        </h2>
        <a
          href="/dashboard/analytics"
          className="text-[#D80032] hover:text-[#3D0C11] text-sm"
        >
          View Detailed Analytics →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#F9DEC9] p-4 rounded-lg">
          <p className="text-sm text-[#3D0C11]">Resolution Rate</p>
          <p className="text-2xl font-bold text-[#D80032]">
            {displayStats.resolutionRate.value}
          </p>
          <p className="text-xs text-[#3D0C11]">
            {displayStats.resolutionRate.change}
          </p>
        </div>

        <div className="bg-[#F9DEC9] p-4 rounded-lg">
          <p className="text-sm text-[#3D0C11]">Average Response Time</p>
          <p className="text-2xl font-bold text-[#D80032]">
            {displayStats.responseTime.value}
          </p>
          <p className="text-xs text-[#3D0C11]">
            {displayStats.responseTime.change}
          </p>
        </div>

        <div className="bg-[#F9DEC9] p-4 rounded-lg">
          <p className="text-sm text-[#3D0C11]">Customer Satisfaction</p>
          <p className="text-2xl font-bold text-[#D80032]">
            {displayStats.satisfaction.value}
          </p>
          <p className="text-xs text-[#3D0C11]">
            {displayStats.satisfaction.change}
          </p>
        </div>

        <div className="bg-[#F9DEC9] p-4 rounded-lg">
          <p className="text-sm text-[#3D0C11]">Interactions Today</p>
          <p className="text-2xl font-bold text-[#D80032]">
            {displayStats.interactions.value}
          </p>
          <p className="text-xs text-[#3D0C11]">
            {displayStats.interactions.change}
          </p>
        </div>
      </div>
    </div>
  );
}
