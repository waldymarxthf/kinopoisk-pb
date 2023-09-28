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

		// remove
		collection.Schema.RemoveField("8m9tnwm3")

		// add
		new_id_film := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "x2duhaoo",
			"name": "id_film",
			"type": "text",
			"required": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"pattern": ""
			}
		}`), new_id_film)
		collection.Schema.AddField(new_id_film)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("h7w5dd931w4ap1k")
		if err != nil {
			return err
		}

		// add
		del_id_film := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "8m9tnwm3",
			"name": "id_film",
			"type": "number",
			"required": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null
			}
		}`), del_id_film)
		collection.Schema.AddField(del_id_film)

		// remove
		collection.Schema.RemoveField("x2duhaoo")

		return dao.SaveCollection(collection)
	})
}
