<script lang="ts">
import Router from 'svelte-spa-router';
import routes from './routes';
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-50">
  <header class="bg-white/80 backdrop-blur-md shadow-lg border-b border-pink-100">
    <nav class="container mx-auto px-4 py-3">
      <!-- 모바일에서는 세로로, 데스크톱에서는 가로로 배치 -->
      <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
        <a href="#/" class="w-full sm:w-auto text-center text-pink-600 font-bold px-4 py-2 rounded-full hover:bg-pink-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Home
        </a>
        <a href="#/profile/register" class="w-full sm:w-auto text-center text-purple-600 font-bold px-4 py-2 rounded-full hover:bg-purple-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
          프로필 등록
        </a>
        <a href="#/profile/search" class="w-full sm:w-auto text-center text-indigo-600 font-bold px-4 py-2 rounded-full hover:bg-indigo-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
          프로필 검색
        </a>
      </div>
    </nav>
  </header>

  <main class="flex-1 container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
    <div class="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-pink-100">
      <Router {routes} />
    </div>
  </main>

  <footer class="bg-white/80 backdrop-blur-md py-3 sm:py-4 border-t border-pink-100">
    <p class="text-center text-pink-600 font-medium text-sm sm:text-base">© 2024 My Todo App 💖</p>
  </footer>
</div>
