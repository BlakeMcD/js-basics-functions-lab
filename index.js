// Code your solution in this file!
/*
let blockLength = 264;
let hQ = 42;

function distanceFromHqinBlocks(location) {
    if (location <= 42) {
        return hQ - location;
    }
    else {
        return "error";
    }
}

function distanceFromHqInFeet() {
    return distanceFromHqinBlocks * blockLength;
    }
}

function distanceTravelledInFeet(blockA, blockB){
    return (blockB - blockA) * blockLength;
} */

/*
const hq = 42;
const blockLength = 264;
const price = 0.02;
const freeDist = 400;


function distanceFromHqInBlocks(location) {
    /*if (n >= hq) {
        return n - hq;
    }
    else {
        return hq - n;
    } 
    return Math.abs(hq - location)
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * blockLength;
}

function distanceTravelledInFeet(origin, destination) {
    return Math.abs(destination - origin) * blockLength;
}

function calculatesFarePrice(origin, destination) {
    let dist = Math.abs(destination - origin);
    if (dist <= freeDist) {
        return 0;
    }
    else if (dist > 400 && dist < 2000) {
        return (dist - freeDist) * price;
    }
    else if (dist >= 2000 && dist <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

} 

*/

function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
      return blockNumber - 42;
    } else {
      return 42 - blockNumber;
    }
  }
  
  function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
  
  function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }
  
  function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }