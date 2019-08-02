// select random item from an array with Math.random()
//randitem = array[Math.floor(Math.random()*array.length)]


// iterating over candy flavors and printing "the x flavor is colored y"
//for (const [x, y] of candy2) {console.log(`The ${y} flavor is colored ${x}`)};

// function that takes a color and the candy map 
// returns flavor or if it's not in the map, will return  not exist msg
// function candyFlavor(color, candymap) {
//   if (candymap.has(color)) {
//     return (candymap.get(color));
//   } else {
//     return ('Sorry, that color doesnt have a flavor');
//   }
// }

// function that takes an array of colors 
// returns an array of corresponding flavors - if no color : add null to array
const candy2 = new Map([
  ['red', 'cherry'],
  ['yellow', 'lemon'],
  ['purple', 'grape'],
  ['green', 'lime']
  ]);

function getFlavor(inputcolors, map) {

  flavorarray = []
  for (const color of inputcolors) {
    //if color in (map.keys()) {}
    if (! map.has(color)) {
      flavorarray.push(null);
    }
    else { 
      //return (map.has(color));
      flavorarray.push(map.get(color));
    }
  }
  return flavorarray
}

const flavor = getFlavor(['red', 'yellow', 'pink'], candy2);
console.log(flavor)