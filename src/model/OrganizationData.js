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
 * The OrganizationData model module.
 * @module model/OrganizationData
 * @version 1.0.0
 */
class OrganizationData {
    /**
     * Constructs a new <code>OrganizationData</code>.
     * @alias module:model/OrganizationData
     */
    constructor() { 
        
        OrganizationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationData} obj Optional instance to populate.
     * @return {module:model/OrganizationData} The populated <code>OrganizationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('people_count')) {
                obj['people_count'] = ApiClient.convertToType(data['people_count'], 'Number');

                delete data['people_count'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');

                delete data['address'];
            }
            if (data.hasOwnProperty('cc_email')) {
                obj['cc_email'] = ApiClient.convertToType(data['cc_email'], 'String');

                delete data['cc_email'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The name of the organization associated with the item
 * @member {String} name
 */
OrganizationData.prototype['name'] = undefined;

/**
 * The number of people connected with the organization that is associated with the item
 * @member {Number} people_count
 */
OrganizationData.prototype['people_count'] = undefined;

/**
 * The ID of the owner of the organization that is associated with the item
 * @member {Number} owner_id
 */
OrganizationData.prototype['owner_id'] = undefined;

/**
 * The address of the organization
 * @member {String} address
 */
OrganizationData.prototype['address'] = undefined;

/**
 * The BCC email of the organization associated with the item
 * @member {String} cc_email
 */
OrganizationData.prototype['cc_email'] = undefined;






export default OrganizationData;

