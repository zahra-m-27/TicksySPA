import BaseResponse from "../../Common/BaseResponse";
import UserSerializerRestrictedDto from "../../DTOs/UserSerializerRestrictedDto";

namespace SearchEmailViewModel {
  export interface Request {
    search: string;
  }

  export interface Response extends UserSerializerRestrictedDto {}
}

export default SearchEmailViewModel;
