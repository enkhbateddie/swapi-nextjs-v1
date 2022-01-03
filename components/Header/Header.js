import styles from './Header.module.scss'
import imageTop from '../../public/top.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  // get random value from 1 to 82

  return (
    <div className={styles.header}>
        <div>
            <Image
                src={imageTop} 
                alt="image top"
                width={'200rem'}
                height={'100rem'}
                quality={100}
            />
        </div>
        <div>
            <Link href="/">FILMS</Link>
        </div>
    </div>
  )
}

// | <Link href={"/people/17"}>ROLES</Link> 