import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import UserContext from '../context/UserContext'

const useStyles = createUseStyles({
  wrapper: {
    borderBottom: 'black solid 1px',
    padding: [15, 10],
    textAlign: 'right'
  }
})

const Navigation = () => {
  const user = useContext(UserContext)
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      Welcome, {user.name}
    </div>
  )
}

export default Navigation
