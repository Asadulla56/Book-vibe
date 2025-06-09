const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Book Cover Effect */}
        <div className="bg-white rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group">
          {/* Book Spine Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-800 to-amber-600 rounded-l-lg"></div>

          {/* Decorative Page Corners */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <div className="absolute top-4 right-4 w-24 h-24 border-4 border-amber-800 rounded-lg transform rotate-12"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
            <div className="absolute bottom-4 left-4 w-24 h-24 border-4 border-amber-800 rounded-lg transform -rotate-12"></div>
          </div>

          {/* Floating Book Elements */}
          <div className="absolute top-1/4 right-8 w-16 h-16 opacity-20 motion-safe:animate-bounce">
            <div className="w-full h-full border-2 border-amber-800 rounded-lg transform rotate-12"></div>
          </div>
          <div
            className="absolute bottom-1/4 left-8 w-12 h-12 opacity-20 motion-safe:animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="w-full h-full border-2 border-amber-800 rounded-lg transform -rotate-12"></div>
          </div>

          <div className="p-8 sm:p-12 relative">
            {/* Decorative Bookmark */}
            <div className="absolute top-0 right-12 w-3 h-24 bg-gradient-to-b from-amber-400 to-amber-600 transform rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>

            {/* Page Numbers */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-amber-200 text-sm font-serif">
              Chapter 1
            </div>

            <h1 className="text-5xl font-serif font-bold mb-8 text-amber-900 text-center relative">
              <span className="absolute -left-8 top-1/2 w-6 h-6 bg-amber-600 rounded-full group-hover:scale-110 transition-transform duration-300"></span>
              Our Story
            </h1>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-amber-200 to-transparent mx-auto mb-8"></div>

            <div className="space-y-6 text-lg text-gray-700">
              <p className="relative pl-8 border-l-4 border-amber-200 hover:border-amber-400 transition-colors duration-300 group">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold hover:bg-amber-200 transition-colors duration-300 group-hover:scale-110">
                  1
                </span>
                Welcome to our literary sanctuary, where every page turns into a
                new adventure. We&apos;re not just a bookstore – we&apos;re a
                community of dreamers, thinkers, and storytellers.
              </p>

              <p className="relative pl-8 border-l-4 border-amber-200 hover:border-amber-400 transition-colors duration-300 group">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold hover:bg-amber-200 transition-colors duration-300 group-hover:scale-110">
                  2
                </span>
                Our shelves are filled with more than just books – they&apos;re
                filled with possibilities. From timeless classics to
                contemporary masterpieces, we curate stories that inspire,
                challenge, and transform.
              </p>

              <p className="relative pl-8 border-l-4 border-amber-200 hover:border-amber-400 transition-colors duration-300 group">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold hover:bg-amber-200 transition-colors duration-300 group-hover:scale-110">
                  3
                </span>
                Join us in this journey through the written word, where every
                chapter brings new discoveries and every story becomes a part of
                your own narrative.
              </p>
            </div>

            {/* Book Quote */}
            <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200 hover:border-amber-400 transition-colors duration-300 group">
              <blockquote className="text-center italic text-amber-800 group-hover:scale-105 transition-transform duration-300">
                &ldquo;Books are a uniquely portable magic.&rdquo;
                <footer className="mt-2 text-sm text-amber-600">
                  — Stephen King
                </footer>
              </blockquote>
            </div>

            {/* Decorative Book Elements */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <div className="w-2 h-8 bg-amber-200 rounded-full group-hover:scale-y-110 transition-transform duration-300"></div>
              <div className="w-2 h-8 bg-amber-300 rounded-full group-hover:scale-y-110 transition-transform duration-300 delay-75"></div>
              <div className="w-2 h-8 bg-amber-400 rounded-full group-hover:scale-y-110 transition-transform duration-300 delay-150"></div>
            </div>

            {/* Decorative Page Turn Effect */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <div className="w-full h-full border-t-2 border-r-2 border-amber-800 rounded-tr-lg transform origin-top-right group-hover:rotate-12 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
