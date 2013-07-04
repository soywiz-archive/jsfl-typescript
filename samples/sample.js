var doc = fl.getDocumentDOM();

doc.getTimeline().currentFrame = 0;
doc.selectAll();
doc.moveSelectionBy({ x: 100, y: 100 });

doc.getTimeline().currentFrame = 1;
doc.selectAll();
doc.moveSelectionBy({ x: 200, y: 200 });
