import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="item">
      <img src={imgUrl} className="image" alt={name} />
      <p className="name"> {name}</p>
    </li>
  )
}

export default DestinationItem
