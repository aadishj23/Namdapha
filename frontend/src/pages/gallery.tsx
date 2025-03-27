import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { CameraIcon, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL; 

interface ImageData {
  id: string;
  imageURL: string;
  publicID: string;
  uploadedBy: string;
  uploadedAt: string;
}

const Gallery: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchGalleryImages();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      window.scrollTo({
        top: window.innerHeight / 2,
        behavior: "smooth",
      });
    }
  }, [selectedImage]);


  // Fetch images from backend
  const fetchGalleryImages = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.get<ImageData[]>(`${API_BASE_URL}/image/fetchImages`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setGalleryImages(response.data);
    } catch (err) {
      setError("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  // Handle image upload
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("uploadedBy", "User");

    try {
      setUploading(true);
      await axios.post(`${API_BASE_URL}/image/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await fetchGalleryImages(); 
    } catch (error) {
      setError("Upload failed");
      setTimeout(() => {
        setError(null); 
      } , 5000);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div data-aos="zoom-out">
      {/* Hero Section */}
      <div
        className="min-h-[600px] relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("./flowerbanner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center text-white" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-amber-400">
            Namdapha Gallery
          </h1>
        </div>
      </div>

      {/* Error & Loading Messages */}
      {loading && <p className="text-center text-gray-500">Loading images...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Upload Box */}
          <label className="aspect-square bg-green-50 rounded-lg border-2 border-dashed border-green-200 flex flex-col items-center justify-center p-4 hover:bg-green-100 transition-colors cursor-pointer group">
            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
            <CameraIcon className="w-12 h-12 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-green-600 text-center font-medium">{uploading ? "Uploading..." : "Upload your image"}</p>
          </label>

          {/* Gallery Images */}
          {galleryImages.map((image) => (
            <div key={image.id} className="aspect-square relative group overflow-hidden rounded-lg">
              <img src={image.imageURL} alt={`Uploaded by ${image.uploadedBy}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="outline" onClick={() => setSelectedImage(image.imageURL)}>
                  View Full Size
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Viewing Full-Size Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl relative">
            <button className="absolute top-4 right-4 text-gray-700" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Full Size" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
