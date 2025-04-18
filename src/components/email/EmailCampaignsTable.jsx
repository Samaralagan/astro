import { useState } from "react";

export default function EmailCampaignsTable({
  campaigns,
  onViewCampaign,
  onEditCampaign,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Active Email Campaigns</h2>

      {/* Desktop table - hidden on mobile */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Campaign Name
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Sent
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Open Rate
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Click Rate
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Conversions
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.values(campaigns).map((campaign) => (
              <tr key={campaign.id} className="border-b border-gray-200">
                <td className="p-4">{campaign.name}</td>
                <td className="p-4">
                  <span className="flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${
                        campaign.status === "Active"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    ></span>
                    <span
                      className={
                        campaign.status === "Active"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }
                    >
                      {campaign.status}
                    </span>
                  </span>
                </td>
                <td className="p-4">{campaign.sent}</td>
                <td className="p-4">{campaign.openRate}</td>
                <td className="p-4">{campaign.clickRate}</td>
                <td className="p-4">{campaign.conversions}</td>
                <td className="p-4">
                  <button
                    className="text-blue-600 hover:text-blue-800 mr-2"
                    data-campaign-id={campaign.id}
                    data-action="view"
                    id={`view-campaign-${campaign.id}`}
                    onClick={() => onViewCampaign(campaign.id)}
                  >
                    View
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    data-campaign-id={campaign.id}
                    data-action="edit"
                    id={`edit-campaign-${campaign.id}`}
                    onClick={() => onEditCampaign(campaign.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {Object.values(campaigns).map((campaign) => (
          <div
            key={campaign.id}
            className="bg-gray-50 rounded-lg p-4 shadow-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">{campaign.name}</h3>
              <span className="flex items-center">
                <span
                  className={`w-2 h-2 rounded-full mr-2 ${
                    campaign.status === "Active"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                ></span>
                <span
                  className={
                    campaign.status === "Active"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }
                >
                  {campaign.status}
                </span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm mb-4">
              <div>
                <p className="text-gray-500">Sent</p>
                <p>{campaign.sent}</p>
              </div>
              <div>
                <p className="text-gray-500">Open Rate</p>
                <p>{campaign.openRate}</p>
              </div>
              <div>
                <p className="text-gray-500">Click Rate</p>
                <p>{campaign.clickRate}</p>
              </div>
              <div>
                <p className="text-gray-500">Conversions</p>
                <p>{campaign.conversions}</p>
              </div>
            </div>

            <div className="flex space-x-3 border-t border-gray-200 pt-3">
              <button
                className="text-blue-600 hover:text-blue-800 text-sm"
                data-campaign-id={campaign.id}
                data-action="view"
                id={`view-campaign-mobile-${campaign.id}`}
                onClick={() => onViewCampaign(campaign.id)}
              >
                View
              </button>
              <button
                className="text-blue-600 hover:text-blue-800 text-sm"
                data-campaign-id={campaign.id}
                data-action="edit"
                id={`edit-campaign-mobile-${campaign.id}`}
                onClick={() => onEditCampaign(campaign.id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
