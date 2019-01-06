import _ from 'lodash';
import React, { Component } from 'react';
import NCPDP_D0 from '../configs/NCPDP_D0_Config';
import { connect } from 'react-redux';
import { Container, Accordion, Icon, 
        Table, Input,  Checkbox} from 'semantic-ui-react';
import Store from '../../main/Store';
import * as actions from '../actions';

var config;
const segmentNames = {
    "HEADER": "Transaction Header",
    "AM01" : "Patient Segment",
    "AM02" : "Pharmacy Provider Segment",
    "AM03" : "Prescriber Segment",
    "AM04" : "Insurance Segment",
    "AM05" : "COB/Other Payments Segment",
    "AM06" : "Worker's Compensation Segment",
    "AM07" : "Claim Segment",
    "AM08" : "DUR/PPS Segment",
    "AM09" : "Coupon Segment",
    "AM10" : "Compound Segment",
    "AM11" : "Pricing Segment",
    "AM12" : "Prior Authorization Segment",
    "AM13" : "Clinical Segment",
    "AM14" : "Additional Information Segment",
    "AM15" : "Facility Segment",
    "AM16" : "Narrative Segment",
    "AM17" : "Purchaser Segment",
    "AM18" : "Service Provider Segment",
    "AM19" : "Intermediary Segment",
    "AM20" : "Response Message Segment",
    "AM21" : "Response Status Segment",
    "AM22" : "Response Claim Segment",
    "AM23" : "Response Pricing Segment",
    "AM24" : "Response DUR/PPS Segment",
    "AM25" : "Response Insurance Segment",
    "AM26" : "Response Prior Authorization Segment",
    "AM27" : "Response Insurance Additional Segment",
    "AM28" : "Response COB/Other Payer Segment",
    "AM29" : "Response Patient Segment",
    "AM30" : "Financial Information Reporting Request Segment",
    "AM31" : "Request Reference Segment",
    "AM32" : "Request Financial Segment",
    "AM33" : "Financial Information Reporting Response Mesage Segment",
    "AM34" : "Financial Information Reporting Response Status Segment",
    "AM35" : "Response Financial Segment",
    "AM36" : "Response Intermediary Segment",
    "AM37" : "Last Known 4Rx Segment",
}

class NCPDP_D0_Config extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            itemsToSave: false,
            showSaveMessage: false,
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
                config =  NCPDP_D0;
            } else {
                userPrefsDefined = true
            }
        } else {
            config = NCPDP_D0;
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

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    renderAccordion() {
        var segments = _.groupBy(config, 'location.segment');
        
        var ordered = {};
        _(segments).keys().sort().each(function (key) {
            ordered[key] = segments[key];
        });

        var header = {};
        header['HEADER'] =  ordered['HEADER'];
        delete ordered['HEADER'];
        let merged = {...header, ...ordered};

        var index = 0;
 
        return _.map(merged, (rows, key) => {
            return (
                <div key={index}>
                    <Accordion.Title 
                        active={this.state.activeIndex === index}
                        key={index}
                        index={index}
                        onClick={this.handleClick}>
                        <Icon name='dropdown'  />
                        {key} - {segmentNames[key]}
                    </Accordion.Title>
                    <Accordion.Content
                        active={this.state.activeIndex === index}
                        key={index++ + 1}
                        >     
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Data Element</Table.HeaderCell>
                                    <Table.HeaderCell>Deidentify</Table.HeaderCell>
                                    <Table.HeaderCell>Default Value</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                            {this.renderRows(rows)}
                            </Table.Body>
                        </Table>  
                    </Accordion.Content>
                </div>              
            );
        });
    }

    renderRows(rows) {
        let index = 0;
        var orderedRows = _.orderBy(rows, ['displayOrder']);

        return _.map(orderedRows, row => {           
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

export default connect(null, actions)(NCPDP_D0_Config);
