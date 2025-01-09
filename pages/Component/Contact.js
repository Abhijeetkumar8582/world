import Image from "next/image";
import styles from "../../styles/Contact.module.css";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className={styles.sectionContainer}>
          <div className={styles.textContainer}>
            <h1>Contact us</h1>
            <p className={styles.paragraph}>
              We’re here to assist you at Sana World! Feel free to visit us,
              reach out anytime, or WhatsApp us for expert advice. Whether it’s
              skincare tips or makeup solutions, we’re here to help you look and
              feel your best!
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className={styles.icon}>🏡</span>
                  <h6 className={styles.information}>
                    &nbsp; &nbsp; R9JJ+HWP, Shyamnagar Station Rd, Banarjee
                    Para, Shyamnagar, Bhatpara, West Bengal 743127
                  </h6>
                </div>
              </div>

              <div className={styles.feature}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className={styles.icon}>📞</span>
                  <h6 className={styles.information}>
                    &nbsp; &nbsp; +01-8582821457
                  </h6>
                </div>
              </div>

              <div className={styles.feature}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className={styles.icon}>🏡</span>
                  <h6 className={styles.information}>
                    {" "}
                    &nbsp; &nbsp;At-Home Convenience
                  </h6>
                </div>
              </div>
            </div>
            <div
              className={styles.statDiv}
            >
              <div className={styles.statCard}>
                <p className={styles.statTitle}>Clients 100+ </p>
                {/* <p className={styles.statValue}>100+</p> */}
              </div>
              <div className={styles.statCard}>
                <p className={styles.statTitle}>Brands 20+</p>
                {/* <p className={styles.statValue}>20+</p> */}
              </div>
              <div className={styles.statCard}>
                <p className={styles.statTitle}>Products Offered 250+</p>
                {/* <p className={styles.statValue}>250+</p> */}
              </div>
            </div>
          </div>

          <div className={styles.imageContainer1}>
            <Image
              src="/sanaShopOne.jpeg"
              alt="Sana's world Image"
              width={200}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.imageContainer}>
            <video
              src="https://videos.pexels.com/video-files/7754395/7754395-hd_1080_1920_30fps.mp4"
              alt="Sana's World Video"
              width={300}
              height={400}
              className={styles.video}
              
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
