import {
  getFirestore,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore"
import type { Product } from "../../../app/store/product/product.type"
export const db = getFirestore()

export const insertProductsData = async <T extends Product>(
  collectionKey: string,
  productItems: T[],
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  productItems.forEach(product => {
    const docRef = doc(collectionRef)
    batch.set(docRef, product)
  })
  await batch.commit()
}
export const fetchProductsData = async () => {
  const collectionRef = collection(db, "products")
  const queryRef = query(collectionRef)
  const querySnapshot = await getDocs(queryRef)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}
