export default function SubscribersTable({ subscribers, onViewSubscriber }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Recent Subscribers</h2>

      {/* Desktop table - hidden on mobile */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Email
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Subscribed Date
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Source
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.values(subscribers).map((subscriber) => (
              <tr key={subscriber.id} className="border-b border-gray-200">
                <td className="p-4">{subscriber.email}</td>
                <td className="p-4">{subscriber.dateSubscribed}</td>
                <td className="p-4">{subscriber.source}</td>
                <td className="p-4">
                  <span
                    className={
                      subscriber.status === "Active"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }
                  >
                    {subscriber.status}
                  </span>
                </td>
                <td className="p-4">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    data-subscriber-id={subscriber.id}
                    id={`view-subscriber-${subscriber.id}`}
                    onClick={() => onViewSubscriber(subscriber.id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {Object.values(subscribers).map((subscriber) => (
          <div
            key={subscriber.id}
            className="bg-gray-50 rounded-lg p-4 shadow-sm"
          >
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="break-words">{subscriber.email}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm mb-3">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Subscribed Date
                </p>
                <p>{subscriber.dateSubscribed}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Source</p>
                <p>{subscriber.source}</p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Status</p>
              <p
                className={
                  subscriber.status === "Active"
                    ? "text-green-600"
                    : "text-yellow-600"
                }
              >
                {subscriber.status}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-3 mt-3">
              <button
                className="text-blue-600 hover:text-blue-800"
                data-subscriber-id={subscriber.id}
                id={`view-subscriber-mobile-${subscriber.id}`}
                onClick={() => onViewSubscriber(subscriber.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
