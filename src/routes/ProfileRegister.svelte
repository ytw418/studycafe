<script lang="ts">
  let name = '';
  let email = '';
  let bio = '';

  function handleSubmit() {
    // 여기에 프로필 등록 로직 추가
    console.log({ name, email, bio });
    alert('프로필이 등록되었습니다!');
  }
</script>

<main class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">프로필 등록</h1>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div>
      <label for="name" class="block mb-1">이름</label>
      <input
        type="text"
        id="name"
        bind:value={name}
        required
        class="w-full p-2 border rounded"
        placeholder="이름을 입력하세요"
      />
    </div>

    <div>
      <label for="email" class="block mb-1">이메일</label>
      <input
        type="email"
        id="email"
        bind:value={email}
        required
        class="w-full p-2 border rounded"
        placeholder="이메일을 입력하세요"
      />
    </div>

    <div>
      <label for="bio" class="block mb-1">자기소개</label>
      <textarea
        id="bio"
        bind:value={bio}
        rows="4"
        class="w-full p-2 border rounded"
        placeholder="자기소개를 입력하세요"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      프로필 등록
    </button>
  </form>
</main> 