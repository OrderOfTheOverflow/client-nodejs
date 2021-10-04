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
import BasePipelineWithSelectedFlag from './BasePipelineWithSelectedFlag';
import BaseResponse from './BaseResponse';
import EditPipelineAllOf from './EditPipelineAllOf';

/**
 * The EditPipeline model module.
 * @module model/EditPipeline
 * @version 1.0.0
 */
class EditPipeline {
    /**
     * Constructs a new <code>EditPipeline</code>.
     * @alias module:model/EditPipeline
     * @implements module:model/BaseResponse
     * @implements module:model/EditPipelineAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);EditPipelineAllOf.initialize(this);
        EditPipeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EditPipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditPipeline} obj Optional instance to populate.
     * @return {module:model/EditPipeline} The populated <code>EditPipeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditPipeline();
            BaseResponse.constructFromObject(data, obj);
            EditPipelineAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], BasePipelineWithSelectedFlag);

                delete data['data'];
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
EditPipeline.prototype['success'] = undefined;

/**
 * The Pipeline object
 * @member {module:model/BasePipelineWithSelectedFlag} data
 */
EditPipeline.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement EditPipelineAllOf interface:
/**
 * The Pipeline object
 * @member {module:model/BasePipelineWithSelectedFlag} data
 */
EditPipelineAllOf.prototype['data'] = undefined;




export default EditPipeline;

