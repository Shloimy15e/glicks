<template>
  <FormKit type="form" :actions="false" @submit="handleSubmit">
    <div class="space-x-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Add Items
        </h2>
        <!-- Add item form card -->
        <div class="grid grid-cols-1 w-full justify-items-center">
          <div
            class="m-10 p-6 flex flex-col lg:flex-row gap-y-8 justify-items-start w-5/6 shadow-lg rounded-lg bg-gray-50"
          >
            <div class="border-r border-gray-300 pr-6">
              <div class="sm:col-span-full justify-start w-full">
                <span class="w-full flex justify-center my-2">
                  <h3 class="text-gray-600 border-b border-gray-300 w-3/4">
                    Item Name
                  </h3>
                </span>
                <div class="mt-1">
                  <FormKit
                    type="text"
                    name="itemName"
                    outer-class="w-full"
                    input-class="w-full p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6 bg-white"
                    placeholder="Item Name"
                    validation="required"
                    v-model="form.name"
                  />
                </div>
              </div>
              <!-- Price input -->
              <div class="sm:col-span-full justify-start w-full">
                <span class="w-full flex justify-center my-2">
                  <h3 class="text-gray-600 border-b border-gray-300 w-3/4">
                    Prices
                  </h3>
                </span>
                <div class="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      for="nis"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Shekel</label
                    >
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <FormKit
                        type="number"
                        name="nis"
                        outer-class="w-full"
                        input-class="w-full p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6 bg-white"
                        placeholder="0.00"
                        validation="required"
                        v-model="form.price.ils"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="gbp"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Pound</label
                    >
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <FormKit
                        type="number"
                        name="gbp"
                        outer-class="w-full"
                        input-class="w-full p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6 bg-white"
                        placeholder="0.00"
                        v-model="form.price.gbp"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="usd"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      US Dollar
                    </label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <FormKit
                        type="number"
                        name="usd"
                        outer-class="w-full"
                        input-class="w-full p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6 bg-white"
                        placeholder="0.00"
                        v-model="form.price.usd"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="euro"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Euro</label
                    >
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <FormKit
                        type="number"
                        name="euro"
                        outer-class="w-full"
                        input-class="w-full p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6 bg-white"
                        placeholder="0.00"
                        v-model="form.price.eur"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Description section -->
              <div class="w-full">
                <!-- Long description input -->
                <span class="w-full flex justify-center my-2">
                  <h3 class="text-gray-600 border-b border-gray-300 w-3/4">
                    Description
                  </h3>
                </span>
                <label
                  for="long-description"
                  class="flex text-xs font-medium text-gray-900"
                >
                  Long description
                </label>
                <FormKit
                  type="textarea"
                  name="long-description"
                  outer-class="w-full"
                  rows="5"
                  input-class="w-full p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6 bg-white"
                  placeholder="Long description"
                  v-model="form.description.text"
                />
                <!-- Short description input -->
                <label
                  for="username"
                  class="flex pl-0.5 start-1 text-xs font-medium text-gray-900"
                >
                  Short description
                </label>
                <div class="mt-1">
                  <FormKit
                    type="textarea"
                    name="short-description"
                    outer-class="w-full"
                    rows="1"
                    input-class="w-full p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6 bg-white"
                    placeholder="Short description"
                    v-model="form.description.short"
                  />
                </div>
              </div>
            </div>
            <div class="w-full pl-6">
              <div class="w-full">
                <!-- Allergen info -->
                <span class="w-full flex justify-center my-2">
                  <h3 class="text-gray-600 border-b border-gray-300 w-3/4">
                    Continued
                  </h3>
                </span>
                <!-- <h3
                  class="flex pl-1 mt-4 mb-1 font-semibold text-gray-900 text-xs"
                >
                  Allergens
                </h3>
                <ul
                  class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg grid grid-cols-2 gap-3 custom-border"
                >
                  <li
                    v-for="(allergen, index) in allergens"
                    :key="allergen.name"
                    :class="[
                      'w-full border-b border-gray-200',
                      { 'border-none': index === allergens.length - 1 },
                    ]"
                  >
                    <div class="flex items-center ps-3">
                      <input
                        :id="`${allergen.name}-checkbox`"
                        type="checkbox"
                        value="true"
                        v-model="allergen.checked"
                        class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        :for="`${allergen.name}-checkbox`"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                      >
                        {{ allergen.name }}
                      </label>
                    </div>
                  </li>
                </ul> -->
                <h3
                  class="flex pl-1 mt-4 mb-1 font-semibold text-gray-900 text-xs"
                >
                  Milk/Parave
                </h3>
                <div class="grid grid-cols-2 gap-2 rounded-xl bg-gray-200 p-2">
                  <div>
                    <FormKit
                      type="radio"
                      name="milk"
                      id="milk"
                      :value="true"
                      outer-class="peer hidden"
                      v-model="form.description.milk"
                    />
                    <label
                      for="milk"
                      class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                      Milk
                    </label>
                  </div>
                  <div>
                    <FormKit
                      type="radio"
                      name="milk"
                      id="parave"
                      :value="false"
                      outer-class="peer hidden"
                      v-model="form.description.milk"
                    />
                    <label
                      for="parave"
                      class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white"
                    >
                      Parave
                    </label>
                  </div>
                </div>
              </div>
              <!-- Item photo input -->
              <div class="w-full h-auto">
                <span class="w-full flex justify-center my-2">
                  <h3 class="text-gray-600 border-b border-gray-300 w-3/4">
                    Photo
                  </h3>
                </span>
                <label
                  for="item-photo"
                  class="flex text-xs font-medium text-gray-900"
                >
                  Item photo
                </label>
                <div
                  class="mt-1 flex bg-white justify-center rounded-lg border border-dashed border-gray-900/25 p-5"
                  @dragover.prevent="handleDragOver"
                  @dragleave.prevent="handleDragLeave"
                  @drop.prevent="handleDrop"
                >
                  <div v-if="imagePreview.length">
                    <div class="flex text-sm leading-6 text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer rounded-md"
                      >
                        <div class="grid grid-cols-3 items-center gap-2">
                          <img
                            v-for="image in imagePreview"
                            :src="image"
                            alt="item photo"
                            class="object-cover mb-5"
                          />
                        </div>
                        <span
                          class="rounded-md bg-gray-100 hover:bg-amber-100 active:bg-amber-200 hover:text-gray-700 px-2 py-1 font-semibold text-indigo-600"
                        >
                          Change image
                        </span>
                        <p class="pl-1">or drag and drop</p>
                        <FormKit
                          type="file"
                          name="item-photo"
                          id="file-upload"
                          multiple
                          accept="image/*"
                          outer-class="!sr-only"
                          @change="handleImage"
                        />
                      </label>
                    </div>
                  </div>
                  <div v-else class="text-center">
                    <PhotoIcon
                      class="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer rounded-md bg-gray-100 hover:bg-amber-100 active:bg-amber-200 hover:text-gray-700 px-2 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2"
                      >
                        <span>Upload a file</span>
                        <FormKit
                          type="file"
                          name="item-photo"
                          id="file-upload"
                          accept="image/*"
                          multiple
                          outer-class="sr-only"
                          @change="handleImage"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <!-- Category selection -->
              <div>
                <legend class="text-sm font-semibold leading-6 text-gray-900">
                  Category
                </legend>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Choose the category that best fits the item.
                </p>
                <div class="mt-6 space-y-6 w-full">
                  <FormKit
                    type="radio"
                    :options="
                      categories.map((category) => ({
                        label: category.name,
                        value: category.id,
                      }))
                    "
                    fieldset-class="w-full"
                    outer-class="w-full flex items-center justify-start"
                    wrapper-class="!w-full flex items-center justify-start gap-2"
                    label-class="text-sm font-medium leading-6 text-gray-900"
                    input-class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    v-model="form.description.category"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Add another item button -->
          <div
            class="m-10 p-6 grid grid-cols-1 w-5/6 justify-items-start shadow-lg rounded-lg bg-gray-50"
          >
            <button
              type="button"
              class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <SquaresPlusIcon
                class="mx-auto h-16 w-16 text-gray-500"
                aria-hidden="true"
              />
              <span class="mt-2 block text-sm font-semibold text-gray-900">
                Add another item
              </span>
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center gap-x-6">
          <button
            type="submit"
            title="Submits the form and adds the item to the database"
            class="text-sm font-semibold leading-6 text-green-600 ring-4 ring-green-600 bg-gray-50 hover:bg-green-600 hover:text-white active:ring-green-200"
          >
            Add Item
          </button>
          <button
            type="reset"
            title="Resets all form fields to their default values"
            class="text-sm font-semibold leading-6 text-red-600 ring-4 ring-red-600 bg-gray-50 hover:bg-red-600 hover:text-white active:ring-red-200"
          >
            Cancel
          </button>
        </div>
      </div>
      <!-- END -->
      <!-- Submit and cancel button -->
    </div>
  </FormKit>
