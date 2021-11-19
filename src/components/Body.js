import React from 'react'

function Body(props) {
    const filteredArray=props.filteredArray
    return (
        <tbody id="body">
        {filteredArray.map((dataobj) => {
          return (
            <tr key="dataObj._id" style={{textAlign:"left"}}>
              <td>{dataobj.rollno}</td>
              <td>{dataobj.name}</td>

              <td>{dataobj.email}</td>
            </tr>
          );
        })}
      </tbody>
    )
}

export default Body

