import BaseResponse from ".././Common/BaseResponse";

namespace SignUpViewModel{
    export interface Request {
        name:string;
        username: string;
        password: string;
    }

    export interface Response extends BaseResponse {}
}

export default SignUpViewModel;
