
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
          <h1>Goshen Noodles</h1>
          <p>Discover the authentic taste of Vietnam</p>
        </div>
        <hr className="hr" />
        <div className="infoSection">
          <div className="infoBox">
            <h2>Restaurant Information</h2>
            <p>1303 College</p>
            <p>Goshen, IN 46526</p>
            <br></br>
            <p className="directions">Directions</p>
          </div>
          <div className="infoBox">
            <h2>Contact</h2>
            <p>Phone: (123) 456-7890</p>
            <p>Hours: Mon-Sun: 11am - 9pm</p>
          </div>
        </div>
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
