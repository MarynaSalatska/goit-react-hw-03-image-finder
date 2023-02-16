import './styles.css';
import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Audio } from 'react-loader-spinner';
import { getAlbumsService } from 'service/service';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>;

export class App extends Component {
  state = {
    albums: [],
    status: 'idle',
    page: 1,
    query: '',
    perPage: 12,
    loadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page, perPage } = this.state;
    if (query !== prevState.query || perPage !== prevState.perPage) {
      this.setState({ status: 'LOADING' });
      try {
        const response = await getAlbumsService({ query, page, perPage });
        this.setState({ albums: response, status: 'FULFILLED' });
      } catch (error) {
        this.setState({ status: 'REJECTED' });
        throw new Error(error.message);
      }
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      perPage: prevState.perPage + 12,
      page: prevState.page + 1,
    }));
  };

  render() {
    const { albums, status } = this.state;
    const { totalHits } = albums;

    return (
      <div className="App">
        <Searchbar handleSubmit={this.handleSubmit} />

        <ImageGallery albums={albums} />

        {status === 'LOADING' && <Loader />}
        {Math.floor(totalHits / this.state.perPage) > 1 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
