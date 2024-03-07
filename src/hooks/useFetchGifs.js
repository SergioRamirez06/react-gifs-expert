import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

  const getImages = async() => {
    const NewImage = await getGifs( category );
    setImages( NewImage );
    setIsLoading( false )
  }

  useEffect(() => {
    getImages(images);
  }, [ ])

  return {
    images,
    isLoading,
  }
}
