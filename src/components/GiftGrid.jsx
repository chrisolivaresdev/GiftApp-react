import {useEffect, useState } from 'react';
import {GiftItem} from './GiftItem'
import {getGift} from '../helpers/getGifts'
import { useFetchGifts } from '../hooks/useFetchGifts';

export const GiftGrid = ({category}) => {
  const {images, isLoading } = useFetchGifts(category)
  console.log(isLoading)




  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
     
      <div className="card-grid">
      {
        images.map((image) =>(
         <GiftItem key={image.id} {...image}/>
            ))
        }
      </div>
    </>
    )
}

