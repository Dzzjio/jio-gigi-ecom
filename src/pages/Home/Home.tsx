import tshirt from '../../assets/Images/61j6-CNsRpL._AC_SL1500_.jpg';
import { Categories, CategoryItem, CategoryList, FeaturedProducts, HeroSection, HomeContainer, Newsletter, ProductCard, ProductGrid, PromotionBanner, Promotions, ReviewItem, ReviewList, Testimonials } from './styled';

const Home = () => {
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <h1>Welcome to Our Store!</h1>
        <h2>Check out our latest collections</h2>
        <img src={tshirt} alt="tshirt" />
        <button>Shop Now</button>
      </HeroSection>

      {/* Featured Products */}
      <FeaturedProducts>
        <h2>Featured Products</h2>
        <ProductGrid>
          <ProductCard>
            <img src={tshirt} alt="Product 1" />
            <p>Product 1</p>
          </ProductCard>
          <ProductCard>
            <img src={tshirt} alt="Product 2" />
            <p>Product 2</p>
          </ProductCard>
          <ProductCard>
            <img src={tshirt} alt="Product 3" />
            <p>Product 3</p>
          </ProductCard>
        </ProductGrid>
      </FeaturedProducts>

      {/* Categories */}
      <Categories>
        <h2>Shop by Category</h2>
        <CategoryList>
          <CategoryItem>Electronics</CategoryItem>
          <CategoryItem>Clothing</CategoryItem>
          <CategoryItem>Accessories</CategoryItem>
        </CategoryList>
      </Categories>

      {/* Promotions/Banners */}
      <Promotions>
        <h2>Special Deals</h2>
        <PromotionBanner>
          <p>50% off on selected items!</p>
        </PromotionBanner>
      </Promotions>

      {/* Testimonials */}
      <Testimonials>
        <h2>Customer Reviews</h2>
        <ReviewList>
          <ReviewItem>
            <p>"Great quality and fast shipping!"</p>
            <p>- John Doe</p>
          </ReviewItem>
          <ReviewItem>
            <p>"Excellent customer service."</p>
            <p>- Jane Smith</p>
          </ReviewItem>
        </ReviewList>
      </Testimonials>

      {/* Newsletter Signup */}
      <Newsletter>
        <h2>Subscribe to our Newsletter</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </Newsletter>
    </HomeContainer>
  );
};

export default Home;