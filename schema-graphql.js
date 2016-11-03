var express = require('express');
var _require = require('graphql');
var buildSchema = _require.buildSchema;

module.exports.schema = buildSchema(
    'type Question { ' +
        '_id: ID ' +
        'issue: String ' +
        'alternatives: [String] ' +
    '}' +
    'type Query { ' +
      'questions(_id: ID! issue: String): [Question] ' +
    '}'
);