export const getArrayAfterTogglingItem = (array, item) => {
    if(!array.includes(item)){
        return [...array, item];
    };
    const followerIndex = array.indexOf(item);
    const newFollowedUsersArray = [...array];
    newFollowedUsersArray.splice(followerIndex, 1);
    return newFollowedUsersArray;
};