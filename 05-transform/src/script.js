import * as THREE from 'three'

const scene = new THREE.Scene()

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  material,
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

mesh.position.set(-1, -1, -1)
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

scene.add(mesh)

const group = new THREE.Group()
scene.add(group)

const sizes = {
  width: 800,
  height: 600,
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
camera.lookAt(mesh.position)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl'),
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
