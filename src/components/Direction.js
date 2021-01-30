import React from 'react'
import '../App.css'

const Direction=(props)=>{
    const directions = props.directionStats.map((d, index)=>{
        return(
            <div className='directions-container' key={index}>
                <div className="modeOfTransit">
                <span>Summary: {d.summary}</span>
                <span>Distance: {d.legs[0].distance.text}</span>
                <span>Duration: {d.legs[0].duration.text}</span><br/>
                <span>Start: {d.legs[0].start_address}</span>
                <span>End: {d.legs[0].end_address}</span>
                </div>
                <div className="direction-container"> 

                </div>
              
            <div className="stats"></div>
          </div>
        )
    });


    return(
        <div>
            {directions}
        </div>
    )
 
}


export default Direction