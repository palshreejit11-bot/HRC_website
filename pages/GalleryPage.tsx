import React, { useState, useEffect } from 'react';
import { getGalleryImages } from '../api/contentful';
import LoadingSpinner from '../components/LoadingSpinner';

const PageHeader: React.FC<{ title: string, bgImage: string }> = ({ title, bgImage }) => (
  <header className="relative py-28 md:py-40 bg-cover bg-center text-center text-white" style={{ backgroundImage: `url('${bgImage}')` }}>
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
    </div>
  </header>
);

interface GalleryImage {
    id: string;
    title: string;
    url: string;
    description: string;
}

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGalleryImages();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="animate-fade-in">
        <PageHeader title="Our Gallery" bgImage="https://images.unsplash.com/photo-1517036339023-1d5b5136a687?q=80&w=2070&auto=format&fit=crop" />
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                {loading ? (
                    <LoadingSpinner className="py-20" />
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((image) => (
                            <div key={image.id} className="group cursor-pointer" onClick={() => openModal(image)}>
                                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                                     <img 
                                        src={image.url} 
                                        alt={image.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>

        {selectedImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto animate-fade-in" onClick={(e) => e.stopPropagation()}>
                    <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-auto max-h-[70vh] object-contain" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{selectedImage.title}</h3>
                        <p className="text-slate-600">{selectedImage.description}</p>
                    </div>
                    <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300">&times;</button>
                </div>
            </div>
        )}
    </div>
  );
};

export default GalleryPage;
