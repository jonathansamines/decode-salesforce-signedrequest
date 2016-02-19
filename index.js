(function (root, factory) {
    // AMD
    if (typeof define == 'function' && define.amd) {
      return define('signedRequest', factory);
    }

    // Node.js/browserify.
    else if (typeof module == 'object' && module.exports) {
      module.exports = factory();
    }

    // Browser globals.
    else {
      root.signedRequest = factory();
    }
}(this, function createSignedRequest() {
  return {

    /**
     * Decode a signedrequest string without validating the signature
     * @param  {String} signed_request SignedRequest string
     * @return {Object}                Decoded signedrequest data
     */
    decode: function decodeSignedRequest(signedRequest) {
      if(!signedRequest) {
        return new Error('Must pass the signedRequest string.');
      }

      // decode the data
      try {
        var encodedData = signedRequest.split('.').pop();
        var json = atob(encodedData);

        return JSON.parse(json);
      } catch (e) {
        return new Error('Could not parse signed-request.');
      }
    }
  };
}));
