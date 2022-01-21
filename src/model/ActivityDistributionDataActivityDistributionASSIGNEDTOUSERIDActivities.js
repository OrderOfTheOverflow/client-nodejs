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
 * The ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities model module.
 * @module model/ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities
 * @version 1.0.0
 */
class ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities {
    /**
     * Constructs a new <code>ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities</code>.
     * The count of activities related to the user grouped by activity type
     * @alias module:model/ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities
     */
    constructor() { 
        
        ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities} obj Optional instance to populate.
     * @return {module:model/ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities} The populated <code>ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities();

            if (data.hasOwnProperty('ACTIVITY_TYPE_NAME')) {
                obj['ACTIVITY_TYPE_NAME'] = ApiClient.convertToType(data['ACTIVITY_TYPE_NAME'], 'Number');

                delete data['ACTIVITY_TYPE_NAME'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The count of activities related to a specific type
 * @member {Number} ACTIVITY_TYPE_NAME
 */
ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities.prototype['ACTIVITY_TYPE_NAME'] = undefined;






export default ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities;

