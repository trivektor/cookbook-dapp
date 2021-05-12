import { Fragment, useEffect, useState } from "react";

import Recipes from "./recipes";
import NewRecipe from "./new-recipe";

const Cookbook = ({ contract, account }) => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    setRecipes(await contract.methods.getRecipes().call());
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Fragment>
      <NewRecipe
        fetchRecipes={fetchRecipes}
        contract={contract}
        account={account}
      />
      <Recipes recipes={recipes} />
    </Fragment>
  );
};

export { Cookbook as default };
