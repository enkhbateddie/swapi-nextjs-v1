import Image from 'next/image'
import styles from './Profile.module.scss'


export default function Profile({children, src, alt}) {
    return (
        <div className = {styles.profile}>
            <Image 
                className={styles.imageProfile}
                src={src} 
                alt={alt}                
            />
            <br />
            <div className={styles.name}>{children}</div>
        </div>
    )
}