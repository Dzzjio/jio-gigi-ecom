import ItemCard from "../../components/UI/ItemCard/ItemCard";
import buki from '../../assets/Images/bukkkaa.jpg';
import shirt1 from '../../assets/Images/shirt1.jpg';
import { StyledShopFilters, StyledShopMain, StyledShopPage } from "./styled";

const Shop = () => {
    // Define options for dropdowns
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
    const genders = ['Men', 'Women', 'Unisex'];

    return (
        <StyledShopPage>
            <StyledShopFilters>
                <div>
                    <label htmlFor="size">Size:</label>
                    <select id="size">
                        <option value="">Select Size</option>
                        {sizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="color">Color:</label>
                    <select id="color">
                        <option value="">Select Color</option>
                        {colors.map((color, index) => (
                            <option key={index} value={color}>{color}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender">
                        <option value="">Select Gender</option>
                        {genders.map((gender, index) => (
                            <option key={index} value={gender}>{gender}</option>
                        ))}
                    </select>
                </div>
            </StyledShopFilters>
            <StyledShopMain>
                <ItemCard img={buki} price={5} />
                <ItemCard img={shirt1} price={51} />
                <ItemCard img={buki} price={5} />
                <ItemCard img={shirt1} price={51} />
                <ItemCard img={buki} price={5} />
                <ItemCard img={shirt1} price={51} />
                <ItemCard img={buki} price={5} />
                <ItemCard img={shirt1} price={51} />
            </StyledShopMain>
        </StyledShopPage>
    );
};

export default Shop;
