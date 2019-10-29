function wakeDog(dogName="Xerox", dogBreed="Border Collie") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }

function leashDog(dogName="Xerox", dogBreed="Border Collie") {
    console.log(`leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
} 

function walkToPark(dogName="Xerox", dogBreed="Border Collie") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName="Xerox", dogBreed="Border Collie") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName="Xerox", dogBreed="Border Collie") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName="Xerox", dogBreed="Border Collie") {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
}

