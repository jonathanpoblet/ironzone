export default function Contact() {
  return (
    <section
      id='contacto'
      className='bg-gradient-to-r from-gray-100 to-gray-200 text-white py-24 px-4'
    >
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl text-gray-900 font-bold mb-6'>
          ¿Listo para transformar tu cuerpo?
        </h2>
        <p className='text-lg text-gray-900 mb-8'>
          Contáctanos para más información o para comenzar tu entrenamiento
          personalizado.
        </p>
        <a
          href='https://wa.me/1121592753?text=Hola,%20quiero%20consultar%20por%20un%20plan!'
          className='bg-black text-white py-3 px-8 rounded-full text-xl hover:bg-gray-800 transition duration-300'
        >
          INSCRIBIRME
        </a>
      </div>
    </section>
  );
}
