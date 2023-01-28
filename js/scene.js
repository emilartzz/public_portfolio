import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class Scene{
   constructor(){
      console.log("Scene created...");

      this.controls;

      this.scene  = new THREE.Scene();

      this.scene.background = new THREE.Color().setHSL( 0.6, 0, 1 );
      this.scene.fog = new THREE.Fog( this.scene.background, 1, 5000 );

      this.initiateWorld();
   }

   initiateLights(){
      console.log("Lights initiated...");

      this.hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
      this.hemiLight.color.setHSL( 0.6, 1, 0.6 );
      this.hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
      this.hemiLight.position.set( 0, 50, 0 );
      this.scene.add( this.hemiLight );

      this.dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
      this.dirLight.color.setHSL( 0.1, 1, 0.95 );
      this.dirLight.position.set( - 1, 1.75, 1 );
      this.dirLight.position.multiplyScalar( 30 );
      this.scene.add( this.dirLight );

      this.dirLight.castShadow = true;

      this.dirLight.shadow.mapSize.width = 2048;
      this.dirLight.shadow.mapSize.height = 2048;

      this.initiateCamera();
   }

   initiateCamera(){
      console.log("Camera initiated...");

      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.set(0, 1.5, 4);
      this.scene.add(this.camera);

      this.initiateSky();
   }

   initiateGround(){
      console.log("Ground initiated...");

      this.groundGeo = new THREE.PlaneGeometry(10000, 10000);
      this.groundMat = new THREE.MeshPhongMaterial({color: 0xffffff});

      this.groundMat.color.setHSL(0.095, 1, 0.75);

      this.ground = new THREE.Mesh(this.groundGeo, this.groundMat);

      this.ground.position.y = -0.5;
      this.ground.rotation.x = -Math.PI/2;
      this.ground.receiveShadow = true;

      this.scene.add(this.ground);

      
      this.initiateCar();
   }

   initiateWorld(){
      console.log("World initiated...");

      // this.world = new CANNON.World();
      // this.world.gravity.set(0, -9.82, 0);

      this.initiateGround();
   }

   initiateCar(){
      console.log("Car initiated...");

      this.loader = new GLTFLoader();

      this.loader.load('./models/car/scene.gltf', (gltf) => {
         
         this.car = gltf.scene;

         this.scene.add(this.car);

         this.initiateLights();
      }, undefined, (error) => {
         console.error(error);
      });
   }

   initiateSky(){
      console.log("Sky initiated...");

      this.vertexShader = document.getElementById( 'vertexShader' ).textContent;
      this.fragmentShader = document.getElementById( 'fragmentShader' ).textContent;
      this.uniforms = {
         'topColor': { value: new THREE.Color( 0x0077ff ) },
         'bottomColor': { value: new THREE.Color( 0xffffff ) },
         'offset': { value: 33 },
         'exponent': { value: 0.6 }
      };
      this.uniforms[ 'topColor' ].value.copy( this.hemiLight.color );

      // this.scene.fog.color.copy( this.uniforms[ 'bottomColor' ].value );

      this.skyGeo = new THREE.SphereGeometry( 4000, 32, 15 );
      this.skyMat = new THREE.ShaderMaterial( {
         uniforms: this.uniforms,
         vertexShader: this.vertexShader,
         fragmentShader: this.fragmentShader,
         side: THREE.BackSide
      } );

      this.sky = new THREE.Mesh( this.skyGeo, this.skyMat );
      this.scene.add( this.sky );

      this.renderScene();
   }

   renderScene(){
      console.log("Rendering scene...");

      this.renderer = new THREE.WebGLRenderer();
      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.shadowMap.enabled = true;
      document.querySelector('#app').appendChild(this.renderer.domElement);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.animate();

      console.log(this.scene.children[1]);
   }

   updateCamera(){
      this.camera.lookAt(this.car.position);

      this.camera.position.x = this.car.position.x;
      this.camera.position.y = this.car.position.y + 1.5;
      this.camera.position.z = this.car.position.z + 4;
   }

   animate(){
      this.updateCamera();
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate.bind(this));
   }

}