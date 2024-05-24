import React from 'react'
import birdPlay from '../assets/birdPlay.mp4'
const VideoPlay = () => {
  return (
    <>
      <div className="relative mt-[150px] ">
        <video autoplay loop loading="lazy">
            <source src={birdPlay} type="video/mp4"/> 
        </video>
      </div>
    </>
  )
}

export default VideoPlay
