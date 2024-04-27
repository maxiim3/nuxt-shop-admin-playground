import {productCreator, type ProductModel} from "~/models/products.model";

export enum PageStatus {
  pending,
  ok,
  error
}

export const useGetAllProductsFromDB = () => {

const status = ref<PageStatus>(PageStatus.pending)
const products = reactive<ProductModel[]>([])

onMounted(async () => {
  try {
    const response = await fetch("/api/products")
    const data = await response.json()

    if (response.status !== 200) {
      new Error("Status: ".concat(response?.status.toString()))
    }

    data.forEach((d: ProductModel) => {
      return products.push(productCreator(d.name, d.price, d.inStock))
    })
    status.value = PageStatus.ok
  } catch (e) {
    console.error(e)
    status.value = PageStatus.error
  }
})

  return {status, products}
}
