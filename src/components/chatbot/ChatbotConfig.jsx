// src/components/chatbot/ChatbotConfig.jsx
import React, { useState } from "react";

export default function ChatbotConfig({ initialConfig, onUpdate }) {
  const [config, setConfig] = useState(
    initialConfig || {
      name: "Customer Support Assistant",
      welcomeMessage:
        "Hello! I'm your 24/7 customer support assistant. How can I help you today?",
      offlineMessage:
        "Thanks for your message. Our AI assistant has collected your inquiry and a human agent will respond during business hours.",
      knowledgeBase: "Product Information",
      responseTone: "Professional",
      handoffThreshold: 3,
    }
  );

  const handleChange = (field, value) => {
    const updatedConfig = { ...config, [field]: value };
    setConfig(updatedConfig);
    onUpdate(updatedConfig);
  };

  const handleAddKnowledgeBase = () => {
    // In a real implementation, this would open a modal to add a new knowledge base
    alert("Add new knowledge base functionality would open here");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-md font-medium mb-2 text-[#D80032]">
          Chatbot Configuration
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#3D0C11] mb-1">
              Chatbot Name
            </label>
            <input
              type="text"
              value={config.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full p-2 border border-[#F78CA2] rounded focus:outline-none focus:ring-2 focus:ring-[#D80032] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3D0C11] mb-1">
              Welcome Message
            </label>
            <textarea
              className="w-full p-2 border border-[#F78CA2] rounded focus:outline-none focus:ring-2 focus:ring-[#D80032] focus:border-transparent"
              rows="3"
              value={config.welcomeMessage}
              onChange={(e) => handleChange("welcomeMessage", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3D0C11] mb-1">
              Offline Message
            </label>
            <textarea
              className="w-full p-2 border border-[#F78CA2] rounded focus:outline-none focus:ring-2 focus:ring-[#D80032] focus:border-transparent"
              rows="3"
              value={config.offlineMessage}
              onChange={(e) => handleChange("offlineMessage", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-2 text-[#D80032]">
          AI Intelligence Settings
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#3D0C11] mb-1">
              Knowledge Base
            </label>
            <div className="flex items-center gap-2">
              <select
                className="w-full p-2 border border-[#F78CA2] rounded focus:outline-none focus:ring-2 focus:ring-[#D80032] focus:border-transparent"
                value={config.knowledgeBase}
                onChange={(e) => handleChange("knowledgeBase", e.target.value)}
              >
                <option>Product Information</option>
                <option>Support Documentation</option>
                <option>FAQs</option>
                <option>Pricing</option>
                <option>All Knowledge Bases</option>
              </select>
              <button
                className="bg-[#F9DEC9] text-[#3D0C11] p-2 rounded hover:bg-[#F78CA2] transition-colors"
                onClick={handleAddKnowledgeBase}
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3D0C11] mb-1">
              Response Tone
            </label>
            <select
              className="w-full p-2 border border-[#F78CA2] rounded focus:outline-none focus:ring-2 focus:ring-[#D80032] focus:border-transparent"
              value={config.responseTone}
              onChange={(e) => handleChange("responseTone", e.target.value)}
            >
              <option>Professional</option>
              <option>Friendly</option>
              <option>Technical</option>
              <option>Casual</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3D0C11] mb-1">
              Human Handoff Threshold
            </label>
            <div className="flex items-center">
              <input
                type="range"
                min="1"
                max="5"
                value={config.handoffThreshold}
                onChange={(e) =>
                  handleChange("handoffThreshold", parseInt(e.target.value))
                }
                className="w-full accent-[#D80032]"
              />
            </div>
            <div className="flex justify-between text-xs text-[#3D0C11] mt-1">
              <span>Low Complexity</span>
              <span>High Complexity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
