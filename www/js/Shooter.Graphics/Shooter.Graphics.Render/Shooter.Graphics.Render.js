Shooter.namespace("Shooter.Graphics");

Shooter.Graphics.Render = class {

	constructor() {

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);

		console.log("> Shooter.Graphics.Render > constructor > ready");
	}

	render(scene, camera) {
		this.renderer.render( scene, camera );
	}

}

export default Shooter.Graphics.Render;