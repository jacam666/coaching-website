// data/meals.ts
export type Meal = {
  id: number;
  slug: string;
  title: string;
  image: { src: string; alt: string; credit?: string; creditUrl?: string };
  kcal: number;
  protein: number; // g
  carbs: number;   // g
  fat: number;     // g
  ingredients: string[];
  tags: string[];
};

export const meals: Meal[] = [
  {
    id: 1,
    slug: "healthy-tikka-masala",
    title: " Tikka Masala",
    image: { src: "/images/meal-images/meal-1.webp", alt: "Chicken tikka masala with spinach and almonds" },
    kcal: 365, protein: 38, carbs: 13, fat: 17,
    ingredients: ["4 small skinless chicken", "1 large onion", "4 large garlic cloves", "Ginger", "400g Chopped tomatoes", "2 tbsp Tikka spice", "200g Spinach", "3 tbsp fat-free natural Yogurt", "40g Ground almonds"],
    tags: ["chicken", "indian", "low-calorie", "gluten-free"]
  },
  {
    id: 2,
    slug: "healthy-salmon-pasta",
    title: " Salmon Pasta",
    image: { src: "/images/meal-images/meal-2.webp", alt: "Salmon pasta with pine nuts and basil" },
    kcal: 543, protein: 31, carbs: 69, fat: 18,
    ingredients: ["Penne", "Salmon", "Olive oil", "Pine nuts", "Red pepper", "Mushrooms", "Basil"],
    tags: ["salmon", "pasta", "balanced"]
  },
  {
    id: 3,
    slug: "healthy-chicken-pad-thai",
    title: " Chicken Pad Thai",
    image: { src: "/images/meal-images/meal-3.webp", alt: "Chicken pad thai in a wok" },
    kcal: 561, protein: 33, carbs: 55, fat: 21,
    ingredients: ["Brown rice noodles", "Chicken thigh", "Onion", "Red pepper", "Carrot ribbons", "Beansprouts", "Peanuts", "Lime", "Low-salt soy"],
    tags: ["chicken", "thai", "high-fibre"]
  },
  {
    id: 4,
    slug: "healthy-bolognese",
    title: " Bolognese",
    image: { src: "/images/meal-images/meal-4.webp", alt: "Healthy bolognese on a plate" },
    kcal: 387, protein: 30, carbs: 39, fat: 10,
    ingredients: ["Wholewheat linguine", "Lean pork mince", "Fennel", "Garlic", "Cherry tomatoes", "Balsamic vinegar", "Basil"],
    tags: ["pasta", "low-fat", "pork"]
  },
  {
    id: 5,
    slug: "healthy-carrot-soup",
    title: " Carrot Soup",
    image: { src: "/images/meal-images/meal-5.webp", alt: "Carrot & ginger soup" },
    kcal: 223, protein: 5, carbs: 30, fat: 7,
    ingredients: ["Carrots", "Ginger", "Turmeric", "Cayenne", "Vegetable stock", "Soured cream"],
    tags: ["soup", "vegetarian", "low-calorie"]
  },
  {
    id: 6,
    slug: "healthy-beef-chow-mein",
    title: " Beef Chow Mein",
    image: { src: "/images/meal-images/meal-6.webp", alt: "Beef chow mein in bowls" },
    kcal: 407, protein: 32, carbs: 41, fat: 11,
    ingredients: ["Egg noodles", "Lean beef strips", "Red onion", "Ginger", "Mushrooms", "Beansprouts", "Tamari", "Rice vinegar", "Spring onions"],
    tags: ["beef", "stir-fry", "low-fat"]
  },
  {
    id: 7,
    slug: "superhealthy-salmon-burgers",
    title: " Salmon Burgers",
    image: { src: "/images/meal-images/meal-7.webp", alt: "Salmon burgers with ribbon salad" },
    kcal: 292, protein: 29, carbs: 7, fat: 17,
    ingredients: ["Salmon fillets", "Thai red curry paste", "Ginger", "Soy sauce", "Coriander", "Carrot", "Cucumber", "White wine vinegar"],
    tags: ["salmon", "high-protein", "low-carb", "freezable"]
  },
  {
    id: 8,
    slug: "healthy-fish-and-chips-tartare",
    title: " Fish & Chips",
    image: { src: "/images/meal-images/meal-8.webp", alt: "Baked fish and oven chips with tartare" },
    kcal: 373, protein: 35, carbs: 41, fat: 9,
    ingredients: ["White fish fillets", "Potatoes", "Plain yogurt", "Capers", "Parsley", "Lemon"],
    tags: ["fish", "british", "lighter-takeaway"]
  },
  {
    id: 9,
    slug: "healthy-chicken-burritos",
    title: " Chicken Burritos",
    image: { src: "/images/meal-images/meal-9.webp", alt: "Chicken burritos sliced open" },
    kcal: 529, protein: 36, carbs: 46, fat: 20,
    ingredients: ["Cooked chicken", "Black beans", "Sweetcorn", "Brown rice", "Red pepper", "Avocado", "Tomato purée", "Wholemeal wraps"],
    tags: ["chicken", "mexican", "meal-prep"]
  },
  {
    id: 10,
    slug: "healthy-chicken-katsu-curry",
    title: " Chicken Katsu Curry",
    image: { src: "/images/meal-images/meal-10.webp", alt: "Baked chicken katsu curry with rice" },
    kcal: 585, protein: 47, carbs: 58, fat: 16,
    ingredients: ["Chicken breasts", "Flaked almonds", "Onion", "Garlic", "Ginger", "Curry powder", "Turmeric", "Wholemeal flour", "Brown rice"],
    tags: ["chicken", "japanese", "baked"]
  },
  {
    id: 11,
    slug: "superhealthy-singapore-noodles",
    title: " Singapore Noodles",
    image: { src: "/images/meal-images/meal-11.webp", alt: "Singapore noodles with chicken and prawns" },
    kcal: 362, protein: 40, carbs: 33, fat: 9,
    ingredients: ["Egg noodles", "Chicken breast", "Prawns", "Tenderstem broccoli", "Red pepper", "Baby corn", "Madras paste", "Soy", "Beansprouts"],
    tags: ["stir-fry", "chicken", "prawn", "low-calorie"]
  },
  {
    id: 12,
    slug: "healthy-beef-stew",
    title: " Beef Stew (Italian-style)",
    image: { src: "/images/meal-images/meal-12.webp", alt: "Italian-style beef stew" },
    kcal: 225, protein: 25, carbs: 7, fat: 11,
    ingredients: ["Beef stir-fry strips", "Onion", "Garlic", "Yellow pepper", "Chopped tomatoes", "Rosemary", "Olives", "Olive oil"],
    tags: ["beef", "one-pot", "low-calorie"]
  },
  {
    id: 13,
    slug: "healthy-chicken-salad",
    title: " Chicken Salad",
    image: { src: "/images/meal-images/meal-13.webp", alt: "Asian chicken salad" },
    kcal: 109, protein: 19, carbs: 6, fat: 1,
    ingredients: ["Chicken breast", "Fish sauce", "Lime", "Caster sugar", "Mixed leaves", "Coriander", "Red onion", "Chilli", "Cucumber"],
    tags: ["salad", "chicken", "very-low-calorie", "gluten-free"]
  },
  {
    id: 14,
    slug: "superhealthy-salmon-salad",
    title: " Salmon Salad",
    image: { src: "/images/meal-images/meal-14.webp", alt: "Salmon salad with couscous and greens" },
    kcal: 320, protein: 30, carbs: 30, fat: 10,
    ingredients: ["Couscous", "Salmon fillets", "Sprouting broccoli", "Lemon", "Pomegranate seeds", "Pumpkin seeds", "Watercress"],
    tags: ["salmon", "salad", "omega-3"]
  },
  {
    id: 15,
    slug: "ultimate-makeover-prawn-cocktail",
    title: "Prawn Cocktail",
    image: { src: "/images/meal-images/meal-15.webp", alt: "Prawn cocktail in a glass" },
    kcal: 186, protein: 14, carbs: 4, fat: 13,
    ingredients: ["Prawns", "Cucumber", "Dill", "Avocado", "Watercress", "Mayonnaise", "Fromage frais", "Ketchup", "Tabasco", "Worcestershire", "Lime"],
    tags: ["seafood", "starter", "retro"]
  }
];
