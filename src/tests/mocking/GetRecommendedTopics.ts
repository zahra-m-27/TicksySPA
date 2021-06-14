import {error, noError} from '.';
import GetRecommendedTopics from '../../app/API/Domains/GetRecommendedTopics';
import GetRecommendedTopicsViewModel from '../../app/API/ViewModels/GetRecommendedTopics/GetRecommendedTopicsViewModel';

export function mockGetRecommendedTopics() {
  mockGetRecommendedTopicsAction();
}

function mockGetRecommendedTopicsAction() {
  jest.spyOn(GetRecommendedTopics, 'GetRecommendedTopics');
  const mocked =
    GetRecommendedTopics.GetRecommendedTopics as jest.MockedFunction<
      typeof GetRecommendedTopics.GetRecommendedTopics
    >;
  mocked.mockImplementation(({page}) => {
    if (page !== -1)
      return noError<GetRecommendedTopicsViewModel.Response>({
        count: 3,
        next: '',
        previous: '',
        results: [
          {
            url: '',
            avatar: '',
            slug: 'ce',
            title: 'Title 1',
            description: 'Description 1',
          },
          {
            url: '',
            avatar: '',
            slug: 'ce',
            title: 'Title 2',
            description: 'Description 2',
          },
          {
            url: '',
            avatar: '',
            slug: 'ce',
            title: 'Title 3',
            description: 'Description 3',
          },
        ],
      });
    return error(400);
  });
}
