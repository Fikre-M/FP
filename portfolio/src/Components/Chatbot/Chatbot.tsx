import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Code,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

interface Message {
  text: string;
  isUser: boolean;
  quickActions?: QuickAction[];
}

interface QuickAction {
  label: string;
  action: () => void;
  icon: React.ReactNode;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hi! I'm your AI portfolio assistant. I can help visitors learn about Fikre's skills, projects, and experience. What would you like to know?",
      isUser: false,
      quickActions: [
        {
          label: "View Projects",
          action: () => handleQuickAction("projects"),
          icon: <Code className="w-4 h-4" />,
        },
        {
          label: "Skills & Tech",
          action: () => handleQuickAction("skills"),
          icon: <Code className="w-4 h-4" />,
        },
        {
          label: "Contact Info",
          action: () => handleQuickAction("contact"),
          icon: <Linkedin className="w-4 h-4" />,
        },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): Message => {
    const message = userMessage.toLowerCase();

    // Project-related queries
    if (message.includes("project") || message.includes("portfolio")) {
      return {
        text: "I've built several modern web applications using React, TypeScript, and various libraries. Here are some highlights:\n\n• **AI Ethiopian Tour + Cultural Concierge App** - React, TypeScript \n• **AI Healthcare & Medical Appointment System** - Next.js, Tailwind CSS, Firebase\n• **AI Shelter Operations & Case Management System** - React\n\nWant to see the code? Check out my GitHub!",
        isUser: false,
        quickActions: [
          {
            label: "Open GitHub",
            action: () => window.open("https://github.com/Fikre-M", "_blank"),
            icon: <Github className="w-4 h-4" />,
          },
          {
            label: "View Live Demos",
            action: () => handleQuickAction("demos"),
            icon: <Code className="w-4 h-4" />,
          },
        ],
      };
    }

    // Skills queries
    if (
      message.includes("skill") ||
      message.includes("tech") ||
      message.includes("stack")
    ) {
      return {
        text: "🛠️ **Core Skills:**\n• React.js / Next.js\n• TypeScript / JavaScript (ES6+)\n• HTML5 / CSS3 / SASS\n• REST APIs \n• Git / GitHub\n• Node.js / Express\n• MongoDB / PostgreSQL\n• Basic AWS\n\n**Currently Learning:**\n• Docker \n• Agile/Scrum methodology",
        isUser: false,
        quickActions: [
          {
            label: "React Experience",
            action: () => handleQuickAction("react"),
            icon: <Code className="w-4 h-4" />,
          },
        ],
      };
    }

    // Contact queries
    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("hire")
    ) {
      return {
        text: "📫 You can reach me through:\n\n• **Email:** fikreddu@gmail.com\n• **LinkedIn:** linkedin.com/in/fikremariam-kassa-28916062\n• **GitHub:** github.com/Fikre-M\n\nI'm open to junior developer roles, internships, or freelance projects!",
        isUser: false,
        quickActions: [
          {
            label: "Open LinkedIn",
            action: () =>
              window.open("https://www.linkedin.com/in/fikremariam-kassa-28916062/", "_blank"),
            icon: <Linkedin className="w-4 h-4" />,
          },
          {
            label: "Download Resume",
            action: () => window.open("/resume.pdf", "_blank"),
            icon: <Download className="w-4 h-4" />,
          },
        ],
      };
    }

    // Default responses
    const defaultResponses = [
      "That's interesting! As a developer focused on React and TypeScript, I'm always eager to learn new technologies and take on challenging projects.",
      "Great question! I specialize in building responsive, accessible web applications with clean code and modern best practices.",
      "I'm passionate about creating user-friendly interfaces and solving real-world problems with code. Want to know more about my technical approach?",
      "Let me know if you'd like to discuss specific projects, technologies, or development methodologies I use!",
      "You're very welcome! See you soon!!"
    ];

    return {
      text: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
      isUser: false,
      quickActions: [
        {
          label: "View Projects",
          action: () => handleQuickAction("projects"),
          icon: <Code className="w-4 h-4" />,
        },
        {
          label: "Contact Info",
          action: () => handleQuickAction("contact"),
          icon: <Linkedin className="w-4 h-4" />,
        },
      ],
    };
  };

  const handleQuickAction = (action: string) => {
    const message = `Tell me about ${action}`;
    const syntheticEvent = { preventDefault: () => {} };
    handleSendMessage(syntheticEvent as React.FormEvent, message);
  };

  const handleSendMessage = (e: React.FormEvent, customMessage?: string) => {
    e.preventDefault();
    const messageText = customMessage || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = { text: messageText, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    if (!customMessage) {
      setInputValue("");
    }

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  return (
    <div className="fixed top-24 right-4 z-50 md:top-24 md:right-8">
      {/* Chat Window */}
      <div
        className={`
          absolute top-16 right-0 w-80 max-h-96 bg-white rounded-2xl shadow-2xl 
          border border-gray-200 flex flex-col overflow-hidden transition-all duration-300
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}
          md:w-96 max-w-[calc(100vw-2rem)]
        `}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Portfolio Assistant</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white min-h-80 max-h-80">
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div key={index} className="space-y-2">
                <div
                  className={`
                    max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed
                    ${message.isUser
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white ml-auto"
                      : "bg-white border border-gray-200 text-gray-800 shadow-sm"
                    }
                  `}
                >
                  {message.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < message.text.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                {message.quickActions && !message.isUser && (
                  <div className="flex flex-wrap gap-2">
                    {message.quickActions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={action.action}
                        className="
                          flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 
                          text-gray-700 text-xs rounded-full border border-gray-300 
                          transition-colors duration-200
                        "
                      >
                        {action.icon}
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about projects, skills, or experience..."
              className="
                flex-1 px-4 py-2 border border-gray-300 rounded-full 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                bg-gray-50 text-sm
              "
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="
                p-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full 
                hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-200 flex items-center justify-center
              "
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full 
          shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110
          flex items-center justify-center border-2 border-white
        "
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default Chatbot;