interface FlashPoint {
	x: number;
	y: number;
}

interface FlashRectangle {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

interface FlashMatrix {
	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;
}

interface FlashDocument {
	addDataToDocument(); // Stores specified data with a document.
	addDataToSelection(); // Stores specified data with the selected object(s).
	addFilter(); // Applies a filter to the selected objects.
	addItem(); // Adds an item from any open document or library
	addNewLine(startPoint: FlashPoint, endpoint:FlashPoint):void; // Adds a new path between two points.
	addNewOval(); // Adds a new Oval object in the specified
	addNewRectangle(); // Adds a new rectangle or rounded rectangle,
	addNewScene(); // Adds a new scene (Timeline object) as the next
	addNewText(); // Inserts a new empty text field.
	align(); // Aligns the selection.
	allowScreens(); // Use this method before using the
	arrange(); // Arranges the selection on the Stage.
	breakApart(); // Performs a break-apart operation on the current
	canEditSymbol(); // Indicates whether the Edit Symbols menu and
	canRevert(); // Determines whether you can use the
	canSaveAVersion(); // Determines whether a version of the specified
	canTestMovie(); // Determines whether you can use the
	canTestScene(); // Determines whether you can use the
	changeFilterOrder(); // Changes the index of the filter in the Filter list.
	clipCopy(); // Copies the current selection from the document
	clipCut(); // Cuts the current selection from the document
	clipPaste(); // Pastes the contents of the Clipboard into the
	close(); // Closes the specified document.
	convertLinesToFills(); // Converts lines to fills on the selected objects.
	convertToSymbol(type: string, name: string, registrationPoint: string); // Converts the selected Stage item(s) to a new
	crop(); // Uses the top selected drawing object to crop all
	deleteEnvelope(); // Deletes the envelope (bounding box that
	deletePublishProfile(); // Deletes the currently active profile, if there is
	deleteScene(); // Deletes the current scene (Timeline object), and
	deleteSelection(); // Deletes the current selection on the Stage.
	disableAllFilters(); // Disables all filters on the selected objects.
	disableFilter(); // Disables the specified filter in the Filters list.
	disableOtherFilters(); // Disables all filters except the one at the specified
	distribute(); // Distributes the selection.
	distributeToLayers(); // Performs a distribute-to-layers operation on the
	documentHasData(); // Checks the document for persistent data with the
	duplicatePublishProfile(); // Duplicates the currently active profile and gives
	duplicateScene(); // Makes a copy of the currently selected scene,
	duplicateSelection(); // Duplicates the selection on the Stage.
	editScene(index: number): void; // Makes the specified scene the currently selected
	enableAllFilters(); // Enables all the filters on the Filters list for the
	enableFilter(); // Enables the specified filter for the selected
	enterEditMode(); // Switches the authoring tool into the editing mode
	exitEditMode(); // Exits from symbol-editing mode and returns
	exportPNG(); // Exports the document as one or more PNG files.
	exportPublishProfile(); // Exports the currently active profile to an XML
	exportSWF(); // Exports the document in the Flash SWF format.
	getAlignToDocument(); // Identical to retrieving the value of the To Stage
	getBlendMode(); // Returns a string that specifies the blending mode
	getCustomFill(); // Retrieves the fill object of the selected shape, or
	getCustomStroke(); // Returns the stroke object of the selected shape,
	getDataFromDocument(); // Retrieves the value of the specified data.
	getElementProperty(); // Gets the specified Element property for the
	getElementTextAttr(); // Gets a specified TextAttrs property of the
	getFilters(); // Returns an array that contains the list of filters
	getMetadata(); // Returns a string containing the XML metadata
	getMobileSettings(); // Returns the string passed to
	getPlayerVersion(); // Returns a string that represents the targeted
	getSelectionRect(): FlashRectangle; // Gets the bounding rectangle of the current
	getTextString(); // Gets the currently selected text.
	getTimeline(): FlashTimeline; // Retrieves the current Timeline object in the
	getTransformationPoint(); // Gets the location of the transformation point of
	group(); // Converts the current selection to a group.
	importFile(); // Imports a file into the document.
	importPublishProfile(); // Imports a profile from a file.
	importSWF(); // Imports a SWF file into the document.
	intersect(); // Creates an intersection drawing object from all
	match(); // Makes the size of the selected objects the same.
	mouseClick(); // Performs a mouse click from the Selection tool.
	mouseDblClk(); // Performs a double mouse click from the
	moveSelectedBezierPointsBy(); // If the selection contains at least one path with at
	moveSelectionBy(distanceToMove: FlashPoint); // Moves selected objects by a specified distance.
	optimizeCurves(); // Optimizes smoothing for the current selection,
	publish(); // Publishes the document according to the active
	punch(); // Uses top selected drawing object to punch
	removeAllFilters(); // Removes all filters from the selected object(s).
	removeDataFromDocument(); // Removes persistent data with the specified
	removeDataFromSelection(); // Removes persistent data with the specified
	removeFilter(); // Removes the specified filter from the Filters list
	renamePublishProfile(); // Renames the current profile.
	renameScene(); // Renames the currently selected scene in the
	reorderScene(); // Moves the specified scene before another
	resetOvalObject(); // Sets all values in the Property inspector to
	resetRectangleObject(); // Sets all values in the Property inspector to
	resetTransformation(); // Resets the transformation matrix; equivalent to
	revert(); // Reverts the specified document to its previously
	revertToLastVersion(); // Reverts the specified document to the version
	rotateSelection(angle: number, rotationPoint?: string); // Rotates the selection by a specified number of
    save(bOkToSaveAs?: boolean); // Saves the document in its default location;
	saveAndCompact(); // Saves and compacts the file; equivalent to
	saveAVersion(); // Saves a version of the specified document to the
	scaleSelection(); // Scales the selection by a specified amount;
	selectAll(): void; // Selects all items on the Stage; equivalent to
    selectNone(): void; // Deselects any selected items.
	setAlignToDocument(); // Sets the preferences for document.align(),
	setBlendMode(); // Sets the blending mode for the selected objects.
	setCustomFill(); // Sets the fill settings for the Tools panel, Property
	setCustomStroke(); // Sets the stroke settings for the Tools panel,
	setElementProperty(); // Sets the specified Element property on selected
	setElementTextAttr(); // Sets the specified TextAttrs property of the
	setFillColor(); // Changes the fill color of the selection to the
	setFilterProperty(); // Sets a specified filter property for the currently
	setFilters(); // Applies filters to the selected objects .
	setInstanceAlpha(); // Sets the opacity of the instance.
	setInstanceBrightness(); // Sets the brightness for the instance.
	setInstanceTint(); // Sets the tint for the instance.
	setMetadata(); // Sets the XML metadata for the specified
	setMobileSettings(); // Sets the value of an XML settings string in a
	setOvalObjectProperty(); // Specifies a value for a specified property of
	setPlayerVersion(); // Sets the version of the Flash Player targeted by
	setRectangleObjectProperty(); // Specifies a value for a specified property of
	setSelectionBounds(); // Moves and resizes the selection in a single
	setSelectionRect(); // Draws a rectangular selection marquee relative
	setStroke(); // Sets the color, width, and style of the selected
	setStrokeColor(); // Changes the stroke color of the selection to the
	setStrokeSize(); // Changes the stroke size of the selection to the
	setStrokeStyle(); // Changes the stroke style of the selection to the
	setTextRectangle(); // Changes the bounding rectangle for the selected
	setTextSelection(); // Sets the text selection of the currently selected
	setTextString(); // Inserts a string of text.
	setTransformationPoint(); // Moves the transformation point of the current
	skewSelection(); // Skews the selection by a specified amount.
	smoothSelection(); // Smooths the curve of each selected fill outline or
	space(); // Spaces the objects in the selection evenly.
	straightenSelection(); // Straightens the currently selected strokes;
	swapElement(); // Swaps the current selection with the specified
	swapStrokeAndFill(); // Swaps the Stroke and Fill colors.
	synchronizeWithHeadVersion(); // Synchronizes the specified document with the
	testMovie(); // Executes a Test Movie operation on the
	testScene(); // Executes a Test Scene operation on the current
	traceBitmap(); // Performs a trace bitmap on the current selection;
	transformSelection(); // Performs a general transformation on the current
	unGroup(); // Ungroups the current selection.
	union(); // Combines all selected shapes into a drawing
	unlockAllElements(); // Unlocks all locked elements on the currently
	xmlPanel(); // Posts a XMLUI dialog box.
	accName; // A string that is equivalent to the Name field in the
	as3AutoDeclare; // A Boolean value that describes whether the
	as3Dialect; // A string that describes the ActionScript 3.0
	as3ExportFrame; // An integer that specifies in which frame to export
	as3StrictMode; // A Boolean value that specifies whether the
	as3WarningsMode; // A Boolean value that specifies whether the
	asVersion; // An integer that specifies which version of
	autoLabel; // A Boolean value that is equivalent to the Auto
	backgroundColor; // A string, hexadecimal value, or integer that
	currentPublishProfile; // A string that specifies the name of the active
	currentTimeline: FlashTimeline; // An integer that specifies the index of the active
	description; // A string that is equivalent to the Description field in
	docClass; // Specifies the top-level ActionScript 3.0 class
	forceSimple; // A Boolean value that specifies whether the children
    frameRate: number; // A float value that specifies the number of frames
	height; // An integer that specifies the height of the
	id; // A unique integer (assigned automatically) that
	library: FlashLibrary; // Read-only; the library object for a document.
	livePreview; // A Boolean value that specifies if Live Preview is
	name; // Read-only; a string that represents the name of a
	path; // Read-only; a string that represents the path of the
	publishProfiles; // Read-only; an array of the publish profile names for
	screenOutline; // Read-only; the current ScreenOutline object for the
	selection: any[]; // An array of the selected objects in the document.
	silent; // A Boolean value that specifies whether the object
	timelines: FlashTimeline[]; // Read-only; an array of Timeline objects (see
	viewMatrix: FlashMatrix; // Read-only; a Matrix object.
	width: number; // An integer that specifies the width of the document
    zoomFactor: number; // Specifies the zoom percent of the Stage at author
}

interface FlashFLfile {
	copy(fileURI:string, copyURI:string);
	createFolder(folderURI:string);
	exists(fileURI:string);
	getAttributes(fileOrFolderURI:string);
	getCreationDate(fileOrFolderURI:string);
	getCreationDateObj(fileOrFolderURI:string);
	getModificationDate();
	getModificationDateObj();
	getSize();
	listFolder();
	read();
	remove();
	setAttributes();
	write();
}

interface FlashSoundItem {
}

// if FlashElement.elementType == 'instance'
interface FlashInstance {
	instanceType?: string;
	libraryItem?: FlashItem;
}

interface FlashElement extends FlashInstance {
	getPersistentData(name: string): any;
	getTransformationPoint(): FlashPoint;
	hasPersistentData(name:string): boolean;
	removePersistentData(name:string): void;
	setPersistentData(name:string, type:string, value: any):void;
	setTransformationPoint(transformationPoint: FlashPoint): void;
	depth: number;

