# Shopify Variant Badge

This script dynamically displays a visually appealing badge on the main product image of a Shopify product page, showing the currently selected variant (Color or Flavour). The badge updates automatically when the user selects a different variant.

## Features

- **Dynamic Variant Detection:** Detects changes to color or flavour variants using radio buttons.
- **Badge Display:** Shows the selected variant name as a styled badge on the product image.
- **Smooth Transitions:** Badge appears with a fade and scale animation for a modern look.
- **Unobtrusive:** Badge is positioned in the top-left corner of the product image and does not obstruct the main content.
- **Robust Event Handling:** Uses event delegation to handle dynamic content changes.

## Usage

1. **Copy the Script:**  
   Copy the contents of `variantBadge.js`.

2. **Paste into Console:**  
   On your Shopify product page, open the browser console (F12 or Ctrl+Shift+J), paste the script, and press Enter.

3. **Interact:**  
   Select different color or flavour variants. The badge will update automatically.

## Customization

- **Badge Style:**  
  You can adjust the badge's color, font, position, and animation by editing the `createBadge` function in `variantBadge.js`.

- **Supported Variant Types:**  
  By default, the script supports variant radio buttons with `name` attributes containing `"Color-"` or `"Flavour-"`. You can add more types by extending the selectors in the script.
