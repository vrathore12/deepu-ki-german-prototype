/* ============================================
   Deepu Ki German — Shared site logic
   Cart is stored in localStorage for this
   front-end-only prototype (no real backend).
   ============================================ */

const CART_KEY = "dkg_cart_v1";

function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}
function addToCart(id, qty){
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if(existing){ existing.qty += qty; }
  else{ cart.push({ id, qty }); }
  saveCart(cart);
  showToast("Added to cart");
}
function removeFromCart(id){
  saveCart(getCart().filter(i => i.id !== id));
}
function setQty(id, qty){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if(item){
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}
function cartTotal(){
  return getCart().reduce((sum, item) => {
    const p = getProduct(item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}
function cartCount(){
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}
function updateCartCount(){
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}
function clearCart(){
  localStorage.removeItem(CART_KEY);
  updateCartCount();
}

function showToast(msg){
  let toast = document.getElementById("global-toast");
  if(!toast){
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

function toggleMobileNav(){
  document.querySelector(".nav-links").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", updateCartCount);
