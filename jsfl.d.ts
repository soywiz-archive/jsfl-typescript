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
	// "integer", "integerArray", "double", "doubleArray", "string", and "byteArray"
	addDataToDocument(name: string, type: string, data: any): void; // Stores specified data with a document.
	addDataToSelection(name: string, type: string, data: any): void; // Stores specified data with the selected object(s).
	addFilter(filterName: string): void; // Applies a filter to the selected objects.
	addItem(position: FlashPoint, item: FlashItem): boolean; // Adds an item from any open document or library
	addNewLine(startPoint: FlashPoint, endpoint: FlashPoint):void; // Adds a new path between two points.
	addNewOval(boundingRectangle: FlashRectangle, bSuppressFill?: boolean, bSuppressStroke?: boolean): void; // Adds a new Oval object in the specified
	addNewPrimitiveOval(boundingRectangle: FlashRectangle, bSpupressFill?: boolean, bSuppressStroke?: boolean): void;
	addNewRectangle(boundingRectangle: FlashRectangle, roundness: number, bSuppressFill?: boolean, bSuppressStroke?: boolean); // Adds a new rectangle or rounded rectangle,
	addNewPrimitiveRectangle(boundingRectangle: FlashRectangle, roundness: number, bSuppressFill?: boolean, bSuppressStroke?: boolean); // Adds a new rectangle or rounded rectangle,
	addNewPublishProfile(profileName?: string): void;
	addNewScene(name: string): boolean; // Adds a new scene (Timeline object) as the next
	addNewText(boundingRectangle: FlashRectangle, text?: string): void; // Inserts a new empty text field.
	align(alignmode: string, bUseDocumentBounds?: boolean); // Aligns the selection.
	allowScreens(): void; // Use this method before using the
	/** Arranges the selection on the Stage. "back", "backward", "forward", and "front" */
	arrange(arrangeMode: string): void;
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
	
	/** Changes the bounding rectangle for the selected */
	setTextRectangle(boundingRectangle: FlashRectangle): boolean;
	
	/** Sets the text selection of the currently selected */
	setTextSelection(startIndex: number, endIndex: number): boolean;
	
	/** Inserts a string of text. */
	setTextString(text: string, startIndex?: number, endIndex?: number): boolean;
	
	/** Moves the transformation point of the current */
	setTransformationPoint(transformationPoint: FlashPoint): void;
	
	/** Skews the selection by a specified amount. */
	skewSelection(xSkew: number, ySkew: number, whichEdge?: string): void;
	
	/** Smooths the curve of each selected fill outline or */
	smoothSelection(): void;
	
	/** Spaces the objects in the selection evenly. */
	space(direction: string, bUseDocumentBounds?: boolean): void;
	
	/** Straightens the currently selected strokes; */
	straightenSelection(): void;
	
	/** Swaps the current selection with the specified */
	swapElement(name: string): void;
	
	/** Swaps the Stroke and Fill colors. */
	swapStrokeAndFill(): void;
	//synchronizeWithHeadVersion(); // Synchronizes the specified document with the

	/** Executes a Test Movie operation on the */
	testMovie(): void;
	
	/** Executes a Test Scene operation on the current */
	testScene(): void;
	
	/** Performs a trace bitmap on the current selection; */
	traceBitmap(threshold: number, minimumArea: number, curveFit: string, cornerThreshold: string): void;
	transformSelection(a: number, b: number, c: number, d: number): void; // Performs a general transformation on the current
	unGroup(): void; // Ungroups the current selection.
	union(): void; // Combines all selected shapes into a drawing
	unlockAllElements(): void; // Unlocks all locked elements on the currently
	xmlPanel(fileURI: string): any; // Posts a XMLUI dialog box.
	accName: string; // A string that is equivalent to the Name field in the
	as3AutoDeclare: boolean; // A Boolean value that describes whether the
	as3Dialect: string; // A string that describes the ActionScript 3.0
	as3ExportFrame: number; // An integer that specifies in which frame to export
	as3StrictMode: boolean; // A Boolean value that specifies whether the
	as3WarningsMode: boolean; // A Boolean value that specifies whether the
	asVersion: number; // An integer that specifies which version of
	autoLabel: boolean; // A Boolean value that is equivalent to the Auto
	backgroundColor: any; // A string, hexadecimal value, or integer that
	currentPublishProfile: string; // A string that specifies the name of the active
	currentTimeline: FlashTimeline; // An integer that specifies the index of the active
	description: string; // A string that is equivalent to the Description field in
	docClass; // Specifies the top-level ActionScript 3.0 class
	forceSimple: boolean; // A Boolean value that specifies whether the children
    frameRate: number; // A float value that specifies the number of frames
	height: number; // An integer that specifies the height of the
	id: number; // A unique integer (assigned automatically) that
	library: FlashLibrary; // Read-only; the library object for a document.
	livePreview: boolean; // A Boolean value that specifies if Live Preview is
	name: number; // Read-only; a string that represents the name of a
	path: number; // Read-only; a string that represents the path of the
	publishProfiles: string[]; // Read-only; an array of the publish profile names for
	
	/** Read-only; the current ScreenOutline object for the */
	// Not available in CS5
	//screenOutline: FlashScreenOutline;

	/** An array of the selected objects in the document. */
	selection: any[];
	
	/** A Boolean value that specifies whether the object */
	silent: boolean;
	
	/** Read-only; an array of Timeline objects (see */
	timelines: FlashTimeline[];
	
	/** Read-only; a Matrix object. */
	viewMatrix: FlashMatrix;
	
	/** An integer that specifies the width of the document */
	width: number;
	
	/** Specifies the zoom percent of the Stage at author */
	zoomFactor: number;
}

