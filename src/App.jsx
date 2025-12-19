import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Section from './components/Section/Section.jsx';
import Swiper from './components/Swiper/Swiper.jsx';
import Testimonilas from './components/Testimonilas/Testimonilas.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main>
         
          <Hero /> 
          <Section />
          <Swiper />
          <Testimonilas/>
      </main>

    </>
  );
}

export default App;

