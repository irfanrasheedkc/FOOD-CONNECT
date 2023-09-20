import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl">My Landing Page</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Food-Connect</h2>
          <p className="text-gray-600 text-lg mb-8">
            We offer amazing products and services.
          </p>
          <Link to='/home' className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 py-4 text-center text-white">
        <p>&copy; 2023 My Landing Page</p>
      </footer>
    </div>
  );
}

export default LandingPage;
