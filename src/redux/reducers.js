import {combineReducers} from 'redux';

//初始化状态的值
const initXxxState = 0;
function xxx(previousState = initXxxState, action) {
  switch (action.type) {
    default :
      return previousState;
  }
}

const initYyyState = {};
function yyy(previousState = initYyyState, action) {
  switch (action.type) {
    default :
      return previousState;
  }
}


export default combineReducers({
  xxx,
  yyy
})