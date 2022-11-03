

const Rating = (props) => {
    const scaleValue = props.scaleValue;
    const range= [1, 2, 3, 4, 5];
    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
            )}
        </div>
    )
}
}