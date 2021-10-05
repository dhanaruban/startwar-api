import React from 'react';
import './planet.css';
import {Diameter, Grid, GridImage, PlanetName} from "../Grid/Grid";
import planetImages from "./PlanetsImage";
import Residents from "../Residents/Residents";
import axios from 'axios';

/*
 This class fetches data from StarWar API (Planet Name, Diameter, Residents and Resident count).
 It provides filtered and sorted data.
*/

class Planet extends React.Component {
    constructor() {
        super();
        this.state = {items: []}
    }
    componentDidMount() {
        new Promise((resolve, reject) => {
            getPlanets('https://swapi.dev/api/planets', [], resolve, reject)
        })
        .then((data) => data
            .filter((resident) => isNaN(parseInt(resident.diameter)))
            .concat(data.filter((resident) => !isNaN(parseInt(resident.diameter)))
                .sort((a, b) => a.diameter - b.diameter)))
            .then(response => this.setState({items: response, loading: false}))
            .catch((err) => console.log('err:', err));
    }

    render(){
        let items = this.state.items;
        return (
            <Grid>
                {items.filter(item=>item.residents.length > 0).map(item => {
                        return (
                            <div className="container" key={item.name}>
                                <GridImage src={planetImages[item.name]}/>
                                <PlanetName>{item.name}</PlanetName>
                                <Diameter>Diameter : {item.diameter}</Diameter>
                                <Residents id={item.url} residentCount={item.residents.length} residents={item.residents}/>
                            </div>
                        )
                }
                    )}</Grid>
        );
    }
}
/*
This function iterates between the pages to fetch planets data
*/

export const getPlanets = (url, planets, resolve, reject) => {
    axios.get(url)
        .then(response => {
            const retrivedPlanets = planets.concat(response.data.results)
            if (response.data.next !== null) {
                getPlanets(response.data.next, retrivedPlanets, resolve, reject)
            } else {
                resolve(retrivedPlanets)
            }
        })
        .catch(error => {
            console.log(error)
            reject('Something wrong. Please refresh the page and try again.')
        })
}

export default Planet;