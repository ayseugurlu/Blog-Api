"use strict";

// Notification Controllers:

const Notification = require("../models/notification");

module.exports = {
  list: async (req, res) => {
    /* 
            #swagger.tags = ["Notification"]
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

    const data = await res.getModelList(Notification);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Notification),
      data,
    });
  },
  create: async (req, res) => {
    /* 
            #swagger.tags = ["Notification"]
            #swagger.summary = "Create Notification"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref:"#/definitions/Notification"
                }
            }
        */

    const data = await Notification.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /* 
            #swagger.tags = ["Notification"]
            #swagger.summary = "Read Notification"
        */

    const data = await Notification.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /* 
            #swagger.tags = ["Notification"]
            #swagger.summary = "Update Notification"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref:"#/definitions/Notification"
                }
            }
        */

    const data = await Notification.updateOne(
      { _id: req.params.id },
      req.body,
      { runValidators: true }
    );

    res.status(200).send({
      error: false,
      data,
      new: await Notification.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /* 
            #swagger.tags = ["Notification"]
            #swagger.summary = "Delete Notification"
        */

    const data = await Notification.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
