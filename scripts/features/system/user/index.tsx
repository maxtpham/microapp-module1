// import * as React from "react";
// export default () => (
//     <div>Users</div>
// );

import * as _ from 'lodash';
import * as React from 'react';
import { Grid, Input, Segment, Table, Menu, Icon, Dropdown, Select, Button, Checkbox, SemanticICONS } from 'semantic-ui-react';
import moment from 'moment/src/moment'; // Fixed for ES6/TypeScript

const tableData = [
  { id: '59e0d1068ed5ac33b44b67d0', code: '21312312312312312312', type: 'google', name: 'Thanh Pham', created: new Date("2017-08-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:04:23.231+07:00") },
  { id: 'a9e0d1068ed5ac33b44b67d0', code: '31312312312312312312', type: 'facebook', name: 'Dung Nguyen', created: new Date("2016-11-03T20:03:23.231+07:00"), updated: new Date("2017-11-03T10:03:23.231+07:00") },
  { id: 'b9e0d1068ed5ac33b44b67d0', code: '41312312312312312312', type: 'facebook', name: 'Minh Ta', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
  { id: 'c9e0d1068ed5ac33b44b67d0', code: '51312312312312312312', type: 'google', name: 'Nguyen Van A', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
  { id: 'd9e0d1068ed5ac33b44b67d0', code: '61312312312312312312', type: 'google', name: 'Pham Van B', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
  { id: 'e9e0d1068ed5ac33b44b67d0', code: '71312312312312312312', type: 'facebook', name: 'Le Thi C', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
  { id: 'f9e0d1068ed5ac33b44b67d0', code: '81312312312312312312', type: 'google', name: 'Tran Thi X', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
  { id: 'g9e0d1068ed5ac33b44b67d0', code: '21312312312312312312', type: 'google', name: 'Thanh Pham', created: new Date("2017-08-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:04:23.231+07:00") },
  { id: 'h9e0d1068ed5ac33b44b67d0', code: '31312312312312312312', type: 'facebook', name: 'Dung Nguyen', created: new Date("2016-11-03T20:03:23.231+07:00"), updated: new Date("2017-11-03T10:03:23.231+07:00") },
  { id: 'i9e0d1068ed5ac33b44b67d0', code: '41312312312312312312', type: 'facebook', name: 'Minh Ta', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
  { id: 'j9e0d1068ed5ac33b44b67d0', code: '51312312312312312312', type: 'google', name: 'Nguyen Van A', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
  { id: 'k9e0d1068ed5ac33b44b67d0', code: '61312312312312312312', type: 'google', name: 'Pham Van B', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
  { id: 'l9e0d1068ed5ac33b44b67d0', code: '71312312312312312312', type: 'facebook', name: 'Le Thi C', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
  { id: 'm9e0d1068ed5ac33b44b67d0', code: '81312312312312312312', type: 'google', name: 'Tran Thi X', created: new Date("2017-11-03T22:03:23.231+07:00"), updated: new Date("2017-11-03T22:03:23.231+07:00") },
];

export default class TableExampleSortable extends React.Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <Grid stackable padded columns='equal' textAlign='left'>
        <Grid.Row columns='sixteen'>
          <Grid.Column width='sixteen'>
            <Menu secondary stackable>
              <Menu.Item position='left' style={{paddingLeft: 0, paddingRight: 0}}>
                <Button.Group basic>
                  <Button><Icon name='file' color='green' />New</Button>
                  <Button><Icon name='delete' color='red' />Delete</Button>
                </Button.Group>
              </Menu.Item>
              <Menu.Item position='right' style={{paddingLeft: 0, paddingRight: 0}}>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width='sixteen' style={{paddingBottom: 11}}>
            <Table compact sortable selectable striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell collapsing><Checkbox /></Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'code' ? direction : null} onClick={this.handleSort('type')}>Code</Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={this.handleSort('name')}>Name</Table.HeaderCell>
                  <Table.HeaderCell textAlign='right' sorted={column === 'created' ? direction : null} onClick={this.handleSort('created')}>Created</Table.HeaderCell>
                  <Table.HeaderCell textAlign='right' sorted={column === 'updated' ? direction : null} onClick={this.handleSort('updated')}>Updated</Table.HeaderCell>
                  <Table.HeaderCell disabled></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {_.map(data, ({ id, code, type, name, created, updated }) => (
                  <Table.Row key={id}>
                    <Table.Cell collapsing singleLine><Checkbox key={id} /></Table.Cell>
                    <Table.Cell collapsing><Icon name={type as SemanticICONS} /> {code}</Table.Cell>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell collapsing textAlign='right'>{moment(created).fromNow()}</Table.Cell>
                    <Table.Cell collapsing textAlign='right'>{moment(updated).fromNow()}</Table.Cell>
                    <Table.Cell collapsing singleLine><Button key={id} icon='edit' size='mini' /><Button key={id} icon='delete' size='mini' /></Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width='8' verticalAlign='middle'>
            <span>Showing&nbsp;<b>1-10</b>&nbsp;of&nbsp;<b>1,234</b>.&nbsp;Page has&nbsp;<Dropdown inline value={10} options={[{text: '10 items', value: 10}, {text: '20 items', value: 20}, {text: '50 items', value: 50}, {text: '100 items', value: 100}]} /></span>
          </Grid.Column>
          <Grid.Column width='8'>
            <Menu pagination floated='right'>
              <Menu.Item as='a' icon><Icon name='chevron left' /></Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a'>...</Menu.Item>
              <Menu.Item as='a'>99</Menu.Item>
              <Menu.Item as='a'>100</Menu.Item>
              <Menu.Item as='a' icon><Icon name='chevron right' /></Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}