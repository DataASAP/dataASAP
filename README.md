## Welcome to DataASAP
DataASAP is an Electron based desktop tool to help deidentify healthcare data easier. It runs on Windows, MacOS and Linux. You may freely use this application. 

### Use Case
The use case this addresses is the situation where you need to send a deidentified transaction to some party, for example a technical support team. DataASAP allows you to simply paste the transaction into the application and press the De-identify button as shown below. Currently, DataASAP only supports NCPDP transactions such as Telecom D.0, SCRIPT 10.6 and SCRIPT 20170714. Future releases will contain support for X12 and HL7 transactions.

If you would like to get involved with this project as a developer, tester, submit ideas to improve it, please see the [How to Help](#how-to-help) section below. 

### How it Works
The screen shots below show what the application looks like and how it works. 

#### Deidentifying data
You start by pasting your transaction into the top pane. 

![mainscreen_withdata](https://user-images.githubusercontent.com/2772894/51127517-3d9d8e80-17eb-11e9-8e0f-362654e24345.png)

If the format of the data that you paste into the top pane is recognized, shown in the top Format Detected section, you can proceed with deidentifying your data. If it's not recognized the Format Detected section will show 'N/A'. 

After pressing the De-Identify button, the data is de-identified as shown in the lower pane. From here you can copy the deidentified data to the clipboard or save it to a file. 

![mainscreen_with_deid](https://user-images.githubusercontent.com/2772894/51127705-c3213e80-17eb-11e9-87d2-e49275130ee7.png)

**NOTE: The data that you paste in the top pane is not saved or sent anywhere. The data in the lower pane is only saved if you select the 'Save As...' button and save it to a file.**


#### Changing default values
You can change the default de-identification values for each transaction type as shown in the screens below.

![configscreen_nav](https://user-images.githubusercontent.com/2772894/51127975-696d4400-17ec-11e9-9137-26ffae327456.png)

![configscreen_d0](https://user-images.githubusercontent.com/2772894/51128140-c668fa00-17ec-11e9-9183-a34a6b5eb011.png)

That's pretty much it. 


### How to Help
This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html). By participating, you are expected to uphold this code. Please report unacceptable behavior to dave@dataasap.com.

If you would like to help improve this application, please contact me. Information on contributing can be found here [CONTRIBUTUING](https://github.com/dcheli/dataASAP/blob/master/CONTRIBUTING.md).


Feel free to reach out to me with questions. 
Thanks
- Dave Cheli [@dcheli](https://github.com/dcheli)
