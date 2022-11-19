import { CartActionsTypes } from "interfaces/cart";

const initialState: any = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  adminOrderItems: {},
  adminTotalPrice: 0,
  adminTotalCount: 0,
};

const getTotalPrice = (arr: any[]) =>
  arr.reduce((sum, obj: any) => obj.price + sum, 0);

const _get = (obj: any, path: string) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj: {}, path: string) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionsTypes.ADD_ITEM_TO_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case CartActionsTypes.CLEAR_CART:
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    case CartActionsTypes.REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case CartActionsTypes.PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case CartActionsTypes.MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case CartActionsTypes.SET_ADMIN_ORDER_ITEMS: {
      return {
        ...state,
        adminOrderItems: action.payload.items,
        adminTotalPrice: action.payload.totalPrice,
        adminTotalCount: action.payload.totalCount,
      };
    }

    case CartActionsTypes.REMOVE_ADMIN_ORDER_ITEM: {
      const newItems = {
        ...state.adminOrderItems,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        adminOrderItems: newItems,
        adminTotalPrice: state.adminTotalPrice - currentTotalPrice,
        adminTotalCount: state.adminTotalCount - currentTotalCount,
      };
    }

    case CartActionsTypes.MINUS_ADMIN_ORDER_ITEM: {
      const oldItems = state.adminOrderItems[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.adminOrderItems[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.adminOrderItems,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const adminTotalCount = getTotalSum(newItems, "items.length");
      const adminTotalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        adminOrderItems: newItems,
        adminTotalPrice,
        adminTotalCount,
      };
    }

    case CartActionsTypes.PLUS_ADMIN_ORDER_ITEM: {
      const newObjItems = [
        ...state.adminOrderItems[action.payload].items,
        state.adminOrderItems[action.payload].items[0],
      ];
      const newItems = {
        ...state.adminOrderItems,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const adminTotalCount = getTotalSum(newItems, "items.length");
      const adminTotalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        adminOrderItems: newItems,
        adminTotalPrice,
        adminTotalCount,
      };
    }

    case CartActionsTypes.CHANGE_ADMIN_ORDER_ITEM_PRICE: {
      const newObjItems = state.adminOrderItems[action.payload.id].items.map(
        (elem: any) => ({ ...elem, price: action.payload.price })
      );

      const newItems = {
        ...state.adminOrderItems,
        [action.payload.id]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const adminTotalCount = getTotalSum(newItems, "items.length");
      const adminTotalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        adminOrderItems: newItems,
        adminTotalPrice,
        adminTotalCount,
      };
    }

    default:
      return state;
  }
};
