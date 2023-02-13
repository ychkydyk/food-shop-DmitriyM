import './header.scss';
import { useState } from 'react';
import SingIn from '../SingIn/SingIn';
import loginIcon from '../../images/loginIcon.svg';
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const Header = () => {

    const [activeModal, setActiveModal] = useState(false);

    const [open,setOpen] = useState(false)
    const products = useSelector((state) => state.cart.products);

    return (
        <header className='header'>
            <div className='header__content container'>
                <div>block</div>

                <div>
                    <button className='header-login' onClick={() => setActiveModal(!activeModal)}>
                        <img src={loginIcon} alt="Login" />
                        <span className='header-login__text'>Login</span>
                    </button>
                </div>
            </div>

            <SingIn active={activeModal} setActive={setActiveModal} />

            <div className="cartIcon" onClick={()=>setOpen(!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>{products.length}</span>
            </div>
            {open && <Cart/>}
        </header>
    )
}

export default Header;
