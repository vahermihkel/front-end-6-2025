import Button from "@mui/material/Button";
import { useState } from "react"
import { useTranslation } from "react-i18next";
import trash from '../../assets/trash.png'
import { Product } from "../../models/Product";


function Cart() {
  const [products, setProducts] = useState<Product[]>(JSON.parse(localStorage.getItem("cart") || "[]"));
  const { t } = useTranslation(); // votan LocalStotag-st seejarel jutumargid maha

  const empty = () => {
    setProducts([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }
  
  const deleteItem = (index: number) => {
    products.splice(index, 1); 
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }

  const totalSum = () => { 
    let sum = 0;
      products.forEach(product => sum =  sum + product.price);
      return sum; // returni jargne laheb HTML-i
  }

  return (
    <div className="cart">

      {products.length > 0 ?
        <>
          <Button onClick={empty}>{t("cart.empty-button")}</Button>
          <div>{t("cart.in-cart")} {products.length} {t("cart.item(s)")}</div>
        </> : 
        <div>{t("cart.empty-cart")}</div>
        }

      {products.map((product, index) =>
        <div key={product.title}>
          <span>{product.title} - {product.price} €</span>
          <img className='icon' src={trash} onClick={() => deleteItem(index) } alt="" />
        </div>)}
      <br /> <br />

      <div>Summa kokku {totalSum()}</div>
      <Button variant="contained">Alusta makset</Button>
    </div>
  );
}

export default Cart