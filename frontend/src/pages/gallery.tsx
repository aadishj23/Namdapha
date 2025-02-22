import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop",
    alt: "Flora Image 12"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop",
    alt: "Flora Image 12"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop",
    alt: "Flora Image 12"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop",
    alt: "Flora Image 12"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop",
    alt: "Flora Image 12"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop",
    alt: "Flora Image 12"
  },
];

const Gallery = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div 
        className="min-h-[600px] relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("./flowerbanner.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60" /> */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold mb-4 text-amber-400">Namdapha Gallery</h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Upload Box */}
          <div className="aspect-square bg-green-50 rounded-lg border-2 border-dashed border-green-200 flex flex-col items-center justify-center p-4 hover:bg-green-100 transition-colors cursor-pointer group">
            <CameraIcon className="w-12 h-12 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-green-600 text-center font-medium">Upload your image</p>
          </div>

          {/* Gallery Images */}
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square relative group overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="outline" className="">
                  View Full Size
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;