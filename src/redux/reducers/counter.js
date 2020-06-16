const initialState = {
  value: 0
}

const counter = (state=initialState, action) => {
  switch(action.type){
    case 'INCREASE': {
      return {
        ...initialState,
        value: state.value+1
      }
      break
    }
    case 'DECREASE': {
      return {
        ...initialState,
        value: state.value-1
      }
      break
    }
    case 'RESET': {
      return {
        ...initialState,
        value: 0
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default counter
