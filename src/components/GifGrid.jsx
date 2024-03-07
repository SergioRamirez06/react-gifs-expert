import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "../components/GifItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
            <h3>{ category }</h3>
            {
              isLoading && ( <code>Cargando...</code> ) 
            }
            <div className="card-grid">
              {
                images.map( ( image ) => 
                  <GifItem 
                    key={ image.id }
                    { ...image }
                  
                  />
                )
              }
            </div>
    </>
  )
}
