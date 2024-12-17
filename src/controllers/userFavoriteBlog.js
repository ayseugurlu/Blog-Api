"use strict";

// UserFavoriteBlog Controllers:

const UserFavoriteBlog = require("../models/userFavoriteBlog");

module.exports = {
  list: async (req, res) => {
    /* 
            #swagger.tags = ["UserFavoriteBlog"]
            #swagger.summary = "List Categories"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

    const data = await res.getModelList(UserFavoriteBlog);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(UserFavoriteBlog),
      data,
    });
  },
  create: async (req, res) => {
    /* 
            #swagger.tags = ["UserFavoriteBlog"]
            #swagger.summary = "Create UserFavoriteBlog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref:"#/definitions/UserFavoriteBlog"
                }
            }
        */

    const data = await UserFavoriteBlog.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /* 
            #swagger.tags = ["UserFavoriteBlog"]
            #swagger.summary = "Read UserFavoriteBlog"
        */

    const data = await UserFavoriteBlog.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /* 
            #swagger.tags = ["UserFavoriteBlog"]
            #swagger.summary = "Update UserFavoriteBlog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref:"#/definitions/UserFavoriteBlog"
                }
            }
        */

    const data = await UserFavoriteBlog.updateOne(
      { _id: req.params.id },
      req.body,
      { runValidators: true }
    );

    res.status(200).send({
      error: false,
      data,
      new: await UserFavoriteBlog.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /* 
            #swagger.tags = ["UserFavoriteBlog"]
            #swagger.summary = "Delete UserFavoriteBlog"
        */

    const data = await UserFavoriteBlog.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
