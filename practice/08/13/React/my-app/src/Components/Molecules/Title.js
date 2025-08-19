
const Title = ({title, subtitle, isInSubtitle}) => {
    return (
        <div className="title-container">
            <h1 className="title center margin text-color">{title}</h1>
            {isInSubtitle && <h2 className="subtitle center margin text-color">{subtitle}</h2>}
        </div>
    );
}

export default Title;