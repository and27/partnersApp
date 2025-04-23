import { useState, useMemo, useCallback } from 'react';
import { profiles as initialProfiles } from '../data/profiles';
import { getCarouselItems } from '../components/ConnectionCarrouselItem';
import useMatchStore from '../stores/useMatchStore';

export function useSuggestedConnections() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [connectionIndex, setConnectionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const addMatchToStore = useMatchStore(state => state.addMatch);

  const suggestedConnection = useMemo(() => {
    if (profiles && connectionIndex >= 0 && connectionIndex < profiles.length) {
      return profiles[connectionIndex];
    }
    return null;
  }, [profiles, connectionIndex]);

  const carouselItems = useMemo(() => {
    if (suggestedConnection) {
      return getCarouselItems(suggestedConnection);
    }
    return [];
  }, [suggestedConnection]);

  const handleNextProfile = useCallback(() => {
    if (profiles && profiles.length > 0) {
      setConnectionIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex < profiles.length ? nextIndex : profiles.length;
      });
    }
  }, [profiles]);

  const match = useCallback(() => {
    if (suggestedConnection) {
      addMatchToStore(suggestedConnection);
      handleNextProfile();
    } else {
      console.warn('Match intentado sin suggestedConnection válida.');
    }
  }, [suggestedConnection, addMatchToStore, handleNextProfile]);

  return {
    isLoading,
    error,
    suggestedConnection,
    carouselItems,
    handleNextProfile,
    match,
    hasMoreConnections: suggestedConnection !== null
  };
}
