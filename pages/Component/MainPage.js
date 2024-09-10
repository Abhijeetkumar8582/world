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
      image: "/lipsticks.jpg", // Replace with the actual path
    },
    {
      title: "Skincare Set",
      description: "A complete skincare set for glowing, hydrated skin.",
      image: "/Skincare.jpg", // Replace with the actual path
    },
    {
      title: "Makeup Kit",
      description:
        "All-in-one makeup kit for beginners and professionals alike.",
      image: "/makeup.jpg", // Replace with the actual path
    },
    {
      title: "Sunglasses",
      description: "Stylish and protective sunglasses for a sunny day.",
      image: "/sunglass.jpg", // Replace with the actual path
    },
  ];
  const makeupPurchases = [
    {
      datetime: "2 days ago",
      description:
        "I absolutely love this lipstick from Sana World! The color lasts all day and feels so smooth.",
      author: "— Sarah Johnson",
    },
    {
      datetime: "1 week ago",
      description:
        "The skincare set is a must-have! My skin has never been more hydrated and glowing. Highly recommended.",
      author: "— Emily Watson",
    },
    {
      datetime: "3 days ago",
      description:
        "The foundation is flawless! Sana World has the best makeup products, and I'm hooked!",
      author: "— Jessica Lee",
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

      {/* // quotes */}
      <div className={styles.authorcontainer}>
        <blockquote className={styles.quote}>
          "Give a woman the right makeup and she can conquer the world."
        </blockquote>
        <cite className={styles.author}>— Charlotte Tilbury</cite>
      </div>

      {/* // products */}
      <div
      className={styles.productList}
        
      >
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.img}>
              <Image
                src={product.image}
                width={100}
                className={styles.imagefill}
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

      {/* {testimonial} */}
      <div className={styles.testimonialquote}>
        <h2>See whats our client say about us -- Sana's World</h2>
      </div>
      <div className={styles.testimonialcontainer}>
        {makeupPurchases.map((testimonial, index) => (
          /* From Uiverse.io by Yaya12085 */
          <div className={styles.testimonialcard}>
            <div className={styles.testimonialinfos}>
              <p className={styles.testimonialdatetime}>
                {testimonial.datetime}
              </p>
              <p className={styles.testimonialdescription}>
                {testimonial.description}
              </p>
            </div>

            <div className={styles.testimonialauthor}>
              — {testimonial.author}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.contactusDiv}>
        <div className={styles.contactusDivImage}>
          <Image
            src="/sanaImage.png" // Replace with your image path
            alt="Sana's world Image"
            width={300} // Adjust the size as needed
            height={400} // Adjust the size as needed
            className={styles.image}
          />
        </div>
        <div
        className={styles.contactusDivText}
         
        >
          <div>
            <h1 style={{ color: "white" }}>
              Contact me if you need a professional markeup{" "}
            </h1>
          </div>
          <div>
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </li>
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <svg
                  height="1.8em"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  class="twitter"
                >
                  <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                </svg>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
