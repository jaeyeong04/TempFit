const clothesByTempGenderStyle = {
  "over 28": {
    casual: {
      male: {
        outer: [],
        top: ["maleTanktop", "Tshirt"],
        bottom: ["shorts", "shortSweat", "linen"],
        shoes: ["maleSandals"],
        underwear: [],
      },
      female: {
        outer: [],
        top: ["femaleTanktop", "Tshirt"],
        bottom: ["shorts", "shortSweat", "linen"],
        shoes: ["femaleSandals", "femaleLowheel"],
        underwear: [],
      },
    },
    formal: {
      male: {
        outer: [],
        top: ["shortSweater"],
        bottom: ["slacks"],
        shoes: ["maleLoafers"],
        underwear: [],
      },
      female: {
        outer: ["femaleBlazer"],
        top: ["femaleTanktop"],
        bottom: ["slacks", "longSkirt"],
        shoes: ["femaleLowheel"],
        underwear: [],
      },
    },
  },
  "23~27": {
    casual: {
      male: {
        outer: [],
        top: ["Tshirt"],
        bottom: ["shorts", "shortSweat", "linen"],
        shoes: ["maleSandals", "sneakers"],
        underwear: [],
      },
      female: {
        outer: [],
        top: ["Tshirt"],
        bottom: ["shorts", "shortSweat", "linen"],
        shoes: ["femaleSandals", "femaleLowheel", "sneakers"],
        underwear: [],
      },
    },
    formal: {
      male: {
        outer: [],
        top: ["longShirt", "shortSweater"],
        bottom: ["slacks"],
        shoes: ["maleLoafers"],
        underwear: [],
      },
      female: {
        outer: ["femaleBlazer"],
        top: ["femaleTanktop"],
        bottom: ["slacks", "longSkirt"],
        shoes: ["femaleLowheel"],
        underwear: [],
      },
    },
  },
  "20~22": {
    casual: {
      male: {
        outer: ["cardigan", "outerShirt", "windbreaker"],
        top: ["Tshirt", "longTshirt"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: [],
      },
      female: {
        outer: ["cardigan", "outerShirt", "windbreaker"],
        top: ["Tshirt", "longTshirt"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: [],
      },
    },
    formal: {
      male: {
        outer: ["maleBlazer"],
        top: ["longShirt", "Tshirt"],
        bottom: ["slacks"],
        shoes: ["maleLoafers"],
        underwear: [],
      },
      female: {
        outer: ["femaleBlazer"],
        top: ["longShirt", "Tshirt"],
        bottom: ["slacks"],
        shoes: ["femaleLowheel"],
        underwear: [],
      },
    },
  },
  "17~19": {
    casual: {
      male: {
        outer: ["cardigan", "outerShirt", "windbreaker"],
        top: ["Tshirt", "longTshirt", "sweater"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: [],
      },
      female: {
        outer: ["cardigan", "outerShirt", "windbreaker"],
        top: ["Tshirt", "longTshirt", "sweater"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: [],
      },
    },
    formal: {
      male: {
        outer: ["maleBlazer"],
        top: ["longShirt"],
        bottom: ["slacks"],
        shoes: ["maleLoafers"],
        underwear: [],
      },
      female: {
        outer: ["femaleBlazer"],
        top: ["longShirt"],
        bottom: ["slacks"],
        shoes: ["femaleLowheel"],
        underwear: [],
      },
    },
  },
  "12~16": {
    casual: {
      male: {
        outer: ["cardigan", "shortCoat"],
        top: ["shirts", "longTshirt", "turtleNeck", "hoodie"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: [],
      },
      female: {
        outer: ["cardigan", "shortCoat"],
        top: ["shirts", "longTshirt", "turtleNeck", "hoodie"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: [],
      },
    },
    formal: {
      male: {
        outer: ["maleBlazer"],
        top: ["turtleNeck", "longShirt"],
        bottom: ["slacks"],
        shoes: ["maleLoafers"],
        underwear: [],
      },
      female: {
        outer: ["femaleBlazer"],
        top: ["turtleNeck", "longShirt"],
        bottom: ["slacks"],
        shoes: ["femaleLoafers"],
        underwear: [],
      },
    },
  },
  "9~11": {
    casual: {
      male: {
        outer: ["shortCoat"],
        top: ["sweater", "turtleNeck", "hoodie"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: [],
      },
      female: {
        outer: ["shortCoat"],
        top: ["sweater", "turtleNeck", "hoodie"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: [],
      },
    },
    formal: {
      male: {
        outer: ["longCoat", "shortCoat", "blazer"],
        top: ["longShirt"],
        bottom: ["slacks"],
        shoes: ["maleLoafers"],
        underwear: ["inner"],
      },
      female: {
        outer: ["longCoat", "shortCoat", "blazer"],
        top: ["longShirt"],
        bottom: ["slacks"],
        shoes: ["femaleLoafers"],
        underwear: ["inner"],
      },
    },
  },
  "5~8": {
    casual: {
      male: {
        outer: ["mustang", "longCoat", "shortCoat"],
        top: ["shirts", "longTshirt", "turtleNeck", "hoodie"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: ["inner"],
      },
      female: {
        outer: ["mustang", "longCoat", "shortCoat"],
        top: ["shirts", "longTshirt", "turtleNeck", "hoodie"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: ["inner"],
      },
    },
    formal: {
      male: {
        outer: ["longCoat", "shortCoat", "blazer"],
        top: ["longShirt"],
        bottom: ["slacks"],
        shoes: ["maleLoafers"],
        underwear: ["inner"],
      },
      female: {
        outer: ["longCoat", "shortCoat", "blazer"],
        top: ["longShirt"],
        bottom: ["slacks"],
        shoes: ["femaleLoafers"],
        underwear: ["inner"],
      },
    },
  },
  "below 4": {
    casual: {
      male: {
        outer: ["paddedCoat"],
        top: ["hoodie", "sweater", "turtleNeck"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: ["inner"],
      },
      female: {
        outer: ["paddedCoat"],
        top: ["hoodie", "sweater", "turtleNeck"],
        bottom: ["cargo", "jean", "longSweat"],
        shoes: ["sneakers"],
        underwear: ["inner"],
      },
    },
    formal: {
      male: {
        outer: ["longCoat"],
        top: ["longShirt", "sweater"],
        bottom: ["slacks"],
        shoes: ["maleLoafers"],
        underwear: ["inner"],
      },
      female: {
        outer: ["longCoat"],
        top: ["longShirt", "sweater"],
        bottom: ["slacks"],
        shoes: ["femaleLoafers"],
        underwear: ["inner"],
      },
    },
  },
};

function getClothingRecommendation({ style, gender, currentTemp }) {
  let tempRange;
  let numTemp = parseInt(currentTemp, 10);
  if (numTemp >= 28) {
    tempRange = "over 28";
  } else if (numTemp >= 23 && numTemp <= 27) {
    tempRange = "23~27";
  } else if (numTemp >= 20 && numTemp <= 22) {
    tempRange = "20~22";
  } else if (numTemp >= 17 && numTemp <= 19) {
    tempRange = "17~19";
  } else if (numTemp >= 12 && numTemp <= 16) {
    tempRange = "12~16";
  } else if (numTemp >= 9 && numTemp <= 11) {
    tempRange = "9~11";
  } else if (numTemp >= 5 && numTemp <= 8) {
    tempRange = "5~8";
  } else if (numTemp <= 4) {
    tempRange = "below 4";
  }
  return clothesByTempGenderStyle[tempRange]?.[style]?.[gender] ?? {};
}

export default getClothingRecommendation;
