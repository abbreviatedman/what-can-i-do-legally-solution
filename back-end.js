function whatCanIDoLegally(age) {
  if (age < 18) {
    return "You can't drive or drink.";
  }

  if (age < 21) {
    return "You can drive but you can't drink.";
  }

  return "You can drive or drink but please don't do both at the same time.";
}

module.exports = whatCanIDoLegally;
