// Shuffle
function shuffleArray(arr) {
    for (var i = 0; i < arr.length - 1; i++) { // loop through every number in the array
        var j = Math.floor(Math.random() * (i + 1)) // get random number within the array length, round the number down to the nearest integer
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr // need to return the array after the for loop
}

let shuffle_arr = [1,2,3,4,5,6]
// console.log(shuffleArray(shuffle_arr))

// Skyline Heights
function skylineHeights(arr) {
    var max = 0
    var new_arr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max ) {
            new_arr.push(arr[i])
            max = arr[i]
        }
    }
    return new_arr
}
let skyline_arr = [0,1,2,1,15,18,13]
// console.log(skylineHeights(skyline_arr))

// Zip It
function zipIt(arr1,arr2) {
    if (arr1.length > arr2.length) {
        var longer_arr = arr1
    } else {
        var longer_arr = arr2
    }
    var new_arr = []
    for (var i = 0; i < longer_arr.length; i++) {
        if (i <= arr1.length - 1) {
            new_arr.push(arr1[i])
        }
        if (i <= arr2.length - 1) {
            new_arr.push(arr2[i])
        }
    }
    return new_arr
}
let zip_arr1 = [4,15,100]
let zip_arr2 = [10,20,30,40]
// console.log(zipIt(zip_arr1,zip_arr2))

// Credit Card Validation (Bonus)
function isCreditCardValid(digitArr) {
    console.log(digitArr)
    var tempArr = digitArr.slice(0,-1)
    var sum = 0
    console.log(tempArr)
    for (var i = tempArr.length - 1; i >= 0; i -= 2) {
        tempArr[i] *= 2
        if (tempArr[i] > 9) {
            tempArr[i] -= 9
        }
    }
    console.log(tempArr)
    for (var j = 0; j < tempArr.length; j++) {
        sum += tempArr[j]
    }
    sum += digitArr[digitArr.length - 1]
    console.log(sum)
    if (sum % 10 == 0) {
        return true
    } else {
        return false
    }
}
let digitArr = [5,2,2,8,2]
console.log(isCreditCardValid(digitArr))