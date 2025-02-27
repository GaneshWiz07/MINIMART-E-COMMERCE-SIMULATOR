import { createContext, useContext, useReducer, ReactNode } from 'react'
import toast from 'react-hot-toast'

type Product = {
  id: string
  name: string
  price: number
  imageUrl: string
  specifications: string[]
}

type ProductState = {
  products: Product[]
  selectedProduct: Product | null
}

type ProductAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: string }
  | { type: 'SELECT_PRODUCT'; payload: Product | null }

type ProductContextType = {
  state: ProductState
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (product: Product) => void
  deleteProduct: (id: string) => void
  selectProduct: (product: Product | null) => void
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

const initialState: ProductState = {
  products: JSON.parse(localStorage.getItem('products') || '[]'),
  selectedProduct: null
}

function productReducer(state: ProductState, action: ProductAction): ProductState {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        )
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      }
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload
      }
    default:
      return state
  }
}

export function ProductProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productReducer, initialState)

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    }
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct })
    localStorage.setItem('products', JSON.stringify([...state.products, newProduct]))
    toast.success('Product added successfully')
  }

  const updateProduct = (product: Product) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: product })
    const updatedProducts = state.products.map(p => p.id === product.id ? product : p)
    localStorage.setItem('products', JSON.stringify(updatedProducts))
    toast.success('Product updated successfully')
  }

  const deleteProduct = (id: string) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id })
    const filteredProducts = state.products.filter(p => p.id !== id)
    localStorage.setItem('products', JSON.stringify(filteredProducts))
    toast.success('Product deleted successfully')
  }

  const selectProduct = (product: Product | null) => {
    dispatch({ type: 'SELECT_PRODUCT', payload: product })
  }

  return (
    <ProductContext.Provider
      value={{
        state,
        addProduct,
        updateProduct,
        deleteProduct,
        selectProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider')
  }
  return context
}