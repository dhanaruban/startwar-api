import React from 'react';
import {BsInfoCircle} from "react-icons/bs/index";
import ReactTooltip from "react-tooltip";
import Person from './Person/Person'
import {ResidentCount} from "../Grid/Grid";
import './resident.css';

/*
This class component displays the Resident count and Residents name info icon
*/

class Residents extends React.Component {

    render() {

        return (
            <div>
                <ResidentCount>Residents : {this.props.residentCount}
                        <BsInfoCircle className="icon" data-tip data-for={this.props.id}/>
                </ResidentCount>
                <ReactTooltip id={this.props.id} data-arrow-color="white" place="left" effect="float" className="tooltip" multiline={true}>
                    <ul className="unorderedlist">
                        {this.props.residents.map(url => (
                            <Person key={url} URL={url} />
                        ))}
                    </ul>
                </ReactTooltip>
                }
            </div>
        );
    }
}


export default Residents;