	/**
	 * Read-only property; a string that represents the type of the specified element.
	 * The value is one of the following: "shape", "text", "instance", or "shapeObj".
	 * A "shapeObj" is created with an extensible tool.
	 */
	elementType: string;
	height: number;
	layer: FlashLayer;
	left: number;
	locked: boolean;
	matrix: FlashMatrix;
	name: string;
	rotation: number;
	scaleX: number;
	scaleY: number;
	selected: boolean;
	skewX: number;
	skewY: number;
	top: number;
	transformX: number;
	transformY: number;
	width: number;
	x: number;
	y: number;
}

interface FlashFrame {
	getCustomEase();
	setCustomEase();
	actionScript;
	duration;
	elements: FlashElement[];
	hasCustomEase;
	labelType;
	motionTweenOrientToPath;
	motionTweenRotate;
	motionTweenRotateTimes;
	motionTweenScale;
	motionTweenSnap;
	motionTweenSync;
	name;
	shapeTweenBlend;
	soundEffect;
	soundLibraryItem:FlashSoundItem;
	soundLoop;
	soundLoopMode;
	soundName;
	soundSync;
	startFrame;
	tweenEasing;
	tweenType;
	useSingleEaseCurve;
}

interface FlashSymbolItem {
	convertToCompiledClip(): void;
	exportSWC(outputURI: string): void;
	exportSWF(outputURI: string): void;
	scalingGrid: boolean;
	scalingGridRect: FlashRectangle;
	sourceAutoUpdate: boolean;
	sourceFilePath: string;
	sourceLibraryName: string;
	symbolType: string;
	timeline: FlashTimeline;
}

interface FlashItem extends FlashSymbolItem {
	addData();
	getData();
	hasData();
	removeData();
	itemType;
	linkageBaseClass;
	linkageClassName;
	linkageExportForAS;
	linkageExportForRS;
	linkageExportInFirstFrame;
	linkageIdentifier;
	linkageImportForRS;
	linkageURL;
	name;
}

interface FlashLayer {
	color: any;
	frameCount: number;
	frames: FlashFrame[];
	height: number;
	layerType: string;
	locked: boolean;
	name: string;
	outline: boolean;
	parentLayer: FlashLayer;
	visible:boolean;
}

interface FlashLibrary {
	addItemToDocument();
	addNewItem();
	deleteItem();
	duplicateItem();
	editItem(namePath?: string): boolean;
	expandFolder();
	findItemIndex();
	getItemProperty();
	getItemType();
	getSelectedItems();
	importEmbeddedSWF();
	itemExists();
	moveToFolder();
	newFolder();
	renameItem();
	selectAll();
	selectItem();
	selectNone();
	setItemProperty();
	updateItem();
	items: FlashItem[];
}

interface FlashMath {
	concatMatrix();
	invertMatrix();
	pointDistance();
}

interface FlashOutputPannel {
	clear():void;
	save();
	trace(message:string):void;
}

interface FlashHalfEdge {
	getEdge();
	getNext();
	getOppositeHalfEdge();
	getPrev();
	getVertex();
}

interface FlashOval {
	closePath();
	endAngle();
	innerRadius();
	startAngle();
}

interface FlashTimeline {
	currentFrame: number; // A zero-based index for the frame at the current
	currentLayer: number; // A zero-based index for the currently active layer.
	frameCount: number; // Read-only; an integer that represents the number of
	layerCount: number; // Read-only; an integer that represents the number of
	layers: FlashLayer[]; // Read-only; an array of layer objects.
	name: string; // A string that represents the name of the current
}

interface FlashFL {
	addEventListener();
	browseForFileURL();
	clipCopyString();
	closeAll();
	closeAllPlayerDocuments();
	closeDocument();
	closeProject();
    createDocument(document?: string): FlashDocument;
    createDocument(document?: "timeline"): FlashDocument;
    createDocument(document?: "presentation"): FlashDocument;
    createDocument(document?: "application"): FlashDocument;
	createProject();
	downloadLatestVersion();
	enableImmediateUpdates();
	fileExists();
	findDocumentDOM();
	findDocumentIndex();
	findObjectInDocByName();
	findObjectInDocByType();
	getAppMemoryInfo();
    
