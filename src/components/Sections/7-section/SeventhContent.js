import { Fragment } from "react";
import Styles from './SeventhContent.module.css'
import image from '../../UI/Logo1.png'
import image2 from '../../UI/Logo2.png'
import image3 from '../../UI/Logo3.png'
import image4 from '../../UI/Logo4.png'
import image5 from '../../UI/Logo5.png'
import image6 from '../../UI/Logo6.png'
import image7 from '../../UI/Logo7.png'
import image8 from '../../UI/Logo8.png'

const SeventhContent = () => {
  return <Fragment>
    <div className={Styles.SeventhContentFlex}>
      <img src={image} alt='car logo'/>
      <img src={image2} alt='car logo'/>
      <img src={image3} alt='car logo'/>
      <img src={image4} alt='car logo'/>
      <img src={image5} alt='car logo'/>
      <img src={image6} alt='car logo'/>
      <img src={image7} alt='car logo'/>
      <img src={image8} alt='car logo' className={Styles.small}/>
      
    </div>
  </Fragment>;
};

export default SeventhContent;
