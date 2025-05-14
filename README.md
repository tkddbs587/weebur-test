## 💬 소개

상품 리스트를 보여주는 웹 애플리케이션입니다.

검색어 및 정렬 기준에 따른 필터링과 무한 스크롤 로딩을 구현하였으며, 사용자 View 모드(grid/list)는 50%의 확률로 정해지며, 쿠키를 통해 24시간 동안 유지됩니다.

## ✨ 주요 기능

- 서버에서 초기 상품 20개 로드 (`/products` or `/products/search`)
- 검색어 필터링 (`q` 쿼리 파라미터 사용)
- 별점 내림차순 정렬 (`sort=rating`)
- 필터 form(검색어 & 정렬) 기능
- 무한 스크롤로 추가 상품 목록 20개 로드
- 상품이 더 이상 없을 경우 `"더 이상 불러올 수 없습니다"` 메시지 표시
- 검색 결과가 없을 경우 `"일치하는 결과가 없습니다"` 메시지 표시
- Grid/List View 모드는 50% 확률로 결정되며, 쿠키로 24시간 유지됨

## 🛠 기술 스택

- **Next.js 15 App Router**
- **TypeScript**
- **Tailwind CSS**

## ▶️ 실행 방법

```bash
// 1. 프로젝트 클론 후 의존성 설치
npm install

// 2. 프로젝트 실행
npm run dev
```

## 🧩 기능별 구현 구조

### View 모드(Grid/List) 쿠키 기반 유지

- 초기 진입 시 middleware.ts에서 view_type 쿠키의 존재 여부를 확인합니다.
- 쿠키가 없다면 Math.random()으로 50% 확률로 grid 또는 list 중 하나를 선택하여, 24시간 동안 유지되는 쿠키로 설정합니다.
- 이후 서버 컴포넌트인 page.tsx에서 해당 쿠키 값을 읽어 viewType을 결정하고, 이를 클라이언트 컴포넌트인 ProductList에 전달합니다.

### 검색어 및 정렬 조건 유지

- SearchForm.tsx는 `<form method="GET">` 방식으로 동작하며, 입력한 검색어(q)와 정렬 방식(sort)을 쿼리스트링으로 전송합니다.
- 서버 컴포넌트인 page.tsx에서 searchParams를 통해 해당 값을 읽고, 초기 상품 목록을 요청할 때 fetchProducts()에 전달합니다.
- 입력 값은 defaultValue로 폼에 반영되어, 새로고침 후에도 사용자의 입력이 유지됩니다.

### 상품 목록 요청

- fetchProducts() 함수는 검색어 유무에 따라 /products/search 또는 /products API를 요청합니다.
- 정렬 옵션이 선택된 경우에는 sortBy, order 값을 쿼리스트링에 포함시켜 정렬된 결과를 받아옵니다.

### 무한 스크롤

- ProductList.tsx는 클라이언트 컴포넌트이며, 내부에서 useInfiniteProducts() 훅을 사용하여 무한 스크롤을 구현합니다.
- IntersectionObserver를 통해 스크롤이 하단에 도달하면 fetchProducts()를 통해 추가 데이터를 비동기로 요청합니다.
- 불러온 상품 중 중복된 id를 가진 항목은 필터링되며, 전체 상품 수(data.total)에 도달하면 추가 요청을 중단하고 "더 이상 불러올 수 없습니다." 문구를 표시합니다.

### 상태 초기화 및 갱신

- 검색어(q) 또는 정렬 옵션(sort)이 변경되면 useEffect를 통해 상태를 초기화하고, 새로운 조건에 맞는 상품 데이터를 다시 요청합니다.
- 로딩 여부는 isLoading 상태를 통해 관리하며, 추가 요청 중에는 중복 요청이 발생하지 않도록 처리했습니다.
