import CardList from '../CardList/CardList'
import styles from './FilmList.module.scss'

export default function FilmList({fullData, filterText}) {

    const filteredData = [...fullData.filter(item => item[1].includes(filterText))]
  
    const dataNames = []
  
    if (filteredData.length > 0) {
      filteredData.forEach(item => {
        dataNames.push(item[1])
      })
    } else {
      fullData.forEach(item => {
        dataNames.push(item[1])
      })
    }
    // function object to display card and imageconnect
  
    const ready = filterText.length > 0 ? <CardList arr = {filteredData} /> : <CardList arr={fullData} />
  
    return (
      <div className={styles.grid}>
        {ready}
      </div>
    )
  }