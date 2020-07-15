import Reactotron from 'reactotron-react-js';
// import { reactotronRedux } from 'reactotron-redux';
// import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    // .use(reactotronRedux())
    // .use(reactotronSaga({}))
    .connect();

  // clear tron console
  if (tron.clear) tron.clear();

  console.tron = tron;
}
