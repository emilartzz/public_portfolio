import { App } from './app';

export class Car{
   constructor(){
      console.log("Car created...");

      this.applicationScene = App.applicationScene;
      this.vehicle = App.vehicle;

      this.curentSpeed = 0;
      this.maxSpeed = 100;
      this.acceleration = 0.1;
      this.deceleration = 0.1;
      this.steering = 0;
      this.maxSteering = 0.05;

      console.log(this.vehicle);

   }

   Accelerate(){
      console.log("Car accelerating...");

      this.curentSpeed = THREE.Math.clamp(this.curentSpeed + this.acceleration, 0, this.maxSpeed);
      this.vehicle.translateZ(this.curentSpeed);
   }

   Brake(){
      console.log("Car braking...");
   }

   TurnLeft(){
      console.log("Car turning left...");
   }

   TurnRight(){
      console.log("Car turning right...");
   }

   Honk(){
      console.log("Car honking...");
   }


}