function Item({ name, note, price }) {
  return (
    <li className="flex justify-between items-start py-1.5 border-b border-gray-50 last:border-0">
      <div>
        <p className="text-sm">{name}</p>
        {note && <p className="text-xs text-gray-400 italic pl-3">{note}</p>}
      </div>
      <span className="text-sm font-medium ml-4 shrink-0">{price}</span>
    </li>
  );
}

function ItemSized({ name, note, large, small }) {
  return (
    <li className="flex justify-between items-start py-1.5 border-b border-gray-50 last:border-0">
      <div>
        <p className="text-sm">{name}</p>
        {note && <p className="text-xs text-gray-400 italic pl-3">{note}</p>}
      </div>
      <div className="text-right ml-4 shrink-0">
        <p className="text-sm font-medium">L: {large}</p>
        <p className="text-sm font-medium">S: {small}</p>
      </div>
    </li>
  );
}

function Category({ title, note, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-center font-semibold underline mb-4">{title}</h3>
      <ul>{children}</ul>
      {note && <p className="text-xs text-gray-400 italic mt-4">{note}</p>}
    </div>
  );
}

export default function Menu() {
  return (
    <div className="px-4 py-8 max-w-2xl mx-auto space-y-6">
      <Category
        title="Appetizers"
        note="Reminder that there are multiple choices for that menu item. E.g. Pork or Veggie Eggrolls"
      >
        <Item name="10. Eggrolls (2 pcs)" note="Pork, Veggie" price="$1.99" />
        <Item name="11. Spring Rolls (2 pcs)" note="Pork, Shrimp, Pork + Shrimp" price="$4.99" />
        <Item name="12. Crispy Shrimp Wraps (5 pcs)" price="$4.99" />
        <Item name="13. Crab Rangoons (3 pcs)" price="$3.99" />
        <Item name="14. Shrimp Eggrolls (2 pcs)" price="$2.99" />
        <Item name="15. Dumplings (5 pcs)" note="Pork, Veggie, Chicken" price="$5.99" />
        <Item name="16. Chicken Wings (5 pcs)" price="$6.99" />
      </Category>

      <Category
        title="Rice Platters"
        note="Make it a combo for $2.99 (2 Eggrolls + Choice of Beef, Veggie, or Chicken Broth)"
      >
        <Item name="20. Shrimp Fried Rice" price="$11.99" />
        <Item name="21. Beef Fried Rice" price="$11.99" />
        <Item name="22. Chicken Fried Rice" price="$11.99" />
        <Item name="23. Veggie Fried Rice" price="$11.99" />
        <Item name="24. Steam Rice with Pork Chop" price="$13.99" />
        <Item name="25. Steam Rice with Beef Steak Chunks" price="$14.99" />
        <Item name="26. BBQ Fried Rice" price="$11.99" />
      </Category>

      <Category
        title="Pho"
        note="Served with a side of bean sprouts, jalapeños, and lime. L=Large & S=Small"
      >
        <ItemSized name="30. Special Deluxe Pho" note="Pho Dac Biet: (Meatballs, Round Steak, Brisket)" large="$13.99" small="$12.99" />
        <ItemSized name="31. Round Steak + Brisket Pho" note="Pho Tai Nam" large="$12.99" small="$11.99" />
        <ItemSized name="32. Round Steak Pho" note="Pho Tai" large="$12.99" small="$11.99" />
        <ItemSized name="33. Meatball Pho" note="Pho Bo Vien" large="$12.99" small="$11.99" />
        <ItemSized name="34. Chicken Pho" note="Pho Ga" large="$12.99" small="$11.99" />
        <ItemSized name="35. Veggie Pho" note="Pho Chay" large="$12.99" small="$11.99" />
        <ItemSized name="36. Shrimp Pho" note="Pho Tom" large="$12.99" small="$11.99" />
        <ItemSized name="37. Seafood Pho" note="Pho Hai San" large="$13.99" small="$11.99" />
      </Category>

      <Category
        title="Vietnamese Sandwiches (Bánh Mì)"
        note="Served with Pickled Daikon/Carrots, Cucumber, Jalapeños, Cilantro, and Mayo. Can Change."
      >
        <Item name="60. Combination Bánh Mì (Chk + Pork + Beef)" price="$7.49" />
        <Item name="61. Grilled Chicken Bánh Mì" price="$6.99" />
        <Item name="62. Grilled Beef Bánh Mì" price="$7.49" />
        <Item name="64. BBQ Pork Bánh Mì" price="$6.99" />
        <Item name="65. Pork Terrine Bánh Mì" price="$7.49" />
        <Item name="66. Tofu Bánh Mì" price="$6.99" />
        <Item name="67. Spicy Korean BBQ Bánh Mì" price="$6.99" />
      </Category>

      <Category
        title="Vermicelli"
        note="Served with a side of Sweet Chili Fish Sauce. All servings come with Lettuce, Cucumber, and Peanuts"
      >
        <Item name="50. Grilled Beef & Eggroll Vermicelli" price="$12.99" />
        <Item name="51. Grilled Chicken & Eggroll Vermicelli" price="$12.99" />
        <Item name="52. Eggroll Vermicelli" price="$12.99" />
        <Item name="53. Grilled Shrimp Vermicelli" price="$12.99" />
        <Item name="54. Grilled Meatball & Eggroll Vermicelli" price="$13.50" />
        <Item name="55. Grilled Pork & Eggroll Vermicelli" price="$13.50" />
        <Item name="56. Grilled Beef & Shrimp Vermicelli" price="$13.50" />
        <Item name="57. Grilled Chicken & Shrimp Vermicelli" price="$13.99" />
        <Item name="58. Grilled Pork & Shrimp Vermicelli" price="$13.99" />
      </Category>

      <Category title="Chef Specials">
        <Item name="43. Stir Fry Egg Noodles" note="Pork, Chicken, Beef, or Veggies" price="$12.99" />
      </Category>
    </div>
  );
}
