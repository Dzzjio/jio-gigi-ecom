import styled from "styled-components";

export const HomeContainer = styled.section`
  padding: 20px;
`;

export const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    line-height: 5;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;

    & > a {
      text-decoration: none;
      color: white;
    }

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const FeaturedProducts = styled.div`
  margin-bottom: 40px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ProductGrid = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProductCard = styled.div`
  text-align: center;

  img {
    width: 100%;
    max-width: 200px;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
  }
`;

export const Categories = styled.div`
  margin-bottom: 40px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CategoryItem = styled.div`
  font-size: 1.2rem;
`;

export const Promotions = styled.div`
  margin-bottom: 40px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const PromotionBanner = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #6cb2eb;
  color: #333;
  font-size: 1.5rem;
`;

export const Testimonials = styled.div`
  margin-bottom: 40px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ReviewList = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ReviewItem = styled.div`
  max-width: 300px;
  text-align: center;

  p {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

export const Newsletter = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f1f1f1;

  h2 {
    margin-bottom: 20px;
  }

  input {
    padding: 10px;
    font-size: 1rem;
    margin-right: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;