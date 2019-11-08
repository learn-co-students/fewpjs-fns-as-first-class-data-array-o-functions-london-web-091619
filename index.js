const dog = (name, breed) => name + " the " + breed

function dogAction(name, breed, action) {
  return action + " " + dog(name, breed)
}

const wakeDog = (name, breed) => dogAction(name, breed, "Wake"),
      leashDog = (name, breed) => dogAction(name, breed, "Leash"),
      walkToPark = (name, breed) => dogAction(name, breed, "Walk to the park with"),
      unleashDog = (name, breed) => dogAction(name, breed, "Unleash"),
      throwFrisbee = (name, breed) => dogAction(name, breed, "Throw the frisbee for"),
      walkHome = (name, breed) => dogAction(name, breed, "Walk home with")

const routine = [wakeDog, leashDog, walkToPark, unleashDog, throwFrisbee, walkHome]

const exerciseDog = (name, breed) => routine.map(task => task(name, breed))
