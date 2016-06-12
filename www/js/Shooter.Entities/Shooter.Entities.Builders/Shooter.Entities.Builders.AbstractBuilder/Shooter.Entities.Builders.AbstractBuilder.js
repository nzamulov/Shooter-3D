'use strict';

Shooter.namespace("Shooter.Entities.Builders");

Shooter.Entities.Builders.AbstractBuilder = class {

	constructor() {
		console.log("> Shooter.Entities.Builders.AbstractBuilder > constructor > ready");
	}

	/* INDEPENDENT CONSTRUCTING PARTS */
	buildFacade() { }
	buildBlanks() { }
	buildWindows() { }
	buildDoors() { }
	buildStuff() { }

	/* CONSTRUCT OBJECT */
	build(position, rotation) {

		position = position || new THREE.Vector3(0, 0, 0);
		rotation = rotation || new THREE.Vector3(0, 0, 0);

		this.instance = new THREE.Object3D();

		this.buildFacade();
		this.buildBlanks();
		this.buildWindows();
		this.buildDoors();
		this.buildStuff();

		this.setPosition(position);
		this.setRotation(rotation);

		return this.instance;
	}

	/* OBJECT LOCATION */
	setPosition(position) { }
	setRotation(rotation) { }


	/* TEXTURE NORMALIZATION */
	assignUVs(geometry) {

	    geometry.computeBoundingBox();

	    let max = geometry.boundingBox.max;
	    let min = geometry.boundingBox.min;

	    let offset  = new THREE.Vector3(0 - min.x, 0 - min.y, 0 - min.z);
	    let range   = new THREE.Vector3(max.x - min.x, max.y - min.y, max.z - min.z);

	    geometry.faceVertexUvs[0] = [];

	    let faces = geometry.faces;

	    for (let i = 0; i < geometry.faces.length ; i++) {

	      let v1 = geometry.vertices[faces[i].a];
	      let v2 = geometry.vertices[faces[i].b];
	      let v3 = geometry.vertices[faces[i].c];

	      if(v1.x === v2.x && v2.x === v3.x) {
		      geometry.faceVertexUvs[0].push([
		        new THREE.Vector2( ( v1.z + offset.z ) / range.z , ( v1.y + offset.y ) / range.y ),
		        new THREE.Vector2( ( v2.z + offset.z ) / range.z , ( v2.y + offset.y ) / range.y ),
		        new THREE.Vector2( ( v3.z + offset.z ) / range.z , ( v3.y + offset.y ) / range.y )
		      ]);
	      } else if(v1.y === v2.y && v2.y === v3.y) {
			  geometry.faceVertexUvs[0].push([
		        new THREE.Vector2( ( v1.x + offset.x ) / range.x , ( v1.z + offset.z ) / range.z ),
		        new THREE.Vector2( ( v2.x + offset.x ) / range.x , ( v2.z + offset.z ) / range.z ),
		        new THREE.Vector2( ( v3.x + offset.x ) / range.x , ( v3.z + offset.z ) / range.z )
		      ]);
	      } else {
		      geometry.faceVertexUvs[0].push([
		        new THREE.Vector2( ( v1.x + offset.x ) / range.x , ( v1.y + offset.y ) / range.y ),
		        new THREE.Vector2( ( v2.x + offset.x ) / range.x , ( v2.y + offset.y ) / range.y ),
		        new THREE.Vector2( ( v3.x + offset.x ) / range.x , ( v3.y + offset.y ) / range.y )
		      ]);
	      }
	    }

	    geometry.uvsNeedUpdate = true;
	}
};

export default Shooter.Entities.Builders.AbstractBuilder;