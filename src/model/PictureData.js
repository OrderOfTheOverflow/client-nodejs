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
import PictureDataPictures from './PictureDataPictures';

/**
 * The PictureData model module.
 * @module model/PictureData
 * @version 1.0.0
 */
class PictureData {
    /**
     * Constructs a new <code>PictureData</code>.
     * @alias module:model/PictureData
     */
    constructor() { 
        
        PictureData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PictureData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PictureData} obj Optional instance to populate.
     * @return {module:model/PictureData} The populated <code>PictureData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PictureData();

            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');

                delete data['item_type'];
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');

                delete data['item_id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('added_by_user_id')) {
                obj['added_by_user_id'] = ApiClient.convertToType(data['added_by_user_id'], 'Number');

                delete data['added_by_user_id'];
            }
            if (data.hasOwnProperty('pictures')) {
                obj['pictures'] = PictureDataPictures.constructFromObject(data['pictures']);

                delete data['pictures'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The type of item the picture is related to
 * @member {String} item_type
 */
PictureData.prototype['item_type'] = undefined;

/**
 * The ID of related item
 * @member {Number} item_id
 */
PictureData.prototype['item_id'] = undefined;

/**
 * Whether the associated picture is active or not
 * @member {Boolean} active_flag
 */
PictureData.prototype['active_flag'] = undefined;

/**
 * The add time of the picture
 * @member {String} add_time
 */
PictureData.prototype['add_time'] = undefined;

/**
 * The update time of the picture
 * @member {String} update_time
 */
PictureData.prototype['update_time'] = undefined;

/**
 * The ID of the user who added the picture
 * @member {Number} added_by_user_id
 */
PictureData.prototype['added_by_user_id'] = undefined;

/**
 * @member {module:model/PictureDataPictures} pictures
 */
PictureData.prototype['pictures'] = undefined;






export default PictureData;

