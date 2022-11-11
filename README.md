# Algorithm-Practice

This repo contains all of my algorithmn practices files. (Constant Update)

## Array
Array To Do:
* **Shuffle** - Create the function shuffle(arr), to efficiently shuffle a given array's values. Test: shuffle_arr = [1,2,3,4,5,6]
* **Skyline Height** - Given an array with heights of consecutive buildings, starting with the closest and extend away. Test: [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. 
* **Zip It** - Create a standalone function that accepts two arrays and combines their values sequentially into a new array. Extra values from either array should be included afterward. Given [4,15,100] and [10,20,30,40], return new array containing [4,10,15,20,30,40,100].
* **Creadit Card Validation** - Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula. Test: initial array [5,2,2,8,2], step1: set aside the last digit [5,2,2,8]; step2: starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2, [5,4,2,16]; step3: If any results are larger than 9, subtract 9 from them; step4: Add all numbers (not just our odds) together, 18; step5: value is 20, return true. If the final digit were any non-multiple-of-10, return false.
