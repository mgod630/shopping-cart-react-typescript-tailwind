import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/products.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
};
export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find((item) => item.id === id);
    if (item === null) return null;
    return (
        <div className="flex items-center mb-2">
            <img
                src={item?.image}
                alt={item?.name}
                width={125}
                height={75}
                className="object-cover mr-2 rounded"
            />
            <div className="flex justify-between w-full">
                <div>
                    <p>
                        {item?.name}{" "}
                        {quantity > 1 && (
                            <span className="text-xs">x{quantity}</span>
                        )}
                    </p>
                    <p className="text-slate-500 text-xs">
                        {formatCurrency(item?.price)}
                    </p>
                </div>
                <div>
                    <p>
                        {formatCurrency(item?.price * quantity)}{" "}
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 text-white px-2 py-1 rounded-md"
                        >
                            &times;
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
