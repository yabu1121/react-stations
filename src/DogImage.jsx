// @ts-check

/**
 * @type {({ url: string }) => JSX.Element}
 */
export const DogImage = ({ imageUrl }) => {
  return (
    <img src={imageUrl} alt="犬の画像" />
  );
};

export default DogImage;