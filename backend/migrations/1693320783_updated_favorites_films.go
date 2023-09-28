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

		collection, err := dao.FindCollectionByNameOrId("h7w5dd931w4ap1k")
		if err != nil {
			return err
		}

		// add
		new_like := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "aajdnfmd",
			"name": "like",
			"type": "bool",
			"required": true,
			"unique": false,
			"options": {}
		}`), new_like)
		collection.Schema.AddField(new_like)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("h7w5dd931w4ap1k")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("aajdnfmd")

		return dao.SaveCollection(collection)
	})
}
