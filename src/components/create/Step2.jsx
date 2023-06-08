import React from 'react'
import TextQuestion from './Step2Question/TextQuestion'
import ImgQuestion from './Step2Question/ImgQuestion'
import { Button, ConfigProvider, Input, Tooltip } from 'antd'

function Step2({isFetchLoading, submitHandler, prevStep, numberOfSlides, setNumberOfSlides, wordsPerSlide, setWordsPerSlide, submitBtnName}) {
  const questionnaire = [
    {
      questionId : 0,
      type: 'text',
      question: 'Text Question',
      options: [
        {
          optionId : 0,
          content: 'First Option',
        },
        {
          optionId : 1,
          content: 'Second Option',
        },{
          optionId : 2,
          content: 'Third Option',
        },{
          optionId : 3,
          content: 'Fourth Option',
        },
      ],
    },
    {
      questionId : 1,
      type: 'img',
      question: 'Img Question',
      options: [
        {
          optionId : 0,
          imgUrl: '/create-option-img-placeholder.svg',
          content: 'First Option',
        },
        {
          optionId : 1,
          imgUrl: '/create-option-img-placeholder.svg',
          content: 'Second Option',
        },{
          optionId : 2,
          imgUrl: '/create-option-img-placeholder.svg',
          content: 'Third Option',
        },{
          optionId : 3,
          imgUrl: '/create-option-img-placeholder.svg',
          content: 'Fourth Option',
        },
      ],
    },
  ]


  return (
    <div className='flex flex-row justify-center'>
        <div className='step-2-container w-[80vw] flex flex-col justify-evenly'>
            <div className='step-title '>STEP 2</div>
            <div className='step-tips'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='step-input-container flex flex-col'>
              <div className='step-input-title'>Number Of Slides</div>
              <Input 
                type="number"
                min={5}
                max={30}
                value={numberOfSlides}
                onChange={(e) => setNumberOfSlides(e.target.value)}
                placeholder='Number of Slides(1-10)'
              />
            </div>
            <div className='step-input-container flex flex-col'>
              <div className='step-input-title'>Words Per Slide</div>
              <Input 
                type="number"
                min={20}
                placeholder='Words Per Slide'
                value={wordsPerSlide}
                onChange={(e) => setWordsPerSlide(e.target.value)}
              />
            </div>
            {isFetchLoading && 
            <div className="loading-animation-contianer my-[1rem]">
              <div className="follow-the-leader">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className='loading-text-container text-center'>Generating...</div>
            </div>
            }
            <div className='step-button-container flex flex-row justify-center items-center'>
              <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: '#e52991',
                    },
                  }}
                >
                <Button size='large' className='next-step-button cursor-pointer mr-5' onClick={prevStep}>Previous Step</Button>
                <Button size='large' className='cursor-pointer bg-[#e52991]' type='primary' onClick={submitHandler}>{submitBtnName}</Button>
              </ConfigProvider>
            </div>

        </div>
    </div>
  )
}

export default Step2