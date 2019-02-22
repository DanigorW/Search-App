import React from 'react';
import '../comp/Pics.css'
import ImgCard from './ImgCard';

const Pics = (props) =>{
    
  let dataFromApi = props.img.map((el) =>{
        return <ImgCard key={el.id} el={el} />
    })
    
    return(
        <div className="img-style br3">
          {dataFromApi}
        </div>
    )
}


export default Pics;