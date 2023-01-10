import React from 'react';
import Regions from 'views/Regions';
import Customers from 'views/Customers';
import Communities from 'views/Communities';
import Orders from 'views/Orders';
import Users from 'views/Users';
import Warehouses from 'views/Warehouses';
import Roles from 'views/Roles';
import CreateAndUpdateRole from "views/Roles/CreateAndUpdateRole";
import {IPagePermissions} from 'state/types';
import {PERMISSIONS} from './permissions';
import CreateAndUpdateCommunity from 'views/Communities/CreateAndUpdate';
import CreateAndUpdateUser from 'views/Users/CreateAndUpdate';
import CreateAndUpdateOrder from "views/Orders/CreateAndUpdateOrder";
import CreateAndUpdateCustomer from 'views/Customers/CreateAndUpdate';
import CreateAndUpdateWarehouse from 'views/Warehouses/CreateAndUpdate';
import Parcels from "../views/Parcels";
import CreateAndUpdateParcel from "../views/Parcels/CreateAndUpdateParcel";
import Courier from "../views/Courier";

interface IList {
    name: string,
    component: React.FC<any>,
    path: string,
    permissions: IPagePermissions,
}

interface IMenuItem {
    name: React.ReactNode,
    path: string,
    permission: string,
}

export const ROUTES_LIST: IList[] = [
    {
        name: 'Regions',
        component: Regions,
        path: '/region',
        permissions: PERMISSIONS.REGION,
    },
    {
        name: 'Customers',
        component: Customers,
        path: '/customer',
        permissions: PERMISSIONS.CUSTOMER,
    },
    {
        name: 'Create customer',
        component: CreateAndUpdateCustomer,
        path: '/customer/create',
        permissions: PERMISSIONS.CUSTOMER,
    },
    {
        name: 'Update customer',
        component: CreateAndUpdateCustomer,
        path: '/customer/update/:id',
        permissions: PERMISSIONS.CUSTOMER,
    },
    {
        name: 'Communities',
        component: Communities,
        path: '/community',
        permissions: PERMISSIONS.COMMUNITY,
    },
    {
        name: 'Communities',
        component: CreateAndUpdateCommunity,
        path: '/community/create',
        permissions: PERMISSIONS.COMMUNITY,
    },
    {
        name: 'Create community',
        component: CreateAndUpdateCommunity,
        path: '/community/create',
        permissions: PERMISSIONS.COMMUNITY,
    },
    {
        name: 'Update community',
        component: CreateAndUpdateCommunity,
        path: '/community/update/:id',
        permissions: PERMISSIONS.COMMUNITY,
    },
    {
        name: 'Orders',
        component: Orders,
        path: '/order',
        permissions: PERMISSIONS.ORDER,
    },
    {
        name: 'Create Order',
        component: CreateAndUpdateOrder,
        path: '/order/create',
        permissions: PERMISSIONS.ORDER,
    },
    {
        name: 'Update Order',
        component: CreateAndUpdateOrder,
        path: '/order/update/:id',
        permissions: PERMISSIONS.ORDER,
    },
    {
        name: 'Users',
        component: Users,
        path: '/user',
        permissions: PERMISSIONS.USER,
    },
    {
        name: 'Create user',
        component: CreateAndUpdateUser,
        path: '/user/create',
        permissions: PERMISSIONS.USER,
    },
    {
        name: 'Update user',
        component: CreateAndUpdateUser,
        path: '/user/update/:id',
        permissions: PERMISSIONS.USER,
    },
    {
        name: 'Warehouses',
        component: Warehouses,
        path: '/warehouse',
        permissions: PERMISSIONS.WAREHOUSES,
    },
    {
        name: 'Create warehouse',
        component: CreateAndUpdateWarehouse,
        path: '/warehouse/create',
        permissions: PERMISSIONS.WAREHOUSES,
    },
    {
        name: 'Update warehouse',
        component: CreateAndUpdateWarehouse,
        path: '/warehouse/update/:id',
        permissions: PERMISSIONS.WAREHOUSES,
    },
    {
        name: 'Roles',
        component: Roles,
        path: '/role',
        permissions: PERMISSIONS.ROLE,
    },
    {
        name: 'Create Role',
        component: CreateAndUpdateRole,
        path: '/role/create',
        permissions: PERMISSIONS.ROLE,
    },
    {
        name: 'Update Role',
        component: CreateAndUpdateRole,
        path: '/role/update/:id',
        permissions: PERMISSIONS.ROLE,
    },
    {
        name: 'Parcels',
        component: Parcels,
        path: '/parcels',
        permissions: PERMISSIONS.PARCEL,
    },
    {
        name: 'Create Parcel',
        component: CreateAndUpdateParcel,
        path: '/parcel/create',
        permissions: PERMISSIONS.PARCEL,
    },
    {
        name: 'Update Parcel',
        component: CreateAndUpdateParcel,
        path: '/parcel/update/:id',
        permissions: PERMISSIONS.PARCEL,
    },
    {
        name: 'Courier',
        component: Courier,
        path: '/courier',
        permissions: PERMISSIONS.ORDER,
    },
];

export const MENU_ITEMS: IMenuItem[] = [
    {
        name: 'Regions',
        path: '/region',
        permission: PERMISSIONS.REGION.list,
    },
    {
        name: 'Communities',
        path: '/community',
        permission: PERMISSIONS.COMMUNITY.list,
    },
    {
        name: 'Customers',
        path: '/customer',
        permission: PERMISSIONS.CUSTOMER.list,
    },
    {
        name: 'Orders',
        path: '/order',
        permission: PERMISSIONS.ORDER.list,
    },
    {
        name: 'Users',
        path: '/user',
        permission: PERMISSIONS.USER.list,
    },
    {
        name: 'Warehouses',
        path: '/warehouse',
        permission: PERMISSIONS.WAREHOUSES.list,
    },
    {
        name: 'Roles',
        path: '/role',
        permission: PERMISSIONS.ROLE.list,
    },
    {
        name: 'Parcels',
        path: '/parcels',
        permission: PERMISSIONS.PARCEL.list,
    },
    {
        name: 'Courier',
        path: '/courier',
        permission: PERMISSIONS.ORDER.list,
    },
];
