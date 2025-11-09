
const Contact = () => {
    return (
      <div className="min-h-screen bg-[url('/paper-texture.png')] bg-cover bg-fixed bg-top py-16 px-4 sm:px-6 lg:px-8 font-serif text-[#2c3e50]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/90 rounded-xl shadow-2xl p-10 border-4 border-blue-100">
          
          {/* Left Page - Contact Form */}
          <div className="space-y-6 relative">
            <h2 className="text-4xl font-bold text-blue-900 border-b pb-2 border-blue-300">
               Write to Us
            </h2>
  
            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-lg text-blue-800">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-md border border-blue-300 bg-gradient-to-b from-blue-50 to-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <label className="block mb-1 text-lg text-blue-800">Your Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-md border border-blue-300 bg-gradient-to-b from-blue-50 to-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
                  placeholder="Enter your mail"
                />
              </div>
              <div>
                <label className="block mb-1 text-lg text-blue-800">Your Message</label>
                <textarea
                  rows="6"
                  className="w-full p-3 rounded-md border border-blue-300 bg-gradient-to-b from-blue-50 to-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
                  placeholder="Message .."
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              >
                 Send Letter
              </button>
            </form>
          </div>
  
          {/* Right Page - Info Panel */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-900 border-b pb-2 border-blue-300">
               Our Details
            </h2>
  
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <span className="font-semibold text-blue-800"> Address:</span><br />
                221B Book Lane, Literature City, IN 45678
              </p>
              <p>
                <span className="font-semibold text-blue-800"> Phone:</span><br />
                01303-846876-BOOK
              </p>
              <p>
                <span className="font-semibold text-blue-800"> Email:</span><br />
                storybookpress@gmail.com
              </p>
              <p>
                <span className="font-semibold text-blue-800"> Hours:</span><br />
                Sun–Sat: 8AM – 8PM
              </p>
            </div>
  
            <div className="mt-10 border-l-4 border-blue-200 pl-4 italic text-gray-600">
              “The art of writing is the art of discovering what you believe.”<br />
              <span className="text-sm text-blue-700">— Gustave Flaubert</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  