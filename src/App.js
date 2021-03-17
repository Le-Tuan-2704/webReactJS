import logo from './logo.svg';
import './App.css';
import Slide from './components/slide/Slide';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import PostList from './components/postList/PostList';
import Pagination from './components/pagination/Pagination';
import queryString from 'query-string'
import PostFiltersForm from './components/postFiltersForm/PostFiltersForm';
import NavbarContent from './components/navbarContent/NavbarContent';
import Footer from './components/footer/Footer';


function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    // title_like: '',
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?' + paramsString.toString();
        // console.log(requestUrl);
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;

        setPostList(data);
        setPagination(pagination);

        // console.log("data: ", pagination);

      } catch (error) {
        console.log("failed to fetch post list", error.message);
      }
    }

    fetchPostList();
  }, [filters])

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  function handFiltersChange(newFilters) {
    console.log("new filters: ", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  return (
    <div className="App">
      <Header />
      <Slide />
      <div className="row">
        <div className="col-3 ">
          <div className="container">
            <PostFiltersForm onSubmit={handFiltersChange} />
            <NavbarContent />
          </div>
        </div>
        <div className="col-9">
          <PostList posts={postList} />
          <Pagination
            pagination={pagination}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default App;
