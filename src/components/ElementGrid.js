import React, { useEffect, useState } from 'react'
import { getElemets } from '../helpers/getElemets';
import { ElementGridItem } from './ElementGridItem';

export const ElementGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getElemets( category )
            .then( setImages );
    }, [ category ])

    

  return (
    <div className="card-grid">
        {/* <h3> {category} </h3> */}
        
        {
            images.map( img => (
                <ElementGridItem 
                    key={img.id}
                    {...img}
                />
            ))
        }
        

    </div>
  )
}
