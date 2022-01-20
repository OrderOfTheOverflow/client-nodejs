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
import ListFollowersResponseAllOfData from './ListFollowersResponseAllOfData';

/**
 * The ListFollowersResponseAllOf model module.
 * @module model/ListFollowersResponseAllOf
 * @version 1.0.0
 */
class ListFollowersResponseAllOf {
    /**
     * Constructs a new <code>ListFollowersResponseAllOf</code>.
     * @alias module:model/ListFollowersResponseAllOf
     */
    constructor() { 
        
        ListFollowersResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListFollowersResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListFollowersResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ListFollowersResponseAllOf} The populated <code>ListFollowersResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListFollowersResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ListFollowersResponseAllOfData]);

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
 * The list of followers
 * @member {Array.<module:model/ListFollowersResponseAllOfData>} data
 */
ListFollowersResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
ListFollowersResponseAllOf.prototype['additional_data'] = undefined;






export default ListFollowersResponseAllOf;

