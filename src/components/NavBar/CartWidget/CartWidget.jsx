import '../CartWidget/CartWidget.css'
// Cambia la ruta a relativa desde este archivo
import buyIcon from '../../../assets/img/buy.png';

const CartWidget = () => {
    return (
        <li>
            <img src={buyIcon} alt="Buy Icon" className="buy-icon" />
        </li>
    )
}

export default CartWidget