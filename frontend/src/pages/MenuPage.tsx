const MenuPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Restaurant Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center py-8 text-gray-600">Loading menu items...</div>
      </div>
    </div>
  )
}

export default MenuPage
