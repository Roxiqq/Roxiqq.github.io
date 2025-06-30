import * as THREE from 'https://cdn.skypack.dev/three@0.152.2';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d1b2a);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Światło
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 2, 3);
scene.add(light);

// Prosty awatar – kula jako głowa
const headGeometry = new THREE.SphereGeometry(1, 32, 32);
const headMaterial = new THREE.MeshStandardMaterial({ color: 0xffaaaa });
const head = new THREE.Mesh(headGeometry, headMaterial);
scene.add(head);

function animate() {
  requestAnimationFrame(animate);
  head.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
