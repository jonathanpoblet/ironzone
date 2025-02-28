export default function Services() {
  return (
    <section id='servicios' className='bg-white text-gray-900 py-24 px-4'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-12'>Nuestros Servicios</h2>
        <div className='grid md:grid-cols-3 gap-12'>
          <div className='bg-gray-800 text-white p-8 rounded-lg shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-25 text-center w-full mb-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0'
              />
            </svg>

            <h3 className='text-2xl font-semibold mb-4'>Rutina Única</h3>
            <p className='px-6'>
              Diseñamos un plan de entrenamiento único para ti, basado en tus metas y capacidades.
            </p>
          </div>
          <div className='bg-gray-800 text-white p-8 rounded-lg shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-25 text-center w-full mb-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
              />
            </svg>

            <h3 className='text-2xl font-semibold mb-4'>Nutrición Deportiva</h3>
            <p className='px-6'>
              Ofrecemos asesoramiento nutricional para optimizar tus resultados y mejorar tu
              rendimiento.
            </p>
          </div>
          <div className='bg-gray-800 text-white p-8 rounded-lg shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-25 text-center w-full mb-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z'
              />
            </svg>

            <h3 className='text-2xl font-semibold mb-4'>Clases Grupales</h3>
            <p className='px-6'>
              Participa en nuestras clases grupales motivadoras que te ayudarán a alcanzar tus metas
              más rápido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
