<script lang="ts">
  let searchTerm = '';
  let profiles = [
    { name: '홍길동', email: 'hong@example.com', bio: '안녕하세요!' },
    { name: '김철수', email: 'kim@example.com', bio: '반갑습니다.' },
    { name: '이영희', email: 'lee@example.com', bio: '잘 부탁드립니다.' }
  ];
  let filteredProfiles = profiles;

  function handleSearch() {
    filteredProfiles = profiles.filter(profile => 
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.bio.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
</script>

<main>
  <h1>프로필 검색</h1>
  <div class="search-box">
    <input 
      type="text"
      bind:value={searchTerm}
      placeholder="이름, 이메일, 또는 자기소개로 검색..."
      on:input={handleSearch}
    />
  </div>
  <div class="profiles">
    {#each filteredProfiles as profile}
      <div class="profile-card">
        <h3>{profile.name}</h3>
        <p class="email">{profile.email}</p>
        <p class="bio">{profile.bio}</p>
      </div>
    {/each}
  </div>
</main>

<style>
main {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.search-box {
  margin-bottom: 2rem;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
.profiles {
  display: grid;
  gap: 1rem;
}
.profile-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}
.profile-card h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}
.email {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
}
.bio {
  margin: 0;
  color: #444;
}
</style> 