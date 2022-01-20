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
 * The DealOrganizationDataWithIdAllOf model module.
 * @module model/DealOrganizationDataWithIdAllOf
 * @version 1.0.0
 */
class DealOrganizationDataWithIdAllOf {
    /**
     * Constructs a new <code>DealOrganizationDataWithIdAllOf</code>.
     * @alias module:model/DealOrganizationDataWithIdAllOf
     */
    constructor() { 
        
        DealOrganizationDataWithIdAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealOrganizationDataWithIdAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealOrganizationDataWithIdAllOf} obj Optional instance to populate.
     * @return {module:model/DealOrganizationDataWithIdAllOf} The populated <code>DealOrganizationDataWithIdAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealOrganizationDataWithIdAllOf();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');

                delete data['value'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the organization associated with the deal
 * @member {Number} value
 */
DealOrganizationDataWithIdAllOf.prototype['value'] = undefined;






export default DealOrganizationDataWithIdAllOf;

