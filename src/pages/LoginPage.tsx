
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "@/components/forms/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
        
        <div className="mt-8">
          <SocialLogin />
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          By signing in, you agree to our{" "}
          <Link to="/terms" className="text-black hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-black hover:underline">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
