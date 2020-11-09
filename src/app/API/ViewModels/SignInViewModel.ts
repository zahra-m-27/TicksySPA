import BaseResponse from "../Common/BaseResponse";

namespace SignInViewModel {
    export interface Request {
        username: string;
        password: string;
        
    }

    export interface Response extends BaseResponse {}
}

export default SignInViewModel;
