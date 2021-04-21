import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Table } from 'semantic-ui-react';
import Edit from '../assets/img/edit.png';
// import Delete from '../assets/img/delete.png';
const List = () => {
    return (
        <div>
        <div>
            <h1>List</h1>
        </div>
        <div>
        <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>UserName</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Education</Table.HeaderCell>
        <Table.HeaderCell>Profession</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>23</Table.Cell>
        <Table.Cell>Male</Table.Cell>
        <Table.Cell>B.tech</Table.Cell>
        <Table.Cell>Frontend Developer</Table.Cell>
        <Table.Cell>Karnal</Table.Cell>
        <Table.Cell><button>
        <img style={{width:"20px", height:"20px", border:"none", outline:"none"}} src={Edit} alt="edit"/>
        </button> 
        <button>
        <img style={{width:"20px", height:"20px", border:"none", outline:"none"}} src={ Edit} alt="delete"/>
        </button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
        </div>
        </div>
    )
}

export default List
