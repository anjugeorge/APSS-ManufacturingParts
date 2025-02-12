import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import axios from "axios";
import ProductHero from "./ProductHero";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import RequestAQuoteForm from "../Form/RequestAQuoteForm";

export default function ProductList(props) {
  const [products, setProducts] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState("");
  React.useEffect(() => {
    async function productList() {
      try {
        const response = await axios.get("http://localhost:3000/product-list");
        setProducts(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.log(error);
      }
    }
    productList();
  }, []);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />

        <Box sx={{ flexGrow: 1 }} />
        <GridToolbarExport
          slotProps={{
            tooltip: { title: "Export data" },
            button: { variant: "outlined" },
          }}
        />
      </GridToolbarContainer>
    );
  }

  function requestQuote(row) {
    setSelectedRow(row);
  }

  const columns = [
    {
      field: "product",
      headerName: "Product Name",
      resizable: true,
      sortable: true,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "left",
      flex: 1,
    },
    {
      field: "requestQuote",
      headerName: "Request A Quote For This Product",
      sortable: false,
      resizable: false,
      disableColumnMenu: true,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        <div>
          {" "}
          <button
            onClick={() => {
              requestQuote(params.row.product);
            }}
          >
            <RequestAQuoteForm product={selectedRow} />
          </button>
        </div>
      ),
    },
  ];

  const rows = products.map((item) => ({
    id: item.id,
    product: item.productName,
  }));

  return (
    <>
      <ProductHero />

      <div className="mx-10 lg:mx-32 my-20">
        <Box sx={{ height: "400px", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: CustomToolbar }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
      <Footer />
    </>
  );
}
