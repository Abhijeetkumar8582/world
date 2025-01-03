import * as React from "react";
import ImageList from "@mui/material/ImageList";
import styles from "../../styles/Product.module.css";
import Navbar from "./Navbar";
// import styles from "../../styles/Home.module.css";?
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";

export default function WovenImageList() {
  const [openImage, setOpenImage] = React.useState(true);
  const [openVideo, setopenVideo] = React.useState(false);
  const Shampoo = [
    "Hair care",
    "Shampoo",
    "Masque",
    "Conditioner",
    "Serum",
    "Spa",
    "Spanish rosemary water",
    "Biotin hair growth oil",
    "Hair massage cream",
    "Hair oil",
  ];

  const itemData = [
    {
      img: "https://www.bigbasket.com/media/uploads/p/xxl/40024104-2_12-loreal-paris-fall-resist-3x-anti-hairfall-shampoo.jpg",
      title: "Loreal Paris Shampoo",
      author: "@bkristastucchio",
    },
    {
      img: "https://cdn.kindlife.in/images/detailed/57/1.7_pkjr-xb.jpg?t=1692446854",
      title: "Skinstory",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shampoo/s/w/y/200-australian-tea-tree-anti-dandruff-shampoo-prevents-dandruff-original-imah3zqmzgkpvwrc.jpeg?q=90&crop=false",
      title: "Pilgrim",
      author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      author: "@peterlaster",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      author: "@southside_customs",
    },
  ];
  let openImageFun = () => {
    setopenVideo(false);
    setOpenImage(true);
  };
  let openVideoFun = () => {
    setopenVideo(true);
    setOpenImage(false);
  };
  return (
    <div>
      <Navbar />

      <div className={styles.buttonDiv}>
        <button
          className={styles.custombtn1}
          disabled={openImage}
          onClick={() => openImageFun()}
        >
          Haircare
        </button>
        <button
          className={styles.custombtn1}
          disabled={openVideo}
          onClick={() => openVideoFun()}
        >
          Skincare
        </button>
        <button
          className={styles.custombtn1}
          disabled={openVideo}
          onClick={() => openVideoFun()}
        >
          Makeup
        </button>
        <button
          className={styles.custombtn1}
          disabled={openVideo}
          onClick={() => openVideoFun()}
        >
          Sunglasses
        </button>
      </div>

      <div style={{display:"flex",justifyContent:'center',gap:"10px",padding:"5px",flexWrap:'wrap',marginTop:"20px"}}>
        {Shampoo.map((item)=>(
          <button
          className={styles.custombtn2}
          disabled={openVideo}
          onClick={() => openVideoFun()}
        >
          {item}
        </button>
        ))}
      </div>
      {openImage ? (
        <div className={styles.imageListDiv}>
          <div variant="woven" className={styles.imageList_column}>
            {itemData.map((item) => (
              /* From Uiverse.io by Sashank02 */
              <div className={styles.card}>
                <div className={styles.cardimage}>
                  <Image src={item.img} width={200} height={200} style={{width:"100%"}}></Image>
                </div>
                <p className={styles.cardtitle}>{item.title}</p>
                <p className={styles.cardbody}>
                From anti-dandruff to sulfate-free and hair fall-control shampoos, the right product can make all the difference
                </p>
                <button style={{marginTop:"5px"}}className={styles.custombtn1}>Know More</button>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Video */}
      {openVideo ? (
        <div className={styles.VideoListDiv}>
          <div variant="woven" className={styles.VideoList_column}>
            {itemData.map((item) => (
              <div>
                <video
                  controls
                  style={{
                    maxWidth: "350px",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                  loop
                  poster="https://assets.codepen.io/6093409/river.jpg"
                >
                  <source
                    src="https://assets.codepen.io/6093409/river.mp4"
                    type="video/mp4"
                  />
                </video>
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>by: {item.author}</span>}
                  position="below"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
