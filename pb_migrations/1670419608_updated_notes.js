migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iel41de6uyoubt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xkeuecgh",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iel41de6uyoubt")

  // remove
  collection.schema.removeField("xkeuecgh")

  return dao.saveCollection(collection)
})
