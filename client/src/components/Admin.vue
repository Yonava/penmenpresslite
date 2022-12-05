<template>
  <div class="form-container">
    <button 
      @click="$emit('close-admin-panel')" 
      style="position: fixed; top: 0; left: 0"
    >esc</button>
    <h1>
      Admin Panel
    </h1>
    <h2>
      Articles
    </h2>
    <div class="cat-container">
      <h3>
        Add Article
      </h3>
      <h3>
        Delete Article
      </h3>
      <h3>
        Edit Article
      </h3>
    </div>
    <h2>
      Authors
    </h2>
    <div class="cat-container">
      <h3>
        Add Author
      </h3>
      <h3>
        Delete Author
      </h3>
      <h3>
        Edit Author
      </h3>
    </div>
    <h2>
      Issues
    </h2>
    <div class="cat-container">
      <h3>
        Add Issue
      </h3>
      <h3>
        Delete Issue
      </h3>
      <h3>
        Edit Issue
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 15px;
    margin-bottom: 200px;
  }
  .cat-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
  }
</style>