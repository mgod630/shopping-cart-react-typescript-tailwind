import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/products.json";

type ShoppingCartProps = {
    isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <>
            {isOpen && (
                <button
                    className="z-30 top-3 right-3 fixed text-xl"
                    onClick={closeCart}
                >
                    &times;
                </button>
            )}
            <div
                className={`top-0 right-0 fixed w-full sm:w-1/2 lg:w-1/3 h-full z-20 bg-white text-slate-600 duration-500 ease-in-out pt-3 px-4 shadow-md ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <p className="font-semibold text-xl mb-3">Cart</p>
                <div className="gap-3">
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />;
                    })}
                    <p className="text-right font-semibold text-xl">
                        Total:{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(
                                    (item) => item.id === cartItem.id
                                );
                                return (
                                    total +
                                    (item?.price || 0) * cartItem.quantity
                                );
                            }, 0)
                        )}
                    </p>
                </div>
            </div>
        </>
    );
}
