<script lang="ts">
  let searchTerm = '';
  
  // 샘플 프로필 데이터
  const profiles = [
    { id: 1, name: '홍길동', email: 'hong@example.com', bio: '안녕하세요!' },
    { id: 2, name: '김철수', email: 'kim@example.com', bio: '반갑습니다.' },
    { id: 3, name: '이영희', email: 'lee@example.com', bio: '환영합니다!' }
  ];

  $: filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );
</script>

<main class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">프로필 검색</h1>
  
  <div class="mb-4">
    <input
      type="text"
      bind:value={searchTerm}
      placeholder="이름, 이메일, 또는 자기소개로 검색..."
      class="w-full p-2 border rounded"
    />
  </div>

  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#each filteredProfiles as profile}
      <div class="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
        <h2 class="text-xl font-semibold mb-2">{profile.name}</h2>
        <p class="text-gray-600 mb-2">{profile.email}</p>
        <p class="text-gray-700">{profile.bio}</p>
      </div>
    {/each}
  </div>
</main> 