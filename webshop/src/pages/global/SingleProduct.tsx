import { useParams } from 'react-router-dom'
import productsFromFile from '../../data/products.json'
import { useTranslation } from "react-i18next";

function SingleProduct() {
  const { t } = useTranslation();
  const { id } = useParams();
  const found = productsFromFile.find(product => product.id === Number(id));

  if (!found) {
    return <div>{t("single.not-found")}</div>;
  }
  
  return (
    <div className='singleProduct'>
      <div>Nr. {found.id}</div>
      <div>{found.title}</div>
      <div>Hind: {found.price} €</div>
      <div>{found.description}</div>
      <div>{found.category}</div>
      <div><img className="image-single-product" src={found.image} alt="" /></div>
      <div>Rating count: {found.rating.count}</div>
      <div>Rating rate: {found.rating.rate}</div>
    </div>
  )
}

export default SingleProduct