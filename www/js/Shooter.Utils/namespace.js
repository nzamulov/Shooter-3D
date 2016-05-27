window.Shooter = ("undefined" === typeof Shooter) ? {} : Shooter;

window.Shooter.namespace = function (namespace) {
    let parts = namespace.split('.'),
        parent = Shooter;

    if ("Shooter" === parts[0]) {
        parts = parts.slice(1);
    }

    for(let singlePart of parts) {
        if ("undefined" === typeof parent[singlePart]) {
            parent[singlePart] = {};
        }
        parent = parent[singlePart];
    }

    return parent;
};