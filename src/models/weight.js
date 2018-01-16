import { fetchWeight } from '../services/utilityApi'

export default {
  namespace: 'weight',

  state: {
    data: [],
  },

  effects: {
    *fetchWeight({}, { call, put }) {
      const data = yield call(fetchWeight)
      yield put({ type: 'save', payload: { data } })
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/weight-index') {
          dispatch({ type: 'fetchWeight' })
        }
      })
    },
  },
}
