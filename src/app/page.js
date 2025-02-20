
import styles from './styles/styles.css'; // Importing CSS styles
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Footer from './components/Footer';

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
        <div className="infoSection">
          <div className="infoBoxes">
            <div className="infoBox">
              <h2 className="bold">Restaurant Information:</h2>
              <p>1303 College</p>
              <p>Goshen, IN 46526</p>
            </div>
            <div className="infoBox">
              <h2 className="bold">Contact:</h2>
              <p>Phone: (574) 534-1793</p>
              <p>Hours:</p>
              <p>Mon: 11am - 7pm</p>
              <p>Tuesday: Closed.</p>
              <p>Wed-Sun: 11am - 7pm</p>
            </div>
          </div>
          <div className="google-map-container">
            <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.588370033123!2d-85.81656569699484!3d41.56700305677343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816ed60bd63323d%3A0x1c1eb390883272c2!2sGoshen%20Noodles!5e0!3m2!1sen!2sus!4v1715649856224!5m2!1sen!2sus" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div> {/* ends info section */}
       <Menu />
      </main>
      <Footer />
    </div>
  );
}
