import { Scene } from './scene';
import { Car } from './carHandling';

export class App{
   constructor(){
      console.log("Application started...");

      this.applicationScene = new Scene;
      setTimeout(() => {
         this.vehicle = this.applicationScene.scene.children[1];
         this.CarHandle = new Car(this.vehicle);
      }, 1000);

      document.addEventListener('keydown', (event) => {
         if(event.key === 'ArrowUp' || event.key === 'w'){
            this.CarHandle.Accelerate();
         }
         if(event.key === 'ArrowDown' || event.key === 's'){
            this.CarHandle.Brake();
         }
         if(event.key === 'ArrowLeft' || event.key === 'a'){
            this.CarHandle.TurnLeft();
         }
         if(event.key === 'ArrowRight' || event.key === 'd'){
            this.CarHandle.TurnRight();
         }
         if(event.key === 'h'){
            this.CarHandle.Honk();
         }

         this.CarHandle.ExportSpeed();
      });

      document.addEventListener('keyup', (event) => {
         if(event.key === 'ArrowUp' || event.key === 'w'){
            this.CarHandle.EngineBrake();
         }
         if(event.key === 'ArrowDown' || event.key === 's'){
            this.CarHandle.EngineBrake();
         }
      });

   }


}