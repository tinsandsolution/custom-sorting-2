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
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
