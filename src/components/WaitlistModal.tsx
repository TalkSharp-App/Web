import React, { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [forWhom, setForWhom] = useState('default');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otherLanguage, setOtherLanguage] = useState('');

  if (!isOpen) return null;

  const toggleLanguage = (lang: string) => {
    if (selectedLanguages.includes(lang)) {
      setSelectedLanguages(selectedLanguages.filter(l => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  const getLocationData = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        city: data.city || 'Unknown',
        country: data.country_name || 'Unknown'
      };
    } catch (error) {
      console.error('Error getting location:', error);
      return { city: 'Unknown', country: 'Unknown' };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!email || forWhom === 'default' || selectedLanguages.length === 0) {
        toast.error("Please fill in all required fields");
        return;
      }

      setIsSubmitting(true);
      
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString();
      const time = currentDate.toLocaleTimeString();
      
      const location = await getLocationData();
      
      const formData = {
        date,
        time,
        email,
        forWhom,
        languages: selectedLanguages.join(', '),
        location
      };
      
      console.log('Submitting form data:', formData);
      
      const formDataToSubmit = {...formData};
      
      if (selectedLanguages.includes('Other') && otherLanguage.trim()) {
        const filteredLanguages = selectedLanguages.filter(lang => lang !== 'Other');
        formDataToSubmit.languages = [...filteredLanguages, otherLanguage.trim()].join(', ');
      }
      
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxqjtdXsFxmVbwu_SvUZu6j9FKQDQf5bm_ylSKo-CWuD8wzA9bCCME5RNR52TyeI_Q/exec", 
        {
          method: "POST",
          body: JSON.stringify(formDataToSubmit),
        }
      );
      
      toast.success("Thank you for joining our waitlist!");
      
      setEmail('');
      setForWhom('default');
      setSelectedLanguages([]);
      setOtherLanguage('');
      
      onClose();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("An error occurred while joining the waitlist.. please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="bg-white rounded-3xl w-full max-w-md p-6 relative z-10 mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">JOIN THE WAITLIST</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD549]"
              required
            />
          </div>

          <div>
            <div className="relative w-full">
              <select
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#FA534A]"
                value={forWhom}
                onChange={(e) => setForWhom(e.target.value)}
                required
              >
                <option value="default" disabled>Who are you excited for?</option>
                <option value="self">Myself</option>
                <option value="family">Family member</option>
                <option value="partner">Partner</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <p className="text-sm font-medium mb-2">What language(s) are you interested in learning?</p>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes('Igbo')}
                  onChange={() => toggleLanguage('Igbo')}
                  style={{ 
                    accentColor: '#178029',  // This modern CSS property works in newer browsers
                  }}
                  className="rounded border-gray-300 text-paddyGreen focus:ring-paddyGreen"
                />
                <span className="flex items-center">
                  <span className="inline-block mr-1">🇳🇬</span> Igbo
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes('Yoruba')}
                  onChange={() => toggleLanguage('Yoruba')}
                  style={{ 
                    accentColor: '#178029',  // This modern CSS property works in newer browsers
                  }}
                  className="rounded border-gray-300 text-paddyGreen focus:ring-paddyGreen"
                />
                <span className="flex items-center">
                  <span className="inline-block mr-1">🇳🇬</span> Yoruba
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes('Pidgin')}
                  onChange={() => toggleLanguage('Pidgin')}
                  style={{ 
                    accentColor: '#178029',  // This modern CSS property works in newer browsers
                  }}
                  className="rounded border-gray-300 text-paddyGreen focus:ring-paddyGreen"
                />
                <span className="flex items-center">
                  <span className="inline-block mr-1">🇳🇬</span> Pidgin
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes('Twi')}
                  onChange={() => toggleLanguage('Twi')}
                  style={{ 
                    accentColor: '#178029',  // This modern CSS property works in newer browsers
                  }}
                  className="rounded border-gray-300 !text-[#178029] focus:ring-[#178029] checked:bg-[#178029]"
                />
                <span className="flex items-center">
                  <span className="inline-block mr-1">🇬🇭</span> Twi
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes('Swahili')}
                  onChange={() => toggleLanguage('Swahili')}
                  style={{ 
                    accentColor: '#178029',  // This modern CSS property works in newer browsers
                  }}
                  className="rounded border-gray-300 text-paddyGreen focus:ring-paddyGreen"
                />
                <span className="flex items-center">
                  <span className="inline-block mr-1">🇰🇪</span> Swahili
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes('Other')}
                  onChange={() => toggleLanguage('Other')}
                  style={{ 
                    accentColor: '#178029',  // This modern CSS property works in newer browsers
                  }}
                  className="rounded border-gray-300 text-paddyGreen focus:ring-paddyGreen"
                />
                <span>Other (specify)</span>
              </label>
            </div>

            {selectedLanguages.includes('Other') && (
              <input
                type="text"
                placeholder="Please specify the language"
                value={otherLanguage}
                onChange={(e) => setOtherLanguage(e.target.value)}
                className="mt-2 w-full p-2 border rounded"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Join the Waitlist"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistModal; 