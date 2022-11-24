export const ADMIN_PANEL_ROUTE = "/admin-panel";
export const ADMIN_PANEL_DB_AUTO_ROUTE = "/admin-panel/database/auto";
export const ADMIN_PANEL_DB_ORDERS_ROUTE = "/admin-panel/database/orders";
export const ADMIN_PANEL_DB_TOWBARS_ROUTE = "/admin-panel/database/towbars";
export const ADMIN_PANEL_DB_USERS_ROUTE = "/admin-panel/database/users";
// export const ADMIN_PANEL_ONLINE_CHAT_ROUTE = "/admin-panel/online-chat";
// export const ADMIN_PANEL_ORDERS_ROUTE = "/admin-panel/orders";
// export const ADMIN_PANEL_STATISTICS_ROUTE = "/admin-panel/statistics";

export const PROFILE_ROUTE = "/profile";
export const PROFILE_ORDERS_HISTORY_ROUTE = "/profile/orders-history";

export const MAIN_ROUTE = "/";
export const AUTH_LOGIN_ROUTE = "/routes/login";
export const AUTH_REGISTRATION_ROUTE = "/routes/registration";
export const AUTH_RECOVERY_ROUTE = "/routes/recovery";
export const DELIVERY_ROUTE = "/delivery";
export const HOW_MAKE_ORDER_ROUTE = "/how_make_order";
export const CATALOG_ROUTE = "/catalog";
export const CART_ROUTE = "/cart";
export const ORDER_ROUTE = "/order";

export const SEARCH_ROUTE = "/search";

// export const MANUFACTURERS_ROUTE = "/manufacturers";
// export const MANUFACTURERS_NAME_ROUTE = "/manufacturers" + "/:name";

// export const INSTALLATION_ROUTE = "/installation";
// export const CONTACTS_ROUTE = "/contacts";
// export const ABOUT_ROUTE = "/about";

// export const CATALOG_ACCESSORIES_ROUTE = "/catalog/accessories";
// export const CATALOG_ELECTRICS_ROUTE = "/catalog/electrics";

// export const PROFILE_AUTO_ROUTE = "/profile/auto";
// export const PROFILE_FAVORITES_ROUTE = "/profile/favorites";
// export const PROFILE_FEEDBACKS_ROUTE = "/profile/feedbacks";

export const adminRoutes = [
  ADMIN_PANEL_ROUTE,
  ADMIN_PANEL_DB_AUTO_ROUTE,
  ADMIN_PANEL_DB_ORDERS_ROUTE,
  ADMIN_PANEL_DB_TOWBARS_ROUTE,
  ADMIN_PANEL_DB_USERS_ROUTE,
];

export const privateRoutes = [
  PROFILE_ROUTE,
  PROFILE_ORDERS_HISTORY_ROUTE,
  ORDER_ROUTE,
];

export const publicRoutes = [
  MAIN_ROUTE,
  AUTH_LOGIN_ROUTE,
  AUTH_REGISTRATION_ROUTE,
  AUTH_RECOVERY_ROUTE,
  SEARCH_ROUTE,
  DELIVERY_ROUTE,
  HOW_MAKE_ORDER_ROUTE,
  CATALOG_ROUTE,
  CART_ROUTE,
];
