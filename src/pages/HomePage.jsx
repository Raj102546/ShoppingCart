import { Link } from "react-router-dom"
export default function Home(){
    return(
        <>
        <h1>HomePage</h1>

        <br />
        <Link to="shop">go to shop</Link>
        <br />
        <Link to="cart">go to cart</Link>
        </>
        
    )
}