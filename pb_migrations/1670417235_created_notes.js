migrate((db) => {
  const collection = new Collection({
    "id": "7iel41de6uyoubt",
    "created": "2022-12-07 12:47:15.946Z",
    "updated": "2022-12-07 12:47:15.946Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7iel41de6uyoubt");

  return dao.deleteCollection(collection);
})