    /*
     * Method; retrieves the DOM (Document object) of the currently active document (FLA file).
     * If one or more documents are open but a document does not currently have focus (for
     * example, if a JSFL file has focus), retrieves the DOM of the most recently active document.
     * getDocumentDOM(): Document;
     */
    getDocumentDOM(): FlashDocument;

	getProject();
	mapPlayerURL();
	openDocument();
	openProject();
	openScript();
	quit();
	reloadEffects();
	reloadTools();
	removeEventListener();
	resetAS3PackagePaths();
	resetPackagePaths();
	revertDocumentToLastVersion();
	runScript(fileURI:string, funcName?: Function, args?: any[]): any;
	saveAll();
	saveVersionOfDocument();
	saveDocument();
	saveDocumentAs();
	selectElement();
	selectTool();
	selectActiveWindow();
	showIdleMessage();
	synchronizeDocumentWithHeadVersion();
	trace(message:any):void;
	actionsPanel;
	activeEffect;
	as3PackagePaths;
	compilerErrors;
	componentsPanel;
	configDirectory;
	configURI;
	contactSensitiveSelection;
	createNewDocList;
	createNewDocListType;
	createNewTemplateList;
    documents: FlashDocument[];
	drawingLayer;
	effects;
	Math;
	mruRecentFileList;
	mruRecentFileListType;
	packagePaths;
	objectDrawingMode;
	outputPanel: FlashOutputPannel;
	scriptURI: string;
	tools;
	version;
	xmlui;
}

declare var fl:FlashFL;
declare function alert();
declare function confirm();
declare function prompt();