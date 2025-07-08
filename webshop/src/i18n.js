import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "navbar": {
        "home": "Webshop",
        "contact": "Contact",
        "shops": "Shops",
        "cart": "Cart",
        "map": "Map",
        "admin": "Admin",
        "login": "Log In",
        "signup": "Sign Up"
      },
      "add-product": {
        "id": "ID",
        "title": "Title",
        "price": "Price",
        "description": "Description",
        "category": "Category",
        "image": "Image URL",
        "rating": "Rating",
        "count": "Count",
        "button": "Add",
        "total": "Products",
        "empty-title-alert": "Cannot add a product with an empty title"
      },
      "admin-home": {
        "maintain-products": "Maintain products",
        "add-product": "Add product",
        "edit-product": "Edit product"
      },
      "maintain-products": {
        "index": "Index",
        "title": "Title",
        "price": "Price",
        "category": "Category",
        "image": "Image",
        "rating": "Rating",
        "delete": "Delete",
        "edit": "Edit",
        "edit-button": "Edit",
        "deleted": "Deleted",
        "count": "Count"
      },
      "login": {
        "username": "Username",
        "password": "Password",
        "button": "Log In",
        "success": "Login successful!",
        "error": "Wrong password!"
      },
      "signup": {
        "username": "Username",
        "password": "Password",
        "repeat-password": "Repeat password",
        "button": "Sign Up"
      },
      "cart": {
        "empty-button": "Empty cart",
        "in-cart": "In cart",
        "item(s)": "item(s)",
        "total": "Total",
        "empty-cart": "Your cart is empty"
      },
      "products": {
        "total": "Total price",
        "search": "Search by title...",
        "reset": "Reset",
        "sort-az": "Sort A-Z",
        "sort-za": "Sort Z-A",
        "sort-price-asc": "Sort by price ascending",
        "sort-price-desc": "Sort by price descending",
        "sort-rating-asc": "Sort by rating ascending",
        "sort-rating-desc": "Sort by rating descending",
        "men": "Men's clothing",
        "women": "Women's clothing",
        "jewelery": "Jewelry",
        "electronics": "Electronics",
        "count": "Product count",
        "add-to-cart": "Add to cart",
        "view-details": "View details",
        "added": "Product added"
      },
      "single": {
        "not-found": "Product not found"
      },
      "edit-product": {
        "title": "Product title",
        "price": "Product price",
        "category": "Product category",
        "image": "Product image (URL)",
        "rating": "Product rating",
        "count": "Product count",
        "update": "Update",
        "empty-title": "You cannot submit an empty title!",
        "empty-price": "You cannot submit an empty price!",
        "empty-category": "You cannot submit an empty category!",
        "empty-image": "You cannot submit an empty image!",
        "empty-rating": "You cannot submit an empty rating!",
        "empty-count": "You cannot submit an empty count!",
        "not-found": "Product not found"
      }
    }
  },
  et: {
    translation: {
      "navbar": {
        "home": "Veebipood",
        "contact": "Kontakt",
        "shops": "Poed",
        "cart": "Ostukorv",
        "map": "Kaart",
        "admin": "Admin",
        "login": "Logi sisse",
        "signup": "Registreeru"
      },
      "add-product": {
        "id": "ID",
        "title": "Pealkiri",
        "price": "Hind",
        "description": "Kirjeldus",
        "category": "Kategooria",
        "image": "Pildi URL",
        "rating": "Hinnang",
        "count": "Kogus",
        "button": "Lisa",
        "total": "Tooteid",
        "empty-title-alert": "Tühja pealkirjaga ei saa lisada"
      },
      "admin-home": {
        "maintain-products": "Halda tooteid",
        "add-product": "Lisa toode",
        "edit-product": "Muuda toodet"
      },
      "maintain-products": {
        "index": "Indeks",
        "title": "Pealkiri",
        "price": "Hind",
        "category": "Kategooria",
        "image": "Pilt",
        "rating": "Hinnang",
        "delete": "Kustuta",
        "edit": "Muuda",
        "edit-button": "Muuda",
        "deleted": "Kustutatud",
        "count": "Kogus"
      },
      "login": {
        "username": "Kasutajanimi",
        "password": "Parool",
        "button": "Logi sisse",
        "success": "Sisselogimine õnnestus!",
        "error": "Vale parool!"
      },
      "signup": {
        "username": "Kasutajanimi",
        "password": "Parool",
        "repeat-password": "Korda parooli",
        "button": "Registreeru"
      },
      "cart": {
        "empty-button": "Tühjenda ostukorv",
        "in-cart": "Ostukorvis",
        "item(s)": "ese(t)",
        "total": "Kokku",
        "empty-cart": "Sinu ostukorv on tühi."
      },
      "products": {
        "total": "Kokku hind",
        "search": "Otsi pealkirja järgi...",
        "reset": "Lähtesta",
        "sort-az": "Sorteeri A-Z",
        "sort-za": "Sorteeri Z-A",
        "sort-price-asc": "Sorteeri hinna järgi kasvavalt",
        "sort-price-desc": "Sorteeri hinna järgi kahanevalt",
        "sort-rating-asc": "Sorteeri reitingu järgi kasvavalt",
        "sort-rating-desc": "Sorteeri reitingu järgi kahanevalt",
        "men": "Meeste riided",
        "women": "Naiste riided",
        "jewelery": "Ehted",
        "electronics": "Elektroonika",
        "count": "Toodete arv",
        "add-to-cart": "Lisa ostukorvi",
        "view-details": "Vaata lähemalt",
        "added": "Toode lisatud"
      },
      "single": {
        "not-found": "Toodet ei leitud"
      },
      "edit-product": {
        "title": "Toote pealkiri",
        "price": "Toote hind",
        "category": "Toote kategooria",
        "image": "Toote pilt (URL)",
        "rating": "Toote hinnang",
        "count": "Toote kogus",
        "update": "Muuda",
        "empty-title": "Tühja pealkirjaga ei saa sisestada!",
        "empty-price": "Tühja hinnaga ei saa sisestada!",
        "empty-category": "Tühja kategooriaga ei saa sisestada!",
        "empty-image": "Tühja pildiga ei saa sisestada!",
        "empty-rating": "Tühja hinnanguga ei saa sisestada!",
        "empty-count": "Tühja kogusega ei saa sisestada!",
        "not-found": "Toodet ei leitud"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("keel") || "et",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;