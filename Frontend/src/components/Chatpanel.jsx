import { useState } from "react";
import axios from "axios";
import { FaRobot } from "react-icons/fa";

function ChatPanel({ setFormData }) {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        message,
      });

      const aiReply = res.data.reply;
      setReply(aiReply);

      // simple extraction
      setFormData({
        hcp: message.includes("Dr") ? "Dr Sharma" : "",
        type: "Meeting",
        sentiment: message.toLowerCase().includes("positive")
          ? "Positive"
          : "Neutral",
        material: message.toLowerCase().includes("brochure") ? "Brochure" : "",
      });
    } catch (error) {
      setReply("Error connecting to AI backend.");
    }
  };

  return (
    <div>
      <h2 className="ai-title">
        <FaRobot /> AI Assistant
      </h2>

      {message && <div className="chat-message user">{message}</div>}
      {reply && <div className="chat-message success">{reply}</div>}

      <textarea
        placeholder="Describe Interaction..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>AI Log</button>
    </div>
  );
}

export default ChatPanel;
