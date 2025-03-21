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
import {ApiClient} from "../ApiClient";
import {ApiGatewayErrorResponse} from '../model/ApiGatewayErrorResponse';
import {CancelOrderV3Response} from '../model/CancelOrderV3Response';
import {GetGttOrderResponse} from '../model/GetGttOrderResponse';
import {GttCancelOrderRequest} from '../model/GttCancelOrderRequest';
import {GttModifyOrderRequest} from '../model/GttModifyOrderRequest';
import {GttPlaceOrderRequest} from '../model/GttPlaceOrderRequest';
import {GttTriggerOrderResponse} from '../model/GttTriggerOrderResponse';
import {ModifyOrderRequest} from '../model/ModifyOrderRequest';
import {ModifyOrderV3Response} from '../model/ModifyOrderV3Response';
import {PlaceOrderV3Request} from '../model/PlaceOrderV3Request';
import {PlaceOrderV3Response} from '../model/PlaceOrderV3Response';

/**
* OrderControllerV3 service.
* @module api/OrderControllerV3Api
* @version v0
*/
export class OrderApiV3 {

    /**
    * Constructs a new OrderControllerV3Api. 
    * @alias module:api/OrderControllerV3Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    mapToGttOrderRequest(data) {
      let obj = {};
      if(data) {
        if (data.hasOwnProperty('quantity'))
          obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
        if (data.hasOwnProperty('product'))
          obj.product = ApiClient.convertToType(data['product'], 'String');
        if (data.hasOwnProperty('type'))
          obj.type = ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('rules')){
          obj.rules = [];
          data['rules'].forEach(userRule => {
            const rule = {};
            if(userRule.hasOwnProperty('strategy'))
              rule.strategy = ApiClient.convertToType(userRule['strategy'], 'String');
            if(userRule.hasOwnProperty('triggerType'))
              rule.trigger_type = ApiClient.convertToType(userRule['triggerType'], 'String');
            if(userRule.hasOwnProperty('triggerPrice'))
              rule.trigger_price = ApiClient.convertToType(userRule['triggerPrice'], 'Number');
            obj.rules.push(rule);
          });
        }
        if (data.hasOwnProperty('instrumentToken'))
          obj.instrument_token = ApiClient.convertToType(data['instrumentToken'], 'String');
        if (data.hasOwnProperty('transactionType'))
          obj.transaction_type = ApiClient.convertToType(data['transactionType'], 'String');
        if (data.hasOwnProperty('gttOrderId'))
          obj.gtt_order_id = ApiClient.convertToType(data['gttOrderId'], 'String');
      }
      return obj;
    }

    /**
     * Callback function to receive the result of the cancelGTTOrder operation.
     * @callback moduleapi/OrderControllerV3Api~cancelGTTOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GttTriggerOrderResponse{ data The data returned by the service call.
    * @param {String} response The complete HTTP response.
    */

   /**
    * Cancel GTT order
    * This API allows you to cancel GTT orders.
    * @param {module:model/GttCancelOrderRequest} body 
    * @param {module:api/OrderControllerV3Api~cancelGTTOrderCallback} callback The callback function, accepting three arguments: error, data, response
    * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
    */
   cancelGTTOrder(body, callback) {
     
    let postBody = this.mapToGttOrderRequest(body);
     // verify the required parameter 'body' is set
     if (body === undefined || body === null) {
       throw new Error("Missing the required parameter 'body' when calling cancelGTTOrder");
     }

     let pathParams = {
       
     };
     let queryParams = {
       
     };
     let headerParams = {
       
     };
     let formParams = {
       
     };

     let authNames = ['OAUTH2'];
     let contentTypes = ['application/json'];
     let accepts = ['*/*', 'application/json'];
     let returnType = GttTriggerOrderResponse;

     return this.apiClient.callApi(
       '/v3/order/gtt/cancel', 'DELETE',
       pathParams, queryParams, headerParams, formParams, postBody,
       authNames, contentTypes, accepts, returnType, callback
     );
   }

