/**
 * Netlify function file for handling api request to add an item
 * to the items.json data file
 */
const { readFile, writeFile } = require("fs").promises;
const { resolve } = require("path");

const itemsSchema = require(resolve("src", "schemas", "itemsSchema.json"));
const { itemsSchemaValidation } = require(resolve(
  "src",
  "scripts",
  "schemaValidation.cjs"
));
const itemsFilePath = resolve("src", "assets", "data", "items.json");
const getHighestId = require(resolve("src", "scripts", "getHighestId.cjs"));

// Function for adding items
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    // return error 405
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "19 Method Not Allowed" }),
    };
  }
  try {
    const { form, newImages } = JSON.parse(event.body);

    /**
     * Expected:
     * form = object with item details
     * newImages = item images
     */

    const data = await readFile(itemsFilePath, "utf8");
    const items = JSON.parse(data);

    newId = getHighestId(items) + 1;
    let itemExists = items.some(
      (existingItem) =>
        existingItem.name === form.name ||
        JSON.stringify(existingItem.description) ===
          JSON.stringify(form.description)
    );

    if (itemExists) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "49 Item already exists" }),
      };
    } else {
      const formWithId = { id: newId, ...form };
      items.push(formWithId);
    }

    // Validate items with new items
    const validItems = itemsSchemaValidation(itemsSchema, items);
    // If invalid items, return error 400
    if (!validItems) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "62 Invalid items " + validItems.errors,
        }),
      };
    }

    // Validate the image file and make sure that image name is in imageSrc
    /**
     * The item must have an image and the imageSrc of the item must match the imageName of the image
     * The image object must contain a name, and image file
     * if not, return error 400
     * if yes, push image into existing /images
     */
    if (!newImages) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "76 No images provided" }),
      };
    }
    if (!newImages.name || !newImages.file) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "82 Image must contain a name and an image file",
        }),
      };
    }
    /* if (newImages.some((image) => !image.name.inclides(form.name))) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "88 images must match the name of an image",
        }),
      };
    } */

    // Push the image into /images and the items into items.json
    newImages.forEach(async (image) => {
      try {
        const imagePath = resolve("public", "images", image.name);
        await writeFile(imagePath, image.file, "base64");

        return {
          statusCode: 200,
          body: JSON.stringify({ message: "Items added successfully" }),
        };
      } catch (err) {
        console.error("Error in addItems: ", err);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: "109 Internal server error" + err }),
        };
      }
    });
    // Write the new items data
    await writeFile(itemsFilePath, JSON.stringify(items));
  } catch (err) {
    console.error("Error in addItems: ", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "115 Internal server error" + err }),
    };
  }
};
