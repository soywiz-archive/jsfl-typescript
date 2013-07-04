///<reference path="../jsfl.d.ts" />

var doc = fl.getDocumentDOM();
//doc.addNewLine({ x: 216.7, y: 122.3 }, { x: 366.8, y: 165.8 });

//fl.trace(doc.timelines[0].layers[0].frames[0].name);
doc.getTimeline().currentFrame = 0;
doc.selectAll();
doc.moveSelectionBy({ x: 100, y: 100 });

doc.getTimeline().currentFrame = 1;
doc.selectAll();
doc.moveSelectionBy({ x: 200, y: 200 });
