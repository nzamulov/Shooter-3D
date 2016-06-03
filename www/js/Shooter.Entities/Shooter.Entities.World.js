'use strict';

Shooter.namespace("Shooter.Entities");

import Player from './Shooter.Entities.Player.js';
import Wall from './Shooter.Entities.Wall.js';
import Tower from './Shooter.Entities.Tower.js';
import Blank from './Shooter.Entities.Blank.js';
import Floor from './Shooter.Entities.Floor.js';

Shooter.Entities.World = class {

	constructor() {

		this.scene = new THREE.Scene();

		this.scene.fog = new THREE.Fog(0xFFAC40, 0, 1500);

		this.player = new Player(this.scene);
		this.scene.add(this.player.getControls());

		/*let size = 2000, step = 2;

		let geometry = new THREE.Geometry();
		let material = new THREE.LineBasicMaterial({ color: 'green' });

		for(let i = -size; i <= size; i += step) {
			geometry.vertices.push(new THREE.Vector3( - size, 0.02, i ));
			geometry.vertices.push(new THREE.Vector3( size, 0.02, i ));

			geometry.vertices.push(new THREE.Vector3( i, 0.02, - size ));
			geometry.vertices.push(new THREE.Vector3( i, 0.02, size ));
		}

		let line = new THREE.Line(geometry, material, THREE.LinePieces);
		this.scene.add(line);*/

		/*geometry = new THREE.PlaneGeometry(40, 40, 32);
		material = new THREE.MeshBasicMaterial( { color: 'blue' } );
		material.side = THREE.DoubleSide;
		let plane = new THREE.Mesh(geometry, material);
		plane.rotation.x = -Math.PI / 2.0;
		this.scene.add(plane);*/

		let floor = new Floor();
		floor.setPosition(-1000, 0.02, -1000);
		floor.setRotation(-Math.PI / 2, 0, 0);
		this.scene.add(floor.getInstance());

		/*geometry = new THREE.BoxGeometry(2, 2, 2);
		material = new THREE.MeshBasicMaterial( { color: 'red' } );
		let cube = new THREE.Mesh( geometry, material );

		cube.position.x = 1;
		cube.position.y = 1.03;
		cube.position.z = 1;
		
		this.scene.add(cube);

		geometry = new THREE.BoxGeometry(2, 2, 2);
		material = new THREE.MeshBasicMaterial( { color: 'skyblue' } );
		cube = new THREE.Mesh( geometry, material );

		cube.position.x = 1;
		cube.position.y = 1.03;
		cube.position.z = -1;

		this.scene.add(cube);

		geometry = new THREE.BoxGeometry(2, 2, 2);
		material = new THREE.MeshBasicMaterial( { color: 'orange' } );
		cube = new THREE.Mesh( geometry, material );

		cube.position.x = 3;
		cube.position.y = 6;
		cube.position.z = 3;

		this.scene.add(cube);*/


		/* GATE AND FENCE */

		let tower = new Tower();
		tower.setPosition(10, 10, -10);
		this.scene.add(tower.getInstance());

		let blank = new Blank();
		blank.setPosition(-5, 18, -10);
		blank.setRotation(-Math.PI / 2, 0, -Math.PI / 2);
		this.scene.add(blank.getInstance());

		let startX = 10;
		let startZ = -10;

		let lastX = 25;
		let lastZ = -10;

		for(let i = 1; i < 18; ++i) {

			let phi = -Math.PI / 9;

			let [newX, newZ] = Math.rotatePoint(lastX - startX, lastZ - startZ, phi);

			let wall = new Wall();
			wall.setPosition(startX + newX, 8, startZ + newZ);
			wall.setRotation(0, (Math.PI / 9) * i, 0);
			this.scene.add(wall.getInstance());

			lastX = startX + 3 * newX;
			lastZ = startZ + 3 * newZ;

			startX = startX + 2 * newX;
			startZ = startZ + 2 * newZ;

			let tower = new Tower();
			tower.setPosition(startX, 10, startZ);
			tower.setRotation(0, (Math.PI / 9) * (i + 1), 0);
			this.scene.add(tower.getInstance());
		}

		/* -------- */

		var points = [];

		for ( var i = 0; i < 10; i ++ ) {
			points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 5 + 5, i - 9));
		}
		let geometry = new THREE.LatheGeometry(points, 30);
		let material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
		material.side = THREE.DoubleSide;
		var lathe = new THREE.Mesh( geometry, material );

		lathe.position.z = -150;

		lathe.rotation.z = -Math.PI;

		this.scene.add( lathe );



		points = [];

		for ( var i = 0; i < 10; i ++ ) {
			points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 5 + 2, 2 * i - 18));
		}
		geometry = new THREE.LatheGeometry(points, 30);
		material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
		material.side = THREE.DoubleSide;
		lathe = new THREE.Mesh( geometry, material );

		lathe.position.z = -168;
		lathe.position.x = 15;

		lathe.rotation.z = -Math.PI;

		this.scene.add( lathe );



		points = [];

		for ( var i = 0; i < 10; i ++ ) {
			points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 5 + 2, 1.5 * i - 13.5));
		}
		geometry = new THREE.LatheGeometry(points, 30);
		material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
		material.side = THREE.DoubleSide;
		lathe = new THREE.Mesh( geometry, material );

		lathe.position.z = -160;
		lathe.position.x = 7;

		lathe.rotation.z = -Math.PI;

		this.scene.add( lathe );


		points = [];

		for ( var i = 0; i < 10; i ++ ) {
			points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 5 + 2, i - 9));
		}
		geometry = new THREE.LatheGeometry(points, 30);
		material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
		material.side = THREE.DoubleSide;
		lathe = new THREE.Mesh( geometry, material );

		lathe.position.z = -148;
		lathe.position.x = 16;

		lathe.rotation.z = -Math.PI;

		this.scene.add( lathe );



		points = [];

		for ( var i = 0; i < 10; i ++ ) {
			points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 5 + 2, i - 9));
		}
		geometry = new THREE.LatheGeometry(points, 30);
		material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
		material.side = THREE.DoubleSide;
		lathe = new THREE.Mesh( geometry, material );

		lathe.position.z = -159;
		lathe.position.x = 24;

		lathe.rotation.z = -Math.PI;

		this.scene.add( lathe );


		/* DESERT */

		/*let desert_texture, loader;

		desert_texture = new THREE.Texture();
		loader = new THREE.ImageLoader();

		loader.load('img/desert.jpg', (image) => {
			desert_texture.image = image;
			desert_texture.needsUpdate = true;
		});

		geometry = new THREE.ParametricGeometry((u, v) => {

			u = 1000 * u;
			v = 1000 * v;
			let y = 60 * Math.abs(Math.sin(Math.pow(u * v, 1 / 5)));

			return new THREE.Vector3(u, y, v);
		}, 20, 20);

		material = new THREE.MeshBasicMaterial({ map: desert_texture, overdraw: true });
		material.side = THREE.DoubleSide;
		let curve = new THREE.Mesh(geometry, material);

		curve.position.x = -10;
		curve.position.z = -300;
		curve.position.y = -10;

		curve.rotation.y = Math.PI / 2;

		this.scene.add(curve);

		curve = new THREE.Mesh(geometry, material);

		curve.position.x = 10;
		curve.position.z = -300;
		curve.position.y = -10;

		curve.rotation.y = Math.PI;

		this.scene.add(curve);*/

		/* ------ */

		/* SKY */

		/*geometry = new THREE.SphereGeometry(3000);

		let canvas = document.createElement('canvas');
		let context = canvas.getContext('2d');

		context.canvas.width = 3000;
		context.canvas.height = 3000;

		let gradient = context.createRadialGradient(1500, 1500, 30, 1500, 1500, 700);

		gradient.addColorStop(0, 'white');
		gradient.addColorStop(0.1, '#AAA8FF');
		gradient.addColorStop(1, '#504DFF');

		context.arc(1500, 1500, 3000, 0, 2 * Math.PI);

		context.fillStyle = gradient;
		context.fill();

		let shadowTexture = new THREE.Texture(canvas);
		shadowTexture.needsUpdate = true;

		material = new THREE.MeshBasicMaterial({
			map: shadowTexture,
			side: THREE.BackSide
		});

		let sky = new THREE.Mesh(geometry, material);

		sky.rotation.y = -Math.PI / 2;
		sky.rotation.z = Math.PI / 9;

		this.scene.add(sky);*/

		/* ------ */

		console.log("> Shooter.Entities.World > constructor > ready");
	}

	update() {
		this.player.update(this.scene);
	}

	getScene() {
		return this.scene;
	}

	getCamera() {
		return this.player.getCamera();
	}
};

export default Shooter.Entities.World;