import { useState } from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom"
import partsJson from "../parts.json"
import {Parts} from "./Parts"

const PartDetailContainer = () => {
  const [parts, setParts] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    const JSON = partsJson + id
    fetch( JSON )
    .then(res => res.json() )
    .then(data => {
      setParts( data )
    })
  }, [])

  return (
    <Parts {...parts} />
  )
}
export default PartDetailContainer

