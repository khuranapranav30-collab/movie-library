function Movies(props) {
    return (
        <>
            <style>
                {`
                  .movie-card{
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    gap:30px;
                    }
                `}
            </style>

            <div className='movie-card'>
                <div className='card-top'>
                    <h1>Title: {props.title}</h1>
                </div>

                <div className='card-bottom'>
                    <p>Genre: {props.genre}</p>
                    <p>Year: {props.year}</p>
                </div>
            </div>
        </>
    )
}

export default Movies
