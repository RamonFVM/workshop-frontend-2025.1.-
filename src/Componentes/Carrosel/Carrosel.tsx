    'use client'
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';



    export function Carrosel() {


        return (
            <div className='mt-6'>

                <Swiper
                    spaceBetween={2}
                    slidesPerView={2}
                    loop={true}
                    autoHeight={true}
                    speed={500}
                    autoplay={{delay:3000}} 
                    breakpoints={{
                        630:{
                            slidesPerView:1,
                        },

                        760:{
                            slidesPerView:2
                        },

                        1030:{
                            slidesPerView:3
                        }

                    }
                     
                    }
                    >

                    <SwiperSlide>
                        <img src="/pikachu.png" alt="pikachu" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/lucario.png" alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="charmander.png" alt="" />
                    </SwiperSlide>

                    <SwiperSlide><img src="rayquaza.png" alt="" /></SwiperSlide>

                    <SwiperSlide>
                           <img src="gengar.png" alt="" />
                    </SwiperSlide>


                </Swiper>

            </div>


        )


    }