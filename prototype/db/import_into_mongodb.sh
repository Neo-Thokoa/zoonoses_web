#!/bin/bash
JSON_FOLDER="./jsonFiles/*"
DB="db"
COLLECTION="zip"


for file in $JSON_FOLDER
do
  mongoimport -d $DB -c $COLLECTION $file --jsonArray   
done
