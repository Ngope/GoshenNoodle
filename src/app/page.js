
import styles from './styles/styles.css';
import Jumbotron from './components/jumbotron';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react"

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
      <Analytics />
    </div>
    
  );
}
