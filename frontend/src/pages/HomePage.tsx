import { useProduct } from "@/contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

function HomePage() {
  const { state, selectProduct, deleteProduct } = useProduct();
  const navigate = useNavigate();

  const handleEdit = (product: any) => {
    selectProduct(product);
    navigate("/manage-products");
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  const handleBuyNow = (product: any) => {
    selectProduct(product);
    navigate("/checkout");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Products</h1>
        <button
          onClick={() => navigate("/manage-products")}
          className="btn-primary"
        >
          Add New Product
        </button>
      </div>

      {state.products.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-white">
            No products available. Add some products to get started!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.products.map((product) => (
            <div key={product.id} className="card">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-white mb-2">
                {product.name}
              </h2>
              <p className="text-lg font-bold text-white mb-2">
                ₹{product.price.toFixed(2)}
              </p>
              <div className="mb-4">
                <h3 className="font-semibold text-white mb-1">
                  Specifications:
                </h3>
                <ul className="list-disc list-inside text-white/90">
                  {product.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="btn-secondary inline-flex items-center"
                  >
                    <PencilIcon className="h-4 w-4 mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="btn-danger inline-flex items-center"
                  >
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                </div>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
