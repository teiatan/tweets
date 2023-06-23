export const getStringsArrayAfterTogglingItem = (array, item) => {
    if(!array.includes(item)){
        return [...array, item];
    };
    const followerIndex = array.indexOf(item);
    const newFollowedUsersArray = [...array];
    newFollowedUsersArray.splice(followerIndex, 1);
    return newFollowedUsersArray;
};

export const getObjectsArrayAfterTogglingItem = (array, itemId, itemData) => {
    const itemIndex = array.findIndex(user => user.id === itemId);
    if (itemIndex === -1) {
        return [...array, itemData];
    }
    const newFollowedUsersArray = [...array];
    newFollowedUsersArray.splice(itemIndex, 1);
    return newFollowedUsersArray;
};