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
import RolesAdditionalDataPagination from './RolesAdditionalDataPagination';

/**
 * The RolesAdditionalData model module.
 * @module model/RolesAdditionalData
 * @version 1.0.0
 */
class RolesAdditionalData {
    /**
     * Constructs a new <code>RolesAdditionalData</code>.
     * The additional data in the Role list
     * @alias module:model/RolesAdditionalData
     */
    constructor() { 
        
        RolesAdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RolesAdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RolesAdditionalData} obj Optional instance to populate.
     * @return {module:model/RolesAdditionalData} The populated <code>RolesAdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RolesAdditionalData();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = RolesAdditionalDataPagination.constructFromObject(data['pagination']);

                delete data['pagination'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/RolesAdditionalDataPagination} pagination
 */
RolesAdditionalData.prototype['pagination'] = undefined;






export default RolesAdditionalData;
