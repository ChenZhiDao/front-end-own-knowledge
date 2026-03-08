//创建搜索组件文件
function SearchComponent() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('搜索内容:', query);
  };

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='搜索面试题...'
      />
      <button onClick={handleSearch}>搜索</button>

    </div>

  );
}

