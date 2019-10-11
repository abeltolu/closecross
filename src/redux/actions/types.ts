type IActionError = {
    type: string;
    err: any;
};

type IActionCryptoRequestPayload = {
    cryptocurrency_type?: string;
    aux?: string;
    convert_id?: string;
    volume_24h_min?: string;
};

export type IActionResponse = {
    response: any;
};

export type IActionPayload = {
    start?: number;
    limit?: number;
} & IActionCryptoRequestPayload;

export type IAction = IActionError &
    IActionResponse & { payload: IActionPayload };
