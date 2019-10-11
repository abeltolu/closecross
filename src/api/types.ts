export interface TabBarIconProps {
    tintColor: string | null;
    focused: boolean;
    horizontal: boolean;
}

export type IError = {
    error_code: number;
    error_message: string;
};

export type FailureCallback = (error: string) => void;

export type SuccessCallback = (response: any) => void;
