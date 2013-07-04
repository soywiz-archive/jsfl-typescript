///<reference path="../jsfl.d.ts" />
///<reference path="../utils.ts" />

fl.runScript(fl.scriptURI.replace(/\/[^\/]+$/, '') + '/../utils.js');

fl.outputPanel.clear();

var doc = fl.getDocumentDOM();
var library = doc.library;
var timeline = doc.getTimeline();
for (var n = 0; n < timeline.frameCount; n++) {
	timeline.currentFrame = n;

	timeline.layers.forEach((layer) => {
		layer.frames[n].elements.forEach((element) => {
			if (element.elementType == "instance") {
				var oldPos = { x: element.x, y: element.y }
				element.x = 0;
				element.y = 0;
				library.editItem(element.libraryItem.name);
				doc.selectAll();
				doc.moveSelectionBy({ x: oldPos.x, y: oldPos.y });
			}
		});
	});

	doc.editScene(0);
}
timeline.currentFrame = 0;
