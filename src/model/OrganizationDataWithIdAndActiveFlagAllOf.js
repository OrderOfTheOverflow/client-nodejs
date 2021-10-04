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
 * The OrganizationDataWithIdAndActiveFlagAllOf model module.
 * @module model/OrganizationDataWithIdAndActiveFlagAllOf
 * @version 1.0.0
 */
class OrganizationDataWithIdAndActiveFlagAllOf {
    /**
     * Constructs a new <code>OrganizationDataWithIdAndActiveFlagAllOf</code>.
     * @alias module:model/OrganizationDataWithIdAndActiveFlagAllOf
     */
    constructor() { 
        
        OrganizationDataWithIdAndActiveFlagAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationDataWithIdAndActiveFlagAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationDataWithIdAndActiveFlagAllOf} obj Optional instance to populate.
     * @return {module:model/OrganizationDataWithIdAndActiveFlagAllOf} The populated <code>OrganizationDataWithIdAndActiveFlagAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationDataWithIdAndActiveFlagAllOf();

            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the associated Organization is active or not
 * @member {Boolean} active_flag
 */
OrganizationDataWithIdAndActiveFlagAllOf.prototype['active_flag'] = undefined;






export default OrganizationDataWithIdAndActiveFlagAllOf;

