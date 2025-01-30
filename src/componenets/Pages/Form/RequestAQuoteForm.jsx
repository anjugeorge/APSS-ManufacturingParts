import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  InputLabel,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { FixedSizeList } from "react-window";
import { Navigate } from "react-router-dom";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [products, setProducts] = React.useState([]);
  const [quoteDetials, setQuoteDetials] = useState({
    fullName: "",
    companyName: "",

    email: "",
    phoneNumber: "",
    product: "",
    partDesc: "",
    qty: 0,
    brand: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputname = event.target.name;
    setQuoteDetials((prevValue) => {
      if (inputname === "fullName") {
        return {
          fullName: newValue,
          companyName: prevValue.companyName,
          email: prevValue.email,
          phoneNumber: prevValue.phoneNumber,
          product: prevValue.product,
          partDesc: prevValue.partDesc,
          qty: prevValue.qty,
          brand: prevValue.brand,
        };
      } else if (inputname === "companyName") {
        return {
          fullName: prevValue.fullName,
          companyName: newValue,
          email: prevValue.email,
          phoneNumber: prevValue.phoneNumber,
          product: prevValue.product,
          partDesc: prevValue.partDesc,
          qty: prevValue.qty,
          brand: prevValue.brand,
        };
      } else if (inputname === "email") {
        return {
          fullName: prevValue.fullName,
          companyName: prevValue.companyName,
          email: newValue,
          phoneNumber: prevValue.phoneNumber,
          product: prevValue.product,
          partDesc: prevValue.partDesc,
          qty: prevValue.qty,
          brand: prevValue.brand,
        };
      } else if (inputname === "phoneNumber") {
        return {
          fullName: prevValue.fullName,
          companyName: prevValue.companyName,
          email: prevValue.email,
          phoneNumber: newValue,
          product: prevValue.product,
          partDesc: prevValue.partDesc,
          qty: prevValue.qty,
          brand: prevValue.brand,
        };
      } else if (inputname === "product") {
        return {
          fullName: prevValue.fullName,
          companyName: prevValue.companyName,
          email: prevValue.email,
          phoneNumber: prevValue.phoneNumber,
          product: newValue,
          partDesc: prevValue.partDesc,
          qty: prevValue.qty,
          brand: prevValue.brand,
        };
      } else if (inputname === "partDesc") {
        return {
          fullName: prevValue.fullName,
          companyName: prevValue.companyName,
          email: prevValue.email,
          phoneNumber: prevValue.phoneNumber,
          product: prevValue.product,
          partDesc: newValue,
          qty: prevValue.qty,
          brand: prevValue.brand,
        };
      } else if (inputname === "qty") {
        return {
          fullName: prevValue.fullName,
          companyName: prevValue.companyName,
          email: prevValue.email,
          phoneNumber: prevValue.phoneNumber,
          product: prevValue.product,
          partDesc: prevValue.partDesc,
          qty: newValue,
          brand: prevValue.brand,
        };
      } else if (inputname === "brand") {
        return {
          fullName: prevValue.fullName,
          companyName: prevValue.companyName,
          email: prevValue.email,
          phoneNumber: prevValue.phoneNumber,
          product: prevValue.product,
          partDesc: prevValue.partDesc,
          qty: prevValue.qty,
          brand: newValue,
        };
      }
    });
    console.log(quoteDetials);
  }

  React.useEffect(() => {
    async function productList() {
      try {
        const response = await axios.get("http://localhost:3000/product-list");
        setProducts(response.data.result);
        console.log(products);
        console.log(response.data.result);
      } catch (error) {
        console.log(error);
      }
    }
    productList();
  }, []);
  return (
    <React.Fragment>
      <Button
        variant="contained"
        style={{ backgroundColor: "#A87676" }}
        onClick={handleClickOpen}
      >
        Request a Quote
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: async (event) => {
            try {
              event.preventDefault();
              const response = await axios.post(
                "http://localhost:3000/requestQuote",
                {
                  fullName: quoteDetials.fullName,
                  companyName: quoteDetials.companyName,
                  email: quoteDetials.email,
                  phoneNumber: quoteDetials.phoneNumber,
                  product: quoteDetials.product,
                  partDesc: quoteDetials.partDesc,
                  qty: quoteDetials.qty,
                  brand: quoteDetials.brand,
                }
              );
              handleClose();
              alert(
                "Your request has been received. Our support team will contact you shortly."
              );
            } catch (error) {
              console.log("Error:", error);
            }
          },
        }}
      >
        <DialogTitle>Request a quote</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Simply fill out the form below, and we will get back to you with a
            tailored quote in no time.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="fullName"
            name="fullName"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="companyName"
            name="companyName"
            label="Company Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <label>Select a Product</label>
          <NativeSelect
            onChange={handleChange}
            name="product"
            value={quoteDetials.product}
            fullWidth
            variant="standard"
          >
            {products.map((product) => (
              <option name="product" value={product.product}>
                {product.product}
              </option>
            ))}
          </NativeSelect>
          <TextField
            autoFocus
            required
            margin="dense"
            id="partDesc"
            name="partDesc"
            label="Part Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="qty"
            name="qty"
            label="Quantity Required"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="brand"
            name="brand"
            label="Preffered Brands/Manufacturers"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Send</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
