import React from 'react'

function CallToActionSection() {
  return (
    <div className='cta-container flex items-center'>
      <div className='w-[1400px] m-auto flex flex-row justify-between items-center'>
        <div className='cta-text basis-1/2 flex flex-col justify-end'>
          <div className='cta-title'>EZ CREATING PRESENTATION 
  SLIDES WITH <span className=''>SLIGHT</span></div>
          <div className='cta-description'>
          Presentation will be no longer troublesome, time consuming  anymore. With Slight, AI will help you create a suitable and captivate captivating slide from scratch with your document file or modify your existing one ...
          </div>
          <div className='cta-moredetails'>
          More details
          </div>
          <span className='cta-createSlidesBtn flex flex-row justify-center content-center cursor-pointer'>
            CREATE SLIDES NOW<img src='/cta-arrow.svg' className=''></img>
          </span>
          <span className='cta-howToUseBtn flex flex-row justify-center content-center cursor-pointer'>
          HOW TO USE <img src='/cta-search.svg' className=''></img>
          </span>
        </div>
        <img className='cta-img' src='/cta-macos.svg' alt='website on mac'></img>
      </div>
    </div>
  )
}

export default CallToActionSection