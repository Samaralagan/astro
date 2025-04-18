export default function AiSuggestions() {
  const suggestions = [
    {
      id: 1,
      type: "Content Idea",
      title: "Industry Roundup: Top 5 Trends This Week",
      description: "Based on trending topics and your audience interests.",
      confidence: 92,
    },
    {
      id: 2,
      type: "Optimal Time",
      title: "Schedule posts for Wednesday at 2PM",
      description: "Your audience is most active during this timeframe.",
      confidence: 87,
    },
    {
      id: 3,
      type: "Engagement Boost",
      title: "Add a poll to your next LinkedIn post",
      description: "Polls receive 300% more engagement than standard posts.",
      confidence: 94,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold">AI-Powered Suggestions</h2>
          <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
            3 New
          </span>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
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
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="border border-blue-100 bg-blue-50 rounded-lg p-4"
          >
            <div className="flex justify-between">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {suggestion.type}
              </span>
              <span className="text-sm font-medium text-blue-700">
                {suggestion.confidence}% Confidence
              </span>
            </div>
            <h3 className="font-medium mt-3">{suggestion.title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {suggestion.description}
            </p>
            <div className="flex space-x-2 mt-4">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">
                Apply
              </button>
              <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-md text-sm hover:bg-gray-100 transition-colors">
                Dismiss
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
