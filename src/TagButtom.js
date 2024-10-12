import "./TagButtomStyle.css"


export default function TagButtom ({ title="Click Me" }) {
    return (
        <button className="tagButton">{ title }</button>
    )
}