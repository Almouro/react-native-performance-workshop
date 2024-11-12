import {useQuery} from '@tanstack/react-query';
import {fetchNotifications} from './api';

export const useNotificationCount = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchNotifications,
  });
};