    /**
     * Callback function to receive the result of the cancelOrder operation.
     * @callback moduleapi/OrderControllerV3Api~cancelOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelOrderV3Response{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} orderId 
     * @param {module:api/OrderControllerV3Api~cancelOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    cancelOrder(orderId, callback) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling cancelOrder");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'order_id': orderId
      };
      let headerParams = {

      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = CancelOrderV3Response;

      return this.apiClient.callApi(
        '/v3/order/cancel', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGttOrderDetails operation.
     * @callback moduleapi/OrderControllerV3Api~getGttOrderDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGttOrderResponse{ data The data returned by the service call.
    * @param {String} response The complete HTTP response.
    */

   /**
    * Get GTT order details
    * GTT_ORDER_DESCRIPTION
    * @param {Object} opts Optional parameters
    * @param {String} opts.gttOrderId Unique identifier of the GTT order for which the order history is required
    * @param {module:api/OrderControllerV3Api~getGttOrderDetailsCallback} callback The callback function, accepting three arguments: error, data, response
    * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
    */
   getGttOrderDetails(opts, callback) {
     opts = opts || {};
     let postBody = null;

     let pathParams = {
       
     };
     let queryParams = {
       'gtt_order_id': opts['gttOrderId']
     };
     let headerParams = {
       
     };
     let formParams = {
       
     };

     let authNames = ['OAUTH2'];
     let contentTypes = [];
     let accepts = ['*/*', 'application/json'];
     let returnType = GetGttOrderResponse;

     return this.apiClient.callApi(
       '/v3/order/gtt', 'GET',
       pathParams, queryParams, headerParams, formParams, postBody,
       authNames, contentTypes, accepts, returnType, callback
     );
   }
   /**
    * Callback function to receive the result of the modifyGTTOrder operation.
    * @callback moduleapi/OrderControllerV3Api~modifyGTTOrderCallback
    * @param {String} error Error message, if any.
    * @param {module:model/GttTriggerOrderResponse{ data The data returned by the service call.
    * @param {String} response The complete HTTP response.
    */

   /**
    * Modify GTT order
    * This API allows you to modify GTT orders.
    * @param {module:model/GttModifyOrderRequest} body 
    * @param {module:api/OrderControllerV3Api~modifyGTTOrderCallback} callback The callback function, accepting three arguments: error, data, response
    * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
    */
   modifyGTTOrder(body, callback) {
     
    let postBody = this.mapToGttOrderRequest(body);
     // verify the required parameter 'body' is set
     if (body === undefined || body === null) {
       throw new Error("Missing the required parameter 'body' when calling modifyGTTOrder");
     }

     let pathParams = {
       
     };
     let queryParams = {
       
     };
     let headerParams = {
       
     };
     let formParams = {
       
     };

     let authNames = ['OAUTH2'];
     let contentTypes = ['application/json'];
     let accepts = ['*/*', 'application/json'];
     let returnType = GttTriggerOrderResponse;

     return this.apiClient.callApi(
       '/v3/order/gtt/modify', 'PUT',
       pathParams, queryParams, headerParams, formParams, postBody,
       authNames, contentTypes, accepts, returnType, callback
     );
   }

