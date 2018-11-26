import _ from 'lodash';
import React, { Component } from 'react';
//import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Form, Button, Divider, 
        Segment, Label, Table, Icon } from 'semantic-ui-react';
import testTransactionHeader from '../services/testTransactionHeader';
import deidentifyStrategy from '../services/deidentifyStrategy';

import replaceControlCharacters from '../services/replaceControlChars';
import restoreControlCharacters from '../services/restoreControlCharacters';
import { ipcRenderer } from 'electron';
//const LoadXML = require('../XMLDisplay');


class FileSelectScreen extends Component {
  state = {
    hovering: false,
    value: '',
    version: '',
    inputTextArea: '',
    input: '',
    deidDisabled: true,
    deidTextArea: '',
    saveAsDisabled: true,
    sendToDisabled: true,
    show: 'unhide',
    showDisplay: 'Show Changes',
    transactionInfo: {type: "N/A", version: "N/A", transaction: "N/A", segmentSeparator: "", fieldSeparator: ""}
  }

     clearInputTextArea = () => {
        document.getElementById('displayContent').innerHTML = '';
      this.setState({inputTextArea: '', deidDisabled: true, input: '', 
      textChanged: false, transactionInfo: {type: "N/A", version: "N/A", transaction: "N/A"}});
    }

    clearDeidTextArea = () => {
        document.getElementById('deIDContent').innerText = '';
        this.setState({deidTextArea: '', saveAsDisabled: true, sendToDisabled: true,show:'unhide', showDisplay:'Show Changes'});
    }

    deidentifyData = () => {
        var deIDData = deidentifyStrategy(this.state.input ,this.state.transactionInfo);
        var displayDeIDData;
        if(deIDData.indexOf("<?xml") > -1) {
            displayDeIDData = deIDData;

            /////////// This was originally used to display the xml in the div, not sure it's needed anymore
            displayDeIDData = deIDData.replace(/\</g,"&lt;");
            displayDeIDData = displayDeIDData.replace(/\>/g,"&gt;");
            displayDeIDData = displayDeIDData.replace(/&lt;span class='deid' style='background-color: white;'&gt;/g,"<span class='deid' style='background-color: white;'>");
            displayDeIDData = displayDeIDData.replace(/&lt;\/span&gt;/g,"</span>");
            document.getElementById('deIDContent').innerHTML =  displayDeIDData;
            //////////////
            
           // LoadXMLString('deIDContent', displayDeIDData);
            this.setState({deidTextArea: displayDeIDData, saveAsDisabled: false, sendToDisabled: false, show:'unhide', showDisplay:'Show Changes'});
    
        } else {
            displayDeIDData = replaceControlCharacters(deIDData);
            document.getElementById('deIDContent').innerHTML = displayDeIDData;
            this.setState({deidTextArea: deIDData, saveAsDisabled: false, sendToDisabled: false, show:'unhide', showDisplay:'Show Changes'});    
        }
    }
  
    saveFile = () => {  
        var content = this.state.deidTextArea; 
    
        // if the data is xml then you need to repace html entities
        if(content.indexOf("?xml")> -1) {    
            content = content.replace(/&gt;/g,">");
            content = content.replace(/&lt;/g,"<");
        }
        ipcRenderer.send('folder:open', content);
    }


