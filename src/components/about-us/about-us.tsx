import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id='nosotros' className='bg-gray-100 text-gray-900 py-24 px-4'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-8'>Sobre Nosotros</h2>
        <p className='text-lg max-w-2xl mx-auto mb-8'>
          En IronZone, estamos comprometidos con tu bienestar y desarrollo físico. Con entrenadores
          expertos y planes personalizados, te ayudamos a alcanzar tu máximo potencial.
        </p>
        <p className='text-lg max-w-2xl mx-auto'>
          Creemos que cada persona es única, por eso trabajamos en estrecha colaboración contigo
          para crear un plan que se ajuste a tus necesidades y metas.
        </p>
      </div>
      <div className='container mx-auto text-center w-full'>
        <Image
          className='mx-auto mt-8 rounded-lg shadow-lg'
          alt='Sobre Nosotros'
          src='/img-about-us.jpg'
          width={800}
          height={800}
        />
      </div>
    </section>
  );
}