interface FlashFLfile {
	copy(fileURI:string, copyURI:string): boolean;
	createFolder(folderURI:string): boolean;
	exists(fileURI:string): boolean;
	getAttributes(fileOrFolderURI:string): string;
	getCreationDate(fileOrFolderURI:string): string;
	getCreationDateObj(fileOrFolderURI:string): Date;
	getModificationDate(fileOrFolderURI:string): string;
	getModificationDateObj(fileOrFolderURI: string): Date;
	getSize(fileURI: string): number;
	listFolder(folderURI: string, filesOrDirectories?: boolean): string[];
	platformPathToURI(fileName: string): string;
	read(fileOrFolderURI: string): string;
	remove(fileOrFolderURI: string): boolean;
	setAttributes(fileURI: string, strAttrs: string): boolean;
	uriToPlatformPath(fileURI: string): string;
	write(fileURI: string, textToWrite: string, strAppendMode?: string): boolean;
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

interface FlashFolderItem {
}

interface FlashFontItem {
	// Specifies whether the Font item is bitmapped.
	bitmap;
	// Specifies whether the Font item is bold.
	bold;
	// Specifies characters to embed.
	embeddedCharacters;
	// Specifies items that can be selected in the Font Embedding dialog.
	embedRanges;
	// Specifies whether variant glyphs should be output in the font when publishing a SWF file.
	embedVariantGlyphs;
	// The name of the device font associated with the Font item.
	font;
	// Specifies the format of the font that is output when publishing a SWF filem.
	isDefineFont4Symbol;
	// Specifies whether the Font item is italic.
	italic;
	// The size of the Font item, in points.
	size;
}

interface FlashSoundItem {
	exportToFile();
	bitRate: string;
	bits: string;
	compressionType: string;
	convertStereoToMono: boolean;
	fileLastModifiedDate: string;
	originalCompressionType: string;
	quality: string;
	sampleRate: string;
	sourceFileExists: boolean;
}

interface FlashVideoItem {
	exportToFLV();
	fileLastModifiedDate: string;
	sourceFileExists: boolean;
	sourceFileIsCurrent: boolean;
	sourceFilePath: string;
	videoType: string;
}

interface FlashBitmapItem {
	exportToFile(fileURI: string): boolean;
	allowSmoothing: boolean;
	compressionType: string;
	fileLastModifiedDate: string;
	originalCompressionType: string;
	sourceFileExists: boolean;
	sourceFileIsCurrent: boolean;
	sourceFilePath: string;
	useDeblocking: boolean;
	useImportedJPEGQuality: boolean;
}

interface FlashItem extends FlashSymbolItem, FlashFolderItem, FlashFontItem, FlashSoundItem, FlashVideoItem, FlashBitmapItem, FlashBitmapItem {
	addData(name: string, type: string, data: any): void;
	getData(name: string): any;
	hasData(name: string): boolean;
	removeData(name: string): void;
	
