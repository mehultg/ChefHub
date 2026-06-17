import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">🍽️ ChefHub</h1>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-orange-600">
              Login
            </Link>
            <Link to="/orders" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
              My Orders
            </Link>
          </div>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Order Food from Your Favorite Restaurants</h2>
        <p className="text-xl text-gray-600 mb-8">Fast, Easy, Delicious</p>
        <input
          type="text"
          placeholder="Search restaurants..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold mb-8">Popular Restaurants</h3>
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : restaurants.length === 0 ? (
          <div className="text-center py-8 text-gray-600">No restaurants found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        )}
      </section>

      <section className="bg-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12">Why Choose ChefHub?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Get your food in 30-45 minutes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h4 className="font-bold mb-2">Great Deals</h4>
              <p className="text-gray-600">Exclusive discounts and loyalty rewards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-bold mb-2">Secure Payment</h4>
              <p className="text-gray-600">Multiple payment options available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
