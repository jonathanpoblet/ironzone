import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex justify-between items-center px-8 shadow-md w-full'>
      <div className='flex items-center h-full'>
        <Image width='100' height='100' src='/iron-logo.png' alt='logo' priority />
      </div>

      <div className='flex items-center h-full'>
        <a
          href='https://api.whatsapp.com/send?phone=541130565913&text=Hola,%20quiero%20consultar%20por%20un%20plan!'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-sky-950 text-white px-4 py-2 rounded-lg hover:bg-sky-800 transition'
        >
          INSCRIBIRME
        </a>
      </div>
    </header>
  );
}
