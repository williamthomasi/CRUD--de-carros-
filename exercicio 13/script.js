const cars = [];

function createOne() {
  let id = Math.round(Math.random() * 100 - -1);
  let model = prompt("What is the model of the car?").toUpperCase();
  let brand = prompt("What is the brand of the car?").toUpperCase();
  let year = parseInt(prompt("What is the year of the car?"));
  let color = prompt("What is the color of the car?").toUpperCase();
  let price = parseFloat(prompt("What is the price of the car?"));
  let car = { id, model, brand, year, color, price };
  cars.push(car);
}

function readTwo() {
  alert(
    cars
      .map(
        (car) =>
          `ID: ${car.id}, Model: ${car.model}, Brand: ${car.brand}, Year: ${car.year}, Color: ${car.color}, Price: ${car.price}.`
      )
      .join("\n")
  );
}

function filterThree() {
  const brandToFilter = prompt("What brand are you looking for").toUpperCase();
  const filtred = cars.filter((car) => car.brand === brandToFilter);

  alert(
    filtred
      .map(
        (car) =>
          `Model: ${car.model}, Brand: ${car.brand}, Year: ${car.year}, Color: ${car.color}, Price: ${car.price}`
      )
      .join("\n")
  );
}

function updateFour() {
  let id = null;
  let indexToUpdate = null;

  do {
    id = parseInt(prompt("Which car do you want to update?"));
    indexToUpdate = cars.findIndex((car) => car.id === id);
    if (indexToUpdate === null || indexToUpdate === -1) {
      alert(`Vehicle not found, try again.`);
      alert(
        cars
          .map(
            (car) =>
              `ID: ${car.id}, Model: ${car.model}, Brand: ${car.brand}, Year: ${car.year}, Color: ${car.color}, Price: ${car.price}`
          )
          .join("\n")
      );
    }
  } while (indexToUpdate === null || indexToUpdate === -1);

  let model = prompt("What is the model of the car?").toUpperCase();
  let brand = prompt("What is the brand of the car?").toUpperCase();
  let year = parseInt(prompt("What is the year of the car?"));
  let color = prompt("What is the color of the car?").toUpperCase();
  let price = parseFloat(prompt("What is the price of the car?"));
  let car = { id, model, brand, year, color, price };

  cars.splice(indexToUpdate, 1, car);
}

function deleteFive() {
  let id = null;
  let indexToUpdate = null;

  do {
    id = parseInt(prompt("Which car do you want to delete?"));
    indexToUpdate = cars.findIndex((car) => car.id === id);
    if (indexToUpdate === null || indexToUpdate === -1) {
      alert(`Vehicle not found, try again.`);
      alert(
        cars
          .map(
            (car) =>
              `ID: ${car.id}, Model: ${car.model}, Brand: ${car.brand}, Year: ${car.year}, Color: ${car.color}, Price: ${car.price}`
          )
          .join("\n")
      );
    }
  } while (indexToUpdate === null || indexToUpdate === -1);

  cars.splice(indexToUpdate, 1);
}

function closeSix() {
  console.log(cars);
  alert(
    cars
      .map(
        (car) =>
          `ID: ${car.id}, Model: ${car.model}, Brand: ${car.brand}, Year: ${car.year}, Color: ${car.color}, Price: ${car.price}`
      )
      .join("\n")
  );
}

function command() {
  let option = null;

  do {
    alert(
      ` Welcome to the vehicle CRUD system:\n At the moment, the system has ${cars.length} registered cars.\n Choose one of the options to interact with the system.`
    );
    option = parseInt(prompt(`Options available: 1 - 2 - 3 - 4 - 5 - 6.`));
    switch (option) {
      case 1:
        createOne();
        break;
      case 2:
        readTwo();
        break;
      case 3:
        filterThree();
        break;
      case 4:
        updateFour();
        break;
      case 5:
        deleteFive();
        break;
      case 6:
        closeSix();
        break;
      default:
        alert("Option invalid, try again!");
    }
  } while (option !== 6);
}

command();
