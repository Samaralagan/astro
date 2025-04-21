import React, { useState, useEffect, useRef } from "react";

// Sample predefined responses based on knowledge base and tone
const PREDEFINED_RESPONSES = {
  "Product Information": {
    Professional: [
      "Our product specifications include advanced features designed for enterprise use.",
      "According to our product information, this feature is available in the Premium plan.",
      "The latest version of our product includes several performance improvements.",
      "I'd be happy to provide you with detailed product information regarding your inquiry.",
    ],
    Friendly: [
      "I love this question! Our product has some great features you might enjoy.",
      "Oh! That's one of my favorite things about our product. Let me tell you more!",
      "Great question about our product! Here's something cool you might not know...",
      "I think you'll really like what our product can do here!",
    ],
    Technical: [
      "The system architecture utilizes a microservices approach with containerized deployments.",
      "Technical specifications indicate a processing capacity of 1000 requests per second.",
      "The API implementation follows RESTful principles with JSON payload structure.",
      "Performance benchmarks show a 40% improvement in query response time.",
    ],
    Casual: [
      "Yeah, our product can definitely handle that! No problem at all.",
      "So basically, the product works like this...",
      "Hey! That's a great question about our product!",
      "Sure thing! Our product does exactly what you're looking for.",
    ],
  },
  "Support Documentation": {
    Professional: [
      "According to our support documentation, this can be resolved by following these steps...",
      "Our documentation indicates this is expected behavior under certain conditions.",
      "The latest release notes in our documentation address this specific concern.",
      "I've consulted our support documentation and can guide you through the solution.",
    ],
    Friendly: [
      "I know troubleshooting can be frustrating! Our documentation has a simple fix.",
      "Don't worry! This is a common question, and our support docs have a great answer.",
      "I'd love to help you solve this! Our documentation suggests trying this...",
      "Great question! I found something helpful in our support docs that might work for you.",
    ],
    Technical: [
      "The documented error code 0x4F3A indicates a network timeout exception.",
      "According to our technical documentation, this requires modifying the configuration parameters.",
      "The solution involves implementing a recursive function as documented in section 4.2.",
      "Our documentation specifies that this endpoint requires OAuth 2.0 authorization.",
    ],
    Casual: [
      "Yeah, our docs mention this issue. Here's a quick fix...",
      "So according to our support guides, you'll want to try this...",
      "I checked our docs and found something that might help you out.",
      "Our support pages talk about this - basically you need to...",
    ],
  },
  FAQs: {
    Professional: [
      "This is addressed in our Frequently Asked Questions. The recommended approach is...",
      "According to our FAQ section, this functionality is designed to operate in this manner.",
      "Our FAQ documentation provides a comprehensive explanation for this scenario.",
      "This question is covered in detail in our FAQ resources.",
    ],
    Friendly: [
      "That's a great question that many customers ask! Our FAQ has the perfect answer.",
      "I'm happy you asked that! It's in our FAQ section because it's so helpful to know.",
      "Oh! That's one that comes up a lot. Our FAQ has a really helpful explanation.",
      "I love when people ask this! Our FAQ has a really clear answer I'd be happy to share.",
    ],
    Technical: [
      "The FAQ document addresses this edge case through implementation of a fallback mechanism.",
      "According to FAQ item #37, this requires indexing the data structure before processing.",
      "Our technical FAQ section recommends implementing retry logic with exponential backoff.",
      "The FAQ clarifies that this anomaly occurs due to race conditions in the transaction layer.",
    ],
    Casual: [
      "Yep, that's in our FAQs! Here's what you need to know...",
      "This comes up a lot actually. Our FAQ says to...",
      "Oh yeah, our FAQ covers this. Basically...",
      "That's a common one! Our FAQ suggests trying this...",
    ],
  },
  Pricing: {
    Professional: [
      "Our pricing structure includes tiered options designed to accommodate various business needs.",
      "According to our current pricing information, this feature is included in the Enterprise tier.",
      "The pricing model includes both subscription-based and pay-as-you-go options.",
      "I can provide you with a detailed breakdown of our pricing structure.",
    ],
    Friendly: [
      "I'd be happy to explain our pricing! We have some great options that might work for you.",
      "Great question about pricing! We have several flexible plans to fit different needs.",
      "Let me help you find the perfect pricing plan for your situation!",
      "I love talking about our pricing because we have options for everyone!",
    ],
    Technical: [
      "The pricing API allows dynamic calculation based on usage metrics with 99.9% billing accuracy.",
      "Our pricing model implements a logarithmic scale for volume-based discounting.",
      "The tiered pricing structure utilizes a step function with overflow protection.",
      "Pricing calculations are performed using high-precision floating point to ensure accuracy.",
    ],
    Casual: [
      "Yeah, our pricing is pretty straightforward. Here's the deal...",
      "So basically, here's how our pricing works...",
      "Our pricing? Sure thing! It's pretty simple actually...",
      "About our pricing - here's the quick rundown...",
    ],
  },
};

