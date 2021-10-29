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
import ActivityDistributionDataWithAdditionalData from './ActivityDistributionDataWithAdditionalData';
import ActivityResponseObject from './ActivityResponseObject';
import BaseResponse from './BaseResponse';
import DealListActivitiesResponseAllOf from './DealListActivitiesResponseAllOf';
import DealListActivitiesResponseAllOfRelatedObjects from './DealListActivitiesResponseAllOfRelatedObjects';

/**
 * The DealListActivitiesResponse model module.
 * @module model/DealListActivitiesResponse
 * @version 1.0.0
 */
class DealListActivitiesResponse {
    /**
     * Constructs a new <code>DealListActivitiesResponse</code>.
     * @alias module:model/DealListActivitiesResponse
     * @implements module:model/BaseResponse
     * @implements module:model/DealListActivitiesResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);DealListActivitiesResponseAllOf.initialize(this);
        DealListActivitiesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealListActivitiesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealListActivitiesResponse} obj Optional instance to populate.
     * @return {module:model/DealListActivitiesResponse} The populated <code>DealListActivitiesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealListActivitiesResponse();
            BaseResponse.constructFromObject(data, obj);
            DealListActivitiesResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ActivityResponseObject]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ActivityDistributionDataWithAdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = DealListActivitiesResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

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
DealListActivitiesResponse.prototype['success'] = undefined;

/**
 * The array of Activities
 * @member {Array.<module:model/ActivityResponseObject>} data
 */
DealListActivitiesResponse.prototype['data'] = undefined;

/**
 * @member {module:model/ActivityDistributionDataWithAdditionalData} additional_data
 */
DealListActivitiesResponse.prototype['additional_data'] = undefined;

/**
 * @member {module:model/DealListActivitiesResponseAllOfRelatedObjects} related_objects
 */
DealListActivitiesResponse.prototype['related_objects'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement DealListActivitiesResponseAllOf interface:
/**
 * The array of Activities
 * @member {Array.<module:model/ActivityResponseObject>} data
 */
DealListActivitiesResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/ActivityDistributionDataWithAdditionalData} additional_data
 */
DealListActivitiesResponseAllOf.prototype['additional_data'] = undefined;
/**
 * @member {module:model/DealListActivitiesResponseAllOfRelatedObjects} related_objects
 */
DealListActivitiesResponseAllOf.prototype['related_objects'] = undefined;




export default DealListActivitiesResponse;
