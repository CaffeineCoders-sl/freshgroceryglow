import React from 'react';
import { Facebook, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">FreshPick.lk</h3>
            <p className="text-green-100 opacity-80 leading-relaxed">
              Bringing the freshest groceries straight from local farms to your table.
            </p>
            <div className="pt-2">
              <img 
                src="https://images.unsplash.com/photo-1546198632-9ef4a41d53a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Sri Lanka" 
                className="w-16 h-16 rounded-lg object-cover shadow-md transition-transform hover:scale-105"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-green-100 opacity-80 hover:opacity-100 hover:text-white transition-all duration-200 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Contact</h3>
            <div className="space-y-2 text-green-100 opacity-80">
              <p className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" /> info@freshpick.lk
              </p>
              <p>Sri Lanka</p>
            </div>
            
            <h3 className="text-xl font-semibold tracking-tight pt-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Newsletter</h3>
            <p className="text-green-100 opacity-80">
              Subscribe to receive updates on new products and special promotions.
            </p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-green-800 bg-opacity-50 text-white px-4 py-2 rounded-l-md focus:outline-none flex-grow placeholder-green-200 placeholder-opacity-50"
              />
              <button className="bg-green-600 hover:bg-green-500 px-4 rounded-r-md transition-colors duration-200 flex items-center">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-10 pt-8 text-center text-green-200 text-sm">
          <p>© {new Date().getFullYear()} FreshPick.lk. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4 text-xs opacity-75">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
