import { generateInstance, item } from './config';

const itemEndPoint = generateInstance(item);

const itemRequests = {
    getItem: (id) => {
        return itemEndPoint.get(id + '.json ');
    }
}

export default itemRequests;