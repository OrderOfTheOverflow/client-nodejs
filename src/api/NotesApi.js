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


import ApiClient from "../ApiClient";
import AddNoteRequest from '../model/AddNoteRequest';
import CommentPostPutObject from '../model/CommentPostPutObject';
import DeleteComment from '../model/DeleteComment';
import DeleteNote from '../model/DeleteNote';
import GetComments from '../model/GetComments';
import GetNotes from '../model/GetNotes';
import Note from '../model/Note';
import NumberBoolean from '../model/NumberBoolean';
import PostComment from '../model/PostComment';
import PostNote from '../model/PostNote';

/**
* Notes service.
* @module api/NotesApi
* @version 1.0.0
*/
export default class NotesApi {

    /**
    * Constructs a new NotesApi. 
    * @alias module:api/NotesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a note
     * Adds a new note.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddNoteRequest} opts.addNoteRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostNote} and HTTP response
     */
    addNoteWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addNoteRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = PostNote;
      return this.apiClient.callApi(
        '/notes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a note
     * Adds a new note.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddNoteRequest} opts.addNoteRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostNote}
     */
    addNote(opts) {
      return this.addNoteWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Add a comment to a note
     * Adds a new comment to a note.
     * @param {Number} id ID of the note
     * @param {Object} opts Optional parameters
     * @param {module:model/CommentPostPutObject} opts.commentPostPutObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostComment} and HTTP response
     */
    addNoteCommentWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['commentPostPutObject'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addNoteComment");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = PostComment;
      return this.apiClient.callApi(
        '/notes/{id}/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a comment to a note
     * Adds a new comment to a note.
     * @param {Number} id ID of the note
     * @param {Object} opts Optional parameters
     * @param {module:model/CommentPostPutObject} opts.commentPostPutObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostComment}
     */
    addNoteComment(id, opts) {
      return this.addNoteCommentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a comment related to a note
     * Deletes a comment.
     * @param {Number} id ID of the note
     * @param {String} commentId ID of the comment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteComment} and HTTP response
     */
    deleteCommentWithHttpInfo(id, commentId) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteComment");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling deleteComment");
      }

      let pathParams = {
        'id': id,
        'commentId': commentId,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = DeleteComment;
      return this.apiClient.callApi(
        '/notes/{id}/comments/{commentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a comment related to a note
     * Deletes a comment.
     * @param {Number} id ID of the note
     * @param {String} commentId ID of the comment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteComment}
     */
    deleteComment(id, commentId) {
      return this.deleteCommentWithHttpInfo(id, commentId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a note
     * Deletes a specific note.
     * @param {Number} id ID of the note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteNote} and HTTP response
     */
    deleteNoteWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteNote");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = DeleteNote;
      return this.apiClient.callApi(
        '/notes/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a note
     * Deletes a specific note.
     * @param {Number} id ID of the note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteNote}
     */
    deleteNote(id) {
      return this.deleteNoteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one comment
     * Returns details about a comment
     * @param {Number} id ID of the note
     * @param {String} commentId ID of the comment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostComment} and HTTP response
     */
    getCommentWithHttpInfo(id, commentId) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getComment");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling getComment");
      }

      let pathParams = {
        'id': id,
        'commentId': commentId,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = PostComment;
      return this.apiClient.callApi(
        '/notes/{id}/comments/{commentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one comment
     * Returns details about a comment
     * @param {Number} id ID of the note
     * @param {String} commentId ID of the comment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostComment}
     */
    getComment(id, commentId) {
      return this.getCommentWithHttpInfo(id, commentId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one note
     * Returns details about a specific note.
     * @param {Number} id ID of the note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostNote} and HTTP response
     */
    getNoteWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNote");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = PostNote;
      return this.apiClient.callApi(
        '/notes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one note
     * Returns details about a specific note.
     * @param {Number} id ID of the note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostNote}
     */
    getNote(id) {
      return this.getNoteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all comments for a note
     * Returns all comments associated with a Note.
     * @param {Number} id ID of the note
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetComments} and HTTP response
     */
    getNoteCommentsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNoteComments");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetComments;
      return this.apiClient.callApi(
        '/notes/{id}/comments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all comments for a note
     * Returns all comments associated with a Note.
     * @param {Number} id ID of the note
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetComments}
     */
    getNoteComments(id, opts) {
      return this.getNoteCommentsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all notes
     * Returns all notes.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The ID of the user whose notes to fetch. If omitted, notes by all users will be returned.
     * @param {String} opts.leadId The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned.
     * @param {Number} opts.dealId The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned.
     * @param {Number} opts.personId The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned.
     * @param {Number} opts.orgId The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {String} opts.sort Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`.
     * @param {Date} opts.startDate Date in format of YYYY-MM-DD from which notes to fetch.
     * @param {Date} opts.endDate Date in format of YYYY-MM-DD until which notes to fetch to.
     * @param {module:model/NumberBoolean} opts.pinnedToLeadFlag If set, then results are filtered by note to lead pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToDealFlag If set, then results are filtered by note to deal pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToOrganizationFlag If set, then results are filtered by note to organization pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToPersonFlag If set, then results are filtered by note to person pinning state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetNotes} and HTTP response
     */
    getNotesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'user_id': opts['userId'],
        'lead_id': opts['leadId'],
        'deal_id': opts['dealId'],
        'person_id': opts['personId'],
        'org_id': opts['orgId'],
        'start': opts['start'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'pinned_to_lead_flag': opts['pinnedToLeadFlag'],
        'pinned_to_deal_flag': opts['pinnedToDealFlag'],
        'pinned_to_organization_flag': opts['pinnedToOrganizationFlag'],
        'pinned_to_person_flag': opts['pinnedToPersonFlag'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetNotes;
      return this.apiClient.callApi(
        '/notes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all notes
     * Returns all notes.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The ID of the user whose notes to fetch. If omitted, notes by all users will be returned.
     * @param {String} opts.leadId The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned.
     * @param {Number} opts.dealId The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned.
     * @param {Number} opts.personId The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned.
     * @param {Number} opts.orgId The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {String} opts.sort Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`.
     * @param {Date} opts.startDate Date in format of YYYY-MM-DD from which notes to fetch.
     * @param {Date} opts.endDate Date in format of YYYY-MM-DD until which notes to fetch to.
     * @param {module:model/NumberBoolean} opts.pinnedToLeadFlag If set, then results are filtered by note to lead pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToDealFlag If set, then results are filtered by note to deal pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToOrganizationFlag If set, then results are filtered by note to organization pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToPersonFlag If set, then results are filtered by note to person pinning state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetNotes}
     */
    getNotes(opts) {
      return this.getNotesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a comment related to a note
     * Updates a comment related to a note.
     * @param {Number} id ID of the note
     * @param {String} commentId ID of the comment
     * @param {Object} opts Optional parameters
     * @param {module:model/CommentPostPutObject} opts.commentPostPutObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostComment} and HTTP response
     */
    updateCommentForNoteWithHttpInfo(id, commentId, opts) {
      opts = opts || {};
      let postBody = opts['commentPostPutObject'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCommentForNote");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling updateCommentForNote");
      }

      let pathParams = {
        'id': id,
        'commentId': commentId,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = PostComment;
      return this.apiClient.callApi(
        '/notes/{id}/comments/{commentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a comment related to a note
     * Updates a comment related to a note.
     * @param {Number} id ID of the note
     * @param {String} commentId ID of the comment
     * @param {Object} opts Optional parameters
     * @param {module:model/CommentPostPutObject} opts.commentPostPutObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostComment}
     */
    updateCommentForNote(id, commentId, opts) {
      return this.updateCommentForNoteWithHttpInfo(id, commentId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a note
     * Updates a note.
     * @param {Number} id ID of the note
     * @param {Object} opts Optional parameters
     * @param {module:model/Note} opts.note 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostNote} and HTTP response
     */
    updateNoteWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['note'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateNote");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = PostNote;
      return this.apiClient.callApi(
        '/notes/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a note
     * Updates a note.
     * @param {Number} id ID of the note
     * @param {Object} opts Optional parameters
     * @param {module:model/Note} opts.note 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostNote}
     */
    updateNote(id, opts) {
      return this.updateNoteWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
