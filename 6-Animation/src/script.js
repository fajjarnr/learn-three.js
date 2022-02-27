import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

const canvas = document.querySelector('canvas.webgl');

const sizes = {
  width: 800,
  height: 600,
};

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: '#ff0000',
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

console.log(mesh.position.length());

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// let time = Date.now();

// const clock = new THREE.Clock();

gsap.to(mesh.position, {
  duration: 1,
  delay: 1,
  x: 2,
});

gsap.to(mesh.position, {
  duration: 1,
  delay: 2,
  x: 0,
});

const tick = () => {
  // time
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // console.log(deltaTime);

  // const elapsedTime = clock.getElapsedTime();
  // console.log(elapsedTime);

  // transform
  // camera.position.x = Math.sin(elapsedTime);
  // camera.position.y = Math.cos(elapsedTime);
  // camera.lookAt(mesh.position);

  // render
  renderer.render(scene, camera);

  // request animate
  window.requestAnimationFrame(tick);
};

tick();
