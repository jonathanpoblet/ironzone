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
          Contáctanos para más información o para comenzar tu entrenamiento personalizado.
        </p>
        <a
          href='https://wa.me/1121592753?text=Hola,%20quiero%20consultar%20por%20un%20plan!'
          className='bg-black text-white py-3 px-8 rounded-full text-xl hover:bg-gray-800 transition duration-300'
        >
          INSCRIBIRME
        </a>
        <div className='mt-12 max-w-3xl mx-auto'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Horarios de Atención</h3>
          <ul className='text-lg text-gray-900 mb-6'>
            <li>Lunes a Viernes: 8:00 AM - 8:00 PM</li>
            <li>Sábados: 9:00 AM - 2:00 PM</li>
            <li>Domingos: Cerrado</li>
          </ul>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Ubicación</h3>
          <p className='text-lg text-gray-900 mb-6'>
            Avenida 9 de Julio 3258, Buenos Aires, Argentina
          </p>
          <div className='mt-6'>
            <iframe
              className='w-full h-64 rounded-lg shadow-lg'
              src='https://www.google.com/maps/embed/v1/place?q=Avenida%209%20de%20Julio%203258%2C%20Buenos%20Aires%2C%20Argentina&key=AIzaSyDIg8m-54IXAXzeapzKzTVS76iWkFaeZyM'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
