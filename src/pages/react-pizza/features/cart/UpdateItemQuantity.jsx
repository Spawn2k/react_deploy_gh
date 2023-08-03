import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQuantity, getCurrentQuantity, increaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = (props) => {
  const { pizzaId } = props;
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))} type="round">
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))} type="round">
        -
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
