import * as constants from './constants';

export default function progressBarMiddleware({ dispatch }) {
  return next => action => {

    const { type } = action;
    if(type) next(action);

    if(!!~type.indexOf(constants.REQUEST)){
      dispatch({ type: constants.PROGRESS_BAR_START });
    } else if(!!~type.indexOf(constants.SUCCESS) || !!~type.indexOf(constants.FAILURE)){
      dispatch({ type: constants.PROGRESS_BAR_FINISH });
    }

    // next(action);
  }
}
