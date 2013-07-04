///<reference path="./jsfl.d.ts" />

class Json {
	public static stringify(object: any, recursionLevel: number = 0): string {
		if (recursionLevel > 4) return '...';
		switch (typeof object) {
			case "object":
				var parts = [];
				for (var k in object) {
					parts.push(Json.stringify(k, recursionLevel + 1) + ':' + Json.stringify(object[k], recursionLevel + 1));
				}
				return '{' + parts.join(',') + '}';
			case "array":
				return '[' + (<any[]>object).map((item) => Json.stringify(item, recursionLevel + 1)).join(',') + ']';
			case "string":
				return '"' + object + '"';
			default:
				return '' + object;
		}
	
	}
}

function trace(item: any) {
	fl.trace(Json.stringify(item));
}

function dump(element: any) {
	fl.trace(element);
	for (var k in element) {
		fl.trace(k + ':' + element[k]);
	}
}