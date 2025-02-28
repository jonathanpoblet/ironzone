'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './testimonies.css';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonies() {
  const testimonies = [
    {
      text: 'IronZone cambió mi vida. Los entrenadores se enfocan en mis necesidades y me motivan siempre. ¡Los resultados son increíbles!',
      name: 'Carlos M.',
    },
    {
      text: 'El plan de nutrición que me dieron fue clave para mejorar mi rendimiento en los entrenamientos. ¡Estoy más fuerte que nunca!',
      name: 'Ana L.',
    },
    {
      text: 'Gracias a IronZone, mejoré mi resistencia y confianza. ¡El ambiente es increíble y los entrenadores súper atentos!',
      name: 'David R.',
    },
    {
      text: 'El entrenamiento personalizado me ayudó a alcanzar mis objetivos mucho más rápido. ¡Completamente recomendado!',
      name: 'Laura P.',
    },
    {
      text: 'Ambiente motivador y entrenadores profesionales. Me siento más fuerte y saludable cada día. ¡Aguante entrenar!',
      name: 'Martín G.',
    },
    {
      text: 'IronZone no solo es un gimnasio, es una familia que te impulsa a ser mejor. ¡Increíble experiencia en el gimnasio!',
      name: 'Sofía T.',
    },
  ];

  return (
    <section id='testimonios' className='bg-gray-900 text-white py-24 px-4'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-12'>Testimonios</h2>

        {/* Contenedor centrado del Swiper */}
        <div className='flex justify-center mx-auto self-center'>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className='swiper-container w-full max-w-4xl mx-auto self-center'
          >
            {testimonies.map((testimonial, index) => (
              <SwiperSlide key={index} className='swiper-slide'>
                <div className='bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs testimonial-card'>
                  <p className='mb-4'>"{testimonial.text}"</p>
                  <p className='font-semibold'>{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='swiper-pagination'></div>
      </div>
    </section>
  );
}
