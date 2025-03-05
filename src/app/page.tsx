import AboutUs from '@/components/about-us/about-us';
import Banner from '@/components/banner/banner';
import Contact from '@/components/contact/contact';
import Services from '@/components/services/services';
import Testimonies from '@/components/testimonies/testimonies';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Banner />
        <AboutUs />
        <Services />
        <Testimonies />
        <Contact />
      </main>
      <footer className='bg-gray-900 text-gray-200 py-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-lg'>
            &copy; {new Date().getFullYear()} Titan Gym.
          </p>
          <p className='mt-2 text-sm'>
            Powered by{' '}
            <a
              href='https://virtualdesigns.tech'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600'
            >
              Virtual Designs
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
