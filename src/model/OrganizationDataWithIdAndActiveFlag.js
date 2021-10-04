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
import OrganizationDataWithId from './OrganizationDataWithId';
import OrganizationDataWithIdAndActiveFlagAllOf from './OrganizationDataWithIdAndActiveFlagAllOf';

/**
 * The OrganizationDataWithIdAndActiveFlag model module.
 * @module model/OrganizationDataWithIdAndActiveFlag
 * @version 1.0.0
 */
class OrganizationDataWithIdAndActiveFlag {
    /**
     * Constructs a new <code>OrganizationDataWithIdAndActiveFlag</code>.
     * The ID of the Organization associated with the item
     * @alias module:model/OrganizationDataWithIdAndActiveFlag
     * @implements module:model/OrganizationDataWithIdAndActiveFlagAllOf
     * @implements module:model/OrganizationDataWithId
     */
    constructor() { 
        OrganizationDataWithIdAndActiveFlagAllOf.initialize(this);OrganizationDataWithId.initialize(this);
        OrganizationDataWithIdAndActiveFlag.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationDataWithIdAndActiveFlag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationDataWithIdAndActiveFlag} obj Optional instance to populate.
     * @return {module:model/OrganizationDataWithIdAndActiveFlag} The populated <code>OrganizationDataWithIdAndActiveFlag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationDataWithIdAndActiveFlag();
            OrganizationDataWithIdAndActiveFlagAllOf.constructFromObject(data, obj);
            OrganizationDataWithId.constructFromObject(data, obj);

            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
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
 * If the associated Organization is active or not
 * @member {Boolean} active_flag
 */
OrganizationDataWithIdAndActiveFlag.prototype['active_flag'] = undefined;

/**
 * The ID of the Organization associated with the item
 * @member {Number} id
 */
OrganizationDataWithIdAndActiveFlag.prototype['id'] = undefined;

/**
 * The name of the Organization associated with the item
 * @member {String} name
 */
OrganizationDataWithIdAndActiveFlag.prototype['name'] = undefined;

/**
 * The number of people connected with the Organization that is associated with the item
 * @member {Number} people_count
 */
OrganizationDataWithIdAndActiveFlag.prototype['people_count'] = undefined;

/**
 * The ID of the owner of the Organization that is associated with the item
 * @member {Number} owner_id
 */
OrganizationDataWithIdAndActiveFlag.prototype['owner_id'] = undefined;

/**
 * The address of the Organization
 * @member {String} address
 */
OrganizationDataWithIdAndActiveFlag.prototype['address'] = undefined;

/**
 * The CC email of the Organization associated with the item
 * @member {String} cc_email
 */
OrganizationDataWithIdAndActiveFlag.prototype['cc_email'] = undefined;


// Implement OrganizationDataWithIdAndActiveFlagAllOf interface:
/**
 * If the associated Organization is active or not
 * @member {Boolean} active_flag
 */
OrganizationDataWithIdAndActiveFlagAllOf.prototype['active_flag'] = undefined;
// Implement OrganizationDataWithId interface:
/**
 * The ID of the Organization associated with the item
 * @member {Number} id
 */
OrganizationDataWithId.prototype['id'] = undefined;
/**
 * The name of the Organization associated with the item
 * @member {String} name
 */
OrganizationDataWithId.prototype['name'] = undefined;
/**
 * The number of people connected with the Organization that is associated with the item
 * @member {Number} people_count
 */
OrganizationDataWithId.prototype['people_count'] = undefined;
/**
 * The ID of the owner of the Organization that is associated with the item
 * @member {Number} owner_id
 */
OrganizationDataWithId.prototype['owner_id'] = undefined;
/**
 * The address of the Organization
 * @member {String} address
 */
OrganizationDataWithId.prototype['address'] = undefined;
/**
 * The CC email of the Organization associated with the item
 * @member {String} cc_email
 */
OrganizationDataWithId.prototype['cc_email'] = undefined;




export default OrganizationDataWithIdAndActiveFlag;