    mapToModifyOrderRequest(data) {
      let obj = {};
      if (data) {
        if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
        if (data.hasOwnProperty('validity'))
          obj.validity = ApiClient.convertToType(data['validity'], 'String');
        if (data.hasOwnProperty('price'))
          obj.price = ApiClient.convertToType(data['price'], 'Number');
        if (data.hasOwnProperty('orderId'))
          obj.order_id = ApiClient.convertToType(data['orderId'], 'String');
        if (data.hasOwnProperty('orderType'))
          obj.order_type = ApiClient.convertToType(data['orderType'], 'String');
        if (data.hasOwnProperty('disclosedQuantity'))
          obj.disclosed_quantity = ApiClient.convertToType(data['disclosedQuantity'], 'Number');
        if (data.hasOwnProperty('triggerPrice'))
          obj.trigger_price = ApiClient.convertToType(data['triggerPrice'], 'Number');
      }
      return obj;
    }
    /**
     * Callback function to receive the result of the modifyOrder operation.
     * @callback moduleapi/OrderControllerV3Api~modifyOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModifyOrderV3Response{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ModifyOrderRequest} body 
     * @param {module:api/OrderControllerV3Api~modifyOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    modifyOrder(body, callback) {
      let postBody = this.mapToModifyOrderRequest(body);
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyOrder");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {

      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = ModifyOrderV3Response;

      return this.apiClient.callApi(
        '/v3/order/modify', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    mapToPlaceOrderV3Request(data) {
      let obj = {};
      if (data) {
        if (data.hasOwnProperty('quantity'))
          obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
        if (data.hasOwnProperty('product'))
          obj.product = ApiClient.convertToType(data['product'], 'String');
        if (data.hasOwnProperty('validity'))
          obj.validity = ApiClient.convertToType(data['validity'], 'String');
        if (data.hasOwnProperty('price'))
          obj.price = ApiClient.convertToType(data['price'], 'Number');
        if (data.hasOwnProperty('tag'))
          obj.tag = ApiClient.convertToType(data['tag'], 'String');
        if (data.hasOwnProperty('instrumentToken'))
          obj.instrument_token = ApiClient.convertToType(data['instrumentToken'], 'String');
        if (data.hasOwnProperty('orderType'))
          obj.order_type = ApiClient.convertToType(data['orderType'], 'String');
        if (data.hasOwnProperty('transactionType'))
          obj.transaction_type = ApiClient.convertToType(data['transactionType'], 'String');
        if (data.hasOwnProperty('disclosedQuantity'))
          obj.disclosed_quantity = ApiClient.convertToType(data['disclosedQuantity'], 'Number');
        if (data.hasOwnProperty('triggerPrice'))
          obj.trigger_price = ApiClient.convertToType(data['triggerPrice'], 'Number');
        if (data.hasOwnProperty('isAmo'))
          obj.is_amo = ApiClient.convertToType(data['isAmo'], 'Boolean');
        if (data.hasOwnProperty('slice'))
          obj.is_amo = ApiClient.convertToType(data['slice'], 'Boolean');
      }
      return obj;
    }

    /**
     * Callback function to receive the result of the placeGTTOrder operation.
     * @callback moduleapi/OrderControllerV3Api~placeGTTOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GttTriggerOrderResponse{ data The data returned by the service call.
    * @param {String} response The complete HTTP response.
    */

   /**
    * Place GTT order
    * This API allows you to place GTT orders.
    * @param {module:model/GttPlaceOrderRequest} body 
    * @param {module:api/OrderControllerV3Api~placeGTTOrderCallback} callback The callback function, accepting three arguments: error, data, response
    * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
    */
   placeGTTOrder(body, callback) {
     
     let postBody = this.mapToGttOrderRequest(body);
     // verify the required parameter 'body' is set
     if (body === undefined || body === null) {
       throw new Error("Missing the required parameter 'body' when calling placeGTTOrder");
     }

     let pathParams = {
       
     };
     let queryParams = {
       
     };
     let headerParams = {
       
     };
     let formParams = {
       
     };

     let authNames = ['OAUTH2'];
     let contentTypes = ['application/json'];
     let accepts = ['*/*', 'application/json'];
     let returnType = GttTriggerOrderResponse;

     return this.apiClient.callApi(
       '/v3/order/gtt/place', 'POST',
       pathParams, queryParams, headerParams, formParams, postBody,
       authNames, contentTypes, accepts, returnType, callback
     );
   }

    /**
     * Callback function to receive the result of the placeOrder operation.
     * @callback moduleapi/OrderControllerV3Api~placeOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlaceOrderV3Response{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/PlaceOrderV3Request} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.origin 
     * @param {module:api/OrderControllerV3Api~placeOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    placeOrder(body, opts, callback) {
      opts = opts || {};
      let postBody = this.mapToPlaceOrderV3Request(body);

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling placeOrder");
      }

      if (opts['slice']) {
        postBody.slice = opts['slice'];
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'Origin': opts['origin']
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = PlaceOrderV3Response;
      return this.apiClient.callApi(
        '/v3/order/place', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}