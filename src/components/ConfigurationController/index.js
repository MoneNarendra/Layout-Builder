import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value
      return (
        <div className="configuration-container">
          <div className="configuration-inner-container">
            <h1 className="layout-heading">Layout</h1>
            <ul className="check-box-container">
              <li className="each-checkbox">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onClick={onToggleShowContent}
                />
                <label htmlFor="content" className="checkbox-label">
                  Content
                </label>
              </li>
              <li className="each-checkbox">
                <input
                  type="checkbox"
                  id="left-navbar"
                  checked={showLeftNavbar}
                  onClick={onToggleShowLeftNavbar}
                />
                <label htmlFor="left-navbar" className="checkbox-label">
                  Left Navbar
                </label>
              </li>
              <li className="each-checkbox">
                <input
                  type="checkbox"
                  id="right-navbar"
                  checked={showRightNavbar}
                  onClick={onToggleShowRightNavbar}
                />
                <label htmlFor="right-navbar" className="checkbox-label">
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
