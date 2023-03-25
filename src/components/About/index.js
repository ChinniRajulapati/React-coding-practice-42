// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const background = isDarkTheme ? 'dark-bg' : 'light-bg'
        const image = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        const heading = isDarkTheme ? 'dark-heading' : 'light-heading'
        return (
          <div className={background}>
            <img alt="about" className="image" src={image} />
            <h1 className={heading}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default About
