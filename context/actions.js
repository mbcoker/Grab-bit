export const actionTypes = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  SUBMIT_ITEM: 'SUBMIT_ITEM',
};

//api request?
export const addCategory = (category, currentUser) => ({
  type: actionTypes.ADD_CATEGORY,
  payload: {
    category,
    currentUser,
  },
});

export const submitItem = (itemInfo) => ({
  type: actionTypes.SUBMIT_ITEM,
  payload: itemInfo,
});
