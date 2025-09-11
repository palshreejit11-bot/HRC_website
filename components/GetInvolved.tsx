import React from 'react';

const GetInvolved: React.FC = () => {
  return (
    <section id="involved" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Support Matters</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Your support can make a real difference in the lives of people whose rights are being violated. Join us in the fight for justice, dignity, and equality for all.
        </p>
        <a 
          href="#/get-involved" 
          className="bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-800 transition-transform transform hover:scale-105 duration-300"
        >
          See How You Can Help
        </a>
      </div>
    </section>
  );
};

export default GetInvolved;