import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  let years = data.asteroids.map(item => item.discoveryYear);
  let obj = {};
  for (let i = 0; i < years.length; i++) {
   if (obj[years[i]]) {
     obj[years[i]] += 1;
   } else {
     obj[years[i]] = 1;
   }
  }
  let max = Math.max(...Object.values(obj));
  let most = Object.entries(obj).find(([year, count]) => count === max);
  return Number(most[0]);
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
