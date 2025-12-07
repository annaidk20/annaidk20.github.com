/* script.js — small UX interactions */
document.getElementById('year').textContent = new Date().getFullYear();

function openCheckout(){
  const el = document.getElementById('checkout');
  el.scrollIntoView({behavior:'smooth', block:'center'});
  el.querySelector('input, button').focus();
}

// Demo purchase complete
function completePurchase(){
  const form = document.getElementById('purchase-form');
  const name = form.name.value || 'Reader';
  // Simulate deliverable: create and download a tiny text file as "digital book"
  const content = `Thank you ${name} — this is your digital guide (demo).\n\nTitle: Learn How to Fly in 4 Weeks\nEnjoy practicing safely!`;
  const blob = new Blob([content], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Learn-How-to-Fly-Sample.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  alert('Thank you! A demo file has been downloaded to your device.');
}

/* Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
