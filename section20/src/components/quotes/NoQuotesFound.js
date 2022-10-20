import classes from './NoQuotesFound.module.css'
import { Link } from 'react-router-dom'

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link to="/new-quote">
        <button className="btn">Add a Quote</button>
      </Link>
    </div>
  )
}

export default NoQuotesFound
