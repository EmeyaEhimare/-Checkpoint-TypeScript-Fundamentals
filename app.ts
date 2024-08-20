interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class Car implements Vehicle {
    constructor(public make: string, public model: string, public year: number) {}
  
    start() {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Camry", 2023);
  
  // Call the start method
  myCar.start();