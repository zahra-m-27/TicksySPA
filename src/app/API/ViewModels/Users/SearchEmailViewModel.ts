import UserSerializerRestrictedDto from '../../DTOs/UserSerializerRestrictedDto';

namespace SearchEmailViewModel {
  export interface Request {
    search: string;
  }

  export type Response = UserSerializerRestrictedDto;
}

export default SearchEmailViewModel;
