
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import FadeIn from '../animations/FadeIn';
import { toast } from 'sonner';
import { MapPin, MessageSquare, Mail, Phone, Check } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for joining our waitlist! We'll be in touch soon.");
      setFormData({ name: '', email: '', phone: '', location: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="waitlist-section" className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <FadeIn direction="up">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-green-100">
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                Be the First to Know!
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Join our waitlist to get exclusive early access and special offers when we launch.
                Get fresher groceries delivered straight to your doorstep!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full border-green-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-green-600" /> Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full border-green-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-green-600" /> Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number (optional)"
                    className="w-full border-green-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-600" /> Delivery Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your delivery location"
                    className="w-full border-green-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-green-600" /> Additional Information
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special preferences or requirements?"
                    className="w-full min-h-[100px] border-green-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-lg font-medium transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      Join Our Waitlist
                      <Check className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to receive updates about our launch and promotional offers.
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
