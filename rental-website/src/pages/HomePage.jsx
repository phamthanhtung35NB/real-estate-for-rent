import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Header = () => (
  <nav className="bg-white py-6 border-b">
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className="text-orange-400 text-xl font-light">RENTZ</div>
      <div className="flex space-x-8">
        <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
        <a href="/contact" className="text-orange-400 hover:text-orange-500">Contact</a>
        <a href="/locations" className="text-gray-600 hover:text-gray-800">Locations</a>
        <a href="/shop" className="text-gray-600 hover:text-gray-800">Shop</a>
        <a href="/booking" className="text-gray-600 hover:text-gray-800">Online booking</a>
      </div>
      <div className="flex items-center space-x-6">
        <Search className="text-orange-400 w-5 h-5" />
        <div className="relative">
          <ShoppingBag className="text-orange-400 w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            0
          </span>
        </div>
      </div>
    </div>
  </nav>
);

const Welcome = () => (
  <div className="relative h-[600px] bg-[#1a1a1a]">
    <div className="absolute inset-0">
      <div className="w-full h-full" style={{
        backgroundImage: 'linear-gradient(45deg, transparent 45%, #333 45%, #333 55%, transparent 55%)',
        backgroundSize: '20px 20px'
      }}></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-white p-16 text-center rounded-sm shadow-lg max-w-lg">
        <h1 className="text-5xl font-light mb-6 tracking-wide">WELCOME</h1>
        <p className="text-gray-600 mb-8 text-lg">Start the journey to find your home right now!</p>
        <button className="bg-orange-400 text-white px-10 py-3 rounded-sm hover:bg-orange-500 transition-colors text-sm">
          Sign up
        </button>
      </div>
    </div>
  </div>
);

const GetToKnow = () => (
  <div className="py-20 text-center bg-gray-50">
    <h2 className="text-5xl font-light mb-6 tracking-wide">Get to Know Us</h2>
    <p className="text-gray-600 mb-8 text-lg">Exploring your ideal rental property</p>
    <button className="bg-orange-400 text-white px-10 py-3 rounded-sm hover:bg-orange-500 transition-colors text-sm">
      Learn More
    </button>
  </div>
);

const Filter = () => {
  const districts = [
    'Cau Giay District',
    'Hoang Mai District',
    'Dong Da District',
    'Hoan Kiem District',
    'Ha Dong District',
    'Thanh Xuan District'
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-light mb-12 text-center tracking-wide">FILTER</h2>
      <div className="grid grid-cols-2 gap-16 max-w-4xl mx-auto">
        <div>
          <h3 className="text-orange-400 mb-6 text-lg">Price Range</h3>
          <input 
            type="range" 
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <h3 className="text-3xl font-light mb-6">AREA</h3>
          <div className="space-y-4">
            {districts.map((district) => (
              <div key={district} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-orange-400 border-gray-300 rounded focus:ring-orange-400"
                />
                <label className="ml-3 text-gray-600">{district}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyCard = ({ image, title, price }) => (
  <div className="bg-gray-800 rounded-sm overflow-hidden group">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-white text-lg mb-2 font-light">{title}</h3>
      <p className="text-orange-400 font-light">${price.toLocaleString()}</p>
      <button className="mt-4 bg-orange-400 text-white px-6 py-2 rounded-sm hover:bg-orange-500 transition-colors w-full text-sm">
        View Details
      </button>
    </div>
  </div>
);

const HouseAvailable = () => {
  const properties = [
    {
      image: "/api/placeholder/400/300",
      title: "House & Design",
      price: 40000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "House & Design",
      price: 45000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "House & Design",
      price: 42000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "House & Design",
      price: 35000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "Apartment & Design",
      price: 16000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "Apartment & Design",
      price: 18000000
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-light mb-12 text-center tracking-wide">House Available</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Welcome />
      <GetToKnow />
      <Filter />
      <HouseAvailable />
    </div>
  );
};

export default HomePage;