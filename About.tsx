import { motion } from 'framer-motion';
import { Award, Camera, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About True Pic</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about capturing life's most precious moments through the lens of creativity and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80"
              alt="Team at work"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2020, True Pic has grown from a small photography studio to a full-service visual content creation company. Our team of passionate photographers and creative directors work tirelessly to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-600">
              We believe that every moment deserves to be captured beautifully, and we're here to help you preserve your memories in the most stunning way possible.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Camera className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">10+ Years Experience</h3>
            <p className="text-gray-600">Delivering exceptional photography services since 2020</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">1000+ Happy Clients</h3>
            <p className="text-gray-600">Creating memories that last a lifetime</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">50+ Awards</h3>
            <p className="text-gray-600">Recognition for our outstanding work</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}