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
 * The MergeOrganizationsRequest model module.
 * @module model/MergeOrganizationsRequest
 * @version 1.0.0
 */
class MergeOrganizationsRequest {
    /**
     * Constructs a new <code>MergeOrganizationsRequest</code>.
     * @alias module:model/MergeOrganizationsRequest
     * @param mergeWithId {Number} The ID of the organization that the organization will be merged with
     */
    constructor(mergeWithId) { 
        
        MergeOrganizationsRequest.initialize(this, mergeWithId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mergeWithId) { 
        obj['merge_with_id'] = mergeWithId;
    }

    /**
     * Constructs a <code>MergeOrganizationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergeOrganizationsRequest} obj Optional instance to populate.
     * @return {module:model/MergeOrganizationsRequest} The populated <code>MergeOrganizationsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MergeOrganizationsRequest();

            if (data.hasOwnProperty('merge_with_id')) {
                obj['merge_with_id'] = ApiClient.convertToType(data['merge_with_id'], 'Number');

                delete data['merge_with_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the organization that the organization will be merged with
 * @member {Number} merge_with_id
 */
MergeOrganizationsRequest.prototype['merge_with_id'] = undefined;






export default MergeOrganizationsRequest;

