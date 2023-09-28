package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models/schema"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("_pb_users_auth_")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("rapgtyc3")

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("_pb_users_auth_")
		if err != nil {
			return err
		}

		// add
		del_field := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "rapgtyc3",
			"name": "field",
			"type": "relation",
			"required": false,
			"unique": false,
			"options": {
				"collectionId": "h7w5dd931w4ap1k",
				"cascadeDelete": false,
				"minSelect": null,
				"maxSelect": 1,
				"displayFields": []
			}
		}`), del_field)
		collection.Schema.AddField(del_field)

		return dao.SaveCollection(collection)
	})
}
