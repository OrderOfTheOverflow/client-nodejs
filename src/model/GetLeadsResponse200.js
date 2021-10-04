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
import AdditionalData from './AdditionalData';
import LeadResponse from './LeadResponse';

/**
 * The GetLeadsResponse200 model module.
 * @module model/GetLeadsResponse200
 * @version 1.0.0
 */
class GetLeadsResponse200 {
    /**
     * Constructs a new <code>GetLeadsResponse200</code>.
     * @alias module:model/GetLeadsResponse200
     */
    constructor() { 
        
        GetLeadsResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLeadsResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLeadsResponse200} obj Optional instance to populate.
     * @return {module:model/GetLeadsResponse200} The populated <code>GetLeadsResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLeadsResponse200();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [LeadResponse]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

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
GetLeadsResponse200.prototype['success'] = undefined;

/**
 * @member {Array.<module:model/LeadResponse>} data
 */
GetLeadsResponse200.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
GetLeadsResponse200.prototype['additional_data'] = undefined;






export default GetLeadsResponse200;

