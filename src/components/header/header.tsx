import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className='flex justify-between items-center px-8 bg-white shadow-md w-full'>
      <div className='flex items-center h-full'>
        <a href='/'>
          <img src='/iron-logo.png' alt='Logo' className='h-25' />
        </a>
      </div>

      <div className='flex items-center h-full'>
        <a
          href='https://api.whatsapp.com/send?phone=541130565913&text=Hola,%20quiero%20consultar%20por%20un%20plan!'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'
        >
          Inscribirse Ahora
        </a>
      </div>
    </header>
  );
}
