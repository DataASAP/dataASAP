## Welcome to DataASAP
DataASAP is an Electron based desktop tool to help deidentify healthcare data easier. It runs on Windows, MacOS and Linux. You may freely use this application. 

### Use Case
The use case this supports is the situation where you need to send a deidentified transaction to some party, for example a technical support team. DataASAP allows you to simply paste the transaction into the application and press the De-identify button as shown below. Currently, DataASAP only supports NCPDP transactions such as telecom D.0, SCRIPT 10.6 and SCRIPT 20170714. Future releases will contain support for X12 and HL7 transactions.

If you would like to get involved with this project as a developer, tester, submit ideas to improve it, please see the section below "How to Help"


![mainscreen_withdata](https://user-images.githubusercontent.com/2772894/51127517-3d9d8e80-17eb-11e9-8e0f-362654e24345.png)

After pressing the De-Identify button, the data is de-identified allowing you to copy the deidentified data to the clipboard or saving it to a file. 

![mainscreen_with_deid](https://user-images.githubusercontent.com/2772894/51127705-c3213e80-17eb-11e9-87d2-e49275130ee7.png)

You can change the default de-identification values for each transaction type as shown in the screens below.

![configscreen_nav](https://user-images.githubusercontent.com/2772894/51127975-696d4400-17ec-11e9-9137-26ffae327456.png)

![configscreen_d0](https://user-images.githubusercontent.com/2772894/51128140-c668fa00-17ec-11e9-9183-a34a6b5eb011.png)



DataASAP will automatically update when a new release is available.



### How to Help
If you would like to help improve this application, please contact me. 

DataASAP was developed using the following technologies:
* Electron
* React-Redux
* Semantic UI React
* Javascript

There is a lot of work that I'd like to do to this application including much refactoring, ensuring all NCPDP transactions are supported and adding additional transaction types such as X12 and HL7. The ![issues log](https://github.com/dcheli/dataASAP/issues) contains items I am aware of that need work. Some items are very broad and can/will be broken down into smaller items in time. 

Feel free to reach out to me with questions. 
Thanks
- Dave Cheli [@dcheli](https://github.com/dcheli)
