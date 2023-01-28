import { Scene } from './scene';
import { Car } from './carHandling';

export class App{
   constructor(){
      console.log("Application started...");

      this.applicationScene = new Scene;
      this.CarHandle = new Car;

      console.log(this.applicationScene);

      document.addEventListener('keydown', (event) => {
         switch(event.key){
            case 'ARROWUP' || 'w':
               this.vehicle.Accelerate();
               break;
            case 'ARROWDOWN' || 's':
               this.vehicle.Brake();
               break;
            case 'ARROWLEFT' || 'a':
               this.vehicle.TurnLeft();
               break;
            case 'ARROWRIGHT' || 'd':
               this.vehicle.TurnRight();
               break;
            case 'h':
               this.vehicle.Honk();
               break;
         }});

   }


}