package migrations

import (
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("ffme505q4ua4sjh")
		if err != nil {
			return err
		}

		collection.Name = "favoriteMovies"

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("ffme505q4ua4sjh")
		if err != nil {
			return err
		}

		collection.Name = "favouriteMovies"

		return dao.SaveCollection(collection)
	})
}
