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
import OrganizationFollowerItem from './OrganizationFollowerItem';

/**
 * The OrganizationFollowerPostResponse model module.
 * @module model/OrganizationFollowerPostResponse
 * @version 1.0.0
 */
class OrganizationFollowerPostResponse {
    /**
     * Constructs a new <code>OrganizationFollowerPostResponse</code>.
     * @alias module:model/OrganizationFollowerPostResponse
     */
    constructor() { 
        
        OrganizationFollowerPostResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationFollowerPostResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationFollowerPostResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationFollowerPostResponse} The populated <code>OrganizationFollowerPostResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationFollowerPostResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = OrganizationFollowerItem.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
OrganizationFollowerPostResponse.prototype['success'] = undefined;

/**
 * @member {module:model/OrganizationFollowerItem} data
 */
OrganizationFollowerPostResponse.prototype['data'] = undefined;






export default OrganizationFollowerPostResponse;
