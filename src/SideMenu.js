import TagButtom from "./TagButtom"


export default function(){
    return (
        <div style={{ margin: "30px", border: "solid teal 5px" }}>
            {/* <button className="tagButton">Click Me</button> call anther badge(TagButtom)*/}
            <TagButtom title='اخر المقالات' />
            <TagButtom title='اكثر قرائة' />
            <TagButtom title='مميز' />
            <TagButtom title='مقالات الاسبوع ' />
            <TagButtom title='اخبار التكنولجيا ' />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
        </div>
    )
}

