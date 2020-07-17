import { createStore, compose, applyMiddleware, Reducer, Store } from 'redux';
import { SagaMiddleware } from 'redux-saga';

export default (reducers: Reducer, middlewares: SagaMiddleware[]): Store => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