	/** Read-only; a string that specifies the type of element.  "undefined", "component", "movie clip", "graphic", "button", "folder", "font", "sound", "bitmap", "compiled clip", "screen", or "video" */
	itemType: string;
	linkageBaseClass: string;
	linkageClassName: string;
	linkageExportForAS: boolean;
	linkageExportForRS: boolean;
	linkageExportInFirstFrame: boolean;
	linkageIdentifier: string;
	linkageImportForRS: boolean;
	linkageURL: string;
	/** A string that specifies the name of the library item, which includes the folder structure. */
	name: string;
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
	addItemToDocument(position: FlashPoint, namePath?: string): boolean;
	/** "video", "movie clip", "button", "graphic", "bitmap", "screen", and "folder" */
	addNewItem(type: string, namePath?: string): boolean;
	deleteItem(namePath?: string): boolean;
	/** Method; makes a copy of the currently selected or specified item. The new item has a default name (such as item copy) and is set as the currently selected item. If more than one item is selected, the command fails. */
	duplicateItem(namePath: string): boolean;
	editItem(namePath?: string): boolean;
	expandFolder(bExpand: boolean, bRecurseNestedParents?: boolean, namePath?: string): boolean;
	findItemIndex(namePath: string): number;
	getItemProperty(property: string): string;
	getItemType(namePath?: string): string;
	
	/** An array of values for all currently selected items in the library. */
	getSelectedItems(): FlashItem[];

	importEmbeddedSWF(linkageName: string, swfData: any[], libName?: string): void;

	itemExists(namePath: string): boolean;

	moveToFolder(folderPath: string, itemToMove?: string, bReplace?: boolean): boolean;

	/** Method; creates a new folder with the specified name, or a default name ("untitled folder #" ) if no folderName parameter is provided, in the currently selected folder. */
	newFolder(folderPath?: string): boolean;

	/** Method; renames the currently selected library item in the Library panel. */
	renameItem(name: string): boolean;

	/** Method; selects or deselects all items in the library. */
	selectAll(bSelectAll?: boolean): void;

	/** Method; selects a specified library item. */
	selectItem(namePath: string, bReplaceCurrentSelection?: boolean, bSelect?: boolean): boolean;

	/** Method; deselects all the library items. */
	selectNone(): void;

	/** Method; sets the property for all selected library items (ignoring folders). */
	setItemProperty(property: string, value: any): void;

	/** Method; updates the specified item. */
	updateItem(namePath: string): boolean;

	/** Property; an array of item objects in the library. */
	items: FlashItem[];
}

interface FlashMath {
	/** Method; performs a matrix concatenation and returns the result. */
	concatMatrix(mat1: FlashMatrix, mat2: FlashMatrix): FlashMatrix;

	/** A Matrix object that is the inverse of the original matrix. */
	invertMatrix(mat: FlashMatrix): FlashMatrix;

	/** A floating-point value that represents the distance between the points. */
	pointDistance(pt1: FlashPoint, pt2: FlashPoint): number;
}

interface FlashOutputPanel {
	/** Method; clears the contents of the Output panel. You can use this method in a batch processing application to clear a list of errors, or to save them incrementally by using this method withoutputPanel.save(). */
	clear(): void;

	save(fileURI: string, bAppendToFile?: boolean, bUseSystemEncoding?: boolean): void;

