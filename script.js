document.getElementById("toggle-menu-btn").addEventListener("click", function () {
    document.getElementById("toggleMenu").style.left = "0";
    document.getElementById("cover").style.display = "block";
  });

document.getElementById("closetoggle").addEventListener("click", function () {
  document.getElementById("toggleMenu").style.left = "-269px";
  document.getElementById("cover").style.display = "none";
});

document.getElementById("cover").addEventListener("click", function () {
  var toggleMenu = document.getElementById("toggleMenu");
  if (toggleMenu.style.left === "0px") {
    toggleMenu.style.left = "-269px";
    document.getElementById("cover").style.display = "none";
  } else {
    toggleMenu.style.left = "0px";
    document.getElementById("cover").style.display = "block";
  }
});

document.getElementById("sort").addEventListener("click", function () {
  if (document.getElementById("sortMenu").style.display === "block") {
    document.getElementById("sortMenu").style.display = "none";
    document.getElementById("sortBtn").style.border = "none";
    document.getElementById("sortBtn").style.color = "#000";
    document.getElementById("sort").style.color = "#000";
  } else {
    document.getElementById("sortMenu").style.display = "block";
    document.getElementById("sortBtn").style.border = "#0e78e3 1px solid";
    document.getElementById("sortBtn").style.color = "#0e78e3";
    document.getElementById("sort").style.color = "#0e78e3";
  }
});

document.getElementById("recommended").addEventListener("click", function () {
  document.getElementById("sortMenu").style.display = "none";
  document.getElementById("sortBtn").style.border = "none";
  document.getElementById("sortBtn").style.color = "#000";
  document.getElementById("sort").style.color = "#000";
  document.getElementById("sort").innerHTML = "Recommended &#9662;";
});

document.getElementById("curated").addEventListener("click", function () {
  document.getElementById("sortMenu").style.display = "none";
  document.getElementById("sortBtn").style.border = "none";
  document.getElementById("sortBtn").style.color = "#000";
  document.getElementById("sort").style.color = "#000";
  document.getElementById("sort").innerHTML = "Curated &#9662;";
});

document.getElementById("mostappreciated").addEventListener("click", function () {
    document.getElementById("sortMenu").style.display = "none";
    document.getElementById("sortBtn").style.border = "none";
    document.getElementById("sortBtn").style.color = "#000";
    document.getElementById("sort").style.color = "#000";
    document.getElementById("sort").innerHTML = "Most Appreciated &#9662;";
  });

document.getElementById("mostviewed").addEventListener("click", function () {
  document.getElementById("sortMenu").style.display = "none";
  document.getElementById("sortBtn").style.border = "none";
  document.getElementById("sortBtn").style.color = "#000";
  document.getElementById("sort").style.color = "#000";
  document.getElementById("sort").innerHTML = "Most Viewed &#9662;";
});

document.getElementById("mostdiscussed").addEventListener("click", function () {
  document.getElementById("sortMenu").style.display = "none";
  document.getElementById("sortBtn").style.border = "none";
  document.getElementById("sortBtn").style.color = "#000";
  document.getElementById("sort").style.color = "#000";
  document.getElementById("sort").innerHTML = "Most Discussed &#9662;";
});

document.getElementById("mostrecent").addEventListener("click", function () {
  document.getElementById("sortMenu").style.display = "none";
  document.getElementById("sortBtn").style.border = "none";
  document.getElementById("sortBtn").style.color = "#000";
  document.getElementById("sort").style.color = "#000";
  document.getElementById("sort").innerHTML = "Most Recent &#9662;";
});

