
export default function Enumeration({ subject, items }) {
  return (
    <div className="enumeration flex fs-heading-s"> 
        <span className="clr-neutral-400"> {subject}: </span>
        <ul className="flex" role="list">
            {
                items.map((item, index)=> {
                    return (
                    <li className="enumeration__item fw-bold clr-accent-200" key={index}> 
                      {item}
                    </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