	trace(message:string):void;
}

/**
 * The HalfEdge object is the directed side of the edge of a Shape object.
 * An edge has two half edges. You can transverse the contours of a shape by "walking around"
 * these half edges. For example, starting from a half edge, you can trace all the half edges
 * around a contour of a shape, and return to the original half edge.  Half edges are ordered.
 * One half edge represents one side of the edge; the other half edge represents the other side.
 */
interface FlashHalfEdge {
	getEdge(): FlashEdge;
	getNext(): FlashHalfEdge;
	getOppositeHalfEdge(): FlashHalfEdge;
	getPrev(): FlashHalfEdge;
	getVertex(): FlashVertex;
	id: number;
	index: number;
}

/** The Oval object is a shape that is drawn using the Oval Primitive tool. To determine if an item is an Oval object, use shape.isOvalObject. */
interface FlashOval {
	/** Read-only property; a Boolean value that specifies whether the Close Path check box in the Property inspector is selected. If the start angle and end angle values for the object are the same, setting this property has no effect until the values change. To set this value, use document.setOvalObjectProperty(). */
	closePath: boolean;
	/** Read-only property; a float value that specifies the end angle of the Oval object. Acceptable values are from 0 to 360. */
	endAngle: number;
	/** Read-only property; a float value that specifies the inner radius of the Oval object as a percentage. Acceptable values are from 0 to 99. */
	innerRadius: number;
	/** Read-only property; a float value that specifies the start angle of the Oval object. Acceptable values are from 0 to 360. To set this value, use document.setOvalObjectProperty(). */
	startAngle: number;
}

/**
 * This object contains all the properties of the Fill color setting of the Tools panel or of a selected shape. To retrieve a Fill object, use document.getCustomFill().
 */
interface FlashFill {
	bitmapIsClipped: boolean;
	bitmapPath: string;
	/** Property; the color of the fill, in one of the following formats:
	 * - A string in the format "#RRGGBB" or "#RRGGBBAA"
	 * - A hexadecimal number in the format 0xRRGGBB
	 * - An integer that represents the decimal equivalent of a hexadecimal number
	 */
	color: any;
	/** Property; an array of colors in the gradient, expressed as integers. This property is available only if the value of the fill.style property is either "radialGradient" or "linearGradient". See fill.style */
	colorArray: any[];
	focalPoint: number;
	linearRGB: boolean;
	matrix: FlashMatrix;
	overflow: string;
	posArray: number[];
	style: string;
}

interface FlashContour {
	getHalfEdge(): FlashHalfEdge;
	fill: FlashFill;
	interior: boolean;
	orientation: number;
}

interface FlashStroke {
	/// A Boolean value, same as the Sharp Corners setting in the custom Stroke Style dialog box.
	breakAtCorners: boolean;
	/// A string that specifies the type of cap for the stroke.
	capType: string;
	/// A string, hexadecimal value, or integer that represents the stroke color.
	color: any;
	/// A string that specifies the type of hatching for the stroke.
	curve: string;
	/// An integer that specifies the lengths of the solid part of a dashed line.
	dash1: number;
	/// An integer that specifies the lengths of the blank part of a dashed line.
	dash2: number;
	/// A string that specifies the density of a stippled line.
	density: string;
	/// A string that specifies the dot size of a stippled line.
	dotSize: string;
	/// An integer that specifies the spacing between dots in a dotted line.
	dotSpace: number;
	/// A string that specifies the thickness of a hatch line.
	hatchThickness: string;
	/// A string that specifies the jiggle property of a hatched line.
	jiggle: string;
	/// A string that specifies the type of join for the stroke.
	joinType: string;
	/// A string that specifies the length of a hatch line.
	length: string;
	/// A float value that specifies the angle above which the tip of the miter will be truncated by a segment.
	miterLimit: number;
	/// A string that specifies the pattern of a ragged line.
	pattern: string;
	/// A string that specifies the rotation of a hatch line.
	rotate: string;
	/// A string that specifies the type of scale to be applied to the stroke.
	scaleType: string;
	/// A Fill object that represents the fill settings of the stroke.
	shapeFill: FlashFill;
	/// A string that specifies the spacing of a hatched line.
	space: string;
	/// A Boolean value that specifies whether stroke hinting is set on the stroke.
	strokeHinting: boolean;
	/// A string that describes the stroke style.
	style: string;
	/// An integer that specifies the stroke size.
	thickness: number;
	/// A string that specifies the variation of a stippled line.
	variation: string;
	/// A string that specifies the wave height of a ragged line.
	waveHeight: string;
	/// A string that specifies the wave length of a ragged line.
	waveLength: string;
}

interface FlashEdge {
	getControl(i: number): FlashPoint;
	getHalfEdge(index: number): FlashHalfEdge;
	setControl(index: number, x:number, y:number): void;
	splitEdge(t: number): void;
	cubicSegmentIndex: number;
	id: number;
	isLine: boolean;
	stroke: FlashStroke;
}

interface FlashVertex {
	getHalfEdge(): FlashHalfEdge;
	setLocation(x: number, y: number);
	x: number;
	y: number;
}

/**
 * The Shape object is a subclass of the Element object. The Shape object provides more precise control
 * than the drawing APIs when manipulating or creating geometry on the Stage. This control is necessary
 * so that scripts can create useful effects and other drawing commands (seeElement object).
 * All Shape methods and properties that change a shape or any of its subordinate parts must be placed between
 * shape.beginEdit() and shape.endEdit() calls to function correctly.
 */
interface FlashShape extends FlashOval {
	getCubicSegmentPoints(cubicSegmentIndex:number): number;
	beginEdit():void;
	deleteEdge(index:number):void;
	endEdit():void;
	contours: FlashContour[];
	edges: FlashEdge[];
	isDrawingObject: boolean;
	isGroup: boolean;
	isOvalObject: boolean;
	isRectangleObject: boolean;
	members: FlashShape[];
	numCubicSegments: number;
	vertices: FlashVertex[];
}

interface FlashTimeline {
	currentFrame: number; // A zero-based index for the frame at the current
	currentLayer: number; // A zero-based index for the currently active layer.
	frameCount: number; // Read-only; an integer that represents the number of
	layerCount: number; // Read-only; an integer that represents the number of
	layers: FlashLayer[]; // Read-only; an array of layer objects.
	name: string; // A string that represents the name of the current
}

interface FlashPath {
	/// Appends a cubic Bézier curve segment to the path.
	addCubicCurve(xAnchor: number, yAnchor: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;
	/// Appends a quadratic Bézier segment to the path.
	addCurve(xAnchor: number, yAnchor: number, x2: number, y2: number, x3: number, y3: number): void;
	/// Adds a point to the path.
	addPoint(x: number, y: number): void;
	/// Removes all points from the path.
	clear(): void;
	/// Appends a point at the location of the first point of the path and extends the path to that point, which closes the path.
	close(); void;
	/// Creates a shape on the Stage by using the current stroke and fill settings.
	makeShape(bSupressFill?: boolean, bSupressStroke?: boolean): void;
	/// Starts a new contour in the path.
	newContour(): void;
	/// Read-only; an integer representing the number of points in the path.
	nPts: number;
}

interface FlashDrawingLayer {
	/// Puts Flash in drawing mode.
	beginDraw(persistentDraw?: boolean): void;
	/// Erases what was previously drawn using the drawingLayer and prepares for more drawing commands.
	beginFrame(): void;
	/// Draws a cubic curve from the current pen location using the parameters as the coordinates of the cubic segment.
	cubicCurveTo(x1Ctrl: number, y1Ctrl: number, x2Ctl: number, y2Ctl: number, xEnd: number, yEnd: number): void;
	/// Draws a quadratic curve segment starting at the current drawing position and ending at a specified point.
	curveTo(xCtl: number, yCtl: number, xEnd: number, yEnd: number): void;
	/// Draws the specified path.
	drawPath(path: FlashPath): void;
	/// Exits drawing mode.
	endDraw(): void;
	/// Signals the end of a group of drawing commands.
	endFrame(): void;
	/// Draws a line from the current drawing position to the point (x,y).
	lineTo(x: number, y: number): void;
	/// Sets the current drawing position.
	moveTo(x: number, y: number): void;
	/// Returns a new Path object.
	newPath(): void;
	/// Sets the color of subsequently drawn data.
	setColor(color: any): void;
	/// This method is not available.
	setFill(): void;
	/// This method is not available.
	setStroke(): void;
}

interface FlashXMLUI {
	accept();
	cancel();
	get();
	getControlItemElement();
	getEnabled();
	getVisible();
	met();
	metControItemElement();
	metControItemElements();
	setEnabled();
	setVisible();
}

interface FlashActionsPanel {
	getClassForObject();
	getScriptAssistMode();
	getSelectedText();
	getText();
	hasSelection();
	replaceSelectedText();
	setScriptAssistMode();
	setSelection();
	setText();
}

interface FlashCompilerErrors {
	clear();
	save();
}

interface FlashComponentsPanel {
	addItemToDocument();
	reload();
}

interface FlashPresetPanel {
	addNewItem();
	applyPreset();
	deleteFolder();
	deleteItem();
	expandFolder();
	exportItem();
	findItemIndex();
	getSelectedItems();
	importItem();
	moveToFolder();
	newFolder();
	renameItem();
	selectItem();
}

interface FlashSwfPanel {
	call();
	setFocus();
	name;
	path;
}

interface FlashTools {
	constraintPoint();
	getKeyDown();
	setCreatingBbox();
	setCursor();
	snapPoint();
	activeTool;
	altIsDown;
	ctlIsDown;
	mouseIsDown;
	penDownLoc;
	penLoc;
	shiftIsDown;
	toolObjs;
}

interface FlashFL {
	addEventListener(eventType, callbackFunction);
	browseForFileURL(browseType, title?, previewArea?);
	browseForFolderURL(description: string);
	clearPublishCache(): void;
	clipCopyString(string: string): void;
	closeAll(bPromptToSave?: boolean): void;
	closeAllPlayerDocuments(): boolean;
	closeDocument(documentObject: FlashDocument, bPromptToSaveChanges?: boolean);
	//closeProject();
	/** A string that specifies the type of document to create. Acceptable values are "timeline", "presentation", and "application". The default value is "timeline", which has the same effect as choosing File > New > Flash File (ActionScript 3.0). This parameter is optional. */
	createDocument(document?: string): FlashDocument;

