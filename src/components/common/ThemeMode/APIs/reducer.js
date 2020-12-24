let initialState = {
  // darkMode: true
}

function getInitialThemeMode () {
  const savedMode = JSON.parse(localStorage.getItem('darkMode'));
  return savedMode || false;
}

function setDarkMode(state,action) {
  let darkMode = getInitialThemeMode ();
  // let darkMode = state.darkMode;
  if(action.mode === 'darkMode'){
    darkMode = !darkMode;
  }
  localStorage.setItem('darkMode', JSON.stringify(darkMode));
  return {...state, darkMode: darkMode}
}

export default function ThemeReducer(state = initialState, action){
  switch (action.type) {
    case 'DARK_MODE':
        return setDarkMode(state,action);
    default:
        return state;
}
}