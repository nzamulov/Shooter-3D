'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from '../Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';

Shooter.Entities.Player = class extends AbstractEntity {

	constructor() {
		super();

		console.log("> Shooter.Entities.Player > constructor > ready");
	}

};

export default Shooter.Entities.Player;