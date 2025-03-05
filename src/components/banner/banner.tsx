export default function Banner() {
  return (
    <section className=' h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white  flex items-center justify-center overflow-x-hidden'>
      <div className='container mx-auto text-center px-4'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight px-4 sm:px-6 md:px-8'>
          ¡Transforma tu Cuerpo en IronZone!
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto px-4 sm:px-6 md:px-8'>
          Supera tus límites, alcanza tus objetivos y vive una vida más fuerte.
          Nuestros entrenamientos y servicios están diseñados para llevarte al
          siguiente nivel.
        </p>

        <a
          href='https://wa.me/1121592753?text=Hola,%20quiero%20consultar%20por%20un%20plan!'
          className='bg-black text-white py-3 px-8 rounded-full text-xl hover:bg-stone-800 transition duration-300'
        >
          INSCRIBIRME
        </a>
      </div>
    </section>
  );
}
