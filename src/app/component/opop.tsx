import React from "react";

const LogoStrip = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto flex justify-center items-center space-x-10">
        {/* Logos */}
        <img
          src="/logos/zapier.png" // Replace with your image path
          alt="Zapier"
          className="h-10"
        />
        <img
          src="/logos/pipedrive.png" // Replace with your image path
          alt="Pipedrive"
          className="h-10"
        />
        <img
          src="/logos/cib-bank.png" // Replace with your image path
          alt="CIB Bank"
          className="h-10"
        />
        <img
          src="/logos/7.png" // Replace with your image path
          alt="7"
          className="h-10"
        />
        <img
          src="/logos/burnt-toast.png" // Replace with your image path
          alt="Burnt Toast"
          className="h-10"
        />
        <img
          src="/logos/pandadoc.png" // Replace with your image path
          alt="PandaDoc"
          className="h-10"
        />
        <img
          src="/logos/moz.png" // Replace with your image path
          alt="Moz"
          className="h-10"
        />
      </div>
    </section>
  );
};

export default LogoStrip;
