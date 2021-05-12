const Recipe = ({ recipe }) => {
  const { name } = recipe;

  return <div>{name}</div>;
};

export { Recipe as default };
