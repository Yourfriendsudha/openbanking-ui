openbanking-ui
==============

A collection AISP and PISP APIs.

Pre-requisites
--------------

* You should have NODE JS installed on your system. You can download and install nodejs from [here](https://nodejs.org/en/download/).
* To check the version of node, use command 'node -v'
* Once nodejs is installed, install lerna by using the command

``` nowrap
npm install -g lerna
```

Usage
-----

### Install

First, install the dependencies:

``` nowrap
npm install
```

### Running the app

Create an enviroment file (.env) file in /packages/web-app folder and add an entry for REACT_APP_ACCOUNT_ID. This account id will be used for for fetching various details of an account.

You can also add an entry for PORT (optional) if facing any issue with port while running the application. This will run your app on the specified port number if added otherwise will point to the default port. 

``` nowrap
PORT=4001
REACT_APP_ACCOUNT_ID=11111111
```
To run the application, use command:

``` nowrap
npm start
```


This will stub the rest api calls and return the mock response.

#### Connecting with sdk

if a plain starter code is required, Download and setup the starter code sdk code from the [url](https://github.com/HashApithon/openbanking-java-sdk)

For Green cheque App
Download and setup the GreeenCheque app frontend code from the url https://github.com/Yourfriendsudha/openbanking-ui

Sugested port: 4001

For backend :
Download and setup the  GreeenCheque api backend from the url https://github.com/Yourfriendsudha/openbanking-java-sdk

Sugested port : 8080

### Getting familiar with open banking related terms

To get familiar with the terms, you can check the [glossary](https://bankofapis.com/glossary)

Steps to check the GC App.
1.Click the Virtual cheques section 
2. Login using the test data and Provide the customer consent, once the redirect Uri appears

Customer Number : 123456789012, 
 Password : 572436

 3. once the Accounts are chosen, Panel to Gcheques is redirected

 this contains 4 sections. ( future scope -- to create a E2E secured mobile application from the Digital channel of our bank )
 -----------------------------------------------------------------------
 1) Generate QR - Fill the cheque details
 2) Share the cheque With Beneficiary
 3) Cheque Details
 4) Balance
------------------------------------------------------------------------

 4. Create the cheque with Cheque details , within section 1)  Generate QR - Fill the cheque details

 Enter the details, as you would do in the physical cheque.

Sample details
 {
"payeeName":"Sudha",
"payeeAcNum":"1234567890",
"payeeSortCode":"123456",
"beneName":"Naveen",
"brand":"RBS",
"beneAcNum":"9876543211",
"acPayOnly":true,
"beneSortCode":"654321",
"chequeAmount":5
}
click on submit button in section 1.

5.once the cheque is generated, , section 3) will display the image format
(currently this will display the QR code image byte Array, instead of the originalQR png )

Steps to verify :-

check for the png file in the workspace : classpath (\qrimages\generated\$payeeName)
Eg. C:\Apithon\openbanking-java-sdk\web\src\main\resources\qrimages\generated\Sudha
we can check this in IDE or from teh windows explorer

6. Once the QR code is generated, click on the share! button in section 2)  Share the cheque With Beneficiary


7. check for the png file in the workspace : classpath (\qrimages\received\$payeeName)
Eg. C:\Apithon\openbanking-java-sdk\web\src\main\resources\qrimages\receieved\Naveen

we can check this in IDE or from teh windows explorer

8. The balance section will display the balance details of the account.

