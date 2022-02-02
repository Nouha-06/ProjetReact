import "../styles/Cart.css"
function Cart(){
    const monstera=8
    const lierre=10
    const bouquet=15
    return (<div className="lmj-cart {
        ">
        <h3>Panier</h3>
        <ul>
            <li> Monstera = { monstera} € </li>
            <li> Lierre = {lierre} €</li>
            <li> Un bouquet de fleurs {bouquet} €</li>
        </ul>
        Total= {monstera+lierre+bouquet}
        </div>)
}

export default Cart;