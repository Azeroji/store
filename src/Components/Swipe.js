import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import "../index.css"


import { Scrollbar } from "swiper";

const Swipe = () => {
  return (
    <div>
        <Swiper scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]} >
            <SwiperSlide>       
                <div className='flex justify-center mt-[70px]'>
                    <div className='px-[80px]'>
                        <div className='text-center '>
                            <p className='text-[40px] font-medium text-primary leading-[40px]'>NEW RAZER BLADE 16</p>
                            <p className='mt-[20px] text-[16px] font-medium'>
                                BIGGER. BETTER. STILL THE BEST.
                            </p>
                            <div className='mt-[15px] flex justify-center gap-x-[20px]'>
                                <a className='text-[16px] hover:text-primary decoration-[1px] hover:underline-offset-[2px] hover:underline font-medium'>
                                    Learn more {'>'}
                                </a>
                                <a className='text-[16px] hover:text-primary decoration-[1px] hover:underline-offset-[2px] hover:underline font-medium'>
                                    Buy {'>'}
                                </a>
                            </div>
                        </div>
                        <img className='mt-[5px]' src="./assets/content/razerblade.jpg" width="500px" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>       
                <div className='flex justify-center mt-[70px]'>
                    <div className='px-[80px]'>
                        <div className='text-center '>
                            <p className='text-[40px] font-medium text-primary leading-[40px]'>RAZER BLACKWIDOW</p>
                            <p className='mt-[20px] text-[16px] font-medium'>
                                Designed for gaming, tournament-grade precision.
                            </p>
                            <div className='mt-[15px] flex justify-center gap-x-[20px]'>
                                <a className='text-[16px] hover:text-primary decoration-[1px] hover:underline-offset-[2px] hover:underline font-medium'>
                                    Learn more {'>'}
                                </a>
                                <a className='text-[16px] hover:text-primary decoration-[1px] hover:underline-offset-[2px] hover:underline font-medium'>
                                    Buy {'>'}
                                </a>
                            </div>
                        </div>
                        <img src="./assets/content/blackwidow.jpg" width="500px" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Swipe