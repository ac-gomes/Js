import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles'

const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onLoadEnd = () => {
    setIsLoading(false);
  };
  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return(

    <View>
      {isLoading && (<Text style={styles.loading}> Loading image </Text>)}
      <View style={styles.imageContainer}>
        <Image
          onLoadEnd={onLoadEnd}
          onLoadStart={onLoadStart}
          onError={onError}
          style={styles.detailPhoto}
          source={{uri: src}} />
      </View>
    </View>
    );
}

export default ImageComponent;