	exportPublishProfileString(ucfURI: string, profileName: string): string;

	//createProject();
	//downloadLatestVersion(); // Not in CS5
	//enableImmediateUpdates();

	fileExists(fileURI: string): boolean;
	findDocumentDOM(id: number): FlashDocument;
	findDocumentIndex(name: string): number[];
	findObjectInDocByName(instanceName: string, document: FlashDocument): { keyframe: FlashFrame; layer: FlashLayer; timeline: FlashTimeline; parent; }[];
	/** elementType = "shape", "text", "instance", or "shapeObj". */
	findObjectInDocByType(elementType: string, document: FlashDocument): any[];
	getAppMemoryInfo(memType: number);
	
	/*
	 * Method; retrieves the DOM (Document object) of the currently active document (FLA file).
	 * If one or more documents are open but a document does not currently have focus (for
	 * example, if a JSFL file has focus), retrieves the DOM of the most recently active document.
	 * getDocumentDOM(): Document;
	 */
	getDocumentDOM(): FlashDocument;

	//getProject();

	getSwfPanel();

	isFontInstalled();


	mapPlayerURL(URI: string, returnMBCS?: boolean): string;

	/** Method; opens a Flash document (FLA file) for editing in a new Flash Document window and gives it focus. For a user, the effect is the same as selecting File > Open and then selecting a file. If the specified file is already open, the window that contains the document comes to the front. The window that contains the specified file becomes the currently selected document. */
	openDocument(fileURI: string): FlashDocument;

