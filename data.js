const question1 = {
    id: '1000',
    issue: 'Luke Skywalker',
    alternatives: [ '1002', '1003', '2000', '2001' ]
};

const question2 = {
    id: '1001',
    issue: 'Darth Vader',
    alternatives: [ '1004' ]
};

const question3 = {
    id: '1002',
    issue: 'Han Solo',
    alternatives: [ '1000', '1003', '2001' ]
};

const questions = {
    '1': question1,
    '2': question2,
    '3': question3
};

/**
 * Allows us to query for the human with the given id.
 */
function getQuestion(id) {
    return questions[id];
}