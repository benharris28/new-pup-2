import React from 'react';
import { Table } from 'antd';

class MealTable extends React.Component {
    render() {
        const columns = [
            {
              title: 'Sample Schedule',
              width: 120,
              dataIndex: 'name',
              key: 'name',
              fixed: 'left',
            },
          
            { title: '8 - 12 Weeks', width: 170, dataIndex: 'small', key: '1' },
            { title: '12 Weeks - 6 Months', width: 170, dataIndex: 'medium', key: '2' },
            { title: '6 Months +', width: 170, dataIndex: 'large', key: '3' },
            
            
          ];
          
          const data = [
            {
              key: '1',
              name: 'Wakeup and Breakfast',
              small:'Wakeup at 7 am with immediate pee break. Breakfast at 7:30 am with immediate pee break',
              medium: 'Wakeup at 7 am with immediate pee break. Breakfast at 7:30 am with immediate pee break',
              large: 'Wakeup at 7 am with immediate pee break. Breakfast at 7:30 am',
            },
            
            {
                key: '3',
                name: 'Morning Routine',
                small: 'Play inside and nap. Pee breaks after each nap or once per hour when awake',
              medium: 'Play and naps. Pee breaks every 2 - 3 hours when awake',
              large: 'Play and naps. Pee breaks every 3 hour when awake',
              },
              {
                key: '4',
                name: 'Lunch',
                small: '11:30 am with pee break afterwards',
                medium: '11:30 am',
                large: '11:30 am',
              },
              {
                key: '5',
                name: 'Afternoon Routine',
                small: 'Play inside and nap. Pee breaks after each nap or once per hour when awake',
              medium: 'Play and naps. Pee breaks every 2 - 3 hours when awake',
              large: 'Play and naps. Pee breaks every 3 hour when awake',
              },
              {
                key: '6',
                name: 'Dinner',
                small: '6:30 pm with pee break afterwards',
                medium: '6:30 pm',
                large: '6:30 pm',
              },
              {
                key: '7',
                name: 'Evening Routine',
                small: 'Play inside and nap. Pee breaks after each nap or once per hour when awake',
              medium: 'Play and naps. Pee breaks every 2 - 3 hours when awake',
              large: 'Play and naps. Pee breaks every 3 hour when awake',
              },
              {
                key: '8',
                name: 'Bedtime',
                small: 'Final bathroom break 11pm',
              medium: 'Final bathroom break 11pm',
              large: 'Final bathroom break 11pm',
              },
          ];
        return (
            <div>
                <Table columns={columns} dataSource={data} scroll={{ x: 500 }} />
            </div>
        )
    }
}

export default MealTable;