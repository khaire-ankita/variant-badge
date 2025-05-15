function createBadge() {
  const badge = document.createElement("div");
  badge.id = "variant-badge";
  badge.style.position = "absolute";
  badge.style.top = "15px";
  badge.style.left = "15px";
  badge.style.padding = "8px 15px";
  badge.style.backgroundColor = "rgba(255, 165, 0, 0.9)";
  badge.style.color = "white";
  badge.style.fontSize = "16px";
  badge.style.fontWeight = "bold";
  badge.style.textTransform = "uppercase";
  badge.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  badge.style.borderRadius = "20px";
  badge.style.zIndex = "1000";
  badge.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  badge.style.opacity = "0";
  badge.style.pointerEvents = "none";
  badge.style.transform = "scale(0.9)";
  const productImageContainer = document.querySelector(
    'media-gallery[role="region"][aria-label="Gallery Viewer"]'
  );

  if (productImageContainer) {
    productImageContainer.style.position = "relative";
    productImageContainer.appendChild(badge);
  }
  return badge;
}

function updateBadge(variantName) {
  const badge = document.getElementById("variant-badge") || createBadge();
  badge.textContent = variantName;
  badge.style.opacity = "1";
  badge.style.transform = "scale(1)";
}

function detectVariantChange() {
  const formContainer = document.querySelector("body");
  if (!formContainer) {
    console.error("Form container not found!");
    return;
  }

  formContainer.addEventListener("change", (event) => {
    const radio = event.target;
    if (
      radio.matches('input[type="radio"][name*="Color-"]') ||
      radio.matches('input[type="radio"][name*="Flavour-"]')
    ) {
      if (radio.checked) {
        const variantName = radio.value.trim();
        updateBadge(variantName);
      }
    }
  });

  const initialVariant = document.querySelector(
    'input[type="radio"][name*="Color-"]:checked, input[type="radio"][name*="Flavour-"]:checked'
  );
  if (initialVariant) {
    updateBadge(initialVariant.value.trim());
  }
}

detectVariantChange();
