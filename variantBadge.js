// Function to create and style the badge
function createBadge() {
  const badge = document.createElement("div");
  badge.id = "variant-badge";
  badge.style.position = "absolute";
  badge.style.top = "15px";
  badge.style.left = "15px";
  badge.style.padding = "8px 15px";
  badge.style.backgroundColor = "rgba(255, 165, 0, 0.9)"; // Bright orange background
  badge.style.color = "white";
  badge.style.fontSize = "16px";
  badge.style.fontWeight = "bold";
  badge.style.textTransform = "uppercase";
  badge.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  badge.style.borderRadius = "20px"; // Rounded pill shape
  badge.style.zIndex = "1000";
  badge.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  badge.style.opacity = "0"; // Initially hidden
  badge.style.pointerEvents = "none"; // Prevent interaction
  badge.style.transform = "scale(0.9)"; // Slightly scaled down initially
  const productImageContainer = document.querySelector(
    'media-gallery[role="region"][aria-label="Gallery Viewer"]'
  );

  if (productImageContainer) {
    productImageContainer.style.position = "relative"; // Ensure parent is positioned
    productImageContainer.appendChild(badge);
  }
  return badge;
}

// Function to update the badge text and show it
function updateBadge(variantName) {
  const badge = document.getElementById("variant-badge") || createBadge();
  badge.textContent = variantName;
  badge.style.opacity = "1"; // Show the badge
  badge.style.transform = "scale(1)"; // Scale up to normal size
}

// Function to detect variant changes using event delegation
function detectVariantChange() {
  const formContainer = document.querySelector("body"); // Parent container of the radio buttons
  if (!formContainer) {
    console.error("Form container not found!");
    return;
  }

  // Use event delegation to listen for changes on radio buttons
  formContainer.addEventListener("change", (event) => {
    const radio = event.target;
    if (radio.matches('input[type="radio"][name*="Color-"]')) {
      if (radio.checked) {
        const variantName = radio.value.trim();
        updateBadge(variantName);
      }
    }
  });

  // Trigger badge update for the initially selected variant
  const initialVariant = document.querySelector(
    'input[type="radio"][name*="Color-"]:checked'
  );
  if (initialVariant) {
    updateBadge(initialVariant.value.trim());
  }
}

// Run the script
detectVariantChange();
