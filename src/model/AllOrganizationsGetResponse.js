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
import AllOrganizationsGetResponseAllOf from './AllOrganizationsGetResponseAllOf';
import AllOrganizationsGetResponseAllOfRelatedObjects from './AllOrganizationsGetResponseAllOfRelatedObjects';
import BaseOrganizationItem from './BaseOrganizationItem';
import BaseResponse from './BaseResponse';
import ItemSearchAdditionalData from './ItemSearchAdditionalData';

/**
 * The AllOrganizationsGetResponse model module.
 * @module model/AllOrganizationsGetResponse
 * @version 1.0.0
 */
class AllOrganizationsGetResponse {
    /**
     * Constructs a new <code>AllOrganizationsGetResponse</code>.
     * @alias module:model/AllOrganizationsGetResponse
     * @implements module:model/BaseResponse
     * @implements module:model/AllOrganizationsGetResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);AllOrganizationsGetResponseAllOf.initialize(this);
        AllOrganizationsGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AllOrganizationsGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllOrganizationsGetResponse} obj Optional instance to populate.
     * @return {module:model/AllOrganizationsGetResponse} The populated <code>AllOrganizationsGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOrganizationsGetResponse();
            BaseResponse.constructFromObject(data, obj);
            AllOrganizationsGetResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BaseOrganizationItem]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ItemSearchAdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = AllOrganizationsGetResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

                delete data['related_objects'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
AllOrganizationsGetResponse.prototype['success'] = undefined;

/**
 * The array of organizations
 * @member {Array.<module:model/BaseOrganizationItem>} data
 */
AllOrganizationsGetResponse.prototype['data'] = undefined;

/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
AllOrganizationsGetResponse.prototype['additional_data'] = undefined;

/**
 * @member {module:model/AllOrganizationsGetResponseAllOfRelatedObjects} related_objects
 */
AllOrganizationsGetResponse.prototype['related_objects'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement AllOrganizationsGetResponseAllOf interface:
/**
 * The array of organizations
 * @member {Array.<module:model/BaseOrganizationItem>} data
 */
AllOrganizationsGetResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
AllOrganizationsGetResponseAllOf.prototype['additional_data'] = undefined;
/**
 * @member {module:model/AllOrganizationsGetResponseAllOfRelatedObjects} related_objects
 */
AllOrganizationsGetResponseAllOf.prototype['related_objects'] = undefined;




export default AllOrganizationsGetResponse;

