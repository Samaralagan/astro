import { useState } from "react";

export default function SocialMediaOverview() {
  const [activeTab, setActiveTab] = useState("all");

  const platforms = [
    {
      id: "twitter",
      name: "Twitter",
      followers: "12.4K",
      growth: "+2.4%",
      engagement: "3.2%",
      color: "bg-blue-500",
    },
    {
      id: "instagram",
      name: "Instagram",
      followers: "24.8K",
      growth: "+1.7%",
      engagement: "4.5%",
      color: "bg-purple-500",
    },
    {
      id: "facebook",
      name: "Facebook",
      followers: "35.6K",
      growth: "-0.3%",
      engagement: "2.1%",
      color: "bg-blue-700",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      followers: "8.2K",
      growth: "+5.1%",
      engagement: "3.8%",
      color: "bg-blue-600",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Platform Overview</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            className={`px-3 py-1 rounded-md ${
              activeTab === "all" ? "bg-white shadow-sm" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded-md ${
              activeTab === "followers" ? "bg-white shadow-sm" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("followers")}
          >
            Followers
          </button>
          <button
            className={`px-3 py-1 rounded-md ${
              activeTab === "engagement"
                ? "bg-white shadow-sm"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("engagement")}
          >
            Engagement
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="bg-gray-50 rounded-lg p-4 flex items-start"
          >
            <div className={`${platform.color} rounded-md p-2 mr-3 text-white`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">{platform.name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-lg font-semibold">
                  {platform.followers}
                </span>
                <span
                  className={`ml-2 text-xs ${
                    platform.growth.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {platform.growth}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {platform.engagement} engagement
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
