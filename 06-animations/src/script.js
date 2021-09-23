import './style.css'
import * as THREE from 'three'
import anime from 'animejs'

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width: 800,
  height: 600,
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.webgl'),
})

renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

function tick() {
  const elapsedTime = clock.getElapsedTime()

  const variation = Math.sin(elapsedTime)

  anime({
    targets: mesh.position,
    x: variation * 5,
    loop: true,
    easing: 'spring(1, 800, 10, 0)',
  })

  // mesh.rotation.x = elapsedTime * Math.PI
  // mesh.rotation.z = elapsedTime * Math.PI

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
