import '../styles.css';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };
  handleToggleModal = e => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { image, tag, largeImage } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={this.handleToggleModal}>
        <img className="ImageGalleryItem-image" src={image} alt={tag} />
        {this.state.isOpenModal && (
          <Modal largeImage={largeImage} closeModal={this.handleToggleModal} />
        )}
      </li>
    );
  }
}

