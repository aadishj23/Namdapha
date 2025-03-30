import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const SpeciesOfWeek = () => {
  const [species, setSpecies] = useState<{
    id: string;
    title: string;
    body: string;
    imageUrl: string;
  } | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchLatestSpecies();
  }, []);

  const fetchLatestSpecies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/species/get`);
      if (response.data.length > 0) {
        const latestSpecies = response.data[0];
        setSpecies({
          id: latestSpecies.id,
          title: latestSpecies.title,
          body: latestSpecies.body,
          imageUrl: latestSpecies.image?.imageURL || "default.jpg",
        });
      }
    } catch (error) {
      console.error("Failed to fetch species", error);
      setSpecies(null);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!file || !title || !body) {
      setError("Please fill all fields and select an image.");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];

    const formData = new FormData();
    formData.append("species", JSON.stringify({ title, body, date: currentDate }));
    formData.append("file", file);

    setLoading(true);
    try {
      const addResponse = await axios.post(`${API_BASE_URL}/species/add`, formData);

      if (addResponse.status !== 200) throw new Error("Failed to add species");

      setSuccess("Species updated successfully!");
      setTimeout(() => setSuccess(null), 5000); 

      if (species?.id) {
        axios.delete(`${API_BASE_URL}/species/delete/${species.id}`).catch((error) => {
          console.error("Failed to delete previous species", error);
        });
      }

      fetchLatestSpecies();
      setShowForm(false);
      setTitle("");
      setBody("");
      setFile(null);
    } catch (error) {
      console.error("Error updating species", error);
      setError("Failed to update species.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Species of the Week</h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {success && <p className="text-center text-green-500">{success}</p>}

      {species ? (
        <div className="text-center p-4 border rounded-md shadow-md bg-gray-100">
          <h3 className="text-xl font-semibold">Name: {species.title}</h3>
          <p className="text-gray-600">About: {species.body}</p>
          <img src={species.imageUrl} alt={species.title} className="w-full max-w-xs mx-auto mt-3 rounded-md shadow-md" />
        </div>
      ) : (
        <p className="text-center text-gray-500">No species available</p>
      )}

      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Replace
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 p-4 bg-gray-50 rounded-md shadow-md">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
          <input type="file" onChange={handleFileChange} required className="w-full p-2 border rounded-md" />
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Species"}
          </button>
        </form>
      )}
    </div>
  );
};

export default SpeciesOfWeek;