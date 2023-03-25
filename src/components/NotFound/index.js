import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const background = isDarkTheme ? 'dark-bg' : 'light-bg'
        const heading = isDarkTheme ? 'dark-heading' : 'light-heading'
        const description = isDarkTheme
          ? 'dark-description'
          : 'light-description'
        return (
          <div className={background}>
            <img
              className="not-found-img"
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1 className={heading}>Lost Your Way ?</h1>
            <p className={description}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default NotFound
