import { createStore } from "redux";

const TOGGLE = "TOGGLE";

const handleToggle = () => ({
  type: TOGGLE
})

const initialState = {
  anually: false
}

const reducer = (state={...initialState}, action) => {
  switch (action.type) {
    case TOGGLE
    : return {...state, anually: !state.anually}
    default
    : return state
  }
}

export const store = createStore(reducer);

export const mapStateToProps = (state) => ({
  anually: state.anually
})

export const mapDispatchToProps = (dispatch) => ({
  handleToggle: () => dispatch(handleToggle())
})