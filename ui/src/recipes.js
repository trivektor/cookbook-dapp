import Recipe from "./recipe";

const Recipes = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export { Recipes as default };
