import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
// import { IoStatsChartSharp } from 'react-icons/io5';
// import { BsKanban, BsCartDash} from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi'

export const menuItems = [
    {
        id: 1,
        title: "Home",
        name: "",
        icon: <HiOutlineHome className='icon' />,
    },
    {
        id: 2,
        title: "Fazendas",
        name: "custo",
        icon: <FaUsers className='icon' />,
    },
    {
        id: 3,
        title: "fluxo de caixa",
        name: "customers",
        icon: <HiOutlineUsers className='icon' />,
    },
    // {
    //     id: 4,
    //     title: "Kanban",
    //     name: "kanban",
    //     icon: <BsKanban className='icon' />,
    // },
    // {
    //     id: 5,
    //     title: "Orders",
    //     name: "orders",
    //     icon: <BsCartDash className='icon' />,
    // },
    // {
    //     id:6,
    //     title: "Charts",
    //     name: "charts",
    //     icon: <IoStatsChartSharp className='icon' />,
    // },
]

export const customersColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90, headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
  
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
  
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'orderStatus',
      headerName: 'Order Status',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'customerId',
      headerName: 'Customer Id',
      type: 'number',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    }
  ];

