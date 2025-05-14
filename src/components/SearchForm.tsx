const SearchForm = ({
  searchParams,
}: {
  searchParams: { q?: string; sort?: string }
}) => {
  return (
    <form method='GET'>
      <input
        name='q'
        type='text'
        placeholder='검색어를 입력하세요'
        defaultValue={searchParams.q ?? ''}
      />
      <select
        name='sort'
        defaultValue={searchParams.sort ?? ''}
        className='rounded-md border px-3 py-2 text-sm'
      >
        <option value=''>기본 정렬</option>
        <option value='rating'>별점순</option>
      </select>
      <button
        type='submit'
        className='rounded-md bg-blue-500 px-4 py-2 text-sm text-white'
      >
        검색
      </button>
    </form>
  )
}

export default SearchForm
