import { generateInstance, topStories } from './config';

const storyEndPoint = generateInstance(topStories);

const storiesRequests = {
    getTopStories: () => {
        return storyEndPoint.get('.json');
    }
}

export default storiesRequests;
