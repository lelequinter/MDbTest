import React from 'react'
import { useFetchElement } from '../hooks/useFetchElement'
import { ElementGridItem } from './ElementGridItem';

export const ElementGrid = ( { category } ) => {

    const { data: images, loading } = useFetchElement( category );

  return (
    <div className="card-grid text-white">
        {/* <h3> {category} </h3> */}
        { loading && <p className="animate__animated animate__flash">Loaging...</p>}
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
