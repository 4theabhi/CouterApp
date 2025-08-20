export function Member(props){
    const {city = 'Giddalur', name='Unknow'} = props;
    return <div className="memberCard">
        <h3>{name}</h3>
        <p className="cityStyle">{city}</p>
    </div>
}