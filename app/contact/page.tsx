"use client";

import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { Mail, MapPinCheck, Phone } from "lucide-react";
import React, { useState } from "react";

const infoData = [
  { title: "Phone", description: "(+254) 728 841 228", icon: <Phone /> },
  { title: "Email", description: "hillaryoyaroh@gmail.com", icon: <Mail /> },
  {
    title: "Address",
    description: "Nairobi, Kenya",
    icon: <MapPinCheck />,
  },
];

const ContactPage = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 1500);
    });
  };

  return (
    <Container className="py-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-14">
        <div className="w-full md:w-2/3">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-4 md:gap-8">
          {infoData.map((item) => (
            <div
              key={item.title}
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => handleCopy(item.description)}
              title="Click to copy"
            >
              <span className="bg-lightSky/5 p-4 rounded-md text-lightSky">
                {item.icon}
              </span>
              <div>
                <h3 className="text-white/60 text-sm font-semibold">
                  {item.title}
                </h3>
                <p className="text-white group-hover:text-hoverColor transition-colors">
                  {item.description}
                  {copiedText === item.description && (
                    <span className="ml-2 text-sm text-green-400">Copied!</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
