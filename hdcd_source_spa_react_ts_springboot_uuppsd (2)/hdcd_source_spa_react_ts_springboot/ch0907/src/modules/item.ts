import { createReducer } from "typesafe-actions";
import { Item } from "../App";

export function* itemSaga() {

}

export interface ItemState {
  item: Item;
  items: Item[];
  error: any;
}

const initialState: ItemState = {
  item: { itemId: '', itemName: '', price: 0, description: '' },
  items: [],
  error: null,
};

const item = createReducer(
  initialState,
  {},
);

export default item;
