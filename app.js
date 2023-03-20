import { createStore, combineReducers } from "./redux.js";

import amountReducer, { actions as amountActions }
    from "./store/amount.js";
import goodsReducer, { actions as goodsActions }
    from "./store/goods.js";
import positionReducer, { actions as positionActions }
    from "./store/position.js";

const initialState = {
    amount: 99,
    goods: [],
    position: { x: 0, y: 0},
};

const reducer2 = combineReducers({
    amount: amountReducer,
    goods: goodsReducer,
    position: positionReducer,
})

const store = createStore(reducer2);

console.log(store.getState());
