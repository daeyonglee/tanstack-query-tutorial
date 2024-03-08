import { useSuspenseQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();
	const { data: products, error } = useSuspenseQuery<IProduct[]>({
		queryKey: ["products"],
		queryFn: getProducts,
	});
	if (error) {
		throw error;
	}

	const onClick = (productId: number) => {
		navigate(`/products/${productId}`);
	};

	return (
		<div className={styles.container}>
			{products.map((product, index) => {
				return (
					<div
						key={product.id}
						className={styles.box}
						onClick={() => onClick(product.id)}>
						<div className={styles["img-box"]}>
							<img
								className={styles.img}
								src={product.image}
								alt=""
							/>
						</div>
						<div className={styles["title-box"]}>
							<span>{product.title}</span>
						</div>
						<div className={styles["price-box"]}>
							<span>{product.price}$</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
