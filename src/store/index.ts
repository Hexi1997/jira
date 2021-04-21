import * as Redux from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import saga from "./saga";

//创建redux-saga中间件
const sagaMiddleware = createSagaMiddleware();

//应用异步中间件,applyMiddleware可以接收多个中间件
const storeEnhancer = Redux.applyMiddleware(sagaMiddleware);
//第二个参数是store提升,配置redux-devtools
const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : Redux.compose;

const store = Redux.createStore(reducer, composeEnhancers(storeEnhancer));

//redux-saga，必须要run(),saga.js是一个生成器函数，里面存储了要处理的action
sagaMiddleware.run(saga);

export default store;
