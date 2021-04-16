import {Post} from '../fetch';
import SearchEmailViewModel from '../ViewModels/Email/SearchEmailViewModel';

const ControllerName = 'email';

function SearchEmail(args: SearchEmailViewModel.Request) {
  return Post<SearchEmailViewModel.Response[]>(
    ControllerName + '/?search=' + args.search,
    undefined,
    'GET'
  );
}

const Actions = {
  SearchEmail,
};

export default Actions;
