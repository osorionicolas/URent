package main

import (
    "gorm.io/gorm"
	"gorm.io/driver/mysql"
    "fmt"
	"net/http"
	"os"
	"encoding/json"

)

var db gorm.DB
var config Configuration

type Configuration struct {
    Port int
    Host string
	User string
	Password string
}

type Orientation string

const(
    North Orientation = "Norte"
    South = "Sur"
    East = "Este"
    West = "Oeste"
)

type Category string

const(
    House Category = "Casa"
    PH = "PH"
    Apartment = "Departamento"
    Business  = "Local"
	Farm = "Campo"
	Garage = "Cochera"
	Land = "Terreno"
	Other = "Otro"
)

type Location struct{
	Address string
	Number int
	Floor int
	Between string
	Apartment string
	ZipCode string
	Neighborhood string
}

type Property struct{
	Category Category
	Orientation Orientation
	Garage bool
	SquareFeet int
	YearBuilt int
	StorageRoom bool
	Rooms int
	Observations string
	Baths int
	Location Location
}



func main() {
	GetConfiguration()
    ConnectToDB()
	
	http.HandleFunc("/", HelloServer)
    http.ListenAndServe(":8080", nil)

}

func HelloServer(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func ConnectToDB(){
	var err error
	var dbAux *gorm.DB
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/clau?charset=utf8&parseTime=True&loc=Local&timeout=15s", config.User, config.Password, config.Host, config.Port)
	dbAux, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	db = *dbAux
    if err != nil {
        fmt.Printf("I could not connect to the database. This happened: %s.", err)
    } else {
		fmt.Println("Database connection was successful.")
    }
}

func GetConfiguration(){
	file, err := os.Open("config/app.conf") 
	if err != nil { panic(err) }
	fmt.Println("Successfully Opened app.conf")
	defer file.Close()
	decoder := json.NewDecoder(file) 
	err = decoder.Decode(&config) 
	if err != nil { panic(err) }
	fmt.Println("Configuration: " + config.Host, config.Port)
}

/*
func create(db) {
  db.Create(&Product{Code: "D42", Price: 100})
}

func read(db) {
  var product Product
  db.First(&product, 1) // find product with integer primary key
  db.First(&product, "code = ?", "D42") // find product with code D42
}

func update(db) {
  db.Model(&product).Update("Price", 200)
  // Update - update multiple fields
  db.Model(&product).Updates(Product{Price: 200, Code: "F42"}) // non-zero fields
  db.Model(&product).Updates(map[string]interface{}{"Price": 200, "Code": "F42"})
}

func delete(db) {
  db.Delete(&product, 1)
}
*/