	//openProject();

	openScript(fileURI: string, createExtension?: string, className?: string): void;

	quit(bPromptIfNeeded?: boolean): void;

	//reloadEffects(): void;

	reloadTools(): void;

	/** documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged", and "frameChanged". */
	removeEventListener(eventType: string): boolean;
	resetAS3PackagePaths(): void;
	resetPackagePaths(): void;
	revertDocument(document: FlashDocument): void;
	//revertDocumentToLastVersion();

	runScript(fileURI: string, funcName?: Function, args?: any[]): any;

	saveAll(): void;

	//saveVersionOfDocument();
	saveDocument(document: FlashDocument, fileURI?: string): boolean;
	saveDocumentAs(document: FlashDocument): boolean;

	/** Method; enables selection or editing of an element. Generally, you will use this method on objects returned by fl.findObjectInDocByName() or fl.findObjectInDocByType(). */
	selectElement(elementObject: FlashElement, editMode: boolean): boolean;

	/** "arrow","bezierSelect","freeXform","fillXform","lasso","pen","penplus","penminus","penmodify","text","line","rect","oval","rectPrimitive","ovalPrimitive","polystar","pencil","brush","inkBottle","bucket","eyeDropper","eraser","hand", and "magnifier". */
	selectTool(toolName: string): void;

	selectActiveWindow(document: FlashDocument, bActivateFrame?: boolean): void;

	showIdleMessage(show: boolean): void;

	toggleBreakpoint();

	//synchronizeDocumentWithHeadVersion();
	trace(message: any): void;
	
	actionsPanel: FlashActionsPanel;
	//activeEffect;
	as3PackagePaths: string;
	compilerErrors: FlashCompilerErrors;
	componentsPanel: FlashComponentsPanel;
	configDirectory: string;
	configURI: string;
	contactSensitiveSelection: boolean;
	createNewDocList: string[];
	createNewDocListType: string[];
	createNewTemplateList: string[];
	documents: FlashDocument[];
	drawingLayer: FlashDrawingLayer;
	//effects;
	externalLibraryPath: string;
	flexSDKPath: string;
	installedPlayers: any[];
	languageCode: string;
	libraryPath: string;
	Math: FlashMath;
	mruRecentFileList: string[];
	mruRecentFileListType: string[];
	packagePaths: string[];
	publishCacheDiskSizeMax: number;
	publishCacheEnabled: boolean;
	publishCacheMemoryEntrySizeLimit: number;
	publishCacheMemorySizeMax: number;

	objectDrawingMode: number;
	outputPanel: FlashOutputPanel;
	presetPanel: FlashPresetPanel;
	scriptURI: string;
	sourcePath: string;
	swfPanels: FlashSwfPanel[];
	tools: FlashTools[];
	version: string;
	xmlui: FlashXMLUI;
}

declare var fl:FlashFL;
declare function alert();
declare function confirm();
declare function prompt();