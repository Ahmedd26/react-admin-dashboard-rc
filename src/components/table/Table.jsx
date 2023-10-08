import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 255,
      product: "Drum-kit",
      seller: "Blind For Love",
      buyer: "Mr Beats",
      date: "1 March",
      amount: 57,
    },
    {
      id: 256,
      product: "Drum-kit",
      seller: "Blind For Love",
      buyer: "Mr Beats",
      date: "1 March",
      amount: 57,
    },
    {
      id: 257,
      product: "Drum-kit",
      seller: "Blind For Love",
      buyer: "Mr Beats",
      date: "1 March",
      amount: 57,
    },
    {
      id: 258,
      product: "Drum-kit",
      seller: "Blind For Love",
      buyer: "Mr Beats",
      date: "1 March",
      amount: 57,
    },
    {
      id: 259,
      product: "Drum-kit",
      seller: "Blind For Love",
      buyer: "Mr Beats",
      date: "1 March",
      amount: 57,
    },
    {
      id: 260,
      product: "Drum-kit",
      seller: "Blind For Love",
      buyer: "Mr Beats",
      date: "1 March",
      amount: 57,
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Tracking ID </TableCell>
            <TableCell className="table-cell">Product </TableCell>
            <TableCell className="table-cell">Seller </TableCell>
            <TableCell className="table-cell">Buyer </TableCell>
            <TableCell className="table-cell">Date </TableCell>
            <TableCell className="table-cell">Amount </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="table-cell">{row.id}</TableCell>
              <TableCell className="table-cell">{row.product}</TableCell>
              <TableCell className="table-cell">{row.seller}</TableCell>
              <TableCell className="table-cell">{row.buyer}</TableCell>
              <TableCell className="table-cell">{row.date}</TableCell>
              <TableCell className="table-cell">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
