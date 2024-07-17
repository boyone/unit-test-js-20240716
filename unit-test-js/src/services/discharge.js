const discharge = () => {
  const now = new Date();
  return now.getHours() >= 9 && now.getHours() < 22;
};

export default discharge;
