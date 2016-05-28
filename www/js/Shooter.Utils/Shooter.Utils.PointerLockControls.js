'use strict';

Shooter.namespace("Shooter.Utils");

Shooter.Utils.PointerLockControls = class {

	constructor(camera) {

		camera.rotation.set(0, 0, 0);

		this.camera = camera;

		this.pitchObject = new THREE.Object3D();
		this.pitchObject.add();

		this.yawObject = new THREE.Object3D();
		this.yawObject.add(this.pitchObject);

		this.PI_2 = Math.PI / 2;

		let self = this;

		document.addEventListener('mousemove', function(event) { self.onMouseMove(event); }, false);
	}

	onMouseMove(event) {

		let movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		let movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

		this.yawObject.rotation.y -= movementX * 0.002;
		this.pitchObject.rotation.x -= movementY * 0.002;

		this.pitchObject.rotation.x = Math.max( -this.PI_2, Math.min( this.PI_2, this.pitchObject.rotation.x ) );

		let direction = new THREE.Vector3(0, 0, -1);
		let rotation = new THREE.Euler(0, 0, 0, "YXZ");
		let v = new THREE.Vector3();

		rotation.set(this.pitchObject.rotation.x, this.yawObject.rotation.y, 0);

		v.copy(direction).applyEuler(rotation);

		v.x += this.camera.position.x;
		v.y += this.camera.position.y;
		v.z += this.camera.position.z;

		this.camera.lookAt(v);

	}

	getObject() {

		return this.yawObject;
	}
};

export default Shooter.Utils.PointerLockControls;