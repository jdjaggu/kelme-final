import React, { useState } from "react";
import { Home, User, MessageCircle, Camera, Settings } from "lucide-react";

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
}

const defaultNavItems: NavItem[] = [
  {
    id: "home",
    icon: <Home className="w-5 h-5" />,
    label: "Home",
    href: "/"
  },
  {
    id: "profile",
    icon: <User className="w-5 h-5" />,
    label: "Profile",
    href: "/account"
  },
  {
    id: "messages",
    icon: <MessageCircle className="w-5 h-5" />,
    label: "Messages",
    href: "/messages"
  },
  {
    id: "camera",
    icon: <Camera className="w-5 h-5" />,
    label: "Camera",
    href: "/camera"
  },
  {
    id: "settings",
    icon: <Settings className="w-5 h-5" />,
    label: "Settings",
    href: "/settings"
  }
];

interface MagicNavigationProps {
  items?: NavItem[];
  variant?: "gradient-1" | "gradient-2" | "gradient-3" | "gradient-4" | "gradient-5";
  className?: string;
}

const MagicNavigation: React.FC<MagicNavigationProps> = ({
  items = defaultNavItems,
  variant = "gradient-1",
  className = ""
}) => {
  const [activeItem, setActiveItem] = useState(items[0]?.id || "");

  const getVariantClasses = () => {
    switch (variant) {
      case "gradient-1":
        return "bg-gradient-to-r from-blue-500 to-cyan-400";
      case "gradient-2":
        return "bg-gradient-to-r from-pink-500 to-rose-400";
      case "gradient-3":
        return "bg-gradient-to-r from-purple-500 to-indigo-400";
      case "gradient-4":
        return "bg-gradient-to-r from-yellow-500 to-orange-400";
      case "gradient-5":
        return "bg-gradient-to-r from-orange-500 to-red-400";
      default:
        return "bg-gradient-to-r from-blue-500 to-cyan-400";
    }
  };

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <nav className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <div className={`relative px-6 py-4 rounded-full shadow-2xl ${getVariantClasses()}`}>
        {/* Background blur effect */}
        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
        
        {/* Navigation items */}
        <ul className="relative flex items-center space-x-6">
          {items.map((item, index) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleItemClick(item.id)}
                className={`
                  relative z-10 flex items-center justify-center w-12 h-12 rounded-full
                  transition-all duration-300 ease-out
                  ${activeItem === item.id 
                    ? 'bg-white text-gray-800 shadow-lg transform scale-110' 
                    : 'text-white/80 hover:text-white hover:bg-white/20 hover:scale-105'
                  }
                `}
                title={item.label}
              >
                {item.icon}
              </button>
              
              {/* Active indicator */}
              {activeItem === item.id && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              )}
              
              {/* Ripple effect */}
              {activeItem === item.id && (
                <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MagicNavigation;