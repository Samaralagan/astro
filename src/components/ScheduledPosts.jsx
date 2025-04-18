import { useState } from "react";

export default function ScheduledPosts() {
  const [view, setView] = useState("list");

  const scheduledPosts = [
    {
      id: 1,
      title: "Product Launch Announcement",
      platform: "All Platforms",
      date: "Today, 3:00 PM",
      status: "scheduled",
      aiEnhanced: true,
    },
    {
      id: 2,
      title: "Weekly Industry Insights",
      platform: "LinkedIn, Twitter",
      date: "Tomorrow, 10:00 AM",
      status: "scheduled",
      aiEnhanced: true,
    },
    {
      id: 3,
      title: "Customer Success Story",
      platform: "Instagram, Facebook",
      date: "Apr 20, 12:00 PM",
      status: "draft",
      aiEnhanced: false,
    },
    {
      id: 4,
      title: "Team Spotlight: Engineering",
      platform: "LinkedIn",
      date: "Apr 21, 2:00 PM",
      status: "scheduled",
      aiEnhanced: true,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Scheduled Posts</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            className={`px-3 py-1 rounded-md ${
              view === "list" ? "bg-white shadow-sm" : "text-gray-600"
            }`}
            onClick={() => setView("list")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
          <button
            className={`px-3 py-1 rounded-md ${
              view === "calendar" ? "bg-white shadow-sm" : "text-gray-600"
            }`}
            onClick={() => setView("calendar")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {scheduledPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between">
              <div>
                <div className="flex items-center">
                  <h3 className="font-medium">{post.title}</h3>
                  {post.aiEnhanced && (
                    <span className="ml-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                      AI Enhanced
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{post.platform}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{post.date}</p>
                <span
                  className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                    post.status === "scheduled"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {post.status === "scheduled" ? "Scheduled" : "Draft"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
        View all scheduled posts
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
