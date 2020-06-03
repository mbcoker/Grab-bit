export const actionTypes = {
  ADD_CATEGORY: 'ADD_CATEGORY',
};

//api request?
export const addCategory = (category, currentUser) => ({
  type: actionTypes.ADD_CATEGORY,
  payload: {
    category,
    currentUser,
  },
});
