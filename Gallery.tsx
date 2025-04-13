import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../components/Button';

const categories = ['All', 'Wedding', 'Portrait', 'Nature', 'Product', 'Street', 'Landscape'] as const;
type Category = (typeof categories)[number];

const images = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    title: "Wedding Photography",
    category: "Wedding"
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    title: "Portrait Photography",
    category: "Portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1496509218134-fad73128e572?auto=format&fit=crop&w=800&q=80",
    title: "Nature Photography",
    category: "Nature"
  },
  {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
    title: "Product Photography",
    category: "Product"
  },
  {
    src: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&w=800&q=80",
    title: "Street Photography",
    category: "Street"
  },
  {
    src: "https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?auto=format&fit=crop&w=800&q=80",
    title: "Landscape Photography",
    category: "Landscape"
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredImages = images.filter(image => 
    selectedCategory === 'All' || image.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our diverse collection of professional photography
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            No images found in this category.
          </motion.p>
        )}
      </div>
    </div>
  );
}