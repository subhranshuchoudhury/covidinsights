const Loader = (props) => {
    return (

        <div>
            {
                props.covidData.length === 0 ? <div className='text-center'>
                    <div className="spinner-grow text-info" role="status"></div>
                    <div className="spinner-grow text-warning" role="status"></div>
                    <div className="spinner-grow text-danger" role="status"></div>
                </div> : null
            }
        </div>

    );
}

export default Loader;
