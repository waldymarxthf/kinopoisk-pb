package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("m7grwyrwgt2h4m0")
		if err != nil {
			return err
		}

		return dao.DeleteCollection(collection)
	}, func(db dbx.Builder) error {
		jsonData := `{
			"id": "m7grwyrwgt2h4m0",
			"created": "2023-08-29 15:22:33.828Z",
			"updated": "2023-08-29 15:22:33.828Z",
			"name": "MovieLikes",
			"type": "base",
			"system": false,
			"schema": [
				{
					"system": false,
					"id": "iwco0n7k",
					"name": "movieId",
					"type": "number",
					"required": false,
					"unique": false,
					"options": {
						"min": null,
						"max": null
					}
				},
				{
					"system": false,
					"id": "j1sjxlwl",
					"name": "likeStatus",
					"type": "bool",
					"required": false,
					"unique": false,
					"options": {}
				},
				{
					"system": false,
					"id": "q793oy5j",
					"name": "userId",
					"type": "number",
					"required": false,
					"unique": false,
					"options": {
						"min": null,
						"max": null
					}
				}
			],
			"indexes": [],
			"listRule": "@request.auth.id != ''",
			"viewRule": "@request.auth.id != ''",
			"createRule": "@request.auth.id != '' && @request.data.userId = @request.auth.id",
			"updateRule": "@request.auth.id != '' && @request.data.userId = @request.auth.id",
			"deleteRule": "@request.auth.id != '' && @request.data.userId = @request.auth.id",
			"options": {}
		}`

		collection := &models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collection); err != nil {
			return err
		}

		return daos.New(db).SaveCollection(collection)
	})
}
