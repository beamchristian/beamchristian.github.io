const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID
    name: String
    description: String
    image: String
    repo: String
    deployment: String
  }

  type About {
    _id: ID
    aboutText: String
  }

  type Contact {
    _id: ID
    name: String
    email: String
    message: String
    createdAt: String
  }

  type Resume {
    _id: ID
    pdf: String
  }

  type Query {
    project(_id: ID!): Project
  }

  type Mutation {
    addProject(
      name: String!
      description: String!
      image: String!
      repo: String!
      deployment: String!
    ): Project
    addContact(name: String!, email: String!, message: String!): Contact
    addResume(pdf: String!): Resume
    addAbout(aboutText: String!): About
    updateProject(
      _id: ID!
      name: String!
      description: String!
      image: String!
      repo: String!
      deployment: String!
    ): Project
    updateResume(_id: ID!, pdf: String!): Resume
    updateAbout(_id: ID!, aboutText: String!): About
  }
`;

module.exports = typeDefs;
