import styles from './List.module.css'

type Props = {
  onClick: (idx: number) => void
  items: Readonly<Array<{ n: number }>>
  cur: number
}

export const List: React.FC<Props> = ({ items, cur, onClick }) => {
  return (
    <div className={styles.root}>
      {items.map((item, index) => (
        <a
          key={index}
          className={styles.item}
          href="#void"
          data-current={cur === index}
          onClick={e => {
            e.preventDefault()
            onClick(index)
          }}
        >Серия #{item.n}</a>
      ))}
    </div>
  )
}