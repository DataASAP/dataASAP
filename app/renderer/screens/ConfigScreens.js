import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Segment, Message, Button } from 'semantic-ui-react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import NCPDP_D0_Config from '../screens/NCPDP_D0_Config';
import SCRIPT_10_6_Config from '../screens/SCRIPT_10_6_Config';
import SCRIPT_20170714_Config from '../screens/SCRIPT_20170714_Config';
import { ipcRenderer } from 'electron';
import Store from '../../main/Store';
import * as actions from '../actions';

class ConfigScreens extends Component {

    constructor(props) {
        super(props);
        this.state = {   
            showSaveMessage: false,
            defaultValuesRestored: false
        };
    }

    handleSaveClick = () => {
        const { type, domain, config } = this.props.configParameters;
        ipcRenderer.send('saveConfig', domain , type, config);
        this.props.setUserPrefsDefined(true);
        this.setState({itemsToSave: false, showSaveMessage: true});        
    };

    handleOnDismiss = () => {
        this.setState({showSaveMessage: false});
    }
    handleOnDismissDefaultValue = () => {
        this.setState({defaultValuesRestored: false});
    }

    handleClose = () => {
        window.close();
    }

    handleRestoreDefaults = () => {
  
        const store = new Store({
            configName : 'user-preferences',
            content: {},
            domain: this.props.configParameters.domain,
            type: ""
        });

        if(store.exists()){
            var config = store.get(this.props.configParameters.type)
            if(config !=  null) {
                store.delete(this.props.configParameters.type);
            }    
        }
        this.props.defaultValueChanged(false);
        this.props.setUserPrefsDefined(false);
        this.setState({defaultValuesRestored: true});
    }


    render() {
        return(
            <Router>
            <div className="app" style={{padding: '10px'}}>
                <Container >
                    <Header />
                    <Segment clearing >
                        <Button primary 
                            disabled={!this.props.stateChanged}
                            floated='right' 
                            onClick={this.handleSaveClick}
                            >Save
                        </Button>
                        <Button primary floated='right' onClick={this.handleClose}>Close</Button>
                        <Button primary floated='right' 
                            disabled={!this.props.userPrefsDefined}
                            onClick={this.handleRestoreDefaults}>Restore Defaults</Button>
                    </Segment>
                    {(this.state.defaultValuesRestored) ?
                        <Message 
                            onDismiss={this.handleOnDismissDefaultValue}
                            positive
                            content="Default Values have been restored" 
                        /> : ""
                    }

                    {(this.state.showSaveMessage) ?
                        <Message 
                            onDismiss={this.handleOnDismiss}
                            positive
                            content="Your Changes have been saved" 
                        /> : ""
                    }

                    <Switch>
                        <Route path='/NCPDP_D0' 
                            render={(props)=><NCPDP_D0_Config {...props} 
                                type={'NCPDP_D0'}
                                domain={'ncpdp'}
                                />}
                         />
                        <Route path='/SCRIPT_10_6' 
                            render={(props) => <SCRIPT_10_6_Config {...props}
                                type={'SCRIPT_10_6'}
                                domain={'ncpdp'} 
                                />}
                         />

                        <Route path='/SCRIPT_20170714' 
                            render={(props) => <SCRIPT_20170714_Config {...props}
                                type={'SCRIPT_20170714'}
                                domain={'ncpdp'} 
                                />}
                         />

                    </Switch>
                </Container>
            </div>
        </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        configParameters: state.configParameters,
        stateChanged: state.stateChanged.configItemsChanged,
        userPrefsDefined: state.userPrefsDefined.userPrefsDefined
    };
  };

export default connect(mapStateToProps, actions)(ConfigScreens);
  