</template>

<script setup>
import { ref, watch, computed, reactive } from "vue";
import { PhotoIcon } from "@heroicons/vue/24/solid";
import { SquaresPlusIcon } from "@heroicons/vue/24/outline";
import categoriesData from "@/assets/data/categories.json";
import allergensData from "@/assets/data/allergens.json";
import { FormKit } from "@formkit/vue";

const categories = ref(categoriesData);
const allergens = ref(allergensData);
const checkedallergens = computed(() => {
  const checked = [];
  allergens.value.forEach((allergen) => {
    if (allergen.checked) {
      checked.push(allergen.name);
    }
  });
  return checked;
});
const itemImageAlt = ref("");
const itemName = ref("");
const usdPrice = ref(null);
const nisPrice = ref(null);
const gbpPrice = ref(null);
const eurPrice = ref(null);
const itemShortText = ref("");
const itemText = ref("");
const itemAllergens = ref([]);
const selectedCategory = computed(() => {
  const selected = categories.value.find((category) => category.checked);
  return selected ? selected.name : "Cakes";
});

const form = reactive({
  name: "",
  price: {
    usd: 0,
    ils: 0,
    gbp: 0,
    eur: 0,
  },
  images: [],
  description: {
    short_text: "",
    text: "",
    allergens: [],
    category: "",
    milk: false,
  },
});

