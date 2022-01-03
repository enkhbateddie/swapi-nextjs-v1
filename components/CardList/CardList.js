import Card from '../Card/Card'
import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'

export default function CardList({arr}) {

  // useMemo to arrCounts
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const arrCounts = []

  if (typeof window !== 'undefined') {
    let j = 0
    while(j < arr.length) {
      let t = window.localStorage.getItem(arr[j][1])
      arrCounts.push([parseInt(t), arr[j][1]])
      ++j
    }
  }

  arrCounts.sort(function (a, b) {
    return a[0] - b[0];
  }).reverse();
  

  // render arrCounts again if arrCounts changed
  const [arrCounts2, setArrCounts2] = useState(arrCounts)

  useEffect(() => {
    setArrCounts2(arrCounts)
  }, [arrCounts])

    
return (
      arrCounts2.map(item => (
            <Card
              title={String(item[1])}
              key={item[1]}
            />
      ))
  )
}