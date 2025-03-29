import React from 'react';
import { Shield, ShoppingBag, Users, ChevronRight, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1544985361-b420d7a77043?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">
            Los Santos RP
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-slide-up">
            Experience the most immersive roleplay server
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full 
            transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Join Now <ChevronRight size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Rules Section */}
          <div className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 
            hover:bg-gray-700 cursor-pointer group">
            <Shield className="w-12 h-12 text-purple-500 mb-4 group-hover:text-purple-400 
              transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-4">Server Rules</h2>
            <p className="text-gray-400 group-hover:text-gray-300">
              Follow our guidelines to ensure a fair and enjoyable experience for everyone.
            </p>
          </div>

          {/* Shop Section */}
          <div className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 
            hover:bg-gray-700 cursor-pointer group">
            <ShoppingBag className="w-12 h-12 text-purple-500 mb-4 group-hover:text-purple-400 
              transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-4">VIP Shop</h2>
            <p className="text-gray-400 group-hover:text-gray-300">
              Enhance your RP experience with exclusive items and perks.
            </p>
          </div>

          {/* General Info Section */}
          <div className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 
            hover:bg-gray-700 cursor-pointer group">
            <Users className="w-12 h-12 text-purple-500 mb-4 group-hover:text-purple-400 
              transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-4">Community</h2>
            <p className="text-gray-400 group-hover:text-gray-300">
              Join our thriving community of roleplayers and make new friends.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12">Server Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm
                transform transition-all duration-300 hover:bg-gray-800">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Los Santos RP. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Discord
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Forums
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Custom Economy System",
    description: "Experience our unique economy with multiple job opportunities and business ownership."
  },
  {
    title: "Advanced Housing",
    description: "Own and customize your property with our extensive housing system."
  },
  {
    title: "Custom Cars & Tuning",
    description: "Access exclusive vehicles and deep customization options."
  },
  {
    title: "Regular Events",
    description: "Participate in community events, races, and special RP scenarios."
  }
];

export default App;