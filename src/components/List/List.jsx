import './List.scss'


export default function List({title,active,setActive,id}) {
  return (
    <li className={active?"list active":"list"} onClick={()=>setActive(id)}>{title}</li>
  )
}
