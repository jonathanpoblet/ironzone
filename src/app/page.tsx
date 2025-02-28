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
      <footer className='bg-gray-900 text-white py-8 text-center'>
        <p>&copy; 2025 IronZone. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
