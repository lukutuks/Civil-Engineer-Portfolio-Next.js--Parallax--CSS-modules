import { Parallax } from "react-parallax";
import styles from '../styles/Image.module.css'
 const ImageOne = () => {
  return (
 <div>
    <Parallax className={styles.image} bgImage="/images/BG.jpg" strength={400}>
        <div className={styles.content}>
            <span className={styles.imgText}>JONAS PORTFOLIO</span>
        </div>
    </Parallax>
 </div>
    

  )
};

export default ImageOne
