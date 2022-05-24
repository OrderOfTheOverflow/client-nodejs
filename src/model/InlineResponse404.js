/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse404AdditionalData from './InlineResponse404AdditionalData';

/**
 * The InlineResponse404 model module.
 * @module model/InlineResponse404
 * @version 1.0.0
 */
class InlineResponse404 {
    /**
     * Constructs a new <code>InlineResponse404</code>.
     * @alias module:model/InlineResponse404
     */
    constructor() { 
        
        InlineResponse404.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse404</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse404} obj Optional instance to populate.
     * @return {module:model/InlineResponse404} The populated <code>InlineResponse404</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse404();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');

                delete data['error'];
            }
            if (data.hasOwnProperty('error_info')) {
                obj['error_info'] = ApiClient.convertToType(data['error_info'], 'String');

                delete data['error_info'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = InlineResponse404AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {Boolean} success
 */
InlineResponse404.prototype['success'] = undefined;

/**
 * The error description
 * @member {String} error
 */
InlineResponse404.prototype['error'] = undefined;

/**
 * @member {String} error_info
 */
InlineResponse404.prototype['error_info'] = undefined;

/**
 * @member {module:model/InlineResponse404AdditionalData} additional_data
 */
InlineResponse404.prototype['additional_data'] = undefined;






export default InlineResponse404;
