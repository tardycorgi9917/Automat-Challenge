import { generateInstance, item } from './config';

const itemEndPoint = generateInstance(item);

const itemRequests = {
    getItem: id => {
        return itemEndPoint.get(id + '.json ');
    }
}

export const populateItem = id => itemRequests.getItem(id).then( response => response.data );

export default itemRequests;