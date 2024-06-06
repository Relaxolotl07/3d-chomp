console.log('Javascript is working')

import * as THREE from 'three'
console.log(THREE)

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Canvas
const canvas = document.querySelector('canvas.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

// const geometry = new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)
// this would create the orbit controls
// it would allow camera control using mouse





var loader = new THREE.ObjectLoader();
loader.load(
	// resource URL
	"materials/Box.json",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( obj ) {
		// Add the loaded object to the scene
		scene.add( obj );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);





// Sizes
const sizes = {
    width: 800,
    height: 600
}

scene.add(camera)


camera.position.set( 0, 20, 10 );
controls.update();


const light = new THREE.AmbientLight(0xffffff, 1)
light.position.set(0, 5, 0)
scene.add(light)


// ...

// Renderer

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)


function animate() {

	

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );
    requestAnimationFrame( animate );

}

requestAnimationFrame( animate );


function start() {
    var x = 0;
    var y = 0;
    var z = 0;
    console.log("start")
    

    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    z = document.getElementById("z").value;
    console.log(x)

    // for (var i = 0; i < 100; i++) {
    //     var geometry = new THREE.BoxGeometry(1,1,1)
    //     var material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    //     var mesh = new THREE.Mesh(geometry, material)
    //     mesh.position.x = (Math.random() - 0.5) * 10
    //     mesh.position.y = (Math.random() - 0.5) * 10
    //     mesh.position.z = (Math.random() - 0.5) * 10
    //     scene.add(mesh)
    // }
    var loader = new THREE.ObjectLoader();
    loader.load(
	// resource URL
	"materials/Box.json",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( obj ) {
		// Add the loaded object to the scene
		scene.add( obj );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);

}