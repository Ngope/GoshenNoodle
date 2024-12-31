
import styles from './styles/styles.css'; // Importing CSS styles
import Jumbotron from './components/jumbotron';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="landingPage">
          <Landing />
        </div>
        <div className="text-white py-24 px-10 max-w-4xl mx-auto">
          <Jumbotron />
        </div>
        <div className="contactBackground">
          <Contact />
        </div>
       <Menu />
      </main>
      <Footer />
    </div>
  );
}
