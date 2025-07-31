
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Package2, ShoppingBag, Heart, User, Settings, LogOut } from "lucide-react";

interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered";
  total: number;
  items: number;
}

const AccountPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock user data (in a real app, this would come from an API)
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    password: "••••••••",
    newsletterSubscribed: true,
  });
  
  // Mock orders data (in a real app, this would come from an API)
  const [orders] = useState<Order[]>([
    {
      id: "ORD12345",
      date: "May 15, 2023",
      status: "Delivered",
      total: 169.98,
      items: 2,
    },
    {
      id: "ORD12346",
      date: "June 20, 2023",
      status: "Shipped",
      total: 89.99,
      items: 1,
    },
    {
      id: "ORD12347",
      date: "July 5, 2023",
      status: "Processing",
      total: 159.97,
      items: 3,
    },
  ]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  
  const handleNewsletterChange = () => {
    setUserData({ ...userData, newsletterSubscribed: !userData.newsletterSubscribed });
  };
  
  const handleSaveProfile = () => {
    // In a real app, you would send the updated data to an API
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved.",
    });
  };
  
  const handleChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would validate and update the password
    toast({
      title: "Password changed",
      description: "Your password has been updated successfully.",
    });
  };
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Processing":
        return "bg-blue-100 text-blue-800";
      case "Shipped":
        return "bg-amber-100 text-amber-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">My Account</h1>
      <p className="text-gray-600 mb-8">Welcome back, {userData.firstName}!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:col-span-1">
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-left" 
              asChild
            >
              <Link to="#dashboard">
                <Package2 className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-left" 
              asChild
            >
              <Link to="#orders">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Orders
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-left" 
              asChild
            >
              <Link to="/wishlist">
                <Heart className="mr-2 h-4 w-4" />
                Wishlist
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-left" 
              asChild
            >
              <Link to="#profile">
                <User className="mr-2 h-4 w-4" />
                Profile Information
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-left" 
              asChild
            >
              <Link to="#settings">
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </Link>
            </Button>
            
            <Separator className="my-2" />
            
            <Button 
              variant="ghost" 
              className="w-full justify-start text-left text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="md:col-span-3">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            
            {/* Dashboard Tab */}
            <TabsContent value="dashboard" id="dashboard">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-kelme-green mb-2">{orders.length}</div>
                    <p className="text-gray-600">Total Orders</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-kelme-green mb-2">2</div>
                    <p className="text-gray-600">Wishlist Items</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-kelme-green mb-2">200</div>
                    <p className="text-gray-600">Reward Points</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                  
                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.slice(0, 3).map((order) => (
                        <div key={order.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                          <div className="flex flex-wrap justify-between items-start">
                            <div>
                              <p className="font-medium">Order #{order.id}</p>
                              <p className="text-sm text-gray-600">{order.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${order.total.toFixed(2)}</p>
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="pt-2 text-center">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          asChild
                        >
                          <Link to="#orders">View All Orders</Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600 text-center py-4">You haven't placed any orders yet.</p>
                  )}
                </div>
                
                <div className="bg-kelme-green text-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-2">Membership Benefits</h2>
                  <p className="mb-4">Enjoy exclusive benefits as a Kelme member:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Early access to new products</li>
                    <li>Special discounts and promotions</li>
                    <li>Free shipping on orders over $100</li>
                    <li>Birthday rewards and gifts</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            {/* Orders Tab */}
            <TabsContent value="orders" id="orders">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Order History</h2>
                
                {orders.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b border-gray-200">
                          <th className="py-3">Order</th>
                          <th className="py-3">Date</th>
                          <th className="py-3">Status</th>
                          <th className="py-3">Total</th>
                          <th className="py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id} className="border-b border-gray-200">
                            <td className="py-4">#{order.id}</td>
                            <td className="py-4">{order.date}</td>
                            <td className="py-4">
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4">${order.total.toFixed(2)}</td>
                            <td className="py-4">
                              <Button variant="outline" size="sm">View Details</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <ShoppingBagIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                    <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
                    <Link to="/">
                      <Button>Start Shopping</Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Profile Tab */}
            <TabsContent value="profile" id="profile">
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-4">
                    <Checkbox 
                      id="newsletter"
                      checked={userData.newsletterSubscribed}
                      onCheckedChange={handleNewsletterChange}
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subscribe to newsletter to receive updates on new products and special offers
                    </label>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="bg-kelme-green hover:bg-kelme-green/90"
                      onClick={handleSaveProfile}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
                
                {/* Address */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200" id="profile">
                  <h2 className="text-xl font-semibold mb-4">Address Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address
                      </label>
                      <Input
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <Input
                        id="city"
                        name="city"
                        value={userData.city}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <Input
                        id="state"
                        name="state"
                        value={userData.state}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={userData.zipCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="bg-kelme-green hover:bg-kelme-green/90"
                      onClick={handleSaveProfile}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
                
                {/* Change Password */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200" id="settings">
                  <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                  
                  <form onSubmit={handleChangePassword} className="space-y-4">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <Input
                        id="currentPassword"
                        type="password"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <Input
                        id="newPassword"
                        type="password"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        required
                      />
                    </div>
                    
                    <div className="mt-2">
                      <Button type="submit" className="bg-kelme-green hover:bg-kelme-green/90">
                        Update Password
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

// Shopping Bag Icon
const ShoppingBagIcon = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
};

export default AccountPage;
