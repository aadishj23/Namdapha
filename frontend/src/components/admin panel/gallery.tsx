import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Trash2, X } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

interface ImageData {
  id: string;
  imageURL: string;
  uploadedBy: string;
  uploadedAt: string;
}

function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch images from backend
  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get<ImageData[]>(`${API_BASE_URL}/image/fetchImages`, {
        headers: { "Content-Type": "application/json" },
      });
      setImages(response.data);
    } catch (err) {
      setError("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // useEffect(() => {
  //   if (selectedImage) {
  //     window.scrollTo({
  //       top: window.innerHeight / 2,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [selectedImage]);


  // Delete image function
  const deleteImage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      await axios.delete(`${API_BASE_URL}/image/delete/${id}`);
      setImages((prevImages) => prevImages.filter((image) => image.id !== id)); // Remove deleted image
    } catch (err) {
      alert("Error deleting image.");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Gallery Dashboard</h1>

      {/* Error & Loading States */}
      {loading && <p className="text-center text-gray-500">Loading images...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group rounded-lg overflow-hidden shadow-md">
            <img
              src={image.imageURL}
              alt="Uploaded"
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => setSelectedImage(image.imageURL)}
            />

            {/* Hover Effects */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setSelectedImage(image.imageURL)}>View</Button>
                <Button variant="destructive" className="flex items-center gap-2" onClick={() => deleteImage(image.id)}>
                  <Trash2 size={18} /> Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Viewing Full-Size Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full" onClick={() => setSelectedImage(null)}>
              <X size={24} className="text-black" />
            </button>
            <img src={selectedImage} alt="Full Size" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;