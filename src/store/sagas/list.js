import { call, put} from 'redux-saga/effects';

import { services } from '../services';
import { Creators as ListActions } from '../actions/list';

const genericImg = 'https://nacionalidadeportuguesa.com.br/wp-content/uploads/2017/08/POST02.jpg';

export function* getImageRequest(action) {
  try {
    const img = yield call(services.getImages, action.product.product);
    yield put(ListActions.getImageSuccess(action.product, img));
  } catch (err) {
    console.log(err);
    yield put(ListActions.getImageFailure(action.product, genericImg))
  }
}