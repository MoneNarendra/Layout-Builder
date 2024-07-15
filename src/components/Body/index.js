import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const renderLeftNavbar = () => (
        <div className="left-navbar-menu-container">
          <h1 className="body-headings">Left Navbar Menu</h1>
          <ul className="left-navbar-container">
            <li className="left-navbar-item">Item 1</li>
            <li className="left-navbar-item">Item 2</li>
            <li className="left-navbar-item">Item 3</li>
            <li className="left-navbar-item">Item 4</li>
          </ul>
        </div>
      )

      const renderContent = () => (
        <div className="content-container">
          <h1 className="body-headings">Content</h1>
          <p className="content-discription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const renderRightNavbar = () => (
        <div className="right-navbar-container">
          <h1 className="body-headings">Right Navbar Menu</h1>
          <ul className="right-navbar-items-container">
            <li className="right-navbar-item">
              <p className="right-navbar-item-text">Ad 1</p>
            </li>
            <li className="right-navbar-item">
              <p className="right-navbar-item-text">Ad 2</p>
            </li>
          </ul>
        </div>
      )

      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && renderLeftNavbar()}
          {showContent && renderContent()}
          {showRightNavbar && renderRightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
