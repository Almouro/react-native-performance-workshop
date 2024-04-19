import React from 'react';
import {PhotoList} from '../../components/PhotoList';
import {usePhotos} from '../../data/usePhotos';

const getOtherTab = (search: string) => {
  const Component = () => {
    const {photos, isLoading} = usePhotos(search);

    return isLoading || !photos ? null : <PhotoList photos={photos} />;
  };

  Component.displayName = `${search}Tab`;

  return Component;
};

export const PandaTab = getOtherTab('panda');
export const RabbitTab = getOtherTab('rabbit');
export const DogTab = getOtherTab('dog');
