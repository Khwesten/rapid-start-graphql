'use strict';

var express = require('express');
var mongoose = require('./db/mongoose');
var graphqlHTTP = require('express-graphql');

// var Schema = mongoose.Schema;

// var schemaGraphql = require('./schema-graphql');

var questionSchemaMongo = {
    issue:  String,
    alternatives: [String]
};

var Question = mongoose.model('Question', questionSchemaMongo);

// The root provides a resolver function for each API endpoint
var root = {
    questions: function questions(args) {
        console.log(args);
        var tal = Question.find().where('_id').in(args._id).then(function (data, err) {
           return data;
        });
        return tal;
    }
};

var app = express();

var _require = require('graphql');
var buildSchema = _require.buildSchema;

var schemaGraphql = buildSchema(
    'type Question { ' +
        '_id: String ' +
        'issue: String ' +
        'alternatives: [String] ' +
    '}' +
    'type Query { ' +
        'questions(_id: [ID] issue: String): [Question] ' +
    '}'
);

app.use('/graphql', graphqlHTTP({
    schema: schemaGraphql,
    rootValue: root,
    graphiql: true
}));

app.listen(4000);