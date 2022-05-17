function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  })
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if(a % 2 === 1 && b % 2 === 0){ // if we have an odd & an even, do line 9
      return -1; // moves a to the right
    }
    if (a % 2 === 0 && b % 2 === 1){
      return 1; // moves/keeps a to the left
    }
    return a - b;
  })

}

function validAnagrams(s, t) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const sorteda = s.split("").sort((a,b) => {
    const aindex= alphabet.indexOf(a)
    const bindex = alphabet.indexOf(b)
    return aindex - bindex
  }).join("")
  const sortedb = t.split("").sort((a,b) => a.localeCompare(b)).join("")



  return sorteda === sortedb
}



function reverseBaseSort(arr) {
  let array = arr.sort((a,b) => a-b);
  let buckets = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let length = element.toString().length;

    try {
      buckets[length].push(element) // works if bucket exists
    }
    catch {
      buckets[length] = [element]
    }
  }
  return Object.values(buckets).reverse().flat() // Object.values creates array of arrays, reverse is reversing the arrays, .flat creates a new array w all subarray ele concat'd into it
}

function frequencySort(arr) {
  // [-1, 1, -6, 4, 5, -6, 1, 4, 1]
  console.log(arr)
  // arr = arr.sort((a, b) => {
  //   return a - b;
  // });

  console.log(arr)


  let counts = {}
  arr.forEach( num => {
    if(!counts[num]) counts[num] = 1
    else counts[num] += 1
  })
  console.log("counts: ", counts)
  // { '1': 3, '4': 2, '5': 1, '-6': 2, '-1': 1 }

  let newCounts = {}
  for (let i = 0; i < Object.keys(counts).length; i++) {
    const key = Object.keys(counts)[i]; // 1
    const val = counts[key] // 3

    if(!newCounts[val]) newCounts[val] = [Number(key)] // { '1': [ '5'] }
    else newCounts[val].push(Number(key)) // { '1': [ '5', '-1' ] }
  }
  // { '1': [ '5', '-1' ], '2': [ '4', '-6' ], '3': [ '1' ] }
  console.log("newCounts: ", newCounts)

  let sorted = []
  for (let freq of Object.keys(newCounts)) {
    console.log(`we're looking at a frequency of ${freq}`)
    newCounts[freq] = newCounts[freq].sort((a,b) => b - a)

    for ( let num of newCounts[freq] ){
      console.log(`${num} shows up ${freq} times`)
      for (let i = 0; i < freq; i++) sorted.push(Number(num))
    }
  }

  // [5, -1, 4, 4, -6, -6, 1, 1, 1]
  console.log(sorted)
  console.log("              ")
  return sorted

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