const COMMON_USER_QUESTIONS = [
  "How much does the premium plan cost?",
  "Can I upgrade my subscription later?",
  "How do I reset my password?",
  "What features are included in the basic plan?",
  "Is there a free trial available?",
  "How do I contact customer support?",
  "Can I use this on multiple devices?",
  "How secure is my data?",
  "Do you offer refunds?",
  "How do I cancel my subscription?",
];

export default function ChatbotPreview({ config }) {
  const [isOpen, setIsOpen] = useState(true); // Start open in preview mode
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const messagesEndRef = useRef(null);

  // Initialize chat with welcome message when config changes
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: config.welcomeMessage,
        sender: "bot",
        timestamp: new Date().toISOString(),
      },
    ]);

    // Set initial suggested questions
    const randomQuestions = [...COMMON_USER_QUESTIONS]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setSuggestedQuestions(randomQuestions);
  }, [config.welcomeMessage]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: text,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText("");

    // Generate new suggested questions
    const newQuestions = [...COMMON_USER_QUESTIONS]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setSuggestedQuestions(newQuestions);

    // Simulate bot response after a short delay
    setTimeout(() => {
      // Get responses based on knowledge base and tone
      const knowledgeBase = config.knowledgeBase || "Product Information";
      const tone = config.responseTone || "Professional";

      let possibleResponses = PREDEFINED_RESPONSES[knowledgeBase]?.[tone] || [
        "I'll help you with that.",
        "Let me check that for you.",
        "I understand what you're asking.",
      ];

      const randomResponse =
        possibleResponses[Math.floor(Math.random() * possibleResponses.length)];

      const botMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date().toISOString(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);

      // Handle human handoff if the complexity is high (simulate with random chance)
      if (config.handoffThreshold <= 2 && Math.random() > 0.7) {
        setTimeout(() => {
          const handoffMessage = {
            id: Date.now() + 2,
            text: "I'm transferring you to a human agent for further assistance. Please wait a moment.",
            sender: "bot",
            timestamp: new Date().toISOString(),
            isHandoff: true,
          };

          setMessages((prevMessages) => [...prevMessages, handoffMessage]);
        }, 1000);
      }
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="relative border border-[#F78CA2] rounded-lg shadow-md mb-6">
      <div className="bg-[#F9DEC9] p-3 text-[#3D0C11] font-medium text-center">
        Chatbot Preview - See how your configuration will appear to users
      </div>

      <div className="p-4">
        <div className="w-full h-96 bg-white rounded-lg border border-[#F78CA2] flex flex-col overflow-hidden">
          <div className="bg-[#D80032] text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">{config.name}</h3>
            <button
              onClick={handleToggleChat}
              className="text-white hover:text-[#F9DEC9]"
            >
              {isOpen ? "✕" : "↓"}
            </button>
          </div>

          {isOpen && (
            <>
              <div className="flex-grow p-3 overflow-y-auto bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-3 flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-3 py-2 max-w-[80%] ${
                        message.sender === "user"
                          ? "bg-[#D80032] text-white"
                          : message.isHandoff
                          ? "bg-[#3D0C11] text-white"
                          : "bg-[#F9DEC9] text-[#3D0C11]"
                      }`}
                    >
                      <div className="text-sm">{message.text}</div>
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-[#F9DEC9]"
                            : message.isHandoff
                            ? "text-[#F9DEC9]"
                            : "text-[#3D0C11]/60"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />

                {messages.length === 1 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">
                      Suggested questions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(question)}
                          className="text-sm bg-[#F9DEC9] text-[#3D0C11] px-3 py-1 rounded-full hover:bg-[#F78CA2] transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-3 border-t border-[#F9DEC9] flex"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow p-2 border border-[#F78CA2] rounded-l focus:outline-none focus:ring-2 focus:ring-[#D80032] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#D80032] text-white p-2 rounded-r hover:bg-[#B80025] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="p-3 bg-[#F9DEC9]/50 text-sm text-[#3D0C11] rounded-b-lg">
        <p>
          <strong>Preview Settings:</strong> {config.knowledgeBase} knowledge
          base, {config.responseTone} tone, Handoff threshold:{" "}
          {config.handoffThreshold}/5
        </p>
      </div>
    </div>
  );
}
