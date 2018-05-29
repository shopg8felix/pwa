import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SET_VIEW_TITLE } from '@shopgate/pwa-common/constants/ActionTypes';
import { REQUEST_ROOT_CATEGORIES } from '@shopgate/pwa-common-commerce/category/constants';
import { mockedPipelineRequestFactory } from '@shopgate/pwa-core/classes/PipelineRequest/mock';
import { rootCategoryWillEnter$ } from './streams';
import subscribe from './subscriptions';
import { routerState, categoryRouteMock, uiState, categoryState, initialCategoryState } from './mock';

const mockedStore = configureStore([thunk]);

const mockedResolver = jest.fn();
jest.mock('@shopgate/pwa-core/classes/PipelineRequest', () => mockedPipelineRequestFactory((mockInstance, resolve, reject) => {
  mockedResolver(mockInstance, resolve, reject);
}));

describe('RootCategory subscriptions', () => {
  let subscribeMock;
  let first;
  let store = mockedStore();
  beforeAll(() => {
    jest.resetAllMocks();
    store.clearActions();
    subscribeMock = jest.fn();
  });
  it('should subscribe', () => {
    subscribe(subscribeMock);
    expect(subscribeMock.mock.calls.length).toBe(1);
    [first] = subscribeMock.mock.calls;
    expect(first[0]).toBe(rootCategoryWillEnter$);
  });

  describe('rootCategoryWillEnter$', () => {
    it('should fetch categories when page is entered', () => {
      const action = {
        route: categoryRouteMock,
      };
      const mockedState = {
        ...routerState,
        ...initialCategoryState,
        ...uiState,
      };

      store = mockedStore(mockedState);
      first[1]({
        action,
        dispatch: store.dispatch,
      });
      const actions = store.getActions();
      expect(actions[0].type).toBe(REQUEST_ROOT_CATEGORIES);
      expect(actions[1].type).toBe(SET_VIEW_TITLE);
    });

    it('should not fetch categories again', () => {
      const action = {
        route: categoryRouteMock,
      };
      const mockedState = {
        ...routerState,
        ...categoryState,
        ...uiState,
      };

      store = mockedStore(mockedState);

      first[1]({
        action,
        dispatch: store.dispatch,
      });
      const actions = store.getActions();
      expect(actions[0].type).toBe(SET_VIEW_TITLE);
    });
  });
});
