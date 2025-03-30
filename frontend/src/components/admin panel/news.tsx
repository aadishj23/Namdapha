import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Trash2Icon, UploadIcon } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

interface NewsItem {
  id: string;
  date: string;
  title: string;
  body: string;
  image: { imageURL: string };
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newDate, setNewDate] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/news/getAll`);
      setNews(response.data.reverse()); 
    } catch (err) {
      setError("Failed to load news");
    } finally {
      setLoading(false);
    }
  };

  // Delete news
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this news?")) return;
    setLoading(true);
    try {
      await axios.delete(`${API_BASE_URL}/news/delete/${id}`);
      setSuccess("News deleted successfully");
      fetchNews(); // Refresh news list
    } catch (err) {
      setError("Failed to delete news");
    } finally {
      setLoading(false);
    }
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };

  // Add news
  const handleAddNews = async () => {
    if (!newTitle || !newBody || !newDate || !file) {
      setError("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("news", JSON.stringify({ title: newTitle, body: newBody, date: newDate }));
    formData.append("file", file);

    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/news/addNews`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("News added successfully");
      fetchNews(); 
      setNewTitle("");
      setNewBody("");
      setNewDate("");
      setFile(null);
    } catch (err) {
      setError("Failed to add news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Manage News</h1>

      {/* Success & Error Messages */}
      {success && <p className="bg-green-100 text-green-800 p-2 rounded">{success}</p>}
      {error && <p className="bg-red-100 text-red-800 p-2 rounded">{error}</p>}

      {/* Add News Form */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-xl font-bold mb-2">Add News</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Body"
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input type="file" onChange={handleFileChange} className="mb-2" />
        <Button onClick={handleAddNews} disabled={loading}>
          {loading ? "Adding..." : "Add News"}
          <UploadIcon className="ml-2 w-4 h-4" />
        </Button>
      </div>

      {/* News List */}
      <div className="space-y-6">
        {loading ? (
          <p>Loading news...</p>
        ) : news.length === 0 ? (
          <p>No news available</p>
        ) : (
          news.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow">
              <div className="flex items-center gap-4">
                <img src={item.image.imageURL} alt={item.title} className="w-24 h-24 object-cover rounded" />
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-600 text-sm">{item.date}</p>
                  <p className="text-gray-700 text-sm line-clamp-2">{item.body}</p>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="destructive" onClick={() => handleDelete(item.id)}>
                  Delete
                  <Trash2Icon className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
