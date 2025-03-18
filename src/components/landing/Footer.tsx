
import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FreshPick.lk</h3>
            <p className="text-green-100">
              Bringing the freshest groceries straight from local farms to your table.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Mail />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-green-100">Email: info@freshpick.lk</p>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
          <p>© {new Date().getFullYear()} FreshPick.lk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
