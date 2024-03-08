import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../api";
import { IProduct } from "./Products";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
	const { productId } = useParams();
	const navigate = useNavigate();
	const { data, error } = useSuspenseQuery<IProduct>({
		queryKey: ["products", productId],
		queryFn: () => getProduct(productId as string),
	});
	if (error) throw error;

	return (
		<section className={styles.container}>
			<div className={styles["img-box"]}>
				<img
					src={data.image}
					alt=""
				/>
			</div>
			<div className={styles["content-box"]}>
				<div className={styles["title-box"]}>
					<h1>{data.title}</h1>
					<div>
						<span className={styles["rating"]}>
							⭐️{data.rating.rate}({data.rating.count})
						</span>
						<span className={styles["category"]}>{data.category}</span>
					</div>
					<div className={styles["price-box"]}>${data.price}</div>
				</div>
				<div className={styles["desc-box"]}>{data.description}</div>
				<div className={styles["button-box"]}>
					<button onClick={() => navigate(-1)}>Back</button>
				</div>
			</div>
		</section>
	);
}
