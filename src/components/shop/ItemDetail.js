const ItemDetail = ({item: {title, price, img, description}}) => {
  return (
    <div className="m-5">
      <div>{title}</div>
      <div>{price}</div>
      <div>{img}</div>
      <div>{description}</div>
    </div>
  )
}
export default ItemDetail