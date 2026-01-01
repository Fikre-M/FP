import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatbotContainer = styled.div`
  position: fixed;
  top: 6rem; /* Position below header */
  right: 2rem;
  z-index: 1000;
  
  @media (max-width: 768px) {
    top: 5rem;
    right: 1rem;
  }
`;

const ChatbotButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  top: 60px; /* Position below the chat button */
  right: 0;
  width: 320px;
  height: 365px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  
  @media (max-width: 768px) {
    width: 280px;
    height: 400px;
  }
`;

const ChatHeader = styled.div`
  background: #3b82f6; /* Blue header */
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 0.95rem;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: white;
`;

const Message = styled.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  line-height: 1.4;
  word-wrap: break-word;
  background: ${({ $isUser }) => 
    $isUser ? '#3b82f6' : '#f3f4f6'};
  color: ${({ $isUser }) => $isUser ? 'white' : '#1f2937'};
  align-self: ${({ $isUser }) => $isUser ? 'flex-end' : 'flex-start'};
  border: ${({ $isUser }) => 
    !$isUser ? '1px solid #e5e7eb' : 'none'};
  font-size: 0.9rem;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  background: white;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  outline: none;
  background: #f9fafb;
  color: #1f2937;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

const SendButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
  
  &:hover:not(:disabled) {
    background: #2563eb;
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm your portfolio assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'm a simple chatbot. You can customize my responses in the Chatbot component!"];
      
      const botMessage = {
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <ChatbotContainer>
      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <div>Portfolio Assistant</div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              <FaTimes />
            </button>
          </ChatHeader>
          <ChatMessages>
            {messages.map((message, index) => (
              <Message key={index} $isUser={message.isUser}>
                {message.text}
              </Message>
            ))}
            <div ref={messagesEndRef} />
          </ChatMessages>
          <form onSubmit={handleSendMessage}>
            <InputContainer>
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
              />
              <SendButton type="submit" disabled={!inputValue.trim()}>
                <FaPaperPlane />
              </SendButton>
            </InputContainer>
          </form>
        </ChatWindow>
      )}
      <ChatbotButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaRobot />}
      </ChatbotButton>
    </ChatbotContainer>
  );
};

export default Chatbot;
