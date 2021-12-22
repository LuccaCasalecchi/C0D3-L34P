import {ADD_POST,DELETE_POST,EDIT_POST,RECEIVED_DATA} from '../../actions/types';

const INITIAL_STATE = {
  data:[]
}

const postReducer = (state = INITIAL_STATE, action)=>{
  switch(action.type){
    case ADD_POST:
      return{
        data:[action.data, ...state.data]
      };
    case DELETE_POST:
      return{
        data: state.data.filter((post)=>post.id!==action.id)
      };
    case EDIT_POST:
      return{
        data: state.data.map((item)=>{
          return item.id === action.data.id ? action.data : item
        })
      }
      case RECEIVED_DATA:
      return {
        data: action.data,
      };
    default:
      return state
  }
}

export default postReducer;
