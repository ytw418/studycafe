<script lang="ts">
  let name = '';
  let email = '';
  let bio = '';

  function handleSubmit() {
    // 프로필 등록 로직 (예: API 호출)
    console.log({ name, email, bio });
    alert('프로필이 등록되었습니다!');
    name = '';
    email = '';
    bio = '';
  }
</script>

<main>
  <h1>프로필 등록</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <label for="name">이름</label>
      <input 
        type="text" 
        id="name" 
        bind:value={name} 
        required 
        placeholder="이름을 입력하세요"
      />
    </div>
    <div class="form-group">
      <label for="email">이메일</label>
      <input 
        type="email" 
        id="email" 
        bind:value={email} 
        required 
        placeholder="이메일을 입력하세요"
      />
    </div>
    <div class="form-group">
      <label for="bio">자기소개</label>
      <textarea 
        id="bio" 
        bind:value={bio} 
        placeholder="자기소개를 입력하세요"
      ></textarea>
    </div>
    <button type="submit">등록</button>
  </form>
</main>

<style>
main {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  height: 100px;
  resize: vertical;
}
button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style> 