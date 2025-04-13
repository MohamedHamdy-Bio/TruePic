import { Camera, Menu, X, UserCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <Camera className="h-8 w-8 text-primary-600" />
                <span className="text-xl font-bold text-gray-900">True Pic</span>
              </Link>
            </motion.div>
            
            <div className="hidden md:flex md:items-center md:space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center space-x-8"
              >
                <Link to="/" className="text-gray-900 hover:text-primary-600 transition-colors">
                  Home
                </Link>
                <Link to="/gallery" className="text-gray-900 hover:text-primary-600 transition-colors">
                  Gallery
                </Link>
                <Link to="/about" className="text-gray-900 hover:text-primary-600 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-gray-900 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  onClick={() => setIsAuthModalOpen(true)}
                  variant="primary"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <UserCircle className="w-5 h-5" />
                  <span>Sign In</span>
                </Button>
              </motion.div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-900 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/gallery"
                  className="block px-3 py-2 text-gray-900 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-900 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-900 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      setIsAuthModalOpen(true);
                    }}
                    variant="primary"
                    size="sm"
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <UserCircle className="w-5 h-5" />
                    <span>Sign In</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}