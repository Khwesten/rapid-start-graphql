// var express = require('express');
// var routes = require('./routes');
// var _data = require('./data.js');
var _graphql = require('graphql');
// var graphqlHTTP = require('express-graphql');

module.exports.questionType = new _graphql.GraphQLObjectType({
    name: 'Question',
    description: 'The question type',
    fields: function fields() {
        return {
            id: {
                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
                description: 'The id of the question.'
            },
            issue: {
                type: _graphql.GraphQLString,
                description: 'The issue of question.'
            },
            /*alternatives: {
                type: new _graphql.GraphQLString,
                description: 'Alternatives of question',
                resolve: function resolve(question) {
                    return _data.getAlternatives(question);
                }
            }*/
        };
    }
});