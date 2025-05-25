<script lang="ts">
  import { push } from 'svelte-spa-router';

  // 최근 생성된 카공방 목록
  const recentRooms = [
    { id: 1, name: '스타벅스 강남점', location: '강남구', currentMembers: 3, maxMembers: 4 },
    { id: 2, name: '투썸플레이스 홍대점', location: '마포구', currentMembers: 2, maxMembers: 4 },
    { id: 3, name: '메가커피 신촌점', location: '서대문구', currentMembers: 1, maxMembers: 3 }
  ];

  function goToProfileRegister() {
    push('/profile/register');
  }

  function createRoom() {
    // TODO: 카공방 생성 페이지로 이동
    alert('카공방 생성 기능 준비 중입니다!');
  }
</script>

<main class="container mx-auto p-4">
  <div class="text-center mb-8">
    <h1 class="text-3xl font-bold mb-2">동네 카공 같이 할래?</h1>
    <p class="text-gray-600">가까운 카페에서 함께 공부하고 대화를 나누세요</p>
  </div>

  <!-- 프로필 등록 섹션 -->
  <div class="bg-white rounded-lg shadow-md p-6 mb-8">
    <h2 class="text-xl font-semibold mb-4">프로필 등록하기</h2>
    <p class="text-gray-600 mb-4">카공 서비스를 이용하기 위해 프로필을 등록해주세요.</p>
    <button
      on:click={goToProfileRegister}
      class="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
    >
      프로필 등록하기
    </button>
  </div>

  <!-- 카공방 생성 섹션 -->
  <div class="bg-white rounded-lg shadow-md p-6 mb-8">
    <h2 class="text-xl font-semibold mb-4">카공방 만들기</h2>
    <p class="text-gray-600 mb-4">새로운 카공방을 만들어 친구들을 초대해보세요.</p>
    <button
      on:click={createRoom}
      class="w-full md:w-auto px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
    >
      카공방 만들기
    </button>
  </div>

  <!-- 최근 카공방 목록 -->
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-4">최근 카공방</h2>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each recentRooms as room}
        <div class="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 class="font-semibold text-lg mb-2">{room.name}</h3>
          <p class="text-gray-600 mb-2">📍 {room.location}</p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">
              {room.currentMembers}/{room.maxMembers}명 참여 중
            </span>
            <button
              class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              참여하기
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main> 