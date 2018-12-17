import _ from 'lodash';
import React, { Component } from 'react';
import SCRIPT_10_6 from '../configs/SCRIPT_10_6_Config';
import { connect } from 'react-redux';
import { Container, Accordion, Icon, 
        Table, Input,  Checkbox} from 'semantic-ui-react';
import Store from '../../main/Store';
import * as actions from '../actions';

const qualifierNames = {
    "94": "File ID",
    "BN": "Beeper",
    "CP": "Cellular",
    "EM": "Electronic Mail",
    "FX": "Fax",
    "HP": "Home",
    "NP": "Night",
    "TE": "Telephone",
    "WP": "Work",
    "0B": "State License Number",
    "1C": "Medicare Number",
    "1D": "Medicaid Number",
    "1G": "UPIN",
    "1J": "Facility ID",
    "2U": "Payer ID",
    "ADI": "Processor Control Number",
    "BO": "BIN",
    "EA": "Meidcal Record Identification Number",
    "EJ": "Patient Account Number",
    "D3": "NCPDP ID",
    "DH": "DEA NUmber",
    "GI": "Certificate to Prescribe",
    "HI": "Health Identification Number",
    "HPI": "National Provider ID",
    "NF": "NAIC Code",
    "SY": "Social Security Number",
    "UU": "Health Plan Identifier",
    "WI": "Waiver ID",
    "ZZ": "Mutually Defined"

}

var config;

class SCRIPT_10_6_Config extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            activeInnerIndex: 0,
            itemsToSave: false,
            showSaveMessage: false
        };
        // figure out what config are you modifying
        const store = new Store({
            configName : 'user-preferences',
            content: {},
            domain: this.props.domain,
            type: this.props.type
        });

        // you need to find the config file
        let userPrefsDefined = false;
        if(store.exists()) {
            config = store.get(this.props.type);        
            if(config == null) {
                config = SCRIPT_10_6;
            }else {
                userPrefsDefined = true
            }
        } else {
            config = SCRIPT_10_6;
        }
        this.props.setUserPrefsDefined(userPrefsDefined);
        this.props.setConfigParameters(this.props.type, this.props.domain, config);
    }

    handleOnChangeDeid = (e, data) => {
        _.forEach(config, (value, key) => {
            if(value.displayName === data.name) {
                config[key].deidentify = (data.value == 'true') ? true : false;
            }
        });
        this.props.defaultValueChanged(true);
        this.setState({itemsToSave: true});
    }

    handleOnChangeDefaultValue = (e, data) => {
        _.forEach(config, (value, key) => {
            if(value.displayName === data.name) {
                config[key].defaultValue = data.value;
            }
        });

        this.props.defaultValueChanged(true);
        this.setState({itemsToSave: true})
    }

    handleOnChangeNodeDefaultValue = (e, data) => {
        _.forEach(config, (value, key) => {
            
            if(value.displayName === data.name) {
                value.defaultValue[data.qualifier] = data.value;
                config[key].defaultValue[data.qualifier] = data.value;
            }
        });

        this.props.defaultValueChanged(true);
        this.setState({itemsToSave: true})
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    handleInnerClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeInnerIndex } = this.state;
        const newIndex = activeInnerIndex === index ? -1 : index;
        this.setState({ activeInnerIndex: newIndex })
    }

    renderAccordion() {
        var nodes = _.groupBy(config, 'location.node');
        var index = 0;
        return _.map(nodes, (value, key) => {
            return (
                <div key={index++}>
                    <Accordion.Title 
                        active={this.state.activeIndex === index}
                        index={index}
                        onClick={this.handleClick}>
                        <Icon name='dropdown'  />
                        {key}
                    </Accordion.Title>
                    <Accordion.Content
                        active={this.state.activeIndex === index}>     
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Data Element</Table.HeaderCell>
                                    <Table.HeaderCell>Deidentify</Table.HeaderCell>
                                    <Table.HeaderCell>Default Value</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                            {this.renderRows(value)}
                            </Table.Body>
                        </Table>  
                    </Accordion.Content>
                </div>              
            );
        });
    }

    renderChildNodes(row) {
        let index = 0;
        let nodes = row.defaultValue;
        return _.map(nodes, (value, key) => {           
            return(
            <Table.Row key={index++}>
                <Table.Cell colSpan='3'>{qualifierNames[key]} - {key}</Table.Cell>
                <Table.Cell ></Table.Cell>
                <Table.Cell><Input
                    name={row.displayName}
                    onChange={this.handleOnChangeNodeDefaultValue} 
                    defaultValue={value}
                    qualifier={key}
                    /></Table.Cell>
            </Table.Row>)
        });
    }

    renderRows(rows) {
        let index = 0;
        let innerIndex = 0;
        return _.map(rows, row => {
            innerIndex++;
            if(typeof row.defaultValue === "object"){
                return(
                    <Table.Row key={index++}>
                        <Table.Cell  colSpan='3'>
                        <Accordion fluid>

                            <Accordion.Title 
                                active={this.state.activeInnerIndex === innerIndex}
                                index={innerIndex}
                                onClick={this.handleInnerClick}>
                                <Icon name='dropdown'  />
                                {row.displayName}
                            </Accordion.Title>
                            <Accordion.Content
                                index={innerIndex}
                                active={this.state.activeInnerIndex === innerIndex}>
                                <Table>
                                <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='3'>Description</Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Deidentify
                                        <Checkbox className='radio'
                                            label='Yes'
                                            name={row.displayName}
                                            value='true'
                                            checked={row.deidentify == true}
                                            onChange={this.handleOnChangeDeid }
                                            style={{'padding':5}}/>
                                        <Checkbox className='radio'
                                            label='No'
                                            name={row.displayName}
                                            value='false'
                                            checked={row.deidentify == false} 
                                            onChange={this.handleOnChangeDeid}/>
                                    </Table.HeaderCell>
                                    
                                    <Table.HeaderCell colSpan='2'>Default Value</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                            {this.renderChildNodes(row)}
                            </Table.Body>
                                </Table>
                            </Accordion.Content>
                        </Accordion>
  
                        </Table.Cell>
                    </Table.Row>
                )
            }            
 
            return(
            <Table.Row key={index++}>
                <Table.Cell>{row.displayName} - ({row.location.dataElementId})</Table.Cell>
                <Table.Cell>
                    <Checkbox className='radio'
                        label='Yes'
                        name={row.displayName}
                        value='true'
                        checked={row.deidentify == true}
                        onChange={this.handleOnChangeDeid }
                        style={{'padding':5}}/>
                    <Checkbox className='radio'
                        label='No'
                        name={row.displayName}
                        value='false'
                        checked={row.deidentify == false} 
                        onChange={this.handleOnChangeDeid}/>
                    </Table.Cell>
                <Table.Cell>
                    <Input 
                        name={row.displayName} 
                        onChange={this.handleOnChangeDefaultValue} 
                        defaultValue={row.defaultValue}/>
                </Table.Cell>
            </Table.Row>
            )
        });   
    }

    render() {
        return (
            <Container>
                <Accordion fluid styled>
                    {this.renderAccordion()}
                </Accordion> 
            </Container>
        )
    }
}

export default connect(null, actions)(SCRIPT_10_6_Config);
