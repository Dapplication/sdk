export interface NodePieceRequest {
    contentId: string;
    index: number;
    offset: number;
}

export interface NodeBytesRequest {
    start: number;
    length: number;
}

export interface NoiaNodeWorkerRequestData {
    pieceIndex: number;
    // tslint:disable-next-line:no-any
    blob: any;
}

export interface NoiaNodeWorkerRequestEvent extends MessageEvent {
    data: NoiaNodeWorkerRequestData;
}

export interface NoiaNodeWorkerData {
    index: number;
    infoHash: string;
    offset: number;
    // tslint:disable-next-line:no-any
    data: any;
}

export interface NoiaNodeWorkerEvent extends MessageEvent {
    data: NoiaNodeWorkerData;
}

export interface PieceResult {
    index: number;
    /**
     * Piece hash for integrity checking.
     */
    contentId: string;
    offset: number;
    buffer: Buffer;
}
