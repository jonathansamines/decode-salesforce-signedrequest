## decode-salesforce-signedrequest
#### A Node.js npm module to decode Salesforce signed-request from Salesforce Canvas

[![Build Status](https://travis-ci.org/rajaraodv/salesforce-signed-request.png?branch=master)](https://travis-ci.org/rajaraodv/salesforce-signed-request)

### Usage
This library exports a `signedRequest` object when used as a global, or defines a `signedRequest` module when used along with an AMD compatible loader.

### Installation

```bash
  bower install --save decode-salesforce-signedrequest
```

#### By with browserify

```javascript
 var signedRequest = require('decode-salesforce-signedrequest');

 // json will have Salesforce context
 var json = signedRequest.decode('YOUR_SIGNED_REQUEST');
```

#### Usage with AMD

```javascript
  require('signedRequest', function(signedRequest) {
    // json will have Salesforce context
    var json = signedRequest.decode('YOUR_SIGNED_REQUEST');
  });
```

#### Usage as a global

```javascript
   // json will have Salesforce context
   var json = signedRequest.decode('YOUR_SIGNED_REQUEST');
```

### Test
1. Install Mocha, expect, chai & should by running `npm install`
2. You may want to install Mocha globally by running `npm install -g mocha`
2. Simply run `mocha` in the command line.


### License
MIT
