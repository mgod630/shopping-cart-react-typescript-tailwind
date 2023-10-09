import { ProductItem } from "../components/ProductItem";
import { formatCurrency } from "./../utilities/formatCurrency";
import products from "./../data/products.json";

export function Store() {
    return (
        <>
            <h1 className="font-bold text-lg text-center mb-5">Store</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.map((product) => {
                    return (
                        <ProductItem
                            id={product.id}
                            key={product.id}
                            name={product.name}
                            image={product.image}
                            price={formatCurrency(product.price)}
                        />
                    );
                })}
            </div>
        </>
    );
}
