import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "@/contexts/ProductContext";
import toast from "react-hot-toast";

function CheckoutPage() {
  const navigate = useNavigate();
  const { state, selectProduct } = useProduct();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!state.selectedProduct) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No product selected for checkout.</p>
        <button onClick={() => navigate("/")} className="btn-primary mt-4">
          Return to Products
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      toast.success("Order placed successfully!");
      selectProduct(null);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
      <div className="card mb-6">
        <div className="flex items-start space-x-4">
          <img
            src={state.selectedProduct.imageUrl}
            alt={state.selectedProduct.name}
            className="w-32 h-32 object-cover rounded-md"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {state.selectedProduct.name}
            </h2>
            <p className="text-lg font-bold text-blue-600 mb-2">
              ₹{state.selectedProduct.price.toFixed(2)}
            </p>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">
                Specifications:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {state.selectedProduct.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => {
              selectProduct(null);
              navigate("/");
            }}
            className="btn-secondary"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
