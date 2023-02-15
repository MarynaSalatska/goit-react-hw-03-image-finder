import '../styles.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';

export class Modal extends Component {
  onEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }
  render() {
    const { id, largeImage, tag } = this.props;
    return createPortal(
      <div className="Overlay">
        <div className="Modal" key={id}>
          <img src={largeImage} alt={tag} />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}
