import { useState } from "react";

const NewRecipe = ({ fetchRecipes, contract, account }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    console.log("adding new recipe");

    console.log(contract);

    try {
      await contract.methods
        .addRecipe(name, description)
        .send({ from: account });

      fetchRecipes();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <div>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <label>Description</label>
      <div>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button type="submit">add recipe</button>
    </form>
  );
};

export { NewRecipe as default };
