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

/**
 * The RelatedOrganizationData model module.
 * @module model/RelatedOrganizationData
 * @version 1.0.0
 */
class RelatedOrganizationData {
    /**
     * Constructs a new <code>RelatedOrganizationData</code>.
     * @alias module:model/RelatedOrganizationData
     */
    constructor() { 
        
        RelatedOrganizationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelatedOrganizationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedOrganizationData} obj Optional instance to populate.
     * @return {module:model/RelatedOrganizationData} The populated <code>RelatedOrganizationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelatedOrganizationData();

            if (data.hasOwnProperty('ORGANIZATION_ID')) {
                obj['ORGANIZATION_ID'] = OrganizationDataWithId.constructFromObject(data['ORGANIZATION_ID']);

                delete data['ORGANIZATION_ID'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/OrganizationDataWithId} ORGANIZATION_ID
 */
RelatedOrganizationData.prototype['ORGANIZATION_ID'] = undefined;






export default RelatedOrganizationData;

