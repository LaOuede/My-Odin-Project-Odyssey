import './style.css';
import changeCredits from './credits';

const menuList = (function () {
  const menu = [];

  const type = [
    'Starters',
    'Salads',
    'Main Courses',
    'Sides',
    'Desserts',
    'Beverages',
  ];

  const addDish = (dish) => {
    menu.push(dish);
  };

  const displayMenu = (menuItems) => {
    const dishes = document.createElement('div');
    dishes.className = 'dishes';
    menuItems.appendChild(dishes);

    type.forEach((type) => {
      console.log(type);
      const category = document.createElement('div');
      category.className = 'dishesCategory';
      category.id = type;
      category.textContent = type;
      dishes.appendChild(category);
      menu.forEach((dish, index) => {
        if (dish.category === type) {
          const item = document.createElement('div');
          item.className = 'item';
          item.id = `item ${index}`;
          item.innerHTML = `<b>${dish.name}</b> <br><br>`;
          item.innerHTML += `${dish.description}<br><br>`;
          item.innerHTML += `<b>${dish.price}</b> <br>`;
          category.appendChild(item);
        }
      });
    });
  };

  const getMenuSize = () => {
    return menu.length;
  };

  return {
    addDish,
    displayMenu,
    getMenuSize,
  };
})();

class Dish {
  constructor(name, category, description, price) {
    (this.name = name),
      (this.category = category),
      (this.description = description),
      (this.price = price);
  }
}

function createMenu() {
  const dish1 = new Dish(
    'Stuffed avocado',
    'Starters',
    'Fresh avocado halves stuffed with a mix of quinoa, black beans, corn, tomatoes, and cilantro, drizzled with lime dressing.',
    '$8.99',
  );
  menuList.addDish(dish1);

  const dish2 = new Dish(
    'Spicy Roasted Cauliflower Bites',
    'Starters',
    'Cauliflower florets roasted in a spicy buffalo sauce, served with a side of vegan ranch dressing.',
    '$7.49',
  );
  menuList.addDish(dish2);

  const dish3 = new Dish(
    'Rainbow Garden Salad',
    'Salads',
    'Mixed greens, cherry tomatoes, cucumbers, shredded carrots, red cabbage, and sunflower seeds, served with a balsamic vinaigrette.',
    '$9.99',
  );
  menuList.addDish(dish3);

  const dish4 = new Dish(
    'Kale & Quinoa Salad',
    'Salads',
    'Massaged kale, cooked quinoa, dried cranberries, toasted almonds, and a tangy lemon-tahini dressing.',
    '$10.99',
  );
  menuList.addDish(dish4);

  const dish5 = new Dish(
    'Chickpea & Spinach Curry',
    'Main Courses',
    'Chickpeas and spinach simmered in a rich tomato and coconut milk curry, served with basmati rice and naan bread.',
    '$12.99',
  );
  menuList.addDish(dish5);

  const dish6 = new Dish(
    'Veggie Burger',
    'Main Courses',
    'House-made black bean and sweet potato patty, topped with avocado, lettuce, tomato, and vegan mayo on a whole grain bun. Served with sweet potato fries.',
    '$11.99',
  );
  menuList.addDish(dish6);

  const dish7 = new Dish(
    'Tofu Stir-Fry',
    'Main Courses',
    'Stir-fried tofu with bell peppers, broccoli, snap peas, and carrots in a savory ginger-garlic sauce, served over brown rice.',
    '$13.49',
  );
  menuList.addDish(dish7);

  const dish8 = new Dish(
    'Garlic Mashed Potatoes',
    'Sides',
    'Creamy mashed potatoes made with roasted garlic and vegan butter.',
    '$4.99',
  );
  menuList.addDish(dish8);

  const dish9 = new Dish(
    'Seasoned Sweet Potatoes Fried',
    'Sides',
    'Crispy sweet potato fries seasoned with paprika and sea salt.',
    '$4.99',
  );
  menuList.addDish(dish9);

  const dish10 = new Dish(
    'Chocolate Avocado Mousse',
    'Desserts',
    'Rich and creamy chocolate mousse made with ripe avocados, topped with fresh berries.',
    '$6.99',
  );
  menuList.addDish(dish10);

  const dish11 = new Dish(
    'Coconut Lime Cheesecake',
    'Desserts',
    'Vegan cheesecake with a coconut crust and a tangy lime filling, garnished with coconut flakes.',
    '$7.99',
  );
  menuList.addDish(dish11);

  const dish12 = new Dish(
    'Freshly Squeezed Lemonade',
    'Beverages',
    'Classic lemonade made with fresh lemons and a hint of mint.',
    '$3.49',
  );
  menuList.addDish(dish12);

  const dish13 = new Dish(
    'Green Smoothie',
    'Beverages',
    'A blend of spinach, kale, banana, apple, and almond milk for a nutritious boost.',
    '$5.99',
  );
  menuList.addDish(dish13);

  const dish14 = new Dish(
    'Mango Coconut Pudding',
    'Desserts',
    'Creamy mango pudding with a hint of coconut, topped with fresh mint and shredded coconut.',
    '$6.99',
  );
  menuList.addDish(dish14);
}

const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
  console.log(menuList.getMenuSize());
  if (menuList.getMenuSize() === 0) {
    createMenu();
  }

  const content = document.querySelector('.content');
  content.innerHTML = '';
  content.style.gridTemplateColumns = '1fr';
  content.style.marginLeft = '20vw';

  const menuItems = document.createElement('div');
  menuItems.classList = 'menuItems';
  content.appendChild(menuItems);

  menuList.displayMenu(menuItems);

  changeCredits('menu');
});
