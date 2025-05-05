<template>
  <div class="z-200 loading-container">
    <picture>
      <source
        srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.webp"
        type="image/webp"
      />
      <img
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.gif"
        alt="😉"
        width="52"
        height="52"
      />
    </picture>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #101010;
}
</style>
