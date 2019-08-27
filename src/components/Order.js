import Datasort from 'react-data-sort'
import React, { Component } from 'react'
 
const tableData = [{ id: 1, name: 'b'}, {id: 2, name: 'c'}, {id: 3, name: 'a' }]
 
function Order() {
  return (
      <div className='container-fluid'>
    <Datasort
      data={tableData}
      paginate
      render={({ data }) => (
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name }) => (
              <tr key={id}>
                <td>{id}</td>
                <td> {name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
    </div>
  )
}
 
export default Order