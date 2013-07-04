interface Point {
	x: number;
	y: number;
}

interface Matrix {
	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;
}

interface Document {
	addDataToDocument(); // Stores specified data with a document.
	addDataToSelection(); // Stores specified data with the selected object(s).
	addFilter(); // Applies a filter to the selected objects.
	addItem(); // Adds an item from any open document or library
	addNewLine(startPoint:Point, endpoint:Point):void; // Adds a new path between two points.
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
	revert(); // or fl.revertDocument()
	canSaveAVersion(); // Determines whether a version of the specified
	canTestMovie(); // Determines whether you can use the
	testMovie(); // method successfully.
	canTestScene(); // Determines whether you can use the
	testScene(); // method successfully.
	changeFilterOrder(); // Changes the index of the filter in the Filter list.
	clipCopy(); // Copies the current selection from the document
	clipCut(); // Cuts the current selection from the document
	clipPaste(); // Pastes the contents of the Clipboard into the
	close(); // Closes the specified document.
	convertLinesToFills(); // Converts lines to fills on the selected objects.
	convertToSymbol(); // Converts the selected Stage item(s) to a new
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
	editScene(); // Makes the specified scene the currently selected
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
	getSelectionRect(); // Gets the bounding rectangle of the current
	getTextString(); // Gets the currently selected text.
	getTimeline(); // Retrieves the current Timeline object in the
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
	moveSelectionBy(); // Moves selected objects by a specified distance.
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
	rotateSelection(); // Rotates the selection by a specified number of
	save(); // Saves the document in its default location;
	saveAndCompact(); // Saves and compacts the file; equivalent to
	saveAVersion(); // Saves a version of the specified document to the
	scaleSelection(; // Scales the selection by a specified amount;
	selectAll(); // Selects all items on the Stage; equivalent to
	selectNone(); // Deselects any selected items.
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
	currentTimeline; // An integer that specifies the index of the active
	description; // A string that is equivalent to the Description field in
	docClass; // Specifies the top-level ActionScript 3.0 class
	forceSimple; // A Boolean value that specifies whether the children
	frameRate; // A float value that specifies the number of frames
	height; // An integer that specifies the height of the
	id; // A unique integer (assigned automatically) that
	library; // Read-only; the library object for a document.
	livePreview; // A Boolean value that specifies if Live Preview is
	name; // Read-only; a string that represents the name of a
	path; // Read-only; a string that represents the path of the
	publishProfiles; // Read-only; an array of the publish profile names for
	screenOutline; // Read-only; the current ScreenOutline object for the
	selection; // An array of the selected objects in the document.
	silent; // A Boolean value that specifies whether the object
	timelines: Timeline[]; // Read-only; an array of Timeline objects (see
	viewMatrix; // Read-only; a Matrix object.
	width; // An integer that specifies the width of the document
	zoomFactor; // Specifies the zoom percent of the Stage at author
}

interface FLfile {
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

interface SoundItem {
}

interface Frame {
	getCustomEase();
	setCustomEase();
	actionScript;
	duration;
	elements;
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
	soundLibraryItem:SoundItem;
	soundLoop;
	soundLoopMode;
	soundName;
	soundSync;
	startFrame;
	tweenEasing;
	tweenType;
	useSingleEaseCurve;
}

interface Item {
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

interface Layer {
	color: any;
	frameCount: number;
	frames: Frame[];
	height: number;
	layerType: string;
	locked: boolean;
	name: string;
	outline: boolean;
	parentLayer: Layer;
	visible:boolean;
}

interface Library {
	addItemToDocument();
	addNewItem();
	deleteItem();
	duplicateItem();
	editItem();
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
	items: Item[];
}

interface Math {
	concatMatrix();
	invertMatrix();
	pointDistance();
}

interface OutputPannel {
	clear():void;
	save();
	trace(message:string):void;
}

interface HalfEdge {
	getEdge();
	getNext();
	getOppositeHalfEdge();
	getPrev();
	getVertex();
}

interface Instance {
	instanceType:string;
	libraryItem;
}

interface Oval {
	closePath();
	endAngle();
	innerRadius();
	startAngle();
}

interface Timeline {
	timeline.currentFrame: number; // A zero-based index for the frame at the current
	timeline.currentLayer: number; // A zero-based index for the currently active layer.
	timeline.frameCount: number; // Read-only; an integer that represents the number of
	timeline.layerCount: number; // Read-only; an integer that represents the number of
	timeline.layers: Layer[]; // Read-only; an array of layer objects.
	timeline.name: string; // A string that represents the name of the current
}

interface FL {
	addEventListener();
	browseForFileURL();
	clipCopyString();
	closeAll();
	closeAllPlayerDocuments();
	closeDocument();
	closeProject();
	createDocument(document?: string): Document;
	createDocument(document?: "timeline"): Document;
	createDocument(document?: "presentation"): Document;
	createDocument(document?: "application"): Document;
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
	getDocumentDOM(): Document;

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
	runScript();
	saveAll();
	saveVersionOfDocument();
	saveDocument();
	saveDocumentAs();
	selectElement();
	selectTool();
	selectActiveWindow();
	showIdleMessage();
	synchronizeDocumentWithHeadVersion();
	trace();
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
	documents: Document[];
	drawingLayer;
	effects;
	Math;
	mruRecentFileList;
	mruRecentFileListType;
	packagePaths;
	objectDrawingMode;
	outputPanel;
	scriptURI;
	tools;
	version;
	xmlui;
}

declare var fl:FL;
declare function alert();
declare function confirm();
declare function prompt();