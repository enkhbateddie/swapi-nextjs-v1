import Image from 'next/image'
import onePic from '../../public/films/one.png'
import twoPic from '../../public/films/two.png'
import threePic from '../../public/films/three.png'
import fourPic from '../../public/films/four.png'
import fivePic from '../../public/films/five.png'
import sixPic from '../../public/films/six.png'
import styles from './ImageConnect.module.scss'


export default function ImageConnect({src, alt}) {
    function getImage(imageId) {
        switch(imageId) {
            case 'A NEW HOPE':
                return onePic
            case 'THE EMPIRE STRIKES BACK':
                return twoPic
            case 'RETURN OF THE JEDI':
                return threePic
            case 'THE PHANTOM MENACE':
                return fourPic
            case 'ATTACK OF THE CLONES':
                return fivePic
            case 'REVENGE OF THE SITH':
                return sixPic
            default:
                return onePic
        }
    }
    return (
            <Image 
                className={styles.imageTop}
                src={getImage(src)} 
                alt={alt}
            />
    )
}