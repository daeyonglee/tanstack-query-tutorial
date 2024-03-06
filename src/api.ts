const URL="https://fakestoreapi.com"

export const getProducts = async () => {
    const res = await fetch(`${URL}/products`)
    if (!res.ok) {
        throw new Error("fail to fetch products")
    }

    return res.json()
}