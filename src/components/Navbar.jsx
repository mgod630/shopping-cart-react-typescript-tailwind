import { NavbarLink } from "./NavbarLink";
import { Icon } from "@iconify/react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const activeLink = "mx-2 text-slate-900 font-semibold";
const defaultLink = "mx-2";
export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <div className="z-10 sticky top-0 flex justify-between items-center bg-white text-slate-500 p-4 border-b-2 border-b-slate-400">
            <div>
                <NavbarLink
                    to="/"
                    text="Home"
                    className={({ isActive }) =>
                        isActive ? activeLink : defaultLink
                    }
                />
                <NavbarLink
                    to="/store"
                    text="Store"
                    className={({ isActive }) =>
                        isActive ? activeLink : defaultLink
                    }
                />
                <NavbarLink
                    to="/about"
                    text="About"
                    className={({ isActive }) =>
                        isActive ? activeLink : defaultLink
                    }
                />
            </div>
            {cartQuantity > 0 && (
                <button
                    onClick={openCart}
                    className="border-blue-500 border-2 p-3 rounded-full hover:bg-blue-500 hover:text-white duration-500 relative"
                >
                    <Icon icon="mdi-light:cart" width={20} />
                    <p className="bg-red-600 text-white rounded-full absolute text-xxs top-8 left-7 p-1 w-5 h-5">
                        {cartQuantity}
                    </p>
                </button>
            )}
        </div>
    );
}
