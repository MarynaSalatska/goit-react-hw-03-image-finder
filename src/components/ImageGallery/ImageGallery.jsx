import '../styles.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ albums }) {
  return (
    <ul className="ImageGallery">
      {albums &&
        albums.map(hit => (
          <ImageGalleryItem
            key={hit.id}
            image={hit.webformatURL}
            largeImage={hit.largeImageURL}
            tag={hit.tags}
          />
        ))}
    </ul>
  );
}
