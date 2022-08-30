import { useEffect } from 'react';
import { useState } from 'react';
import * as cheerio from 'cheerio';
import Loader from '../loader/Loader';
import axios from 'axios';

const Scraper = () => {
    const URL = 'https://www.mohfw.gov.in/';
    const [covidData, setCovidData] = useState([]);


    const grabber = async () => {
        try {

            const { data } = await axios.get(URL);
            const $ = cheerio.load(data);


            const activeCase = $('.bg-blue strong:nth-of-type(2)');
            const discharged = $('.bg-green strong:nth-of-type(2)');
            const deathCase = $('.bg-red strong:nth-of-type(2)');
            const totalVaccination = $('span.coviddata');


            const DataArray = [activeCase.text().trim(), discharged.text().trim(), deathCase.text().trim(), totalVaccination.text().trim()];
            setCovidData(DataArray);


        } catch (error) {
            console.log("Error: " + error);
        }
    }

    useEffect(() => {
        grabber();
    }, []);

    return (
        <div>
            <div className='cardContainer'>


                <div className="card" style={{ width: "18rem" }}>
                    <img src="./activeCase.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <Loader covidData={covidData} />

                        <h5 className="card-title">{covidData[0]}</h5>
                        <p className="card-text">Total Active Cases</p>

                    </div>


                </div>


                <div className="card" style={{ width: "18rem" }}>
                    <img src="./RIP.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <Loader covidData={covidData} />

                        <h5 className="card-title">{covidData[2]}</h5>
                        <p className="card-text">Deaths</p>

                    </div>


                </div>


                <div className="card" style={{ width: "18rem" }}>
                    <img src="./Patient_Discharge.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <Loader covidData={covidData} />

                        <h5 className="card-title">{covidData[1]}</h5>
                        <p className="card-text">Discharged</p>

                    </div>


                </div>


                <br></br>


                <div className="card" style={{ width: "80%" }}>
                    <img src="./injection2.png" className="card-img-top injection" alt="..."></img>
                    <div className="card-body">
                        <Loader covidData={covidData} />

                        <h5 className="card-title">{covidData[3]}</h5>
                        <p className="card-text">Total Vaccination</p>

                    </div>


                </div>
            </div>

        </div>
    );
};




export default Scraper;
