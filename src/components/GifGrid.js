import React from 'react'; //{useState,useEffect}
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data:images,loading} = useFetchGifs( category);
    
  
    return (
        <>
            <h2 className="animate__animated animate__fadeIn"> {category}</h2>
            { loading && <h3 className="animate__animated animate__flash">Loading</h3>}

            <div className="card-grid">
                {
                    images.map( (img) =>
                    <GifGridItem 
                        key={img.id}
                        {...img }
                        />
                )}
            </div>
        </>
    )
}

