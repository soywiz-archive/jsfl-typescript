interface Document {
}

interface Root {
	documents: Document[];
	getDocumentDOM(): Document;
}

declare var fl:Root;
declare function alert();
declare function confirm();
declare function prompt();