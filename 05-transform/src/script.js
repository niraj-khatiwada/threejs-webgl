import * as THREE from 'three'

const scene = new THREE.Scene()

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshBasicMaterial({ color: 0xfff000 })
)
cube2.position.x = 1

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.7, 0.7, 0.7),
  new THREE.MeshBasicMaterial({ color: 0xaffff0 })
)

cube3.position.x = 2
// mesh.position.set(-1, -1, -1)
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.x = Math.PI * 0.25

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

const group = new THREE.Group()

group.add(cube1)
group.add(cube2)
group.add(cube3)

scene.add(group)

const sizes = {
  width: 800,
  height: 600,
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl'),
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
