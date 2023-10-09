import { useShoppingCart } from "../context/ShoppingCartContext";

type ProductItemProps = {
    id: number;
    image: string;
    name: string;
    price: number;
};

const ProductItem = ({ id, image, name, price }: ProductItemProps) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (
        <div className="border bg-white rounded-md py-5 hover:opacity-90">
            <img
                className="w-full h-60 mx-auto object-cover"
                src={image}
                alt={name}
            />
            <div className="flex justify-between text-xl w-3/4 mx-auto mt-5">
                <p className="font-semibold">{name}</p>
                <p className="text-slate-500 text-lg">{price}</p>
            </div>
            {quantity ? (
                <div>
                    <div className="flex justify-center items-center mt-6">
                        <button
                            onClick={() => decreaseCartQuantity(id)}
                            className="bg-blue-500 text-white rounded-md px-4 py-2"
                        >
                            -
                        </button>
                        <p className="mx-3 text-xl">{quantity}</p>
                        <button
                            onClick={() => increaseCartQuantity(id)}
                            className="bg-blue-500 text-white rounded-md px-4 py-2"
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={() => removeFromCart(id)}
                        className="bg-red-500 text-white p-2 mx-auto block mt-3 rounded-md"
                    >
                        Remove
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => increaseCartQuantity(id)}
                    className="bg-blue-500 text-white py-2 rounded-md mt-6 w-3/4 block mx-auto"
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export { ProductItem };
