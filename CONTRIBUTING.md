# Contributing to DataASAP

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1
There is a lot of work that I'd like to do to this application to make it more useful.

DataASAP was developed using the following technologies:
* Electron
* React-Redux-Router
* [Electron-React boilerplate](https://github.com/jschr/electron-react-redux-boilerplate)
* Semantic UI React
* Javascript
* Electron Builder

#### Current State
The current state of DataASAP is that it supports most current NCPDP transactions (Telecom D.0, SCRIPT 10.6 and the newer SCRIPT 20170714), though I can't guarantee all. Ideally, I'd like to include X12 and HL7 transactions. 

I've tried to keep the interface clean and simple with the interface goal being that someone can use it by just looking at it. 

The [Issues section](https://github.com/dcheli/dataASAP/issues) contains items I am aware of that need work. Some items are quite broad and can/will be broken down into smaller items in time. 

#### Developers
If you are a developer, have an interest in the tech stack I am using and want to contribute, please contact me. I know there there are many opportunities for refactoring, some identified in the issues section and others that I may not be aware of. 

New features I'd like to add inlcude adding support for X12 and HL7. I am open to supporting other transaction sets as well.

#### Testers
If you are a tester, I can use some help. Does this run on your platform? Do the current features work? Do you have sample data that you can add to the test folder? Is there a good way to automate testing this? 

#### Suggestors
I am open to suggestions and will prioritize suggestions based on my time, interest from others, and time that possibly some other developers and testers would want to work on them.

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html). By participating, you are expected to uphold this code. Please report unacceptable behavior to dave@dataasap.com.

## Download, Run and Build the project
To get started, feel free to download the project. Once downloaded, change to the project folder and install the node modules with the following command:
`npm run install`

Once completed you can run the project in development mode with the following command:
`npm run dev`

To package the project use the following commands:
NOTE: I recommend running these commands on the actual operating system. You must do this for macOS and while my understanding is that you can package Linux distributions on windows, I haven't been able to get this to work. This also applies to packaging rpm on CentOS and  debian on Ubuntu. 
### Windows
`npm run pack:win`

### macOS
`npm run pack:mac`

### CentOS
`npm run pack:linux:npm`

### Ubuntu (or other debian based OS)
`npm run pack:linux:deb`
