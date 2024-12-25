import React from "react";

const Newsletter = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto -mb-16">
      <div className="bg-gradient-to-r from-blue-100 to-yellow-100 rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
        <p className="mb-4">
          Get the latest updates and news right in your inbox!
        </p>
        <form className="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs px-4 py-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
