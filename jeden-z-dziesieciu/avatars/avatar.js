import * as THREE from 'https://cdn.skypack.dev/three';

const canvas = document.getElementById('avatarCanvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

renderer.setSize(300, 300);
camera.position.z = 5;

const geometry = new THREE.SphereGeometry(1, 32, 32); // Głowa
const material = new THREE.MeshStandardMaterial({ color: 0xffcc99 });
const head = new THREE.Mesh(geometry, material);
scene.add(head);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5).normalize();
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  head.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

import * as THREE from 'https://cdn.skypack.dev/three@0.150.1';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.150.1/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

// Kamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Światło
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Avatar - kula jako głowa
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xffcc99 });
const head = new THREE.Mesh(geometry, material);
scene.add(head);

// Kontrolki kamery
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Responzywność
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animacja
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
