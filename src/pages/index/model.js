import { delay } from 'dva-core/saga'
import _ from 'lodash'

export default {
  namespace: 'counter',

  state: {
    num: 0,
    asyncLoading: false,
  },

  reducers: {
    add(state, { payload: step }) {
      step = _.isNumber(step) ? step : 1
      return { ...state, num: state.num + step }
    },
    minus(state, { payload: step }) {
      step = _.isNumber(step) ? step : 1
      return { ...state, num: state.num - step }
    },
    updateLoading(state, { payload: loading }) {
      return { ...state, asyncLoading: loading }
    },
  },

  effects: {
    *asyncAdd(action, { put, select, all }) {
      const loading = yield select(state => state.counter.asyncLoading)
      if (loading) return
      yield put({ type: 'updateLoading', payload: true })
      yield delay(1000)
      yield all([
        put.resolve({ type: 'updateLoading', payload: false }),
        put.resolve({ type: 'add', payload: 10 }),
      ])
    },
  },
}
