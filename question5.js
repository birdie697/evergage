// It is important to us that all members of the team are able to
// utilize javascript in many ways! Whether it is a snippet running on a
// client's site or the page mappings we run on all clients pages.
// Javascript is the driving force to what Evergage does on a daily
// basis. We mostly rely on vanilla javascript and jQuery to ensure that
// the code we run is valid on all browsers. A great way to show us some
// of your javascript skills would be to help us with something now.
//
//
// In the text block above, write a function to determine how often all characters occur in order
// from least to most often. P.S. Extra points for excluding any non letter characters. This response
// does not need to be JavaScript.

let occurrences = (input) => {
  occurenceCount = {};

  input = input.toLowerCase();

  for (i=0; i<input.length; i++) {
    if (input[i] >= "a" && input[i] <= "z") {
      if (occurenceCount.hasOwnProperty(input[i])) {
        occurenceCount[input[i]] += 1;
      } else {
        occurenceCount[input[i]]=1;
      }
    }
  }

  let sortOccurences = [];
  for (var letter in occurenceCount) {
    sortOccurences.push([letter, occurenceCount[letter]]);
  }

  sortOccurences.sort(function(a,b) {
    return a[1] - b[1]
  });

// console.log(sortOccurences);
return sortOccurences;

}

let input = "It is important to us that all members of the team are able to utilize javascript in many ways! Whether it is a snippet running on a client's site or the page mappings we run on all clients pages.  Javascript is the driving force to what Evergage does on a daily basis. We mostly rely on vanilla javascript and jQuery to ensure that the code we run is valid on all browsers. A great way to show us some of your javascript skills would be to help us with something now.";

console.log(occurrences(input));
