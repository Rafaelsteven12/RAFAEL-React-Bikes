import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="max-w-3xl mx-auto text-center px-5">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        {/* EMAIL */}
        <div className="flex items-center justify-center gap-3 mb-4 text-gray-700">
          <Mail className="w-6 h-6" />
          <p className="text-lg">contact@bikezone.com</p>
        </div>

        {/* PHONE */}
        <div className="flex items-center justify-center gap-3 text-gray-700">
          <Phone className="w-6 h-6" />
          <p className="text-lg">+63 912 345 6789</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
