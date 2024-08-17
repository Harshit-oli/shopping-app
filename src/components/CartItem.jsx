import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";  
import { useDispatch } from 'react-redux';
import {remove } from '../redux/Slices/CartSlice';
import {toast} from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
  dispatch(remove(item.id));
  toast.success("Item removed");
  }
  return (
    <div className='w-[100vh] ml-[10rem] '>
      <div className='flex flex-row gap-[5rem] '>
        <div className='h-[300px]'>
          <img src={item.image} className='w-full h-full'/>
        </div>
        <div>
          <h1 className='text-2xl font-bold '>{item.title}</h1>
          <h1>{item.description}</h1>
          <div className='flex justify-between w-[60vh]'>
          <p className='text-emerald-700 text-md font-bold mt-[15px]'>${item.price}</p>
          <div className='bg-pink-300 h-5 w-5 rounded-[100px]'
          onClick={removeFromCart}>
          <FcDeleteDatabase />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem

