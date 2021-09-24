import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const sizes = {
  width: 800,
  height: 600,
}

const cursor = {
  x: 0,
  y: 0,
}

const canvas = document.querySelector('.webgl')

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(75, aspectRatio)
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   2000
// )

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

camera.position.z = 3

window.addEventListener('mousemove', (evt) => {
  cursor.x = evt.clientX / sizes.width - 0.5
  cursor.y = evt.clientY / sizes.height - 0.5
})
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas,
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

const clock = new THREE.Clock()

function tick() {
  const elapsedTime = clock.getElapsedTime()

  // const variation = Math.sin(elapsedTime)

  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
  // camera.position.y = cursor.y * 3
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
  // camera.lookAt(mesh.position)

  // mesh.rotation.x = (variation * Math.PI) / 2
  // mesh.rotation.z = (variation * Math.PI) / 2

  controls.update()

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
