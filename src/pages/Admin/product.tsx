import React, { useState } from "react";
import { ProductI } from "../../types/product.interface";
import ImageToBase64Converter from "../../components/UI/imageToBase64Converter";
import productServices from "../../services/ProductServices";
import { toast } from "react-toastify";
import { 
    ProductContainer, 
    ImageWrapper, 
    Details, 
    Title, 
    Price, 
    ButtonContainer,
    DefaultButton
} from "./styled"; 

type Props = {
    product: ProductI;
    setProducts: React.Dispatch<React.SetStateAction<ProductI[]>>;
};

const Product = ({ product, setProducts }: Props) => {
    const [editMode, setEditMode] = useState(false);
    const [image, setImage] = useState(product.image);

    const updateProduct = async (id: string, image: string) => {
        try {
            const response = await productServices.updateProduct({ id, image });
            if (response && response.data) {
                setProducts((prev) =>
                    prev.map((item) => (item.id === id ? response.data : item))
                );
                toast.success('Product updated successfully');
            } else {
                toast.error('Unexpected response format');
            }
        } catch (error) {
            console.error('Error updating product:', error);
            toast.error('Error updating product');
        } finally {
            setEditMode(false);
        }
    };

    const deleteProduct = async (id: string) => {
        try {
            await productServices.deleteProducts([id]);
            setProducts((prev) => prev.filter((item) => item.id !== id));
            toast.success('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('Error deleting product');
        } finally {
            setEditMode(false);
        }
    };

    return (
        <ProductContainer key={product.id}>
            {editMode ? (
                <ImageWrapper>
                    <ImageToBase64Converter handleChange={setImage} initialImage={product.image} />
                </ImageWrapper>
            ) : (
                <div>
                    <ImageWrapper>
                        <img src={product.image} alt={product.title} />
                    </ImageWrapper>
                    <Details>
                        <Title>{product.title}</Title>
                        <Price>ფასი: {product.price}$</Price>
                    </Details>
                </div>
            )}
            <ButtonContainer>
                {editMode ? (
                    <>
                        <DefaultButton onClick={() => deleteProduct(product.id)}>წაშლა</DefaultButton>
                        <DefaultButton onClick={() => updateProduct(product.id, image)}>შეცვლა</DefaultButton>
                        <DefaultButton onClick={() => setEditMode(false)}>გამოსვლა</DefaultButton>
                    </>
                ) : (
                    <DefaultButton onClick={() => setEditMode(true)}>შეცვლა</DefaultButton>
                )}
            </ButtonContainer>
        </ProductContainer>
    );
};

export default Product;
