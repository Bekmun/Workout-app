import styles from './Hamburger.module.scss'
import { RiMenu3Line } from 'react-icons/ri'
import { RiCloseLine } from 'react-icons/ri'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import Menu from './Menu'

const Hamburger = () => {
  const { isShow, ref, setIsShow } = useOnClickOutside(false)

  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
      <Menu isShow={isShow} setIsShow={setIsShow} />
    </div>
  )
}

export default Hamburger
