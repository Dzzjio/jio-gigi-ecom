import { Link } from "react-router-dom";
import { StyledItemCard } from "./styled";

type ItemCardProps = {
    img: string;
    price: number;
};

const ItemCard: React.FC<ItemCardProps> = ({ img, price }) => {
    return (
        <StyledItemCard>
            <button className="add-to-cart">O</button>
            <img src={img} alt="ia" />
            <p>price: <span>{price}$</span></p>
            <Link to="/"><button>Buy Now</button></Link>
        </StyledItemCard>
    );
};

export default ItemCard