import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Section() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
    },
  ];
  const products = [
    {
      title: "Lipstick",
      description: "A vibrant lipstick for all-day wear with a smooth finish.",
      image: "/images/lipstick.jpg", // Replace with the actual path
    },
    {
      title: "Skincare Set",
      description: "A complete skincare set for glowing, hydrated skin.",
      image: "/images/skincare.jpg", // Replace with the actual path
    },
    {
      title: "Makeup Kit",
      description:
        "All-in-one makeup kit for beginners and professionals alike.",
      image: "/images/makeup.jpg", // Replace with the actual path
    },
    {
      title: "Sunglasses",
      description: "Stylish and protective sunglasses for a sunny day.",
      image: "/images/sunglasses.jpg", // Replace with the actual path
    },
  ];
  return (
    <div>
      <div className={styles.sectionContainer}>
        {/* Left Side: Title, Description, and Button */}
        <div className={styles.textContainer}>
          <h1>Make Your Makeup Flawless with Our Premium Products</h1>
          <p>
            Enhance your look with our curated selection of high-quality,
            cruelty-free makeup. Find everything from flawless foundations to
            vibrant eyeshadows, designed to boost your confidence and highlight
            your natural beauty. Shop now for radiant results!
          </p>
          <button className={styles.learnMoreButton}>Learn More</button>

          {/* Chatbox Comment Divs */}
        </div>

        {/* Right Side: Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/sanaImage.png" // Replace with your image path
            alt="Sana's world Image"
            width={300} // Adjust the size as needed
            height={400} // Adjust the size as needed
            className={styles.image}
          />
          <div className={styles.chatboxContainer}>
            <div className={styles.chatbox} style={{ marginLeft: "75px" }}>
              <p style={{ fontSize: "small" }}>
                Absolutely love the results! The makeup lasted all day.
              </p>
            </div>
            <div className={styles.chatbox}>
              <p style={{ fontSize: "small" }}>
                Highly recommend for anyone looking for quality makeup!
              </p>
            </div>
            <div className={styles.chatbox} style={{ marginLeft: "75px" }}>
              <p style={{ fontSize: "small" }}>
                My experience was exceptional. I felt pampered and left with a
                stunning look!
              </p>
            </div>
            <div className={styles.chatbox}>
              <p style={{ fontSize: "small" }}>
                Fantastic service with a personal touch. Highly recommend for
                any event!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.header}>
            <p className={styles.tagline}>
              ENTER AS STRANGERS, LEAVE AS FRIENDS
            </p>
            <h1 className={styles.title}>Hello Beautiful!!</h1>

            <p className={styles.description}>
              At Sana's World, we believe that true allure comes from
              confidence. Our mission is to ensure you leave our salon not only
              looking stunning but also feeling your most confident self.
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className={styles.icon}>💄</span>
                <h6 style={{ fontWeight: "600" }}>Affordable Prices</h6>
              </div>
              <p>
                Budget-friendly rates, perfect for students and special
                occasions.
              </p>
            </div>

            <div className={styles.feature}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className={styles.icon}>💆‍♀️</span>
                <h6 style={{ fontWeight: "600" }}> Exceptional Service</h6>
              </div>
              <p>Enjoy a warm, friendly experience that puts you at ease.</p>
            </div>

            <div className={styles.feature}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className={styles.icon}>🏡</span>
                <h6 style={{ fontWeight: "600" }}>Convenient Home Service</h6>
              </div>
              <p>We come to you, making your beauty routine hassle-free.</p>
            </div>
          </div>
        </div>
        <div className={styles.images}>
          <ImageList
            sx={{ width: 500, height: 450 }}
            variant="woven"
            cols={3}
            gap={8}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>

      {/* // Testimonial */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          gap: "15px",
        }}
      >
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.img}>
              <Image
                src="/lipstick.jpeg"
                width={100}
                height={100}
                alt="Sunglasses" // Always include alt text for accessibility
              />
             
            </div>

            <div className={styles.text}>
              <p className={styles.h5}>{product.title}</p>
              <p className={styles.p}>{product.description}</p>

              <div className={styles.iconbox}>
                <p className={styles.Contactus}>Contact us</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
