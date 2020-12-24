import { combineReducers } from 'redux';

// import ThemeReducer from '../components/common/ThemeMode/APIs/reducer';
// import userManagementReducer from '../components/UserManagement/APIs/reducer';
import loginReducer from "../components/LoginPanel/APIs/reducer";
// import ContentReducer from "../components/Movies/api/reducer"
// import UserProfileReducer from '../components/UserPanel/api/reducer';

const reducer = combineReducers({
  // theme: ThemeReducer,
  // userManagement: userManagementReducer,
  auth : loginReducer,
  // content: ContentReducer,
  // userProfile: UserProfileReducer

});

export default reducer;
