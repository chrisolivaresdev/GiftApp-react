import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifts";

export const useFetchGifts = (category) => {

      const [images, setImages] = useState([])
      const [isLoading, setisLoading] = useState(true)


  const getImages = async() => {
    const newImages = await getGift(category);
    setImages(newImages);
    setisLoading(false)
  }

  useEffect( () => {
    //  getGift(category);
    //  .then( newImages => setimages(newImages));
    getImages()
  },[ ]
  ) 

    return {
        images,
        isLoading
    }
}
