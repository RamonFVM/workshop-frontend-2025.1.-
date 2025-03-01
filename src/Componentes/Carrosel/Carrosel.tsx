'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function Carrosel() {

    return (
        <div className='mt-6'>

            <Swiper
            
                slidesPerView={2}
                loop={true}
                autoHeight={true}
                speed={500}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    630: {
                        slidesPerView: 1,
                       
                    },

                    760: {
                        slidesPerView: 2,
                       
                    },

                    1030: {
                        slidesPerView: 3,
                      
                    }
                }}
            >

                <SwiperSlide>
                    <div className="w-60 p-5 gap-3 transition-all duration-300 ease-in-out hover:border-8 hover:border-yellow-500">
                        <img src="/pikachu.png" alt="pikachu" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-60 p-5 transition-all duration-300 ease-in-out hover:border-8 hover:border-blue-700">
                        <img src="/lucario.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-60 p-5 transition-all duration-300 ease-in-out hover:border-8 hover:border-red-600">
                        <img src="charmander.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-60 p-5 transition-all duration-300 ease-in-out hover:border-8 hover:border-green-700">
                        <img src="rayquaza.png" alt="rayquaza" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" w-60 p-5 transition-all duration-300 ease-in-out hover:border-8 hover:border-purple-600">
                        <img src="gengar.png" alt="Gengar" />
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}
