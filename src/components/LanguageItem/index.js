import './index.css'

const LanguageItem = props => {
  const {langDetails} = props
  const {imageUrl, imageAltText} = langDetails
  return (
    <li className="item-container">
      <img src={imageUrl} alt={imageAltText} className="item-image" />
    </li>
  )
}
export default LanguageItem
