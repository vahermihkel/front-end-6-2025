import { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHome from "./AdminHome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function MaintainProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState(productsFromFile);
  const searchRef = useRef();


  const deleteProduct = (index) => {
      const deletedProduct = productsFromFile[index];
      productsFromFile.splice(index, 1);
      setProducts(productsFromFile.slice());
      toast.success(`${deletedProduct.title} deleted successfully!`);
    };

  const search = () => {
    const result = productsFromFile.filter(product =>
      product.title.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setProducts(result);
  };

  return (
    <div>
      <AdminHome />
      <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
      <input
        ref={searchRef}
        onChange={search}
        type="text"
      />
      <table>
        <thead>
          <tr>
            <th>{t("maintain-products.index")}</th>
            <th>{t("maintain-products.title")}</th>
            <th>{t("maintain-products.price")}</th>
            <th>{t("maintain-products.category")}</th>
            <th>{t("maintain-products.image")}</th>
            <th>{t("maintain-products.rating")}</th>
            <th>{t("maintain-products.count")}</th>
            <th>{t("maintain-products.delete")}</th>
            <th>{t("maintain-products.edit")}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.title}>
              <td>{index}</td>
              <td>{product.title}</td>
              <td>{product.price} €</td>
              <td>{product.category}</td>
              <td>
                <img
                  style={{ width: "50px", borderRadius: "10px" }}
                  src={product.image}
                  alt=""
                />
              </td>
              <td>{product.rating?.rate || "-"}</td>
              <td>{product.rating?.count || "-"}</td>
              <td>
                <button onClick={() => deleteProduct(index)}>x</button>
              </td>
              <td>
                <Link to={`/admin/edit-product/${index}`}>
                  <button>{t("maintain-products.edit-button")}</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default MaintainProducts;