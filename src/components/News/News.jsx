import { useCallback } from 'react';
import styles from './News.module.css';
import { Select } from '../../UI/Select/Select';
import { fetchNews } from '../../api/newsApi';
import { Input } from '../../UI/Input/Input';
import { NewsList } from '../NewsList/NewsList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useDebounce } from 'use-debounce';

const sortByOptions = [
  {
    label: 'relevancy',
    value: 'relevancy',
  },
  {
    label: 'popularity',
    value: 'popularity',
  },
  {
    label: 'publishedAt',
    value: 'publishedAt',
  },
];

const searchInOptions = [
  {
    label: 'title',
    value: 'title',
  },
  {
    label: 'description',
    value: 'description',
  },
  {
    label: 'content',
    value: 'content',
  },
];

export const News = () => {
  const [filters, setFilters] = useState({
    q: '',
    sortBy: '',
    searchIn: '',
  });
  const [debouncedFilters] = useDebounce(filters, 500);

  const {
    isLoading,
    data: news,
    error,
  } = useFetch(debouncedFilters, () => fetchNews(debouncedFilters));

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Filters</h2>
      <form>
        <Input
          label="Search"
          name="q"
          value={filters.q}
          onChange={handleChange}
        />
        <div className={styles.filters}>
          <Select
            value={filters.sortBy}
            name="sortBy"
            options={sortByOptions}
            label="Sort by"
            onChange={handleChange}
          />
          <Select
            value={filters.searchIn}
            name="searchIn"
            options={searchInOptions}
            label="Search in"
            onChange={handleChange}
          />
        </div>
      </form>
      {news && (
        <NewsList
          articles={news.data.articles}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
};
