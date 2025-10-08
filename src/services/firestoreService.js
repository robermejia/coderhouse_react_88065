import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where 
} from 'firebase/firestore';
import { db } from '../firebase/config';

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const productsCollection = collection(db, 'products');
    const snapshot = await getDocs(productsCollection);
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

// Obtener producto por ID
export const getProductById = async (id) => {
  try {
    const productDoc = doc(db, 'products', id.toString());
    const productSnapshot = await getDoc(productDoc);
    
    if (productSnapshot.exists()) {
      return {
        id: productSnapshot.id,
        ...productSnapshot.data()
      };
    } else {
      throw new Error('Producto no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener producto:', error);
    throw error;
  }
};

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
  try {
    const productsCollection = collection(db, 'products');
    const q = query(productsCollection, where('category', '==', category));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    throw error;
  }
};