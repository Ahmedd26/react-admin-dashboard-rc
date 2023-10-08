import "./adminsDataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { adminColumns, adminRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const StyledDataGrid = styled(DataGrid)({
  "& .MuiDataGrid-cell": {
    borderBottom: "1px solid #2e385f",
    padding: "8px",
  },
  "& .MuiDataGrid-row": {
    cursor: "pointer",
  },
});
const Datatable = () => {
  const [data, setData] = useState(adminRows);

  const handleDelete = (event, id) => {
    event.stopPropagation();
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={(event) => handleDelete(event, params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="dataTable-title">
        <h1>Add New Admin</h1>
        <Link
          to="/admins/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <StyledDataGrid
        className="table"
        rows={data}
        columns={adminColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
