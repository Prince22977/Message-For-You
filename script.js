// Assign different animation delays and left positions to hearts
document.querySelectorAll('.heart').forEach((heart, index) => {
  const left = [10, 25, 40, 55, 70, 85][index % 6];
  const delay = [0, 2, 4, 1, 3, 5][index % 6];
  heart.style.left = `${left}%`;
  heart.style.animationDelay = `${delay}s`;
});
