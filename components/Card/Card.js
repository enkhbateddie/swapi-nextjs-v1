import styles from './Card.module.scss'
import { useState, useEffect, useMemo } from 'react'
import star from '../../public/star.png'
import Image from 'next/image'
import ImageConnect from '../ImageConnect/ImageConnect'
import { useRouter } from 'next/router'

export default function Card({title}) {
  const router = useRouter()
  // first localStorage setItem(kye, count state)
  const [count, setCount] = useState(() => {
        if (typeof window !== 'undefined') {
          if(window.localStorage.getItem(title) === null) {
            return 0
          } else {
            return window.localStorage.getItem(title)
          }
        }
  })

  function Linker(title) {
    switch(title) {
        case 'A NEW HOPE':
            return "1"
        case 'THE EMPIRE STRIKES BACK':
            return "2"
        case 'RETURN OF THE JEDI':
            return "3"
        case 'THE PHANTOM MENACE':
            return "4"
        case 'ATTACK OF THE CLONES':
            return "5"
        case 'REVENGE OF THE SITH':
            return "6"
        default:
            return
    }
  }

  const url = `/films/${Linker(title)}`

  const handleClick = (e) => {
    e.preventDefault();
    router.push(url)
  }

  useEffect(() => {
    window.localStorage.setItem(title, count);
  }, [title, count])


  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h1 className={styles.title}>{title}</h1>
          <a href={url} onClick={handleClick}>
              <ImageConnect src={title} alt={title} />
          </a>
      </div>

      <div className={styles.likeButton}>
        <Image
          src={star}
          alt='star'
          height={'20rem'}
          width={'20rem'}
          onClick={() => {setCount(n => parseInt(n) + 1)}}
        />
        <Image
          className={styles.whiteStar}
          src={star}
          alt='star'
          height={'20rem'}
          width={'20rem'}
          onClick={() => {
            if(count > 0) {
              setCount(n => parseInt(n) - 1)}}
            }
        />
        {count}
      </div>
    </div>
  )
}