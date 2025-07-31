import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingCart, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  
  // Check if user scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      navigate("/search?q=" + encodeURIComponent(searchQuery));
    }
  };

  const handleMegaMenuEnter = (categoryName: string) => {
    if (!isMobile) {
      setActiveMegaMenu(categoryName);
    }
  };

  const handleMegaMenuLeave = () => {
    if (!isMobile) {
      setActiveMegaMenu(null);
    }
  };
  
  const categories = [
    {
      name: "New & Featured",
      link: "/new-featured",
      subcategories: [
        { name: "New Arrivals", link: "/new-arrivals" },
        { name: "Trending", link: "/trending" },
        { name: "Best Sellers", link: "/best-sellers" },
        { name: "Latest Drops", link: "/latest-drops" },
        { name: "Shop All", link: "/shop-all" },
        { name: "Shop New", link: "/shop-new" },
        { name: "Men", link: "/category/men" },
        { name: "Women", link: "/category/women" },
        { name: "Kids", link: "/category/kids" }
      ]
    },
    {
      name: "Sales",
      link: "/sales",
      subcategories: [
        { name: "Up to -30%", link: "/sales/30-percent" },
        { name: "Up to -50%", link: "/sales/50-percent" }
      ]
    },
    {
      name: "Men",
      link: "/category/men",
      subcategories: [
        {
          name: "Men's Sneakers",
          link: "/category/men/sneakers",
          items: [
            { name: "Indoor Soccer Shoes", link: "/category/men/sneakers/indoor-soccer" },
            { name: "Running Shoes", link: "/category/men/sneakers/running" },
            { name: "Football Boots", link: "/category/men/sneakers/football-boots" },
            { name: "Futsal Boots", link: "/category/men/sneakers/futsal-boots" },
            { name: "Casual Sneakers", link: "/category/men/sneakers/casual" }
          ]
        },
        {
          name: "Men's Clothing",
          link: "/category/men/clothing",
          items: [
            { name: "Men's Sports T-shirts", link: "/category/men/clothing/sports-tshirts" },
            { name: "Men's Sports Pants and Shorts", link: "/category/men/clothing/sports-pants-shorts" },
            { name: "Men's Sweatshirts and Sports Jackets", link: "/category/men/clothing/sweatshirts-jackets" }
          ]
        },
        {
          name: "Casual",
          link: "/category/men/casual",
          items: [
            { name: "Men's Casual T-shirts", link: "/category/men/casual/tshirts" },
            { name: "Men's Casual Pants and Shorts", link: "/category/men/casual/pants-shorts" },
            { name: "Men's Casual Sweatshirts and Jackets", link: "/category/men/casual/sweatshirts-jackets" },
            { name: "Men's Polo Shirts", link: "/category/men/casual/polo-shirts" }
          ]
        },
        {
          name: "Men's Accessories",
          link: "/category/men/accessories",
          items: [
            { name: "Backpacks", link: "/category/men/accessories/backpacks" },
            { name: "Balls", link: "/category/men/accessories/balls" },
            { name: "More Add-ons", link: "/category/men/accessories/more-addons" }
          ]
        }
      ]
    },
    {
      name: "Women",
      link: "/category/women",
      subcategories: [
        {
          name: "Women's Sneakers",
          link: "/category/women/sneakers",
          items: [
            { name: "Indoor Soccer Shoes", link: "/category/women/sneakers/indoor-soccer" },
            { name: "Running Shoes", link: "/category/women/sneakers/running" },
            { name: "Football Boots", link: "/category/women/sneakers/football-boots" },
            { name: "Futsal Boots", link: "/category/women/sneakers/futsal-boots" },
            { name: "Casual Sneakers", link: "/category/women/sneakers/casual" }
          ]
        },
        {
          name: "Women's Clothing",
          link: "/category/women/clothing",
          items: [
            { name: "Women's Sports T-shirts", link: "/category/women/clothing/sports-tshirts" },
            { name: "Women's Sports Pants and Shorts", link: "/category/women/clothing/sports-pants-shorts" },
            { name: "Women's Sweatshirts and Sports Jackets", link: "/category/women/clothing/sweatshirts-jackets" }
          ]
        },
        {
          name: "Casual",
          link: "/category/women/casual",
          items: [
            { name: "Women's Casual T-shirts", link: "/category/women/casual/tshirts" },
            { name: "Women's Casual Pants and Shorts", link: "/category/women/casual/pants-shorts" },
            { name: "Women's Casual Sweatshirts and Jackets", link: "/category/women/casual/sweatshirts-jackets" },
            { name: "Women's Polo Shirts", link: "/category/women/casual/polo-shirts" }
          ]
        },
        {
          name: "Women's Accessories",
          link: "/category/women/accessories",
          items: [
            { name: "Backpacks", link: "/category/women/accessories/backpacks" },
            { name: "Balls", link: "/category/women/accessories/balls" },
            { name: "More Add-ons", link: "/category/women/accessories/more-addons" }
          ]
        }
      ]
    },
    {
      name: "Kids",
      link: "/category/kids",
      subcategories: [
        {
          name: "Kid's Sneakers",
          link: "/category/kids/sneakers",
          items: [
            { name: "Casual", link: "/category/kids/sneakers/casual" },
            { name: "Football", link: "/category/kids/sneakers/football" },
            { name: "Futsal", link: "/category/kids/sneakers/futsal" }
          ]
        },
        {
          name: "Kids Clothing",
          link: "/category/kids/clothing",
          items: [
            { name: "Children's T-shirts", link: "/category/kids/clothing/tshirts" },
            { name: "Children's Polo Shirts", link: "/category/kids/clothing/polo-shirts" },
            { name: "Children's Pants & Shorts", link: "/category/kids/clothing/pants-shorts" },
            { name: "Children's Sweatshirts", link: "/category/kids/clothing/sweatshirts" },
            { name: "Children's Jackets", link: "/category/kids/clothing/jackets" }
          ]
        }
      ]
    },
    {
      name: "Sports",
      link: "/sports",
      subcategories: [
        {
          name: "Football",
          link: "/sports/football",
          items: [
            { name: "Shoes", link: "/sports/football/shoes" },
            { name: "Apparel", link: "/sports/football/apparel" },
            { name: "Equipment", link: "/sports/football/equipment" }
          ]
        },
        {
          name: "Basketball",
          link: "/sports/basketball",
          items: [
            { name: "Shoes", link: "/sports/basketball/shoes" },
            { name: "Apparel", link: "/sports/basketball/apparel" },
            { name: "Equipment", link: "/sports/basketball/equipment" }
          ]
        },
        {
          name: "Running",
          link: "/sports/running",
          items: [
            { name: "Shoes", link: "/sports/running/shoes" },
            { name: "Apparel", link: "/sports/running/apparel" },
            { name: "Equipment", link: "/sports/running/equipment" }
          ]
        },
        {
          name: "Training",
          link: "/sports/training",
          items: [
            { name: "Shoes", link: "/sports/training/shoes" },
            { name: "Socks", link: "/sports/training/socks" },
            { name: "Apparel", link: "/sports/training/apparel" },
            { name: "Equipment", link: "/sports/training/equipment" }
          ]
        },
        {
          name: "More Sports",
          link: "/sports/more",
          items: [
            { name: "Soccer", link: "/sports/more/soccer" },
            { name: "Tennis", link: "/sports/more/tennis" },
            { name: "Volleyball", link: "/sports/more/volleyball" },
            { name: "Futsal", link: "/sports/more/futsal" }
          ]
        }
      ]
    },
    {
      name: "Custom Printing",
      link: "/custom-printing",
      subcategories: [
        { name: "Name, Number & Logo", link: "/custom-printing" }
      ]
    }
  ];

  return (
    <div className="relative">
      <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        {/* Top bar with logo and search */}
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Mobile hamburger menu - Always visible on mobile */}
          {isMobile && (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 h-full overflow-y-auto">
                  <nav className="flex flex-col space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <Link
                          to={category.link}
                          className="block px-4 py-2 text-lg font-semibold text-gray-900 hover:bg-gray-100 rounded-md"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                        
                        {category.subcategories && (
                          <div className="ml-4 space-y-1">
                            {category.subcategories.map((subcategory) => (
                              <div key={subcategory.name} className="space-y-1">
                                <Link
                                  to={subcategory.link}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subcategory.name}
                                </Link>
                                
                                {subcategory.items && (
                                  <div className="ml-4 space-y-1">
                                    {subcategory.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        to={item.link}
                                        className="block px-4 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded-md"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Additional mobile menu links */}
                    <div className="border-t pt-4 mt-4 space-y-2">
                      <Link 
                        to="/login" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link 
                        to="/wishlist" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Wishlist
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/8811c5f3-41cd-4545-81d5-fc1cbd8596b6.png" 
              alt="KELME" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Search bar - hide on mobile */}
          {!isMobile && (
            <div className="hidden md:flex max-w-xl flex-1 mx-8">
              <form onSubmit={handleSearch} className="w-full relative">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}

          {/* Icons */}
          <div className="flex items-center gap-2">
            {!isMobile && (
              <>
                <Link to="/wishlist">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </>
            )}
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-kelme-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile search - only shown on mobile */}
        {isMobile && (
          <div className="md:hidden px-4 pb-3">
            <form onSubmit={handleSearch} className="w-full relative">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}

        {/* Navigation Menu - desktop mega menu */}
        {!isMobile && (
          <div className="border-t border-gray-200">
            <div className="container mx-auto px-4">
              <nav className="flex justify-center">
                {categories.map((category) => (
                  <div 
                    key={category.name} 
                    className="relative"
                    onMouseEnter={() => handleMegaMenuEnter(category.name)}
                    onMouseLeave={handleMegaMenuLeave}
                  >
                    <Link
                      to={category.link}
                      className="block px-4 py-3 text-gray-700 hover:text-black font-medium transition-colors"
                    >
                      {category.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mega Menu Overlay - Desktop */}
      {!isMobile && activeMegaMenu && (
        <div 
          className="absolute left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40"
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={handleMegaMenuLeave}
        >
          <div className="container mx-auto px-4 py-8">
            {(() => {
              const activeCategory = categories.find(cat => cat.name === activeMegaMenu);
              if (!activeCategory?.subcategories) return null;

              return (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {activeCategory.subcategories.map((subcategory) => (
                    <div key={subcategory.name} className="space-y-3">
                      <Link
                        to={subcategory.link}
                        className="block text-lg font-semibold text-gray-900 hover:text-kelme-red transition-colors"
                      >
                        {subcategory.name}
                      </Link>
                      
                      {subcategory.items && (
                        <div className="space-y-2">
                          {subcategory.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.link}
                              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
