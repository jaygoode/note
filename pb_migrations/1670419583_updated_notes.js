migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iel41de6uyoubt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipjb9nsr",
    "name": "createdAt",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gptljv7z",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iel41de6uyoubt")

  // remove
  collection.schema.removeField("ipjb9nsr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gptljv7z",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
