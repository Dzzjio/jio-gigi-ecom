import { Link } from "react-router-dom";
import { ProductI } from "../../types/product.interface";
import { renderImage } from "../../utils/helpers";

const Option = (product: ProductI) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div>
        <div>
          <img src={renderImage(product.image)} alt={product.title} />
        </div>
        <div>
          <h5 style={{backgroundColor: 'red'}}>{product.title}</h5>
          <p>{product.price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default Option;