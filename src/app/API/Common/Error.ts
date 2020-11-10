import ErrorCode from "../Enum/ErrorCode";

export default interface Error {
    code: ErrorCode;
    message: string;
}
