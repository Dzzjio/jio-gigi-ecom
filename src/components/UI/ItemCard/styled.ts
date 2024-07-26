import styled from 'styled-components';

export const StyledItemCard = styled.div`
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    margin: 1rem;
  }

  .product-card {
    position: relative;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    transition: transform 0.3s, box-shadow 0.3s;

    // &:hover {
    //   transform: translateY(-5px);
    //   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    // }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .product-details {
      padding: 1.25rem;

      h2 {
        font-size: 1.5rem;
        margin: 0 0 0.5rem;
        color: #333;
      }

      p {
        margin: 0;
        font-size: 1rem;
        color: #555;
      }

      .price {
        font-weight: 600;
        color: #333;
        margin: 0.5rem 0;
      }

      .sale-price {
        color: #e74c3c;
        font-weight: 600;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        position: absolute;
        top: 1rem;
        right: 0rem;
        transform: translateX(100%);
        transition: transform 0.3s;

        button,
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 25px;
          background-color: #ffffff;
          color: #000000;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.3s, color 0.3s;
          padding: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        button:hover,
        a:hover {
          background-color: #f0f0f0;
        }

        svg {
          width: 20px;
          height: 20px;
          stroke: #000000;
          fill: none;
          color: #000000;
        }
      }
    }
  }

  .product-card:hover .buttons {
    transform: translateX(-20%);
  }
`;
