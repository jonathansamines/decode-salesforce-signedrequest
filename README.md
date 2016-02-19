## decode-salesforce-signedrequest
#### A Node.js npm module to decode Salesforce signed-request from Salesforce Canvas

### Usage
This library exports a `signedRequest` object when used as a global, or defines a `signedRequest` module when used along with an AMD compatible loader.

### Installation

```bash
  bower install --save decode-salesforce-signedrequest
```

#### Usage with browserify

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
0. Install dependencies `bower install`
1. Open the file on `test/index.html`.
2. See your test run (and pass!)

### License
MIT
