import { Post } from "../fetch";
import GetRecommendedTopicsViewModel from "../ViewModels/GetRecommendedTopics/GetRecommendedTopicsViewModel";

const ControllerName = "get-recommended-topics";

function GetRecommendedTopics(args: GetRecommendedTopicsViewModel.Request) {
  return Post<GetRecommendedTopicsViewModel.Response[]>(
    ControllerName + "/?page=" + args.page,
    undefined,
    "GET"
  );
}

const Actions = {
  GetRecommendedTopics,
};

export default Actions;
