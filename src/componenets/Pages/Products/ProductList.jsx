import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import ProductHero from "./ProductHero";
import Hero from "../HeroBanner/Hero";
import Footer from "../Footer/Footer";

export default function ProductList() {
  const [products, setProducts] = React.useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
      <Footer />
    </>
  );
}
