const recipeString = "12 oz. tonnarelli\nspaghetti\nmezze maniche or rigatoni\n4 oz. guanciale or rindless bacon\n¼ cup grated Pecorino Romano (or Parmigiano Reggiano)\n4 fresh large egg yolks\nsalt\nblack pepper\n2 cloves garlic, minced\nsalty dogs\ncrafty cats\n";

const ingredientsArray = recipeString.split('\n').filter(line => line.trim() !== '');

// Now ingredientsArray contains an array of ingredients
console.log(ingredientsArray);


export default ingredientsArray;


// const recipeString = "1 lb ground beef\n1 large onion, finely chopped\n2 cloves garlic, minced\n1 can (14 oz) crushed tomatoes\n1/2 cup red wine\n1 teaspoon dried oregano\nSalt and pepper to taste\n1 lb ziti or penne pasta\n2 tablespoons olive oil\n2 large eggs, beaten\n1/2 cup grated Parmesan cheese\n\nFor the Bechamel Sauce:\n1/2 cup unsalted butter\n1/2 cup all-purpose flour\n4 cups milk\nSalt and nutmeg to taste\n2 large eggs, beaten\n1 cup grated Kefalotyri or Parmesan cheese\n1 tbsp olive oil\n rashers smoked streaky bacon finely chopped\n medium onions finely chopped\n carrots, trimmed and finely chopped\n2 celery sticks finely\n1 tbsp olive oil\n4 rashers smoked streaky bacon finely chopped\n2 medium onions finely chopped\n2 carrots, trimmed and finely chopped\n2 celery sticks finely chopped\n2 garlic cloves finely chopped\n2-3 sprigs rosemary leaves picked and finely chopped 500g beef mince\n2 x 400g tins plum tomatoes\nsmall pack basil leaves picked ¾ finely chopped and the rest left whole for garnish\n1 tsp dried oregano\n2 fresh bay leaves\n2 tbsp tomato purée\n1 beef stock cube\n1 red chilli deseeded and finely chopped (optional)\n125ml red wine\n6 cherry tomatoes sliced in half\nCreamy Red Pepper Pasta with Burrata & Herbs', '50 mins', 'intermediate', 4.7, E'¼ cup olive oil\n2 shallots thinly sliced\n2 lbs (about 5 ea) red bell peppers stemmed + thinly sliced\n2 sprigs fresh thyme\n2 sprigs fresh oregano\n1 sprig fresh rosemary\nkosher salt\nfreshly cracked black pepper\n4 cloves garlic minced\n¼ cup balsamic vinegar\n1 ½ cups vegetable stock\n1 lb linguine\n¼ cup heavy cream\n¼ cup grated parmesan cheese plus more for garnish\n½ cup packed parsley leaves finely chopped\n1 (8 oz) ball burrata cheese\nSpaghetti alla Nerano (Spaghetti with Zucchini)', '45 mins', 'intermediate', 4.9, E'½ quart sunflower oil (or vegetable oil (2 cups))\n6 medium zucchini (thinly sliced (about 2 1/2 pounds))\n1 cup chopped fresh basil\nKosher salt (to taste)\n2 Tablespoons Extra Virgin Olive Oil (plus more for drizzling)\n1 pound spaghetti\n2 cups grated parmesan cheese\n1 packet conchiglioni\nfresh petits pois / garden peas\n1 ricotta\npecorino\n1 lemon\nolive oil\nsalt and pepper\nradish pesto (optional\n1 kg small clams scrubbed clean½ a bunch fresh flat-leaf parsley (15g)\n4 cloves garlic\n10 cherry tomatoes\n250 ml white wine\n400 g dried\nspaghetti\nextra virgin olive oil\n1-2 dried red chillies)\n";