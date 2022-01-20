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
 * The UserAssignmentToPermissionSet model module.
 * @module model/UserAssignmentToPermissionSet
 * @version 1.0.0
 */
class UserAssignmentToPermissionSet {
    /**
     * Constructs a new <code>UserAssignmentToPermissionSet</code>.
     * @alias module:model/UserAssignmentToPermissionSet
     */
    constructor() { 
        
        UserAssignmentToPermissionSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAssignmentToPermissionSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserAssignmentToPermissionSet} obj Optional instance to populate.
     * @return {module:model/UserAssignmentToPermissionSet} The populated <code>UserAssignmentToPermissionSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAssignmentToPermissionSet();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('permission_set_id')) {
                obj['permission_set_id'] = ApiClient.convertToType(data['permission_set_id'], 'Number');

                delete data['permission_set_id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the assignment of the permission set
 * @member {Number} id
 */
UserAssignmentToPermissionSet.prototype['id'] = undefined;

/**
 * The ID of the user in the permission set
 * @member {Number} user_id
 */
UserAssignmentToPermissionSet.prototype['user_id'] = undefined;

/**
 * The ID of the permission set
 * @member {Number} permission_set_id
 */
UserAssignmentToPermissionSet.prototype['permission_set_id'] = undefined;

/**
 * The name of the permission set
 * @member {String} name
 */
UserAssignmentToPermissionSet.prototype['name'] = undefined;






export default UserAssignmentToPermissionSet;

