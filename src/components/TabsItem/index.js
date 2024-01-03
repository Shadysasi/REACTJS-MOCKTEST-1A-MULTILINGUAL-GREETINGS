import './index.css'

const TabsItem = props => {
  const {tabItem, clickTabItem, isActive} = props
  const {id, buttonText} = tabItem
  const activeTabClassName = isActive ? 'active-tab' : ''

  const onClickTab = () => {
    clickTabItem(id)
  }

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default TabsItem
