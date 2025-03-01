'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function Carrosel() {

    return (
        <div >

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
                    <div className="w-60 p-5 border-4 m-12 border-transparent hover:border-yellow-500 hover:shadow-lg  hover:shadow-yellow-500 transition-all duration-300 ease-in-out hover:scale-110">
                        <img src="/pikachu.png" alt="pikachu" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-60 p-5 border-4 m-12 border-transparent  hover:border-blue-700 hover:shadow-lg  hover:shadow-blue-700 transition-all duration-300 ease-in-out hover:scale-110">
                        <img src="/lucario.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-60 p-5 border-4 m-12 border-transparent hover:border-red-600 hover:shadow-lg  hover:shadow-red-600 transition-all duration-300 ease-in-out hover:scale-110">
                        <img src="charmander.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-60 p-5 border-4 m-12 border-transparent hover:border-green-600 hover:shadow-lg  hover:shadow-green-600 transition-all duration-300 ease-in-out hover:scale-110">
                        <img src="rayquaza.png" alt="rayquaza" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" w-60 p-5 border-4 m-12 border-transparent hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600 duration-300 ease-in-out hover:scale-110">
                        <img src="gengar.png" alt="Gengar" />
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}
