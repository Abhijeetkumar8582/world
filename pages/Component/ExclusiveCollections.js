import React, { useState } from "react";
import HairCare from "../JSON/HairCare.json";
import styles from "../../styles/Product.module.css";
import Navbar from "./Navbar";
import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

const ButtonList = [
  {
    section: "Haircare",
    subButton: [
      "Shampoo",
      "Masque",
      "Conditioner",
      "Serum",
      "Spa",
      "Spanish rosemary water",
      "Biotin hair growth oil",
      "Hair massage cream",
      "Hair oil",
    ],
  },
  {
    section: "Skincare",
    subButton: ["Moisturizer", "Cleanser", "Toner", "Sunscreen"],
  },
  {
    section: "Makeup",
    subButton: ["Foundation", "Lipstick", "Mascara"],
  },
  {
    section: "Sunglasses",
    subButton: ["Aviator", "Round", "Square"],
  },
];

export default function WovenImageList() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClickOpen = (item) => {
    setSelectedProduct(item); // Set the selected product details
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null); // Clear selected product when dialog closes
  };
  // State to manage the active section (main button) and filtered products
  const [activeMainSection, setActiveMainSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);

  // Function to handle when a main section button is clicked
  const handleMainButtonClick = (section) => {
    setActiveMainSection(section);
    setActiveSubSection(null); // Reset sub-section when changing the main section
  };

  // Function to handle when a sub-section button is clicked
  const handleSubButtonClick = (subSection) => {
    setActiveSubSection(subSection);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  // Get filtered products based on the active sub-section or main section
  const getFilteredProducts = () => {
    // If there's a sub-section, filter by sub-section (category)
    if (activeSubSection) {
      return HairCare.filter((item) => item.category === activeSubSection);
    }
    // If there's a main section, filter by main section (category)
    if (activeMainSection) {
      return HairCare.filter((item) => item.category === activeMainSection);
    }
    // If no section or sub-section is selected, return all products
    return HairCare;
  };

  return (
    <div style={{height:'100vh'}}>
      <Navbar />

      {/* Main Section Buttons */}
      <div className={styles.buttonDiv}>
        {ButtonList.map((item) => (
          <button
            key={item.section}
            className={styles.custombtn1}
            onClick={() => handleMainButtonClick(item.section)}
          >
            {item.section}
          </button>
        ))}
      </div>

      {/* Sub-Buttons for the active main section */}
      {activeMainSection && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            padding: "5px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {ButtonList.find(
            (item) => item.section === activeMainSection
          )?.subButton.map((subItem) => (
            <button
              key={subItem}
              className={styles.custombtn2}
              onClick={() => handleSubButtonClick(subItem)} 
            >
              {subItem}
            </button>
          ))}
        </div>
      )}

     
      <div className={styles.imageListDiv}>
        <div variant="woven" className={styles.imageList_column}>
          {getFilteredProducts().map((item) => (
            <div className={styles.card} key={item.name}>
              <div className={styles.cardimage}>
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  style={{ width: "100%" }}
                  alt={item.name}
                />
              </div>
              <p className={styles.cardtitle}>{item.name}</p>
              <p className={styles.cardbody}>{item.description.slice(0, 60)}....</p>
              <button
                style={{ marginTop: "5px" }}
                onClick={() => handleClickOpen(item)}
                className={styles.custombtn1}
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <Dialog
            onClose={handleClose}
            open={open}
            aria-labelledby="product-dialog-title"
          >
            <DialogTitle id="product-dialog-title">
              {selectedProduct?.name || "Product Details"}
            </DialogTitle>
            <DialogContent dividers>
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                {selectedProduct && (
                  <Image
                    src={selectedProduct.image}
                    width={300}
                    height={300}
                    alt={selectedProduct.name}
                    style={{ borderRadius: "8px" }}
                  />
                )}
              </div>
              <Typography gutterBottom className={styles.paragraph}>
                {selectedProduct?.description}
              </Typography>
              <Typography variant="body1" className={styles.paragraph} style={{ fontWeight: 'bold',marginTop: '20px'  }}>Get the ideal product for your look. Contact us for expert advice.</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} className={styles.paragraph}>
                Contact at +91-7003803843
              </Button>
            </DialogActions>
          </Dialog>
        </BootstrapDialog>
      </div>
    </div>
  );
}
