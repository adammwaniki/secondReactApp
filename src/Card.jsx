function Card(){
    //you can use the src tag with https://via.placeholder.com/150 as your link for a placeholder image
    return (
        <div className="card">
            <img className="cardImage" src="src/assets/Two-Mbili Logo Transparent.png" alt="profile picture"></img>
            <h1 className="cardTitle">Two-Mbili 22</h1>
            <p className="cardText"> I make web apps and swim in my free time</p>
        </div>
    );

}

export default Card