    showChanges = () => {
        var elements = document.getElementsByClassName("deid");

        if(this.state.show === "hide") {
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        
            this.setState({show: "unhide", showDisplay: "Show Changes"})
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor="yellow";
            }
    
            this.setState({show: "hide", showDisplay: "Hide Changes"})
        }
    }

  /*
  onDrop = (files) => {
    // invalid file types are not added to files object
    const fileList = _.map(files, ({ name, path, size, type }) => {
      return { name, path, size, type };
    });

    if (fileList.length) {
      this.props.addFiles(fileList);
      
      if (!this.props.small) {
        this.props.history.push('/convert');
      }
    }

  }
*/
   copyToClipboard = () => {

    // TODO: Just get what is selected
       // sourece https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
              
       var copyText = document.getElementById('deIDContent').textContent;
       
        const el = document.createElement('textarea');
        
        var dd = restoreControlCharacters(copyText);
        el.value = dd;
        el.setAttribute('readonly', '');    // make it tamper proof
        el.style.position = 'absolute';     // move outside the screen 
        el.style.left = '-9999px';          // so it is invisible

        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }


  divPaste = (event) => {
    event.preventDefault();
    var input = event.clipboardData.getData('Text');
    var displayStr;
    
    if(input.indexOf("<?xml") > -1) {
       
        //displayStr = input.replace(/\</g,"&lt;");
        //displayStr = displayStr.replace(/\>/g,"&gt;");
       // displayStr = '<pre lang="xml">' + displayStr + '</pre>';
        displayStr = input;
        LoadXMLString('displayContent', displayStr);
     
    } else {
        displayStr = replaceControlCharacters(input);
        document.getElementById('displayContent').innerHTML = displayStr;
    }
    
    //document.getElementById('displayContent').innerHTML = displayStr;
    
    var transactionInfo = testTransactionHeader(input);
    
    if(transactionInfo.type !== "UNKNOWN") {
        this.setState({input, transactionInfo, deidDisabled: false});
    }
    else 
        this.setState({ input,  transactionInfo});
    }

  render() {
    
    return (
        <div>
            <Segment>
                <Label size='big'>Format Detected</Label>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Type: {this.state.transactionInfo.type}</Table.HeaderCell>
                            <Table.HeaderCell>Version: {this.state.transactionInfo.version}</Table.HeaderCell>
                            <Table.HeaderCell>Transaction: {this.state.transactionInfo.transaction}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>
            </Segment>

            <Divider horizontal /> 
            <Segment>
                <Form>
                    <Label size='big' pointing='below'>Paste Data Here</Label>
                   <div contentEditable
                        id="displayContent"
                        onPaste={this.divPaste}
                        style={{
                            minHeight: 200, 
                            maxHeight: 400,
                            border: '2px solid black', 
                            borderRadius: '5px 5px 0px 0px', borderStyle: 'solid',
                            overflow: 'hidden', 
                            overflowY: 'scroll'
                             }}>
                        
                        </div>
                                            
                    <Segment basic floated="right" clearing>
                        <Button primary  content="Clear" onClick={this.clearInputTextArea} />
                        <Button primary  content="De-Identify" disabled={this.state.deidDisabled} onClick={this.deidentifyData} />
                    </Segment>
                </Form>
            </Segment>
            <Divider horizontal /> 
            <Divider horizontal /> 
            <Divider horizontal /> 
            <Divider horizontal /> 

            <Segment>
                    <Form>
                        <Label size='big' pointing='below'>De-Identified Data</Label>
                       <Label as='a' onClick={this.copyToClipboard} size='big'>
                        <Icon name='clipboard' 
                        />Copy to Clipboard
                        </Label>
    
                       <Label as='a' onClick={this.showChanges} size='big'>
                        <Icon name={this.state.show} 
                        />{this.state.showDisplay}
                       </Label>
    
                    <div 
                        id="deIDContent"
                        onCopy={this.copyToClipboard}
                        style={{
                            minHeight: 200,
                            maxHeight: 400,
                            border: '2px solid black', 
                            borderRadius: '5px 5px 0px 0px',
                            overflow: 'hidden', 
                            overflowY: 'scroll'}}>    
                    </div>
                    
                    <Segment basic floated="right" clearing>
                        <Button primary  content="Clear" onClick={this.clearDeidTextArea} />
                        <Button primary  content="Save As..." 
                            onClick={this.saveFile} 
                            disabled={this.state.saveAsDisabled}  />
                   </Segment>
                    </Form>
            </Segment>
                
            </div>
    );
  }
}

export default connect(null, actions)(FileSelectScreen);
