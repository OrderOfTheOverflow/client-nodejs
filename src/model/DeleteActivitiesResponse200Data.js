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
 * The DeleteActivitiesResponse200Data model module.
 * @module model/DeleteActivitiesResponse200Data
 * @version 1.0.0
 */
class DeleteActivitiesResponse200Data {
    /**
     * Constructs a new <code>DeleteActivitiesResponse200Data</code>.
     * @alias module:model/DeleteActivitiesResponse200Data
     */
    constructor() { 
        
        DeleteActivitiesResponse200Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteActivitiesResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteActivitiesResponse200Data} obj Optional instance to populate.
     * @return {module:model/DeleteActivitiesResponse200Data} The populated <code>DeleteActivitiesResponse200Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteActivitiesResponse200Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], ['Number']);

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * An array of the IDs of activities that were deleted
 * @member {Array.<Number>} id
 */
DeleteActivitiesResponse200Data.prototype['id'] = undefined;






export default DeleteActivitiesResponse200Data;

