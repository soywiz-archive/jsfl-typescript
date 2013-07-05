fl.runScript(fl.scriptURI.replace(/\/[^\/]+$/, '') + '/../utils.js');

fl.outputPanel.clear();

function codeInsideType(timelineContext) {
    var element1 = $document.selection[0];
    var element1Pos = { x: element1.x, y: element1.y };

    $document.moveSelectionBy({ x: -element1Pos.x, y: -element1Pos.y });

    timelineContext.edit(function (timelineContext) {
        for (var n = 0; n < timelineContext.timeline.frameCount; n++) {
            timelineContext.gotoFrame(n).select();
            if ($document.selection.length > 0) {
                $document.moveSelectionBy({ x: element1Pos.x, y: element1Pos.y });

                var element2 = $document.selection[0];
                var element2Pos = { x: element2.x, y: element2.y };

                $document.moveSelectionBy({ x: -element2Pos.x, y: -element2Pos.y });

                timelineContext.edit(function (timelineContext) {
                    unlockAllLayersTemporarily(timelineContext.timeline, function () {
                        $document.selectAll();
                        if ($document.selection.length > 0) {
                            $document.moveSelectionBy({ x: element2Pos.x, y: element2Pos.y });
                        }
                    });
                });
            }
        }
    });
}

function code() {
    $document.editScene(0);
    var timelineContext = new TimelineContext($timeline);

    for (var layerIndex = 0; layerIndex < timelineContext.timeline.layerCount; layerIndex++) {
        if (!timelineContext.timeline.layers[layerIndex].locked) {
            timelineContext.timeline.currentLayer = layerIndex;
            timelineContext.gotoFrame(1);
            timelineContext.timeline.setSelectedLayers(timelineContext.timeline.currentLayer);
            timelineContext.timeline.setSelectedFrames(0, 0, true);
            codeInsideType(timelineContext);
        }
    }
}

code();
