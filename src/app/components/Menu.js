import React from 'react';
import '../styles/styles.css'; // Importing CSS styles

export default function Menu() {
  return (
    <div className="menu" id="Menu">
          <h1>Menu</h1>
          <div className="menuCategory">
            <h3>Appetizers</h3>
            <ul>
              <li className='menuItem'>
                <div className="foodItems">
                  <p>10. Eggrolls (2 pcs)</p>
                  <p className="options"><i>  Pork, Veggie</i></p>
                </div>
                <p className="price">$1.95</p>
              </li>
              <li className='menuItem'>
                <div className="foodItems">
                <p>11. Spring Rolls (2 pcs)</p>
                <p className="options"><i>  Pork, Shrimp, Pork + Shrimp</i></p>
                </div>
                <p className="price">$3.45</p>
              </li>
              <li className='menuItem'>
                <p>12. Crispy Shrimp Wraps (5 pcs)</p>
                <p className="price">$3.95</p>
              </li>
              <li className='menuItem'>
                <p>13. Crab Rangoons (3 pcs)</p>
                <p className="price">$2.50</p>
              </li>
              <li className='menuItem'>
                <p>14. Shrimp Eggrolls (2 pcs)</p>
                <p className="price">$2.50</p>
              </li>
              <li className='menuItem'>
                <div className="foodItems">
                  <p>15. Dumplings (5 pcs)</p>
                  <p className="options"><i>  Pork, Veggie, Chicken</i></p>
                </div>
                <p className="price">$4.95</p>
              </li>
              <li className='menuItem'>
                <p>16. Chicken Wings (5 pcs)</p>
                <p className="price">$5.95</p>
              </li>
            </ul>
            <p><i>Reminder that there are mulitple choices for that menu items. E.X Pork or Veggie Eggrolls</i></p>
          </div>
          <div className="menuCategory">
            <h3>Rice Platters</h3>
            <ul>
              <li className='menuItem'>
                <p>20. Shrimp Fried Rice</p>
                <p className="price">$7.95</p>
              </li>
              <li className='menuItem'>
                <p>21. Beef Fried Rice</p>
                <p className="price">$7.95</p>
              </li>
              <li className='menuItem'>
                <p>22. Chicken Fried Rice</p>
                <p className="price">$6.95</p>
              </li>
              <li className='menuItem'>
                <p>23. Veggie Fried Rice</p>
                <p className="price">$6.50</p>
              </li>
              <li className='menuItem'>
                <p>24. Steam Rice with Pork Chop</p>
                <p className="price">$9.95</p>
              </li>
              <li className='menuItem'>
                <p>25. Steam Rice with Beef Steak Chunks</p>
                <p className="price">$9.95</p>
              </li>
            </ul>
            <p><i>Make it a combo for $2.50 (2 Eggrolls + Choice of Beef, Veggie, or Chicken Broth)</i></p>
          </div>
          <div className="menuCategory">
            <h3>Pho</h3>
            <ul>
              <li className='menuItem'>
                <div className="foodItems">
                  <p>30. Special Deluxe Pho</p>
                  <p className="options"><i>  Pho Dac Biet: (Meatballs, Round Steak, Brisket)</i></p>
                </div>
                <div className="priceItems">
                  <p className="price">L: $11.95</p>
                  <p className="price">S: $10.95</p>
                </div>
              </li>
              <li className='menuItem'>
               <div className="foodItems">
                  <p>31. Rounds Steak + Brisket Pho</p>
                  <p className="options"><i>  Pho Tai Nam</i></p>
                </div>
                <div className="priceItems">
                  <p className="price">L: $10.50</p>
                  <p className="price">S: $9.50</p>
                </div>
              </li>
              <li className='menuItem'>
                <div className="foodItems">
                  <p>32. Rounds Steak Pho</p>
                  <p className="options"><i>  Pho Tai</i></p>
                </div>
                <div className="priceItems">
                  <p className="price">L: $10.50</p>
                  <p className="price">S: $9.50</p>
                </div>
              </li>
              <li className='menuItem'>
                <div className="foodItems">
                  <p>33. Meatball Pho</p>
                  <p className="options"><i>  Pho Bo Vien</i></p>
                </div>
                <div className="priceItems">
                  <p className="price">L: $10.50</p>
                  <p className="price">S: $9.50</p>
                </div>
              </li>
              <li className='menuItem'>
                <div className="foodItems">
                  <p>34. Chicken Pho</p>
                  <p className="options"><i>  Pho Ga</i></p>
                </div>
                <div className="priceItems">
                  <p className="price">L: $10.00</p>
                  <p className="price">S: $9.00</p>
                </div>
              </li>
              <li className='menuItem'>
                <p>35. Veggie Pho</p>
                <div className="priceItems">
                  <p className="price">L: $10.50</p>
                  <p className="price">S: $9.50</p>
                </div>
              </li>
            </ul>
            <p><i>Served with a side of bean sprouts, japalenos, and lime. L=Large & S=Small</i></p>
          </div>
          <div className="menuCategory">
            <h3>Vietnamese Sandwiches (Banh Mi)</h3>
            <ul>
              <li className='menuItem'>
                <p>60. Combination Banh Mi (Chk + Pork + Beef)</p>
                <p className="price">$6.00</p>
              </li>
              <li className='menuItem'>
                <p>61. Grilled Chicken Banh Mi</p>
                <p className="price">$5.00</p>
              </li>
              <li className='menuItem'>
                <p>62. Grilled Beef Banh Mi</p>
                <p className="price">$5.50</p>
              </li>
              <li className='menuItem'>
                <p>63. BBQ Pork Banh Mi</p>
                <p className="price">$5.50</p>
              </li>
              <li className='menuItem'>
                <p>64. Pork Terrine Banh Mi</p>
                <p className="price">$5.50</p>
              </li>
              <li className='menuItem'>
                <p>65. Tofu Banh Mi</p>
                <p className="price">$5.50</p>
              </li>
            </ul>
            <p><i>Served with Pickled Daikon/Carrots, Cucumber, Jalepenos, Cilantro, and Mayo. Can Change.</i></p>
          </div>
          <div className="menuCategory">
            <h3>Vermicelli</h3>
            <ul>
              <li className='menuItem'>
                <p>50. Grilled Beef & Eggroll Vermicelli</p>
                <p className="price">$8.50</p>
              </li>
              <li className='menuItem'>
                <p>51. Grilled Chicken & Eggroll Vermicelli</p>
                <p className="price">$5.00</p>
              </li>
              <li className='menuItem'>
                <p>52. Eggroll Vermicelli</p>
                <p className="price">$5.50</p>
              </li>
            </ul>
            <p><i>Served with a side of Sweet Chili Fish Sauce. All Servings come with Lettuce, Cucumber, and Peanuts</i></p>
          </div>
          <div className="menuCategory">
            <h3>Chef Specials</h3>
            <ul>
              <li className='menuItem'>
                <div className="foodItems">
                  <p>43. Stir Fry Egg Noodles</p>
                  <p className="options"><i>  Pork, Chicken, or Beef</i></p>
                </div>
                <p className="price">$8.50</p>
              </li>
            </ul>
          </div>
        </div>
  );
}