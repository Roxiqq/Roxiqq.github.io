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
