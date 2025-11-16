import { GET_USERS } from "./actions";

const initialState = {
  users: [],
  copyUsers: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        copyUsers: action.payload,
      };

    default:
      return { ...state };
  }
}

export default reducer