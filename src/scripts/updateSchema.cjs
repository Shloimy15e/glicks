// File that update the Items schema according to categories and tags
const fs = require('fs');
const path = require('path');

const schemaPath = path.resolve('src/schemas/itemsSchema.json');
const tagsPath = path.resolve('src/assets/data/tags.json');
const categoriesPath = path.resolve('src/assets/data/categories.json');

const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
const tags = JSON.parse(fs.readFileSync(tagsPath, 'utf8'));

const categoriesList = categories.map(category => category.name);

// Write the strings to the enums in the schema

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

schema.items.properties.description.properties.category.enum = categoriesList;
schema.items.properties.description.properties.tags.enum = tags;

fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2), 'utf8');

console.log('Schema updated successfully');
