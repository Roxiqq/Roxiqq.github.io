import * as THREE from 'https://cdn.skypack.dev/three@0.150.1';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.150.1/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#111');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Awatar: kula jako głowa, sześcian jako ciało
const body = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1.5, 0.5),
  new THREE.MeshStandardMaterial({ color: '#00ccff' })
);
body.position.y = -0.25;
scene.add(body);

const head = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({ color: '#ffe0bd' }) // kolor skóry
);
head.position.y = 1;
scene.add(head);

// Światło
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5);
scene.add(light);

// Kontrola kamery
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