const words = {
  A: [
    "apple",
    "ant",
    "airplane",
    "alligator",
    "artist",
    "adventure",
    "astronaut",
    "arrow",
    "ape",
    "anchor",
  ],
  B: [
    "banana",
    "bird",
    "basket",
    "butterfly",
    "book",
    "bear",
    "boat",
    "bicycle",
    "beach",
    "ball",
  ],
  C: [
    "cat",
    "cake",
    "carrot",
    "candle",
    "cloud",
    "camera",
    "coin",
    "cupcake",
    "castle",
    "cookie",
  ],
  D: [
    "dog",
    "duck",
    "dragon",
    "doll",
    "dolphin",
    "diamond",
    "door",
    "donut",
    "desk",
    "dinosaur",
  ],
  E: [
    "elephant",
    "egg",
    "eagle",
    "earth",
    "eye",
    "envelope",
    "ear",
    "eraser",
    "engine",
    "elbow",
  ],
  F: [
    "fish",
    "flower",
    "frog",
    "fire",
    "fan",
    "fox",
    "flag",
    "fruit",
    "feather",
    "fence",
  ],
  G: [
    "goat",
    "guitar",
    "globe",
    "glass",
    "gift",
    "grape",
    "ghost",
    "game",
    "ginger",
    "giraffe",
  ],
  H: [
    "heart",
    "house",
    "hat",
    "hamster",
    "honey",
    "horse",
    "helicopter",
    "hamburger",
    "horn",
    "harp",
  ],
  I: [
    "ice cream",
    "island",
    "ink",
    "igloo",
    "ivy",
    "iron",
    "insect",
    "iguanodon",
    "internet",
    "ice",
  ],
  J: [
    "jellyfish",
    "jaguar",
    "juice",
    "jacket",
    "jet",
    "jar",
    "jigsaw",
    "jester",
    "juggler",
    "jewel",
  ],
  K: [
    "kite",
    "key",
    "kangaroo",
    "king",
    "koala",
    "kitchen",
    "knight",
    "kettle",
    "keyboard",
    "kiwi",
  ],
  L: [
    "lion",
    "laptop",
    "lamp",
    "leaf",
    "lemon",
    "lock",
    "ladder",
    "lighthouse",
    "lizard",
    "lollipop",
  ],
  M: [
    "monkey",
    "moon",
    "map",
    "magnet",
    "mouse",
    "mountain",
    "muffin",
    "melon",
    "motorcycle",
    "mushroom",
  ],
  N: [
    "nest",
    "nose",
    "necklace",
    "notebook",
    "net",
    "nut",
    "nail",
    "newspaper",
    "ninja",
    "needle",
  ],
  O: [
    "orange",
    "owl",
    "octopus",
    "ocean",
    "oil",
    "orchid",
    "otter",
    "opera",
    "ornament",
    "onion",
  ],
  P: [
    "penguin",
    "piano",
    "pineapple",
    "parrot",
    "pencil",
    "pizza",
    "pear",
    "peacock",
    "peanut",
    "pancake",
  ],
  Q: [
    "queen",
    "quilt",
    "quill",
    "quail",
    "question",
    "quartz",
    "quiet",
    "quack",
    "quick",
    "quality",
  ],
  R: [
    "rabbit",
    "rainbow",
    "rose",
    "robot",
    "rocket",
    "ring",
    "radio",
    "road",
    "raccoon",
    "ribbon",
  ],
  S: [
    "star",
    "sun",
    "snake",
    "ship",
    "sailboat",
    "strawberry",
    "snowman",
    "shark",
    "spider",
    "snail",
  ],
  T: [
    "tree",
    "tiger",
    "turtle",
    "train",
    "television",
    "taco",
    "telephone",
    "tooth",
    "toucan",
    "toast",
  ],
  U: [
    "umbrella",
    "unicorn",
    "up",
    "ukulele",
    "uniform",
    "under",
    "utensils",
    "upside down",
    "unicycle",
    "usher",
  ],
  V: [
    "van",
    "violin",
    "volcano",
    "vase",
    "vegetables",
    "vampire",
    "victory",
    "village",
    "vine",
    "vest",
  ],
  W: [
    "whale",
    "watermelon",
    "wolf",
    "wagon",
    "wings",
    "window",
    "walrus",
    "web",
    "wheel",
    "wreath",
  ],
  X: [
    "xylophone",
    "x-ray",
    "xenon",
    "xerxes",
    "xylitol",
    "xenopus",
    "xenomorph",
    "xylem",
    "xanthan",
    "xerophyte",
  ],
  Y: [
    "yarn",
    "yacht",
    "yak",
    "yam",
    "yoga",
    "yogurt",
    "yellow",
    "yeti",
    "yawn",
    "yard",
  ],
  Z: [
    "zebra",
    "zoo",
    "zipper",
    "zeppelin",
    "zealot",
    "zigzag",
    "zombie",
    "zesty",
    "zephyr",
    "zookeepers",
  ],
};

const inputField = document.getElementById("search");
const suggestionsWrapper = document.getElementById("suggestions-wrapper");
const suggestionsDiv = document.getElementById("suggestions");

inputField.addEventListener("input", function () {
  const inputText = inputField.value.toUpperCase();
  if (inputText.length === 0) {
    suggestionsWrapper.style.display = "none";
    suggestionsDiv.innerHTML = "";
    return;
  }

  const suggestions = words[inputText[0]] || [];
  const matchedWords = suggestions.filter((word) =>
    word.toUpperCase().startsWith(inputText)
  );
  const wordsHTML = matchedWords
    .map((word) => `<span class="suggestion">${word}</span>`)
    .join("<br><br>");

  if (matchedWords.length === 0) {
    suggestionsWrapper.style.display = "block";
    suggestionsDiv.innerHTML =
      '<span class="no-match">No relevant topics</span>';
  } else {
    suggestionsWrapper.style.display = "block";
    suggestionsDiv.innerHTML = wordsHTML;
  }

  const suggestionSpans = document.querySelectorAll(".suggestion");
  suggestionSpans.forEach((suggestion) => {
    suggestion.addEventListener("click", function () {
      inputField.value = suggestion.textContent;
      suggestionsWrapper.style.display = "none";
      suggestionsDiv.innerHTML = "";
    });
  });
});