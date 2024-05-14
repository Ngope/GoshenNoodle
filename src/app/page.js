
import styles from './styles/styles.css'; // Importing CSS styles

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
            <img src="/favicon.ico" alt="Goshen Noodles Logo" href= "/"/>
        </div>
        <ul className="nav-links">
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main className="container">
        <div className="landingPage">
        <div class="fading-letters">
            <span class="letter">G</span>
            <span class="letter">o</span>
            <span class="letter">s</span>
            <span class="letter">h</span>
            <span class="letter">e</span>
            <span class="letter">n</span>
            <span class="letter">&nbsp;</span> 
            <span class="letter">N</span>
            <span class="letter">o</span>
            <span class="letter">o</span>
            <span class="letter">d</span>
            <span class="letter">l</span>
            <span class="letter">e</span>
            <span class="letter">s</span>
        </div>
          <p class="letter2">Discover the authentic taste of Vietnam.</p>
        </div>
        <hr className="hr" />
        <div className="infoSection">
          <div>
            <div className="infoBox">
              <h2>Restaurant Information</h2>
              <p>1303 College</p>
              <p>Goshen, IN 46526</p>
            </div>
            <div className="infoBox">
              <h2>Contact</h2>
              <p>Phone: (574) 534-1793</p>
              <p>Hours:</p>
              <p>Mon: 11am - 7pm</p>
              <p>Tuesday: Closed.</p>
              <p>Wed-Sun: 11am - 7pm</p>
            </div>
          </div>
          <div className="google-map-container">
            <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.588370033123!2d-85.81656569699484!3d41.56700305677343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816ed60bd63323d%3A0x1c1eb390883272c2!2sGoshen%20Noodles!5e0!3m2!1sen!2sus!4v1715649856224!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div> {/* ends info section */}
        <hr className="hr" />
        <div className="menu">
          <h2>Menu</h2>
          <div className="menuCategory">
            <h3>Appetizers</h3>
            <ul>
              <li>Appetizer 1</li>
              <li>Appetizer 2</li>
              <li>Appetizer 3</li>
            </ul>
          </div>
          <div className="menuCategory">
            <h3>Main Dishes</h3>
            <ul>
              <li>Main Dish 1</li>
              <li>Main Dish 2</li>
              <li>Main Dish 3</li>
            </ul>
          </div>
          {/* Add more menu categories as needed */}
        </div>
      </main>
      <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Goshen Noodles. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}
