const fs = require('fs');
const path = require('path');

// Load the schema and items data
const schemaPath = path.resolve('src/schemas/itemsSchema.json');
const itemsPath = path.resolve('src/assets/data/items.json');

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));

// Function to get default value based on type
const getDefaultValue = (type) => {
  switch (type) {
    case 'string':
      return '';
    case 'integer':
      return 0;
    case 'number':
      return 0.0;
    case 'boolean':
      return false;
    case 'array':
      return [];
    case 'object':
      return {};
    default:
      return null;
  }
};

// Function to add missing non-required fields
const addMissingFields = (item, schemaProperties, requiredFields) => {
  for (const [key, value] of Object.entries(schemaProperties)) {
    if (!requiredFields.includes(key) && !(key in item)) {
      item[key] = getDefaultValue(value.type);
    }
    if (value.type === 'object' && value.properties) {
      item[key] = addMissingFields(item[key] || {}, value.properties, value.required || []);
    }
  }
  return item;
};

// Iterate through each item and add missing fields
const updatedItems = items.map(item => addMissingFields(item, schema.items.properties, schema.items.required));

// Write the updated items back to the JSON file
fs.writeFileSync(itemsPath, JSON.stringify(updatedItems, null, 2), 'utf8');

console.log('Items updated successfully!');