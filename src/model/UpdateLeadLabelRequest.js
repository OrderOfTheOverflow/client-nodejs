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
import LeadLabelColor from './LeadLabelColor';

/**
 * The UpdateLeadLabelRequest model module.
 * @module model/UpdateLeadLabelRequest
 * @version 1.0.0
 */
class UpdateLeadLabelRequest {
    /**
     * Constructs a new <code>UpdateLeadLabelRequest</code>.
     * @alias module:model/UpdateLeadLabelRequest
     */
    constructor() { 
        
        UpdateLeadLabelRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateLeadLabelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateLeadLabelRequest} obj Optional instance to populate.
     * @return {module:model/UpdateLeadLabelRequest} The populated <code>UpdateLeadLabelRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateLeadLabelRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = LeadLabelColor.constructFromObject(data['color']);

                delete data['color'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The name of the lead label
 * @member {String} name
 */
UpdateLeadLabelRequest.prototype['name'] = undefined;

/**
 * @member {module:model/LeadLabelColor} color
 */
UpdateLeadLabelRequest.prototype['color'] = undefined;






export default UpdateLeadLabelRequest;

