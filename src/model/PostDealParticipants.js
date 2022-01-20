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
import GetDealsRelatedObjects from './GetDealsRelatedObjects';
import PersonItem from './PersonItem';

/**
 * The PostDealParticipants model module.
 * @module model/PostDealParticipants
 * @version 1.0.0
 */
class PostDealParticipants {
    /**
     * Constructs a new <code>PostDealParticipants</code>.
     * @alias module:model/PostDealParticipants
     */
    constructor() { 
        
        PostDealParticipants.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostDealParticipants</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostDealParticipants} obj Optional instance to populate.
     * @return {module:model/PostDealParticipants} The populated <code>PostDealParticipants</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostDealParticipants();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], PersonItem);

                delete data['data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = GetDealsRelatedObjects.constructFromObject(data['related_objects']);

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
 * If the request was successful or not
 * @member {Boolean} success
 */
PostDealParticipants.prototype['success'] = undefined;

/**
 * The object of participant
 * @member {module:model/PersonItem} data
 */
PostDealParticipants.prototype['data'] = undefined;

/**
 * @member {module:model/GetDealsRelatedObjects} related_objects
 */
PostDealParticipants.prototype['related_objects'] = undefined;






export default PostDealParticipants;

