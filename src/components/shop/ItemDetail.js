import DarkmodeContext from "../../context/Darkmode"
import { useContext } from "react"

const ItemDetail = ({item: {title, price, img, description}}) => {

  const darkmode = useContext(DarkmodeContext)

  return (
    <div className="m-5">
      <div>
        <strong>Darkmode:{darkmode ? 'Active' : 'Disabled'}</strong>
      </div>
      <div>{title}</div>
      <div>{price}</div>
      <div>{img}</div>
      <div>{description}</div>
    </div>
  )
}
export default ItemDetail