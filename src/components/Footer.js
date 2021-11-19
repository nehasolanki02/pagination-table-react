import React from 'react'

function Footer(props) {
    let currentPage=props.stateData.currentPage
    console.log(currentPage)
    return (
        <tfoot>
            <tr>
              <td>
                <button id="nextpage" onClick={props.firstPageFun} >
                  First{" "}
                </button>
                <button id="prevpage" onClick={props.prevPageFun}>
                  {" "}
                  Prev
                </button>
                <input
                  type="text"
                  id="pageNo"
                  disabled
                  value={currentPage}
                  style={{ width: "20px" }}
                />
                <button id="nextpage" onClick={props.nextPageFun}>
                  {" "}
                  Next
                </button>
                <button id="lastpage" onClick={props.lastPageFun}>
                  Last
                </button>
              </td>
              <td>
                <select id="dropdown" onChange={props.handleChange} >
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </td>
            </tr>
          </tfoot>
    )
}

export default Footer
