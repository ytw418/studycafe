/**
 * 라우트 설정 파일
 *
 * 이 파일은 Svelte SPA Router를 사용하여 애플리케이션의 라우팅을 정의합니다.
 * 각 URL 경로에 해당하는 컴포넌트를 매핑합니다.
 */

// svelte-spa-router의 타입 정의를 가져옵니다
import type { RouteDefinition } from "svelte-spa-router";

// 각 페이지 컴포넌트를 가져옵니다
import Home from "./lib/Home.svelte"; // 홈 페이지
import ProfileRegister from "./lib/ProfileRegister.svelte"; // 프로필 등록 페이지
import ProfileSearch from "./lib/ProfileSearch.svelte"; // 프로필 검색 페이지

// 라우트 정의: URL 경로와 해당 컴포넌트를 매핑합니다
const routes: RouteDefinition = {
  "/": Home, // 루트 경로(/)는 Home 컴포넌트를 표시
  "/profile/register": ProfileRegister, // /profile/register 경로는 ProfileRegister 컴포넌트를 표시
  "/profile/search": ProfileSearch, // /profile/search 경로는 ProfileSearch 컴포넌트를 표시
};

export default routes;
