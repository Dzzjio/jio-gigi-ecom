import { StyledItemCard } from "./styled";

type ItemCardProps = {
    img: string;
    price: number;
};

const ItemCard: React.FC<ItemCardProps> = ({ img, price }) => {
    return (
        <StyledItemCard>
            <img src={img} alt="ia" />
            <p>price: <span>{price}$</span></p>
        </StyledItemCard>
    );
};

export default ItemCard