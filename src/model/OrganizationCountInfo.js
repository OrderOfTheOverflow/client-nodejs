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
 * The OrganizationCountInfo model module.
 * @module model/OrganizationCountInfo
 * @version 1.0.0
 */
class OrganizationCountInfo {
    /**
     * Constructs a new <code>OrganizationCountInfo</code>.
     * @alias module:model/OrganizationCountInfo
     */
    constructor() { 
        
        OrganizationCountInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationCountInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationCountInfo} obj Optional instance to populate.
     * @return {module:model/OrganizationCountInfo} The populated <code>OrganizationCountInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationCountInfo();

            if (data.hasOwnProperty('email_messages_count')) {
                obj['email_messages_count'] = ApiClient.convertToType(data['email_messages_count'], 'Number');

                delete data['email_messages_count'];
            }
            if (data.hasOwnProperty('people_count')) {
                obj['people_count'] = ApiClient.convertToType(data['people_count'], 'Number');

                delete data['people_count'];
            }
            if (data.hasOwnProperty('activities_count')) {
                obj['activities_count'] = ApiClient.convertToType(data['activities_count'], 'Number');

                delete data['activities_count'];
            }
            if (data.hasOwnProperty('done_activities_count')) {
                obj['done_activities_count'] = ApiClient.convertToType(data['done_activities_count'], 'Number');

                delete data['done_activities_count'];
            }
            if (data.hasOwnProperty('undone_activities_count')) {
                obj['undone_activities_count'] = ApiClient.convertToType(data['undone_activities_count'], 'Number');

                delete data['undone_activities_count'];
            }
            if (data.hasOwnProperty('files_count')) {
                obj['files_count'] = ApiClient.convertToType(data['files_count'], 'Number');

                delete data['files_count'];
            }
            if (data.hasOwnProperty('notes_count')) {
                obj['notes_count'] = ApiClient.convertToType(data['notes_count'], 'Number');

                delete data['notes_count'];
            }
            if (data.hasOwnProperty('followers_count')) {
                obj['followers_count'] = ApiClient.convertToType(data['followers_count'], 'Number');

                delete data['followers_count'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The count of email messages related to the Organization
 * @member {Number} email_messages_count
 */
OrganizationCountInfo.prototype['email_messages_count'] = undefined;

/**
 * The count of Persons related to the Organization
 * @member {Number} people_count
 */
OrganizationCountInfo.prototype['people_count'] = undefined;

/**
 * The count of Activities related to the Organization
 * @member {Number} activities_count
 */
OrganizationCountInfo.prototype['activities_count'] = undefined;

/**
 * The count of done Activities related to the Organization
 * @member {Number} done_activities_count
 */
OrganizationCountInfo.prototype['done_activities_count'] = undefined;

/**
 * The count of undone Activities related to the Organization
 * @member {Number} undone_activities_count
 */
OrganizationCountInfo.prototype['undone_activities_count'] = undefined;

/**
 * The count of files related to the Organization
 * @member {Number} files_count
 */
OrganizationCountInfo.prototype['files_count'] = undefined;

/**
 * The count of notes related to the Organization
 * @member {Number} notes_count
 */
OrganizationCountInfo.prototype['notes_count'] = undefined;

/**
 * The count of followers related to the Organization
 * @member {Number} followers_count
 */
OrganizationCountInfo.prototype['followers_count'] = undefined;






export default OrganizationCountInfo;
