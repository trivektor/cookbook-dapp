pragma solidity ^0.5.0;

contract Cookbook {
    struct Recipe {
        uint256 id;
        string name;
        string description;
    }

    Recipe[] public recipes;

    function addRecipe(string memory _name, string memory _description) public {
        Recipe memory newRecipe =
            Recipe({
                id: recipes.length + 1,
                name: _name,
                description: _description
            });

        recipes.push(newRecipe);
    }
}
