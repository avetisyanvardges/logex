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
import React from 'react';

interface IList {
    name: string,
    component: React.FC<any>,
    path: string,
    permissions: IPagePermissions,
}

export const ROUTES_LIST: IList[] = [
    {
        name: 'Regions',
        component: Regions,
        path: '',
        permissions: PERMISSIONS.REGION,
    },
    {
        name: 'Customers',
        component: Customers,
        path: '/customers',
        permissions: PERMISSIONS.CUSTOMER,
    },
    {
        name: 'Communities',
        component: Communities,
        path: '/community',
        permissions: PERMISSIONS.COMMUNITY,
    },
    {
        name: 'Orders',
        component: Orders,
        path: '/orders',
        permissions: PERMISSIONS.ORDER,
    },
    {
        name: 'Users',
        component: Users,
        path: 'users',
        permissions: PERMISSIONS.USER,
    },
    {
        name: 'Warehouses',
        component: Warehouses,
        path: '/warehouses',
        permissions: PERMISSIONS.WAREHOUSES,
    },
    {
        name: 'Roles',
        component: Roles,
        path: '/roles',
        permissions: PERMISSIONS.ROLE,
    },
    {
        name: 'Create Role',
        component: CreateAndUpdateRole,
        path: '/roles/create',
        permissions: PERMISSIONS.ROLE,
    },
    {
        name: 'Update Role',
        component: CreateAndUpdateRole,
        path: '/roles/update/:id',
        permissions: PERMISSIONS.ROLE,
    },
];