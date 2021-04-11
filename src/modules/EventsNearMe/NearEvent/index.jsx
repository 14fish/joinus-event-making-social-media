
import React/* ,{useState} */ from 'react';
import {MapWrapper} from "./MapWrapper"
// import styled from 'styled-components'; 

export const NearEvent = function () {
    const data={
        location:  {"latitude":40.4, "longitude": 49.85}
    }

    return (
         /* burda oz yerimi gonderirem o yere yaxin olan yerlerdeki eventleri goturur */
        <div><MapWrapper location={data.location} /></div>
          
    )
} 