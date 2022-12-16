export const API_HOST = process.env.REACT_APP_PUBLIC_API_HOST || 'http://localhost:3000';

export const MAX_INPUT_LENGTH = 30;

export const MAX_REGION_INPUT_LENGTH = 20;

export const PERMISSIONS = {
    ROLE_LIST: 'role-list',
    ROLE_CREATE: 'role-create',
    ROLE_Edit: 'role-edit',
    ROLE_DELETE: 'role-delete',
    REGION_LIST: 'region-list',
    REGION_CREATE: 'region-create',
    REGION_Edit: 'region-edit',
    REGION_DELETE: 'REGION-delete',
    COMMUNITY_LIST: 'community-list',
    COMMUNITY_CREATE: 'community-create',
    COMMUNITY_Edit: 'community-edit',
    COMMUNITY_DELETE: 'community-delete',
    WAREHOUSES_LIST: 'warehouse-list',
    WAREHOUSES_CREATE: 'warehouse-create',
    WAREHOUSES_Edit: 'warehouse-edit',
    WAREHOUSES_DELETE: 'warehouse-delete',
    ORDER_LIST: 'order-list',
    ORDER_CREATE: 'order-create',
    ORDER_Edit: 'order-edit',
    ORDER_DELETE: 'order-delete',
    USER_LIST: 'user-list',
    USER_CREATE: 'user-create',
    USER_Edit: 'user-edit',
    USER_DELETE: 'user-delete',
    CUSTOMER_LIST: 'customer-list',
    CUSTOMER_CREATE: 'customer-create',
    CUSTOMER_Edit: 'customer-edit',
    CUSTOMER_DELETE: 'customer-delete',
};