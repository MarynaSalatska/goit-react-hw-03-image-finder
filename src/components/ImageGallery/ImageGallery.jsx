import '../styles.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ albums }) {
  const { hits } = albums;
  return (
    <ul className="ImageGallery">
      {hits !== undefined &&
        hits.map(hit => (
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
