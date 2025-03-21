/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.66
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UpstoxClient);
  }
}(this, function(expect, UpstoxClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('IndieUserTokenRequest', function() {
      beforeEach(function() {
        instance = new UpstoxClient.IndieUserTokenRequest();
      });

      it('should create an instance of IndieUserTokenRequest', function() {
        // TODO: update the code to test IndieUserTokenRequest
        expect(instance).to.be.a(UpstoxClient.IndieUserTokenRequest);
      });

      it('should have the property clientSecret (base name: "client_secret")', function() {
        // TODO: update the code to test the property clientSecret
        expect(instance).to.have.property('clientSecret');
        // expect(instance.clientSecret).to.be(expectedValueLiteral);
      });

    });
  });

}));
