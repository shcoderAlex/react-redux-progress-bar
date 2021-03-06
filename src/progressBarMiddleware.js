import * as constants from './constants';

export default function progressBarMiddleware({ dispatch }) {
  return next => action => {

    const { type } = action;
    if(type) next(action);

    if(type.includes(constants.REQUEST)){
      dispatch({ type: constants.PROGRESS_BAR_START });
    } else if(type.includes(constants.SUCCESS) || type.includes(constants.FAILURE)){
      dispatch({ type: constants.PROGRESS_BAR_FINISH });
    }
    
  }
}
