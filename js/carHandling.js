import { App } from './app';
import * as THREE from 'three';

export class Car{
   constructor(vehicle){
      console.log("Car handling created...");

      this.vehicle = vehicle;
      console.log(this.vehicle);

      this.curentSpeed = 0;
      this.maxSpeed = 100;
      this.maxReverseSpeed = -15;
      this.acceleration = 0.01;
      this.deceleration = -0.01;
      this.steering = 0;
      this.maxSteering = 0.05;

   }

   Accelerate(){
      console.log("Car accelerating...");

      this.curentSpeed = Math.min(Math.max(this.curentSpeed + this.acceleration, 0), this.maxSpeed);
      this.vehicle.translateZ(this.curentSpeed);

   }

   BrakeAndReverse(){
      console.log("Car braking...");

      this.curentSpeed = Math.min(Math.max(this.curentSpeed + this.deceleration, 0), this.maxSpeed);
      this.vehicle.translateZ(this.curentSpeed);

   }

   TurnLeft(){
      console.log("Car turning left...");

      this.steering = Math.min(Math.max(this.steering + this.maxSteering, -this.maxSteering), this.maxSteering);
      this.vehicle.rotateY(this.steering);
   }

   TurnRight(){
      console.log("Car turning right...");

      this.steering = Math.min(Math.max(this.steering - this.maxSteering, -this.maxSteering), this.maxSteering);
      this.vehicle.rotateY(this.steering);
   }

   Honk(){
      console.log("Car honking...");
   }

   ExportSpeed(){
      console.log('Current speed: ' + this.curentSpeed);
   }

   EngineBrake(){
      console.log("Car engine braking...");

      if (this.curentSpeed > 0.00) {
         console.log('Engine braking...');
         this.curentSpeed = Math.min(Math.max(this.curentSpeed + this.deceleration, 0), this.maxSpeed);
         this.vehicle.translateZ(this.curentSpeed);
         this.ExportSpeed();
         setTimeout(this.EngineBrake.bind(this), 30);
      }
      else{
         return;
      }

   }

   Reverse(){
      console.log("Car reversing...");

      this.curentSpeed = Math.min(Math.max(this.curentSpeed - this.acceleration, -this.maxReverseSpeed), 0);
      this.vehicle.translateZ(this.curentSpeed);

   }


}