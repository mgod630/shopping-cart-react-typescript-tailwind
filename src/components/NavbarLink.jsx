import { NavLink } from "react-router-dom";

const NavbarLink = (props) => {
    return (
        <NavLink to={props.to} className={props.className}>
            {props.text}
        </NavLink>
    );
};
export { NavbarLink };
