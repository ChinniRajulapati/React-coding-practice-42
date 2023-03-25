import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const background = isDarkTheme ? 'dark-bg' : 'light-bg'
        const image = !isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        const heading = isDarkTheme ? 'dark-heading' : 'light-heading'
        return (
          <div className={background}>
            <img alt="home" className="image" src={image} />
            <h1 className={heading}>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default Home
