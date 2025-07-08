import AdminHome from "./AdminHome";
import productsFromFile from "../../data/products.json";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function AddProduct() {
  const { t } = useTranslation();
  const [products, setProducts] = useState(productsFromFile.slice());
  const [unique, setUnique] = useState(true);

  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const rateRef = useRef();
  const countRef = useRef();

  const add = () => {
    if (idRef.current.value === "") {
      alert("Tühja id'ga ei saa sisestada!");
      return;
    }
    if (titleRef.current.value === "") {
      alert("Tühja pealkirjaga ei saa sisestada!");
      return;
    }
    if (priceRef.current.value === "") {
      alert("Tühja hinnaga ei saa sisestada!");
      return;
    }
    if (categoryRef.current.value === "") {
      alert("Tühja kategooriaga ei saa sisestada!");
      return;
    }
    if (imageRef.current.value === "") {
      alert("Tühja pildiga ei saa sisestada!");
      return;
    }
    if (rateRef.current.value === "") {
      alert("Tühja hinnanguga ei saa sisestada!");
      return;
    }
    if (countRef.current.value === "") {
      alert("Tühja kogusega ei saa sisestada!");
      return;
    }

    productsFromFile.push({
      id: idRef.current.value,
      title: titleRef.current.value,
      price: priceRef.current.value,
      category: categoryRef.current.value,
      image: imageRef.current.value,
      rating: {
        rate: rateRef.current.value,
        count: countRef.current.value,
      }
    });

    setProducts(productsFromFile.slice());

    idRef.current.value = "";
    titleRef.current.value = "";
    priceRef.current.value = "";
    categoryRef.current.value = "";
    imageRef.current.value = "";
    rateRef.current.value = "";
    countRef.current.value = "";
  };

  const isUnique = () => { 
    const answer = productsFromFile.find(product => product.title === titleRef.current.value);
    if(answer === undefined){
      setUnique(true);
    } else {
      setUnique(false);
    }
  }

  return (
    <div>
      <AdminHome />
      {unique === false && <div className="red">Toote nimi peab olema unikaalne</div>}
      <label>{t("add-product.id")}</label> <br />
      <input ref={idRef} type="number" /> <br />

      <label>{t("add-product.title")}</label> <br />
      <input onChange={isUnique} ref={titleRef} type="text" /> <br />

      <label>{t("add-product.price")}</label> <br />
      <input ref={priceRef} type="number" /> <br />

      <label>{t("add-product.category")}</label> <br />
      <input ref={categoryRef} type="text" /> <br />

      <label>{t("add-product.image")}</label> <br />
      <input ref={imageRef} type="text" /> <br />

      <label>{t("add-product.rating")}</label> <br />
      <input ref={rateRef} type="number" /> <br />

      <label>{t("add-product.count")}</label> <br />
      <input ref={countRef} type="number" /> <br />

      <button onClick={add}>{t("add-product.button")}</button> <br />
      <div>{t("add-product.total")}: {products.length} tk</div>
    </div>
  );
}

export default AddProduct;