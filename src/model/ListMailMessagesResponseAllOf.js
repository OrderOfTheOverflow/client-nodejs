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
import ListMailMessagesResponseAllOfData from './ListMailMessagesResponseAllOfData';

/**
 * The ListMailMessagesResponseAllOf model module.
 * @module model/ListMailMessagesResponseAllOf
 * @version 1.0.0
 */
class ListMailMessagesResponseAllOf {
    /**
     * Constructs a new <code>ListMailMessagesResponseAllOf</code>.
     * @alias module:model/ListMailMessagesResponseAllOf
     */
    constructor() { 
        
        ListMailMessagesResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMailMessagesResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMailMessagesResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ListMailMessagesResponseAllOf} The populated <code>ListMailMessagesResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMailMessagesResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ListMailMessagesResponseAllOfData]);

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
 * The array of Mail Messages
 * @member {Array.<module:model/ListMailMessagesResponseAllOfData>} data
 */
ListMailMessagesResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
ListMailMessagesResponseAllOf.prototype['additional_data'] = undefined;






export default ListMailMessagesResponseAllOf;

