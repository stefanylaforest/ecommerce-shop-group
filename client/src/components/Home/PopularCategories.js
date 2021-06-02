import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PopularCategories = () => {
  return (
    <CardWrapper>
      <Link to="/products?category=Entertainment">
        <CategoryCardOne>
          <Text>Fitness</Text>
        </CategoryCardOne>
      </Link>
      <Link to="/products?category=Fitness">
        <CategoryCardTwo>
          <Text>Entertainment</Text>
        </CategoryCardTwo>
      </Link>
      <Link to="/products?category=Lifestyle">
        <CategoryCardThree>
          <Text>Lifestyle</Text>
        </CategoryCardThree>
      </Link>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1245px) {
    justify-content: flex-start;
    overflow-x: scroll;
    margin: 0px 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &:-webkit-scrollbar {
      display: none; //safari
    }
  }
`;

const CategoryCardOne = styled.div`
  border-radius: 7px;
  background-color: rgb(255, 255, 255, 0.3);
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("./images/fitness.jpg");
  transition: 0.3s ease-out;
  font-size: 25px;
  margin: 0px 25px;
  &:hover {
    box-shadow: inset 0 0 0 2000px rgb(0, 0, 0, 0.3);
  }
`;

const CategoryCardTwo = styled.div`
  border-radius: 7px;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("./images/entertain.jpg");
  transition: 0.3s ease-out;
  font-size: 25px;
  margin: 0px 25px;
  &:hover {
    box-shadow: inset 0 0 0 2000px rgb(0, 0, 0, 0.3);
  }
`;

const CategoryCardThree = styled.div`
  border-radius: 7px;
  background-color: rgb(255, 255, 255, 0.3);
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("./images/lifestyle.jpg");
  transition: 0.3s ease-out;
  font-size: 25px;
  margin: 0px 25px;
  &:hover {
    box-shadow: inset 0 0 0 2000px rgb(0, 0, 0, 0.3);
  }
`;

const Text = styled.p`
  font-weight: 500;
  text-decoration: none;
  color: white;
`;

export default PopularCategories;
