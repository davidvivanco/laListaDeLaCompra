import { ShoppinList } from '../../shared/models/interfaces';
import { shoppingListTypes } from '../../shared/models/types';
import { clone, removeDuplicatedElements } from '../../shared/utils';

export const shoppinListReducer = (
  state: Partial<ShoppinList>,
  action: any
): Partial<ShoppinList> => {
  switch (action.type) {
    case shoppingListTypes.addItem:
      const items = state.items || [];
      const recommendations = state.recommendations || [];
      if (recommendations.length > 50) recommendations.pop();
      recommendations.push(action?.payload?.name);
      items.push(action.payload);
      return { ...state, needsUpdate: true, items, recommendations };

    case shoppingListTypes.deleteItem:
      const itemsClone = clone(state.items || []);
      const index = itemsClone.findIndex((item) => item.id === action.payload);
      itemsClone.splice(index, 1);
      return { ...state, items: itemsClone, needsUpdate: true };

    case shoppingListTypes.updateShoppingList:
      return { ...state, ...action.payload };

    case shoppingListTypes.removeCompleted:
      const newItems = state.items?.filter((i) => !i.done);
      return { ...state, items: newItems, needsUpdate: true };

    default:
      return state;
  }
};
