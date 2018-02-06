
export default {
  namespace: 'home',
  state: {
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'init',
      });
    },
  },
  effects: {

  },
  reducers: {
    init(state) {
      return {
        ...state,
      };
    },
  },
};
