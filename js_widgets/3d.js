import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

let width = window.innerWidth;
let height = window.innerHeight;
width = 400;
height = 400;

const container = document.getElementById('three-container');
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(width, height);
// labelRenderer.domElement.style.position = 'absolute';
// labelRenderer.domElement.style.top = '0';
// labelRenderer.domElement.style.left = '0';
// labelRenderer.domElement.style.pointerEvents = 'none';

container.appendChild(labelRenderer.domElement);

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
camera.position.set(0,0,15);

const state = {
  camera_tilt: 0.0,
  z_height: 0.0,
  a_coef: 0.0
};

camera.lookAt(0,0,0);
renderer.render(scene, camera);

const controls = new TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;
controls.noZoom = false;
controls.noPan = false;
controls.staticMoving = true; // prevents smoothing delays
controls.dynamicDampingFactor = 0.1;
controls.target.set(5,5,0);

function updateCamera(tilt){
  // camera.translateY(-1);
  controls.target.set(tilt,tilt,0);
  controls.update(); // important
};


function addPolygonFrom3DPoints(points3D, options = {}) {
  if (points3D.length < 3) {
    throw new Error("Need at least 3 points");
  }

  const {
    color = 0x00ffcc,
    opacity = 0.7,
    side = THREE.DoubleSide,
  } = options;

  // 1. Define plane
  const plane = new THREE.Plane().setFromCoplanarPoints(
    points3D[0],
    points3D[1],
    points3D[2]
  );

  const normal = plane.normal.clone();

  // 2. Build orthonormal basis (u, v) on the plane
  const u = new THREE.Vector3();
  const v = new THREE.Vector3();

  u.crossVectors(
    Math.abs(normal.x) > 0.9
      ? new THREE.Vector3(0, 1, 0)
      : new THREE.Vector3(1, 0, 0),
    normal
  ).normalize();

  v.crossVectors(normal, u);

  // 3. Project points to 2D
  const points2D = points3D.map(p =>
    new THREE.Vector2(p.dot(u), p.dot(v))
  );

  // 4. Triangulate
  const triangles = THREE.ShapeUtils.triangulateShape(points2D, []);

  // 5. Build geometry
  const vertices = [];
  for (const tri of triangles) {
    for (const i of tri) {
      const p = points3D[i];
      vertices.push(p.x, p.y, p.z);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  geometry.computeVertexNormals();

  // 6. Mesh
  const material = new THREE.MeshStandardMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    side,
  });

  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
}

function line(start, end, color = 0xffffff) {

  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const radius = 0.02;

  const geometry = new THREE.CylinderGeometry(
    radius,
    radius,
    length,
    64
  );

  const material = new THREE.MeshStandardMaterial({ color });

  const cylinder = new THREE.Mesh(geometry, material);

  // 1. Position at midpoint
  const midpoint = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5);
  cylinder.position.copy(midpoint);

  // 2. Rotate to match direction
  const axis = new THREE.Vector3(0, 1, 0); // default cylinder axis
  cylinder.quaternion.setFromUnitVectors(
    axis,
    direction.clone().normalize()
  );

  scene.add(cylinder);
  return cylinder;
}

function addLabel(text, position) {
  const div = document.createElement('div');
  div.className = 'label';
  div.textContent = text;
  div.style.color = 'white';
  div.style.fontSize = '20px';
  div.style.background = 'rgba(0,0,0,0.6)';
  div.style.padding = '4px 8px';
  div.style.borderRadius = '6px';
  div.style.border = '1px solid rgba(255,255,255,0.3)';

  const label = new CSS2DObject(div);
  
  label.position.copy(position);
  scene.add(label);
  return label;
}

function updateLabelPosition(label, newPosition) {
  label.position.copy(newPosition);
}


let label = addLabel('Start', new THREE.Vector3(0.3, -0.5, 0));

let line1 = line(new THREE.Vector3(-2, 0, 0), new THREE.Vector3(10, 0, 0));
let line2 = line(new THREE.Vector3(0, -2, 0), new THREE.Vector3(0, 10, 0));
let line3 = line(new THREE.Vector3(-2, 5, 0), new THREE.Vector3(5, -2, 0));
let line4 = line(new THREE.Vector3(-2, 11, 0), new THREE.Vector3(11, -2, 0));
let line5 = line(new THREE.Vector3(0, 0, -2), new THREE.Vector3(0, 0, 8));

const geometry = new THREE.SphereGeometry(
  0.2,    // radius
  32,   // width segments
  16    // height segments
);

const material = new THREE.MeshStandardMaterial({
  color: 0xffff00
});

const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(0, 0, 0);

scene.add(sphere);

