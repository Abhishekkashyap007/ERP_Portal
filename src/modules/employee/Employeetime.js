import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

function Employeetime() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'employeename', headerName: 'EmployeeName', width: 130 },
        { field: 'Mon', headerName: 'Mon', width: 130 },
        { field: 'Tues', headerName: 'Tues', width: 130 },
        { field: 'Wed', headerName: 'Wed', width: 130 },
        { field: 'Thurs', headerName: 'Thurs', width: 130 },
        { field: 'Fri', headerName: 'Fri', width: 130 },
        { field: 'Sat', headerName: 'Sat', width: 130 },
        {
            field: 'TotalWork',
            headerName: 'TotalWork',
            type: 'number',
            width: 90,
        }

    ];

    const rows = [
        { id: 1, employeename: 'Abhisehk kashyap', Mon: 'Task1', Tues: 'Leave', Wed: 'Task1', Thurs: 'Task1', Fri: 'Task1', Sat: 'Task1', TotalWork: '40 hours' },
        { id: 2, employeename: 'Rajat chauhan', Mon: 'Task2', Tues: 'Task2', Wed: 'Task2', Thurs: 'Task2', Fri: 'Task2', Sat: 'Task2', TotalWork: '50 hours' },
        { id: 3, employeename: 'Aaliya', Mon: 'Task3', Tues: 'Task3', Wed: 'Task3', Thurs: 'Task3', Fri: 'Task3', Sat: 'Task3', TotalWork: '45 hours' },
        { id: 4, employeename: 'Rahul bisht', Mon: 'Task4', Tues: 'Task4', Wed: 'Task4', Thurs: 'Task4', Fri: 'Task4', Sat: 'Task4', TotalWork: '40 hours' },
        { id: 5, employeename: 'Ashish', Mon: 'Task5', Tues: 'Task5', Wed: 'Leave', Thurs: 'Task5', Fri: 'Task5', Sat: 'Task5', TotalWork: '50 hours' },
        { id: 6, employeename: 'Amrit', Mon: 'Task6', Tues: 'Task6', Wed: 'Task6', Thurs: 'Task6', Fri: 'Task6', Sat: 'Task6', TotalWork: '45 hours' },
        { id: 7, employeename: 'Shubham', Mon: 'Task7', Tues: 44 },
        { id: 8, employeename: 'Shagun', Mon: 'Task8', Tues: 36 },
        { id: 9, employeename: 'Neeraj', Mon: 'Task9', Tues: 65 },
    ];

    const paginationModel = { page: 0, pageSize: 5 };


    return (
        <Paper sx={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>

    )
}

export default Employeetime
