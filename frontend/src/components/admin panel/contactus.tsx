import { useEffect, useState } from "react";
import axios from "axios";

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

const ContactMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get<Message[]>(
        `${import.meta.env.VITE_BACKEND_URL}/contactus/getMessages`,
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token') ?? '')}`
          },
        }
      );
      setMessages(response.data);
    } catch (err) {
      setError("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    setSuccessMessage(null); // Clear previous success messages
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/contactus/delete/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token') ?? '')}`
          },
        }
      );
      setSuccessMessage("Message deleted successfully.");
      setTimeout(() => setSuccessMessage(null), 3000); 
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (err) {
      setError("Failed to delete message");
      setTimeout(() => setError(null), 3000);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading messages...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  {successMessage && <p className="text-center text-green-500">{successMessage}</p>}

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Contact Messages</h2>
      {messages.length === 0 ? (
        <p className="text-center text-gray-600">No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li key={msg.id} className="border p-4 rounded-lg shadow-md bg-white flex justify-between items-center">
              <div>
                <p className="font-bold text-lg">{msg.name}</p>
                <p className="text-sm text-gray-500">{msg.email}</p>
                <p className="mt-2 text-gray-700">{msg.message}</p>
                <p className="text-xs text-gray-400 mt-2">Submitted at: {new Date(msg.submittedAt).toLocaleString()}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => deleteMessage(msg.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactMessages;
