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
 * The OrganizationAddressInfo model module.
 * @module model/OrganizationAddressInfo
 * @version 1.0.0
 */
class OrganizationAddressInfo {
    /**
     * Constructs a new <code>OrganizationAddressInfo</code>.
     * @alias module:model/OrganizationAddressInfo
     */
    constructor() { 
        
        OrganizationAddressInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationAddressInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationAddressInfo} obj Optional instance to populate.
     * @return {module:model/OrganizationAddressInfo} The populated <code>OrganizationAddressInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationAddressInfo();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');

                delete data['address'];
            }
            if (data.hasOwnProperty('address_subpremise')) {
                obj['address_subpremise'] = ApiClient.convertToType(data['address_subpremise'], 'String');

                delete data['address_subpremise'];
            }
            if (data.hasOwnProperty('address_street_number')) {
                obj['address_street_number'] = ApiClient.convertToType(data['address_street_number'], 'String');

                delete data['address_street_number'];
            }
            if (data.hasOwnProperty('address_route')) {
                obj['address_route'] = ApiClient.convertToType(data['address_route'], 'String');

                delete data['address_route'];
            }
            if (data.hasOwnProperty('address_sublocality')) {
                obj['address_sublocality'] = ApiClient.convertToType(data['address_sublocality'], 'String');

                delete data['address_sublocality'];
            }
            if (data.hasOwnProperty('address_locality')) {
                obj['address_locality'] = ApiClient.convertToType(data['address_locality'], 'String');

                delete data['address_locality'];
            }
            if (data.hasOwnProperty('address_admin_area_level_1')) {
                obj['address_admin_area_level_1'] = ApiClient.convertToType(data['address_admin_area_level_1'], 'String');

                delete data['address_admin_area_level_1'];
            }
            if (data.hasOwnProperty('address_admin_area_level_2')) {
                obj['address_admin_area_level_2'] = ApiClient.convertToType(data['address_admin_area_level_2'], 'String');

                delete data['address_admin_area_level_2'];
            }
            if (data.hasOwnProperty('address_country')) {
                obj['address_country'] = ApiClient.convertToType(data['address_country'], 'String');

                delete data['address_country'];
            }
            if (data.hasOwnProperty('address_postal_code')) {
                obj['address_postal_code'] = ApiClient.convertToType(data['address_postal_code'], 'String');

                delete data['address_postal_code'];
            }
            if (data.hasOwnProperty('address_formatted_address')) {
                obj['address_formatted_address'] = ApiClient.convertToType(data['address_formatted_address'], 'String');

                delete data['address_formatted_address'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The full address of the organization
 * @member {String} address
 */
OrganizationAddressInfo.prototype['address'] = undefined;

/**
 * The sub-premise of the organization location
 * @member {String} address_subpremise
 */
OrganizationAddressInfo.prototype['address_subpremise'] = undefined;

/**
 * The street number of the organization location
 * @member {String} address_street_number
 */
OrganizationAddressInfo.prototype['address_street_number'] = undefined;

/**
 * The route of the organization location
 * @member {String} address_route
 */
OrganizationAddressInfo.prototype['address_route'] = undefined;

/**
 * The sub-locality of the organization location
 * @member {String} address_sublocality
 */
OrganizationAddressInfo.prototype['address_sublocality'] = undefined;

/**
 * The locality of the organization location
 * @member {String} address_locality
 */
OrganizationAddressInfo.prototype['address_locality'] = undefined;

/**
 * The level 1 admin area of the organization location
 * @member {String} address_admin_area_level_1
 */
OrganizationAddressInfo.prototype['address_admin_area_level_1'] = undefined;

/**
 * The level 2 admin area of the organization location
 * @member {String} address_admin_area_level_2
 */
OrganizationAddressInfo.prototype['address_admin_area_level_2'] = undefined;

/**
 * The country of the organization location
 * @member {String} address_country
 */
OrganizationAddressInfo.prototype['address_country'] = undefined;

/**
 * The postal code of the organization location
 * @member {String} address_postal_code
 */
OrganizationAddressInfo.prototype['address_postal_code'] = undefined;

/**
 * The formatted organization location
 * @member {String} address_formatted_address
 */
OrganizationAddressInfo.prototype['address_formatted_address'] = undefined;






export default OrganizationAddressInfo;

