import { Link } from 'react-router-dom';
import tshirt from '../../assets/Images/61j6-CNsRpL._AC_SL1500_.jpg';
import Button from '../../components/UI/Button';
import { Categories, CategoryItem, CategoryList, FeaturedProducts, HeroSection, HomeContainer, Newsletter, ProductCard, ProductGrid, PromotionBanner, Promotions, ReviewItem, ReviewList, Testimonials } from './styled';

const Home = () => {
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <div>
          <h1>მოგესალმებით ჩვენს მაღაზიაში!</h1>
          <h2>იხილეთ ჩვენი ახალი კოლექციები</h2>
          <Button><Link to='/shop'>დაიწყე შოპინგი</Link></Button>
        </div>
        <img src={tshirt} alt="tshirt" />
      </HeroSection>

      {/* Featured Products */}
      <FeaturedProducts>
        <h2>რჩეული პროდუქტები</h2>
        <ProductGrid>
          <ProductCard>
            <img src={tshirt} alt="პროდუქტი 1" />
            <p>პროდუქტი 1</p>
          </ProductCard>
          <ProductCard>
            <img src={tshirt} alt="პროდუქტი 2" />
            <p>პროდუქტი 2</p>
          </ProductCard>
          <ProductCard>
            <img src={tshirt} alt="პროდუქტი 3" />
            <p>პროდუქტი 3</p>
          </ProductCard>
        </ProductGrid>
      </FeaturedProducts>

      {/* Categories */}
      <Categories>
        <h2>კატეგორიების მიხედვით შოპინგი</h2>
        <CategoryList>
          <CategoryItem>ელექტრონიკა</CategoryItem>
          <CategoryItem>ტანსაცმელი</CategoryItem>
          <CategoryItem>აქსესუარები</CategoryItem>
        </CategoryList>
      </Categories>

      {/* Promotions/Banners */}
      <Promotions>
        <h2>სპეციალური შეთავაზებები</h2>
        <PromotionBanner>
          <p>50% ფასდაკლება არჩეულ პროდუქტებზე!</p>
        </PromotionBanner>
      </Promotions>

      {/* Testimonials */}
      <Testimonials>
        <h2>კლიენტების მიმოხილვები</h2>
        <ReviewList>
          <ReviewItem>
            <p>"მაღალი ხარისხი და სწრაფი მიტანა!"</p>
            <p>- ჯონ დო</p>
          </ReviewItem>
          <ReviewItem>
            <p>"შესანიშნავი მომხმარებელთა მომსახურება."</p>
            <p>- ჯეინ სმიტი</p>
          </ReviewItem>
        </ReviewList>
      </Testimonials>

      {/* Newsletter Signup */}
      <Newsletter>
        <h2>გამოიწერეთ ჩვენი ახალი ამბები</h2>
        <input type="email" placeholder="შეიყვანეთ თქვენი ელ. ფოსტა" />
        <Button>გამოწერა</Button>
      </Newsletter>
    </HomeContainer>
  );
};

export default Home;