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
import Field from './Field';

/**
 * The FieldsResponseAllOf model module.
 * @module model/FieldsResponseAllOf
 * @version 1.0.0
 */
class FieldsResponseAllOf {
    /**
     * Constructs a new <code>FieldsResponseAllOf</code>.
     * @alias module:model/FieldsResponseAllOf
     */
    constructor() { 
        
        FieldsResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/FieldsResponseAllOf} The populated <code>FieldsResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldsResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Field]);

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
 * @member {Array.<module:model/Field>} data
 */
FieldsResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
FieldsResponseAllOf.prototype['additional_data'] = undefined;






export default FieldsResponseAllOf;

