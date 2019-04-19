import queryString from 'query-string';
import startsWith from 'lodash/startsWith';
import { routerRedux } from 'dva/router';
import $ from 'jquery';

export default {
  namespace: 'app',
  state: {
    locationPathname: '',
    locationQuery: {},
    selectedMenu: null,
    contentEl: null,
    contentMinHeight: 0,
    menus: [
      {
        key: 'homePage',
        name: '首页',
        path: '/home',
      },
    ],
  },
  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search),
          },
        });
      });
    },

    setup({ dispatch }) {
      window.addEventListener('resize', () => {
        dispatch({
          type: 'updateContentMinHeight',
        });
      });

      dispatch({
        type: 'init',
      });
    },
  },
  effects: {
    *init({ payload }, { put }) {
      yield put({
        type: 'queryPermission',
      });
      yield put({
        type: 'queryAccount',
      });
    },
    *selectMenu({ payload }, { put, select }) {
      const { menus } = yield select(({ app }) => app);
      const menuItem = menus.filter(menu => menu.key === payload);

      yield put(
        routerRedux.push({
          pathname: menuItem[0].path,
        }),
      );
    },
  },
  reducers: {
    updateContentMinHeight(state, { payload }) {
      const mergeState = {
        contentEl: state.contentEl,
      };

      if (payload) {
        mergeState.contentEl = payload;
      }

      return {
        ...state,
        ...mergeState,
        contentMinHeight: $(window).height() - $(`#${mergeState.contentEl.props.id}`).offset().top,
      };
    },
    updateState(state, { payload }) {
      const mergeState = {};
      state.menus.forEach((menu) => {
        if (startsWith(payload.locationPathname, menu.path)) {
          mergeState.selectedMenu = menu;
        }
      });

      return {
        ...state,
        ...payload,
        ...mergeState,
      };
    },
  },
};
