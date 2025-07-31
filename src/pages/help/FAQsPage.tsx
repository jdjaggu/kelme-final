
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQsPage = () => {
  const faqs = [
    {
      question: "How do I find the right size?",
      answer: "We recommend using our Size Guide to find your perfect fit. You can find the Size Guide in the footer of our website. If you're between sizes, we recommend sizing up for a more comfortable fit."
    },
    {
      question: "How long will my order take to arrive?",
      answer: "Delivery times depend on your location and the shipping method you choose. Standard shipping typically takes 3-7 business days, while express shipping takes 1-3 business days. You can find more detailed information on our Shipping & Returns page."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn items in their original packaging. You can initiate a return from your account dashboard or by contacting our customer service team. For more details, please visit our Shipping & Returns page."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. International orders may be subject to customs fees, which are the responsibility of the customer."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has been shipped, you'll receive a shipping confirmation email with a tracking number. You can also track your order from the Order Tracking page in our Help section or from your Account dashboard."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all products sold on our website are 100% authentic Kelme products. We are an official retailer of Kelme sports gear."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 1 hour of placing it. Please contact our customer service team as soon as possible to request changes."
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer: "Yes, we offer special pricing for team orders and bulk purchases. Please contact our business sales department at business@kelme.com for more information."
    },
    {
      question: "How do I care for my Kelme products?",
      answer: "Care instructions vary by product. Generally, we recommend washing clothing items in cold water and air drying to maintain quality. Specific care instructions can be found on the product labels."
    },
    {
      question: "Do you have physical retail stores?",
      answer: "Yes, Kelme has retail locations in several countries. You can find our store locator in the footer of our website to find the closest store to you."
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="mb-4">Our customer service team is here to help you with any further questions you might have.</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="/help/contact-us" className="inline-flex items-center px-4 py-2 bg-kelme-green text-white rounded hover:bg-kelme-green/90">
              Contact Us
            </a>
            <a href="/help/order-tracking" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-200">
              Track Your Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
