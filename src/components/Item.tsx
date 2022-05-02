import Button from "@material-ui/core/Button";
// types
import { CartItemType } from "../App";
import styled from "styled-components";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add To Cart </Button>
  </Wrapper>
);

const Wrapper = styled.div``;

export default Item;
