import * as constants from './constants';

const initialState = {
  progressBar: 0
};

export default function progressBarReducer(state = initialState, action) {
  switch (action.type) {
    case constants.PROGRESS_BAR_START:
      return 1;
    case constants.PROGRESS_BAR_FINISH:
      return 0;
    default:
      return state;
  }
}
