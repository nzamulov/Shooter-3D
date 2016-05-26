window.Shooter = ("undefined" === typeof Shooter) ? {} : Shooter;

window.Shooter.namespace = function (namespace) {
    let parts = namespace.split('.'),
        parent = Shooter,
        i = 0;

    if ("Shooter" === parts[0]) {
        parts = parts.slice(1);
    }

    let len = parts.length;

    for (i = 0; i < len; i += 1) {
        let singlePart = parts[i];
        if ("undefined" === typeof parent[singlePart]) {
            parent[singlePart] = {};
        }
        parent = parent[singlePart];

    }

    return parent;
};