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
import NoteField from './NoteField';

/**
 * The NoteFieldsResponseAllOf model module.
 * @module model/NoteFieldsResponseAllOf
 * @version 1.0.0
 */
class NoteFieldsResponseAllOf {
    /**
     * Constructs a new <code>NoteFieldsResponseAllOf</code>.
     * @alias module:model/NoteFieldsResponseAllOf
     */
    constructor() { 
        
        NoteFieldsResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NoteFieldsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NoteFieldsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/NoteFieldsResponseAllOf} The populated <code>NoteFieldsResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NoteFieldsResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [NoteField]);

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
 * @member {Array.<module:model/NoteField>} data
 */
NoteFieldsResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
NoteFieldsResponseAllOf.prototype['additional_data'] = undefined;






export default NoteFieldsResponseAllOf;