const itemMilk = ref(true);

// ref for image file
const itemImages = ref(null);

const imagePreview = ref([]);
// Items object that contains all the above variables
const item = computed(() => {
  return {
    name: itemName.value,
    price: {
      $: parseInt(usdPrice.value),
      "₪": parseInt(nisPrice.value),
      "£": parseInt(gbpPrice.value),
      "€": parseInt(eurPrice.value),
    },

    imageSrc: `${itemName.value?.toLowerCase().replace(/\s+/g, "_")}.jpg`,
    imageAlt: itemName.value,
    description: {
      short_text: itemShortText.value,
      text: itemText.value,
      allergens: checkedallergens.value,
      category: selectedCategory.value,
    },
    milk: Boolean(itemMilk.value),
  };
});

// Method to handle category selection
const selectCategory = (categoryId) => {
  categories.value.forEach((category) => {
    category.checked = category.id === categoryId;
  });
};

const handleDragOver = (event) => {
  event.preventDefault();
  event.currentTarget.classList.add("bg-amber-100");
};

const handleDragLeave = (event) => {
  event.preventDefault();
  event.currentTarget.classList.remove("bg-amber-100");
};

const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.currentTarget.classList.remove("bg-amber-100");
  const files = event.dataTransfer.files;
  if (files.length) {
    handleImage({ target: { files } });
  }
};

// Handle image function
const handleImage = (event) => {
  imagePreview.value = [];
  const input = event.target;
  const files = input.files;
  Array.from(files).forEach((file) => {
    const type = file.type;
    if (file && type.match("image.*")) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        imagePreview.value = [...imagePreview.value, base64String];
        itemImages.value = base64String;
      };
      reader.readAsDataURL(file);
    }
  });
};

// Watch for changes in item and output new value to console
watch(
  () => item.value,
  (newValue) => {
    console.log(newValue);
  }
);

// Function that handles item submit
async function handleSubmit(event) {
  // Send API post request with item and itemImage to netlify function
  try {
    const response = await fetch("/api/addItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        form,
        newImages: itemImages.value,
      },
    });
    const data = await response.json();
    console.log(JSON.stringify(data));
    if (response.ok) {
      alert("Item added successfully");
      console.log(data.message);
    } else {
      alert("Error adding item");
      throw new Error(data.error);
    }
  } catch (error) {
    console.error(error);
    alert("Error adding item: " + error);
  }

  console.log(item.value);
}
</script>

<style scoped>
.custom-border {
  position: relative;
}

.custom-border::before {
  content: "";
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 50%;
  width: 0.5px;
  height: calc(100% - 20px);
  /* Adjust based on top and bottom */
  background-color: #e5e7eb;
  /* Tailwind's gray-200 */
  transform: translateX(-50%);
  pointer-events: none;
}

.custom-border li:nth-child(2n-1):nth-last-child(2) {
  border-bottom: none;
}
</style>
