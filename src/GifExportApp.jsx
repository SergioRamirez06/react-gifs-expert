import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExportApp = () => {

    const [categories, setCategories] = useState( ['Cristiano Ronaldo'] );

    const onAddCategory = ( newCategory )  => {
        if( categories.includes( newCategory ) ) return;
        setCategories( [ newCategory, ...categories  ] );
    }

  return (
    <>
        <h1>GifExportApp</h1>
        
        <AddCategory 
            onNewCategory={ onAddCategory } 
        />

            {
                categories.map((category) => 
                    <GifGrid 
                        key={ category }
                        category={ category } />
                )
            }
    </>
  )
}
