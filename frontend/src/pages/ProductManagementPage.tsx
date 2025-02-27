import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "@/contexts/ProductContext";
import toast from "react-hot-toast";

type ProductFormData = {
  name: string;
  price: string;
  imageUrl: string;
  specifications: string;
};

function ProductManagementPage() {
  const navigate = useNavigate();
  const { state, addProduct, updateProduct, selectProduct } = useProduct();
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: "",
    imageUrl: "",
    specifications: "",
  });

  useEffect(() => {
    if (state.selectedProduct) {
      setFormData({
        name: state.selectedProduct.name,
        price: state.selectedProduct.price.toString(),
        imageUrl: state.selectedProduct.imageUrl,
        specifications: state.selectedProduct.specifications.join("\n"),
      });
    }
    return () => selectProduct(null);
  }, [state.selectedProduct, selectProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const price = parseFloat(formData.price);
      if (isNaN(price)) {
        throw new Error("Invalid price");
      }

      const specifications = formData.specifications
        .split("\n")
        .map((spec) => spec.trim())
        .filter(Boolean);

      const productData = {
        name: formData.name.trim(),
        price,
        imageUrl: formData.imageUrl.trim(),
        specifications,
      };

      if (state.selectedProduct) {
        updateProduct({ ...productData, id: state.selectedProduct.id });
      } else {
        addProduct(productData);
      }

      navigate("/");
    } catch (error) {
      toast.error("Please check your input values");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {state.selectedProduct ? "Edit Product" : "Add New Product"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input mt-1"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              className="input mt-1"
              placeholder="Enter price"
            />
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              className="input mt-1"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label
              htmlFor="specifications"
              className="block text-sm font-medium text-gray-700"
            >
              Specifications (one per line)
            </label>
            <textarea
              id="specifications"
              name="specifications"
              value={formData.specifications}
              onChange={handleChange}
              required
              rows={5}
              className="input mt-1"
              placeholder="Enter specifications (one per line)"
            />
          </div>

          <div className="flex space-x-4">
            <button type="submit" className="btn-primary">
              {state.selectedProduct ? "Update Product" : "Add Product"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductManagementPage;
