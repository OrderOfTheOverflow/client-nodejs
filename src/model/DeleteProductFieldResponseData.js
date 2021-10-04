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

/**
 * The DeleteProductFieldResponseData model module.
 * @module model/DeleteProductFieldResponseData
 * @version 1.0.0
 */
class DeleteProductFieldResponseData {
    /**
     * Constructs a new <code>DeleteProductFieldResponseData</code>.
     * @alias module:model/DeleteProductFieldResponseData
     */
    constructor() { 
        
        DeleteProductFieldResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteProductFieldResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteProductFieldResponseData} obj Optional instance to populate.
     * @return {module:model/DeleteProductFieldResponseData} The populated <code>DeleteProductFieldResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteProductFieldResponseData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the deleted Product Field
 * @member {Number} id
 */
DeleteProductFieldResponseData.prototype['id'] = undefined;






export default DeleteProductFieldResponseData;

