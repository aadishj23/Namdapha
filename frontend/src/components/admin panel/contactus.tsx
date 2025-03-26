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

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get<Message[]>(
          `${import.meta.env.VITE_BACKEND_URL}/contactus/getMessages`,
          {
            headers: {
              "Content-Type": "application/json",
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

    fetchMessages();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading messages...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Contact Messages</h2>
      {messages.length === 0 ? (
        <p className="text-center text-gray-600">No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li key={msg.id} className="border p-4 rounded-lg shadow-md bg-white">
              <p className="font-bold text-lg">{msg.name}</p>
              <p className="text-sm text-gray-500">{msg.email}</p>
              <p className="mt-2 text-gray-700">{msg.message}</p>
              <p className="text-xs text-gray-400 mt-2">Submitted at: {new Date(msg.submittedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactMessages;