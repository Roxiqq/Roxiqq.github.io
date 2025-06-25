// avatar.js
import * as THREE from 'https://cdn.skypack.dev/three@0.150.1';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.150.1/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

// Kamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Światło
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 2, 3);
scene.add(light);

// Podstawowy awatar (kula jako głowa)
const head = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial({ color: '#ffaa00' })
);
scene.add(head);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Animacja
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Skalowanie przy zmianie rozmiaru okna
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
