import { useSuspenseQuery } from "@tanstack/react-query";
import { getProducts } from "../api";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Products() {
  const { data: products, error } = useSuspenseQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (error) {
    throw error;
  }
  return (
    <>
      {products.map((product, index) => {
        return (
          <div
            key={product.id}
            style={{
              margin: 20,
              padding: 20,
              border: "1px solid black",
            }}
          >
            <div>
              <span>id: </span>
              <span>{product.id}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
