var Json = (function () {
    function Json() {
    }
    Json.stringify = function (object, recursionLevel) {
        if (typeof recursionLevel === "undefined") { recursionLevel = 0; }
        if (recursionLevel > 4)
            return '...';
        switch (typeof object) {
            case "object":
                var parts = [];
                for (var k in object) {
                    parts.push(Json.stringify(k, recursionLevel + 1) + ':' + Json.stringify(object[k], recursionLevel + 1));
                }
                return '{' + parts.join(',') + '}';
            case "array":
                return '[' + (object).map(function (item) {
                    return Json.stringify(item, recursionLevel + 1);
                }).join(',') + ']';
            case "string":
                return '"' + object + '"';
            default:
                return '' + object;
        }
    };
    return Json;
})();

function trace(item) {
    fl.trace(Json.stringify(item));
}

function dump(element) {
    fl.trace(element);
    for (var k in element) {
        fl.trace(k + ':' + element[k]);
    }
}

function unlockAllLayersTemporarily(timeline, callback) {
    var lockeds = timeline.layers.map(function (layer) {
        return layer.locked;
    });
    timeline.layers.forEach(function (layer, index) {
        return layer.locked = false;
    });
    try  {
        callback();
    } finally {
        timeline.layers.forEach(function (layer, index) {
            return layer.locked = lockeds[index];
        });
    }
}
