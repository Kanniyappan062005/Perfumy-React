function Card(props){
    return(
        <div style={{backgroundColor:props.bgColor}} className="py-7 my-3 text-center rounded-md flex-grow">
            <p className="font-medium text-2xl">{props.title}</p>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Card