function updateLine() {
  const end = lineState.start.clone().add(
    lineState.direction.clone().multiplyScalar(lineState.length)
  );

  console.log("updateLine");
  line1 = line(lineState.start, end);
}

let zzero = addPolygonFrom3DPoints([
  new THREE.Vector3(3, 0, 0),
  new THREE.Vector3(9, 0, 0),
  new THREE.Vector3(0, 9, 0),
  new THREE.Vector3(0, 3, 0),
]);

let diagonal_large = addPolygonFrom3DPoints([
  new THREE.Vector3(9, 0, 0),
  new THREE.Vector3(0, 9, 0),
  new THREE.Vector3(0, 9, state.z_height),
  new THREE.Vector3(9, 0, state.z_height),
]);

let diagonal_small = addPolygonFrom3DPoints([
  new THREE.Vector3(3, 0, 0),
  new THREE.Vector3(0, 3, 0),
  new THREE.Vector3(0, 3, 0),
], {color: 0xff0000});

let xzero = addPolygonFrom3DPoints([
  new THREE.Vector3(0, 3, 0),
  new THREE.Vector3(0, 9, 0),
  new THREE.Vector3(0, 9, state.z_height),
  new THREE.Vector3(0, state.a_coef, state.z_height),
]);

let yzero = addPolygonFrom3DPoints([
  new THREE.Vector3(3, 0, 0),
  new THREE.Vector3(9, 0, 0),
  new THREE.Vector3(9, 0, state.z_height),
  new THREE.Vector3(state.a_coef, 0, state.z_height),
]);

scene.add(diagonal_small, zzero, yzero, xzero, diagonal_large);

const pointLight = new THREE.PointLight(0xffffff, 20);
pointLight.position.set(2, 2, 5);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);
scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper  = new THREE.GridHelper(200, 50);
gridHelper.rotation.x = Math.PI / 2;
// scene.add(lightHelper, gridHelper);



function updatePolygon(mesh, newPoints, options = {}) {
  const newMesh = addPolygonFrom3DPoints(newPoints, options);

  // Copy geometry & material into the existing mesh
  mesh.geometry.dispose();
  mesh.geometry = newMesh.geometry;
  mesh.material.dispose();
  mesh.material = newMesh.material;
}

function update_polygons(a, z){

  updatePolygon(diagonal_large, [
    new THREE.Vector3(9, 0, 0),
    new THREE.Vector3(0, 9, 0),
    new THREE.Vector3(0, 9, z),
    new THREE.Vector3(9, 0, z),
  ]);

  let p = Math.max(0, 3 - a*z);
  let z2 = z;
  if(a > 3/z){
    z2 = 3/a;
  }

  updatePolygon(diagonal_small,[
    new THREE.Vector3(3, 0, 0),
    new THREE.Vector3(0, 3, 0),
    new THREE.Vector3(0, p, z2),
    new THREE.Vector3(p, 0, z2),
  ], {color: 0xff0000});

  updatePolygon(xzero,[
    new THREE.Vector3(0, 3, 0),
    new THREE.Vector3(0, 9, 0),
    new THREE.Vector3(0, 9, z),
    new THREE.Vector3(0, p, z),
    new THREE.Vector3(0, p, z2),
  ]);

  updatePolygon(yzero,[
    new THREE.Vector3(3, 0, 0),
    new THREE.Vector3(9, 0, 0),
    new THREE.Vector3(9, 0, z),
    new THREE.Vector3(p, 0, z),
    new THREE.Vector3(p, 0, z2),
  ]);
}

let delay = 100
function update_simulation(time){
  delay -= 1;
  if(delay >= 0){
    return;
  }

  if(state.camera_tilt <= 1.0){
    camera.position.x += 0.01;
    camera.position.y -= 0.03;
    camera.position.z -= 0.07;
    state.camera_tilt += 0.01; 
    return;
}

  if(state.z_height <= 7.0) {
    label.visible = false;
    state.z_height += 0.06;
    if(state.z_height > 7.0){
      delay = 100;
    }
    update_polygons(state.a_coef, state.z_height);
    return;
  } 
  
  if(state.a_coef <= 1.0) {
    state.a_coef += 0.01;

    if(state.a_coef > 1.0){
      delay = 100;
    }

    update_polygons(state.a_coef, state.z_height);
    return;
  }

  updateLabelPosition(label, new THREE.Vector3(0.3, -0.5, state.a_coef*3));
  sphere.position.set(0,0,3);
  label.visible = true;
  
}


let time = 0.0;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);

  time += 0.01;
  update_simulation(time);
  // torus.position.x = Math.sin(time)*30;
  // torus.position.z = Math.cos(time)*30;

  controls.update();
}

animate();