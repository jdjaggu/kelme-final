
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  ChevronLeft, 
  CreditCard, 
  Check, 
  ShoppingCart 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CartItem {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
  phone: string;
  deliveryOption: "delivery" | "pickup";
  sameAddress: boolean;
  saveInfo: boolean;
  cardNumber: string;
  cardName: string;
  expMonth: string;
  expYear: string;
  cvv: string;
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Sample cart items (in a real app, this would be from a state management library)
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Speed Striker Soccer Cleats",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      color: "Black/Red",
      size: "10",
      quantity: 1
    },
    {
      id: 2,
      name: "Pro Training Jersey",
      price: 59.99,
      sale_price: 49.99,
      image: "https://images.unsplash.com/photo-1593164842264-854604db2260",
      color: "Blue",
      size: "M",
      quantity: 2
    }
  ];
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.sale_price || item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  const shipping = subtotal > 100 ? 0 : 10.99;
  const tax = subtotal * 0.06; // 6% tax
  const total = subtotal + shipping + tax;
  
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "US",
    state: "",
    zipCode: "",
    phone: "",
    deliveryOption: "delivery",
    sameAddress: true,
    saveInfo: false,
    cardNumber: "",
    cardName: "",
    expMonth: "",
    expYear: "",
    cvv: ""
  });
  
  const [step, setStep] = useState<1 | 2 | 3>(1);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCheckboxChange = (name: keyof FormData) => {
    setFormData({ ...formData, [name]: !formData[name] });
  };
  
  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would process the checkout here
    toast({
      title: "Order submitted!",
      description: "Your order has been placed successfully.",
    });
    
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  
  const isStepComplete = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return formData.email && formData.firstName && formData.lastName;
      case 2:
        if (formData.deliveryOption === "pickup") {
          return true; // No address required for pickup
        }
        return formData.address && formData.city && formData.state && formData.zipCode;
      case 3:
        return formData.cardNumber && formData.cardName && formData.expMonth && formData.expYear && formData.cvv;
      default:
        return false;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumbs */}
        <div className="text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-kelme-green">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/cart" className="text-gray-500 hover:text-kelme-green">Cart</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">Checkout</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="flex items-center mb-8">
              {[1, 2, 3].map((stepNumber) => (
                <React.Fragment key={stepNumber}>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNumber
                        ? 'bg-kelme-green text-white'
                        : isStepComplete(stepNumber)
                        ? 'bg-kelme-green text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {isStepComplete(stepNumber) && step > stepNumber ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        stepNumber
                      )}
                    </div>
                    <span className="ml-2 text-sm font-medium">
                      {stepNumber === 1 && "Contact"}
                      {stepNumber === 2 && "Shipping"}
                      {stepNumber === 3 && "Payment"}
                    </span>
                  </div>
                  {stepNumber < 3 && (
                    <div className="flex-1 h-px bg-gray-200 mx-4" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Contact Information</h2>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="For delivery updates"
                    />
                  </div>
                  
                  <Button
                    type="button"
                    className="bg-kelme-green hover:bg-kelme-green/90"
                    onClick={() => {
                      if (isStepComplete(1)) {
                        setStep(2);
                      } else {
                        toast({
                          title: "Please complete all required fields",
                          variant: "destructive",
                        });
                      }
                    }}
                  >
                    Continue to Shipping
                  </Button>
                </div>
              )}
              
              {/* Step 2: Shipping Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Delivery Options</h2>
                  
                  {/* Delivery Option Selection */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="delivery"
                        name="deliveryOption"
                        value="delivery"
                        checked={formData.deliveryOption === "delivery"}
                        onChange={(e) => handleSelectChange('deliveryOption', e.target.value as "delivery" | "pickup")}
                        className="text-kelme-green"
                      />
                      <label htmlFor="delivery" className="text-sm font-medium text-gray-700">
                        Home Delivery
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="pickup"
                        name="deliveryOption"
                        value="pickup"
                        checked={formData.deliveryOption === "pickup"}
                        onChange={(e) => handleSelectChange('deliveryOption', e.target.value as "delivery" | "pickup")}
                        className="text-kelme-green"
                      />
                      <label htmlFor="pickup" className="text-sm font-medium text-gray-700">
                        Pickup from Store
                      </label>
                    </div>
                    
                    {formData.deliveryOption === "pickup" && (
                      <div className="bg-green-50 p-4 rounded-md border border-green-200">
                        <h4 className="font-medium text-green-800 mb-2">Pickup Location:</h4>
                        <p className="text-green-700 text-sm">
                          <strong>Kelme Showroom</strong><br />
                          Durbar Marg, Kathmandu<br />
                          Nepal
                        </p>
                        <p className="text-green-600 text-xs mt-2">
                          Your order will be ready for pickup within 2-3 business days. We'll notify you when it's ready.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {formData.deliveryOption === "delivery" && (
                    <>
                      <h3 className="text-lg font-medium mt-6">Shipping Address</h3>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <Input
                      id="address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                      Apartment, suite, etc. (optional)
                    </label>
                    <Input
                      id="apartment"
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <Input
                        id="city"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-1">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <Input
                        id="state"
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-1">
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <Input
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <Select 
                      value={formData.country} 
                      onValueChange={(value) => handleSelectChange('country', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="saveInfo"
                          checked={formData.saveInfo}
                          onCheckedChange={() => handleCheckboxChange('saveInfo')}
                        />
                        <label
                          htmlFor="saveInfo"
                          className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Save this information for next time
                        </label>
                      </div>
                    </>
                  )}
                  
                  <div className="flex flex-wrap gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" />
                      Back
                    </Button>
                    
                    <Button
                      type="button"
                      className="bg-kelme-green hover:bg-kelme-green/90"
                      onClick={() => {
                        if (isStepComplete(2)) {
                          setStep(3);
                        } else {
                          toast({
                            title: "Please complete all required fields",
                            variant: "destructive",
                          });
                        }
                      }}
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Payment Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Payment</h2>
                  
                  <div className="bg-gray-50 p-4 rounded-md flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="font-medium">Credit Card Payment</span>
                  </div>
                  
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <Input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="0000 0000 0000 0000"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card
                    </label>
                    <Input
                      id="cardName"
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="expMonth" className="block text-sm font-medium text-gray-700 mb-1">
                        Month
                      </label>
                      <Select
                        value={formData.expMonth}
                        onValueChange={(value) => handleSelectChange('expMonth', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => {
                            const month = i + 1;
                            return (
                              <SelectItem key={month} value={month.toString().padStart(2, '0')}>
                                {month.toString().padStart(2, '0')}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="expYear" className="block text-sm font-medium text-gray-700 mb-1">
                        Year
                      </label>
                      <Select
                        value={formData.expYear}
                        onValueChange={(value) => handleSelectChange('expYear', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="YY" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                              <SelectItem key={year} value={year.toString().slice(-2)}>
                                {year}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <Input
                        id="cvv"
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="sameAddress"
                      checked={formData.sameAddress}
                      onCheckedChange={() => handleCheckboxChange('sameAddress')}
                    />
                    <label
                      htmlFor="sameAddress"
                      className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Billing address same as shipping address
                    </label>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" />
                      Back
                    </Button>
                    
                    <Button
                      type="submit"
                      className="bg-kelme-green hover:bg-kelme-green/90"
                    >
                      Complete Order
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 bg-gray-50 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.size} • {item.color}
                      </p>
                    </div>
                    
                    <div className="ml-2 text-right">
                      {item.sale_price ? (
                        <span className="text-sm font-medium text-kelme-red">
                          ${(item.sale_price * item.quantity).toFixed(2)}
                        </span>
                      ) : (
                        <span className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-kelme-green">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-4 text-center text-xs text-gray-500">
                <p>Secure checkout</p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <span>We accept:</span>
                  <img src="https://via.placeholder.com/120x20?text=Payment+Methods" alt="Payment methods" className="h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
